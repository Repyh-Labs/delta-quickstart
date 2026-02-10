/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Collection } from './Collection';
/**
 * Represents a NFT Mint, which is in first approximation a collection of NFTs
 *
 * A NFT mint is the authority controlling a specific NFT collection in the
 * protocol, maintaining its total supply and associated metadata
 */
export type NftMintVault = {
    /**
     * The collection being minted
     */
    collection: Collection;
};

