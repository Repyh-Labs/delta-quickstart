/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FungibleMintVault } from './FungibleMintVault';
import type { NftMintVault } from './NftMintVault';
import type { TokenHoldings } from './TokenHoldings';
/**
 * Available vault data types.
 */
export type VaultDataType = ({
    /**
     * Vault data type for token holdings.
     */
    TokenHoldings: TokenHoldings;
} | {
    /**
     * Vault data type for a fungible token mint.
     */
    FungibleTokenMint: FungibleMintVault;
} | {
    /**
     * Vault data type for an NFT mint.
     */
    NftMint: NftMintVault;
});

