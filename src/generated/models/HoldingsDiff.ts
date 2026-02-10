/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Diff } from './Diff';
import type { i64 } from './i64';
/**
 * Diff for holdings
 */
export type HoldingsDiff = ({
    /**
     * Diff for fungible tokens
     */
    Fungible: i64;
} | {
    /**
     * Diff for non-fungible tokens
     */
    NonFungible: Diff;
});

