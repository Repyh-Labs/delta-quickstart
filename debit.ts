#!/usr/bin/env -S npx tsx

import { DebitAllowance } from "@repyh-labs/delta-signing"
import { IntentsService } from "./src/generated/services/IntentsService"
import { loadSigner } from "./src"
import { OpenAPI } from "./src/generated/core/OpenAPI"

OpenAPI.BASE = "http://localhost:3000"

const mint_key = loadSigner("keys/mint_key.json")
const domain_key = loadSigner("keys/domain_key.json")
const recipient_key = loadSigner("keys/recipient_key.json")

const shard = 123
const tokenId = `${mint_key.owner()},${shard}`

// create a new debit message
const debitAllowance: DebitAllowance = {
  new_nonce: 1,
  debited_shard: shard,
  credited: `${recipient_key.owner()},${shard}`,
  allowances: {
    [tokenId]: { Fungible: 50 },
  },
}

// sign the message
const signedDebit = await domain_key.signedDebitAllowance(debitAllowance)

// submit to the domain
await IntentsService.intentsExecute([{ DebitAllowance: signedDebit }])
