/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BTreeMap } from './BTreeMap';
import type { NftMintVault } from './NftMintVault';
/**
 * Operations that can be performed on a NFT [Mint] vault
 */
export type NftMintOperation = ({
    /**
     * Create a new NFT mint vault
     */
    Create: NftMintVault;
} | {
    /**
     * Increase total supply of a NFT mint vault
     */
    IncreaseSupply: BTreeMap;
});

