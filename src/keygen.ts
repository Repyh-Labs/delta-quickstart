#!/usr/bin/env node

import { writeFileSync, mkdirSync } from "fs"
import { keygenAsync } from "@noble/ed25519"
import bs58 from "bs58"

const generateKey = async (path: string) => {
  const { secretKey } = await keygenAsync()
  const encoded = bs58.encode(secretKey)
  writeFileSync(path, JSON.stringify(encoded))
}

const keyNames = ["domain", "mint", "recipient"]

mkdirSync("keys", { recursive: true })
keyNames.forEach((keyName) => generateKey(`keys/${keyName}_key.json`))
