/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Ed25519Scheme } from './Ed25519Scheme';
import type { MultisigScheme } from './MultisigScheme';
import type { PasskeyScheme } from './PasskeyScheme';
/**
 * A generic signature
 *
 * Each variant contains a signature scheme, which itself contains all the necessary
 * data to verify the signature.
 */
export type Signature = ({
    /**
     * Ed25519 signature
     */
    Ed25519: Ed25519Scheme;
} | {
    /**
     * Passkey signature
     */
    Passkey: PasskeyScheme;
} | {
    /**
     * Multisig signature
     */
    Multisig: MultisigScheme;
});

