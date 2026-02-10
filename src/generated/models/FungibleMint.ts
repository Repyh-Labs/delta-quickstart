/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FungibleOperation } from './FungibleOperation';
import type { u64 } from './u64';
/**
 * A verifiable type to create or update a vault with [TokenMintData].
 *
 * The created [TokenId] of the token mint is derived from the `OwnerId` of the
 * signer. See the [supported operations][Operation].
 */
export type FungibleMint = {
    /**
     * The new nonce for the debited vault.
     */
    new_nonce: u64;
    /**
     * The operation to be applied.
     */
    operation: FungibleOperation;
    /**
     * The shard of the token-mint vault.
     */
    shard: u64;
};

