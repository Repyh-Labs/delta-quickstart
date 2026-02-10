/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { u64 } from './u64';
/**
 * A credit entry containing an address and the amount credited to it.
 */
export type FungibleCredit = {
    /**
     * The credited address.
     */
    address: string;
    /**
     * The amount credited to this address.
     */
    amount: u64;
};

