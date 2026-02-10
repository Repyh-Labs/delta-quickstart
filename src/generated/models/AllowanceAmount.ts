/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BTreeSet } from './BTreeSet';
import type { u64 } from './u64';
/**
 * A generic fungible or non-fungible allowance amount
 */
export type AllowanceAmount = ({
    /**
     * Fungible allowance for [TokenKind::Native] or [TokenKind::Fungible]
     */
    Fungible: u64;
} | {
    /**
     * Non-fungible allowance for [TokenKind::NonFungible]
     */
    NonFungible: BTreeSet;
});

