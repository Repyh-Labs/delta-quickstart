/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NftMetadata } from './NftMetadata';
import type { Vec } from './Vec';
/**
 * Represents operations that can be performed with NFTs.
 */
export type NftOperation = ({
    /**
     * Creates a new NFT with the specified metadata.
     */
    Create: {
        /**
         * The metadata describing the NFT collection
         */
        collection: NftMetadata;
        /**
         * A list of vaults and the set of NFTs credited to each one
         */
        credited: Vec;
    };
} | {
    /**
     * Creates a new batch of NFTs for an exisiting collection
     */
    IncreaseSupply: {
        /**
         * A list of vaults and the set of NFTs credited to each one
         */
        credited: Vec;
    };
});

