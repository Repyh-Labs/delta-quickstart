#!/usr/bin/env -S npx tsx

import { FungibleMint } from "@repyh-labs/delta-signing"
import { IntentsService } from "./src/generated/services/IntentsService"
import { loadSigner } from "./src"
import { OpenAPI } from "./src/generated/core/OpenAPI"

OpenAPI.BASE = "http://localhost:3000"

const mint_key = loadSigner("keys/mint_key.json")
const domain_key = loadSigner("keys/domain_key.json")

const shard = 123

// create a new fungible mint message
const fungibleMint: FungibleMint = {
  new_nonce: 1,
  shard,
  operation: {
    Create: {
      metadata: {
        name: "Your new token on delta",
        symbol: "YNDT",
      },
      credited: [
        {
          address: `${domain_key.owner()},${shard}`,
          amount: 100,
        },
      ],
    },
  },
}

// sign the message
const signedMint = await mint_key.signedFungibleMint(fungibleMint)

// submit to the domain
await IntentsService.intentsExecute([{ FungibleTokenMint: signedMint }])
