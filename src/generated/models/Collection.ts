/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BTreeMap } from './BTreeMap';
import type { NftMetadata } from './NftMetadata';
/**
 * Represents a collection of related NFTs.
 *
 * An NFT collection groups related NFTs together and provides
 * shared properties and metadata.
 */
export type Collection = {
    /**
     * The metadata for the collection itself.
     */
    metadata: NftMetadata;
    /**
     * NFTs already minted in this collection.
     */
    supply: BTreeMap;
};

