#!/usr/bin/env -S npx tsx

import { VaultsService } from "./src/generated/services/VaultsService"
import { loadSigner } from "./src"
import { OpenAPI } from "./src/generated/core/OpenAPI"

OpenAPI.BASE = "http://localhost:3000"

for (const keyName of ["mint", "domain", "recipient"]) {
  const key = loadSigner(`keys/${keyName}_key.json`)
  const ownerId = key.owner()

  // submit to the domain
  const vault = await VaultsService.vaultsGet(ownerId)

  console.log(
    `${keyName} vault at ${ownerId}:\n${JSON.stringify(vault, undefined, 2)}\n`,
  )
}
