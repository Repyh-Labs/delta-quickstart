/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NFT } from './NFT';
export type Vec = Array<{
    /**
     * The credited address.
     */
    address: string;
    /**
     * The NFTs credited to this address.
     */
    nfts: Array<NFT>;
}>;
