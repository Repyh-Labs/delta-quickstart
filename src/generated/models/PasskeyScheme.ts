/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EcdsaPubKey } from './EcdsaPubKey';
import type { EcdsaSignature } from './EcdsaSignature';
/**
 * Signature signed by a passkey (signer) device
 */
export type PasskeyScheme = {
    /**
     * The bs58-encoded bytes of the [authenticator
     * data](https://www.w3.org/TR/webauthn-3/#authenticator-data).
     */
    authenticator_data: string;
    /**
     * String containing the [client data] JSON.
     *
     * This field is a string because JSON does not define property order, and
     * we must guarantee that the UTF8 bytes of this string are exactly the
     * same as those used by the passkey device.
     *
     * [client data]: https://www.w3.org/TR/webauthn-3/#dictdef-collectedclientdata
     */
    client_data: string;
    pub_key: EcdsaPubKey;
    signature: EcdsaSignature;
};

