/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NftOperation } from './NftOperation';
import type { u64 } from './u64';
/**
 * A verifiable type to create or transfer an NFT.
 */
export type NftMint = {
    /**
     * The new nonce for the vault.
     */
    new_nonce: u64;
    /**
     * The operation to be applied.
     */
    operation: NftOperation;
    /**
     * The shard of the NFT vault.
     */
    shard: u64;
};

