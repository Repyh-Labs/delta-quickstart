/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FungibleMintOperation } from './FungibleMintOperation';
import type { HoldingsDiff } from './HoldingsDiff';
import type { NftMintOperation } from './NftMintOperation';
/**
 * Type of a state diff operation.
 */
export type StateDiffOperation = ({
    /**
     * Token balance diffs.
     */
    TokenDiffs: Record<string, HoldingsDiff>;
} | {
    /**
     * The token mint variant.
     */
    FungibleTokenMint: FungibleMintOperation;
} | {
    /**
     * NFT mint variant
     */
    NftMint: NftMintOperation;
});

