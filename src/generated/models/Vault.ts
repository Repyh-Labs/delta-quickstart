/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { u64 } from './u64';
import type { VaultDataType } from './VaultDataType';
/**
 * Vault structure for domains that can hold native tokens, custom data, and non-native tokens.
 *
 * Sharded vaults are more complex than base vaults - they support custom data storage
 * and can hold both fungible and non-fungible tokens in addition to native tokens.
 */
export type Vault = {
    /**
     * Native token balance in plancks.
     */
    balance: u64;
    data?: (null | VaultDataType);
    /**
     * Shard identifier that this vault belongs to.
     */
    shard: number;
};

