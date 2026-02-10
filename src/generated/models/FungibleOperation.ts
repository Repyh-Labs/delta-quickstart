/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FungibleCredit } from './FungibleCredit';
import type { FungibleMetadata } from './FungibleMetadata';
/**
 * Represents operations that can be performed on a token's supply.
 *
 * This includes creating a new token with an initial supply or increasing
 * the supply of an existing token.
 *
 * The supply of the token is computed as the sum of all the `credited` accounts.
 */
export type FungibleOperation = ({
    /**
     * Creates a new token with the specified metadata and credits the initial supply
     * to the given vaults.
     */
    Create: {
        /**
         * A list of addresses and the amounts to credit as the initial supply.
         */
        credited: Array<FungibleCredit>;
        /**
         * The metadata describing the token
         */
        metadata: FungibleMetadata;
    };
} | {
    /**
     * Increases the supply of an existing token and credits it to the specified vaults.
     */
    IncreaseSupply: {
        /**
         * A list of addresses and the amounts to credit as the initial supply.
         */
        credited: Array<FungibleCredit>;
    };
});

