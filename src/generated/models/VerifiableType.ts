/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseSignedMessage_Payload_DebitAllowance } from './BaseSignedMessage_Payload_DebitAllowance';
import type { BaseSignedMessage_Payload_FungibleMint } from './BaseSignedMessage_Payload_FungibleMint';
import type { BaseSignedMessage_Payload_NftMint } from './BaseSignedMessage_Payload_NftMint';
/**
 * All operations that verifiably satisfy global rules and
 * can be translated to state diffs are part of this enum.
 */
export type VerifiableType = ({
    /**
     * Debit allowance type.
     */
    DebitAllowance: BaseSignedMessage_Payload_DebitAllowance;
} | {
    /**
     * New Token Mint type.
     */
    FungibleTokenMint: BaseSignedMessage_Payload_FungibleMint;
} | {
    /**
     * NFT mint type
     */
    NftMint: BaseSignedMessage_Payload_NftMint;
});

