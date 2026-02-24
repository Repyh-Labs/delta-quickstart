/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NftOperation } from './NftOperation';
import type { Signature } from './Signature';
import type { u64 } from './u64';
/**
 * A user-signed message
 */
export type BaseSignedMessage_Payload_NftMint = {
    /**
     * A payload wrapper containing both structured content and optional arbitrary bytes.
     *
     * This is used by verifiable types (like `SignedDebitAllowance`) to include
     * auxiliary data that is also signed, enabling Local Laws to prove things
     * about signed messages.
     */
    payload: {
        /**
         * Arbitrary bytes that are also signed (for Local Laws proofs, etc.).
         */
        auxiliary: Array<number>;
        /**
         * A verifiable type to create or transfer an NFT.
         */
        content: {
            /**
             * The new nonce for the vault.
             */
            new_nonce: u64;
            /**
             * The operation to be applied.
             */
            operation: NftOperation;
            /**
             * The shard of the NFT vault.
             */
            shard: u64;
        };
    };
    /**
     * The signature corresponding to the above.
     */
    signature: Signature;
};

