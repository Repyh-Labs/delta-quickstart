/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AllowanceAmount } from './AllowanceAmount';
import type { Signature } from './Signature';
import type { u64 } from './u64';
/**
 * A user-signed message
 */
export type BaseSignedMessage_Payload_DebitAllowance = {
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
         * A debit allowance.
         *
         * It defines the vault to be credited, and the debited vault is computed using the signer's
         * ID and the debited shard.
         *
         * The `allowances` field defines the maximum amount that can be debited per token kind.
         */
        content: {
            /**
             * A map of asset debit allowances.
             */
            allowances: Record<string, AllowanceAmount>;
            /**
             * Address of the vault that is credited.
             */
            credited: string;
            /**
             * The shard of the debited vault.
             */
            debited_shard: u64;
            /**
             * The new nonce for the debited vault.
             */
            new_nonce: u64;
        };
    };
    /**
     * The signature corresponding to the above.
     */
    signature: Signature;
};

