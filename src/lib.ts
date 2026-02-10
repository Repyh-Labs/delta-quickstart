import { readFileSync } from "node:fs"
import { Ed25519Signer } from "@repyh-labs/delta-signing"
import bs58 from "bs58"

export const loadSigner = (keyPath: string): Ed25519Signer => {
  const keypairJson = JSON.parse(readFileSync(keyPath, "utf-8"))
  const keyBytes = bs58.decode(keypairJson)
  return new Ed25519Signer(keyBytes)
}
