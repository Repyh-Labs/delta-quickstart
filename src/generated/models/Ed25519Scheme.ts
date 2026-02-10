/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Ed25519PubKey } from './Ed25519PubKey';
import type { Ed25519Signature } from './Ed25519Signature';
/**
 * Represents an Ed25519 signature with its public signer
 */
export type Ed25519Scheme = {
    /**
     * The [PubKey] of the signer
     */
    pub_key: Ed25519PubKey;
    /**
     * The [Signature]
     */
    signature: Ed25519Signature;
};

