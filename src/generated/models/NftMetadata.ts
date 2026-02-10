/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Metadata for a non-fungible token (NFT) and collections thereof
 *
 * This structure contains information about an NFT, or a collection thereof,
 * such as its name, description, and any additional attributes.
 */
export type NftMetadata = {
    /**
     * Additional attributes stored as key-value pairs, e.g.
     * ```"uri" -> "https://my-delta-nft.org/123"```
     */
    attributes?: Record<string, string>;
    /**
     * The description of the NFT or the collection.
     */
    description: string;
    /**
     * The name of the NFT or the collection.
     */
    name: string;
};

