/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AllowanceAmount } from './AllowanceAmount';
import type { u64 } from './u64';
/**
 * A debit allowance.
 *
 * It defines the vault to be credited, and the debited vault is computed using the signer's
 * ID and the debited shard.
 *
 * The `allowances` field defines the maximum amount that can be debited per token kind.
 */
export type DebitAllowance = {
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

