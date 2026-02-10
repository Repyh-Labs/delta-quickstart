/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { u64 } from './u64';
/**
 * Represents the public parameters of a multisignature authotization policy.
 *
 * Defines the weight each key is associated with, and the minimal threshold
 * above which a subset of signers can emit a valid signature.
 *
 * Each [PubKey] defines a unique owner.
 */
export type MultisigPubKey = {
    /**
     * The list of signers and their associated weight
     */
    signers: Record<string, any>;
    /**
     * The threshold above which a subset of the signers can emit a valid signature
     */
    threshold: u64;
};

