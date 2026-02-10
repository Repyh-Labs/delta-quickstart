/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MultisigPubKey } from './MultisigPubKey';
import type { Signature } from './Signature';
/**
 * The multisig signature scheme
 */
export type MultisigScheme = {
    /**
     * The multisig descriptor to be checked against
     */
    pub_key: MultisigPubKey;
    /**
     * The list of signatures
     */
    signatures: Array<Signature>;
};

