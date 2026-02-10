/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FungibleMintVault } from './FungibleMintVault';
import type { u64 } from './u64';
/**
 * The type of operation that can be performed on a fungible [Mint] vault
 */
export type FungibleMintOperation = ({
    /**
     * Create a new token mint vault
     */
    Create: FungibleMintVault;
} | {
    /**
     * Increase the total supply of a token mint vault
     */
    IncreaseSupply: u64;
});

