/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BTreeSet } from './BTreeSet';
import type { u64 } from './u64';
/**
 * A collection of token balances for multiple token types.
 *
 * This structure stores balances for multiple tokens, allowing a vault to hold
 * various token types simultaneously. It maps token IDs to their respective
 * balances.
 */
export type TokenHoldings = {
    /**
     * A mapping from (fungible) token IDs to their respective balances in plancks.
     */
    fungibles: Record<string, u64>;
    /**
     * A mapping fron NFT token ids to their respective holdings, that is, a
     * set of collectibles in the collection issued by the given token id.
     */
    nfts: Record<string, BTreeSet>;
};

