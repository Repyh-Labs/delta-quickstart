/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NftMetadata } from './NftMetadata';
import type { u64 } from './u64';
/**
 * Represents a single non-fungible token (NFT).
 */
export type NFT = {
    /**
     * Id of NFT
     */
    id: u64;
    /**
     * The metadata associated with this NFT.
     */
    metadata: NftMetadata;
};

