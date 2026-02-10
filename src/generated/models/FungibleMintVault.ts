/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FungibleMetadata } from './FungibleMetadata';
import type { u64 } from './u64';
/**
 * Represents a fungible token mint, which defines a token's supply and metadata.
 *
 * A token mint is the authority controlling a specific non-native token in the protocol.
 * It maintains the total supply of the token and its associated metadata.
 */
export type FungibleMintVault = {
    /**
     * The metadata associated with the token.
     */
    metadata: FungibleMetadata;
    /**
     * Total supply of the token in its smallest unit.
     *
     * This represents the maximum amount of the token that can exist in the system.
     */
    supply: u64;
};

