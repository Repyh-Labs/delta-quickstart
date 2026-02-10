/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Metadata describing a token's properties.
 *
 * This structure contains human-readable information about a token,
 * such as its name and symbol, which are used for display and identification purposes.
 */
export type FungibleMetadata = {
    /**
     * The full name of the token (e.g., "Bitcoin", "Ethereum").
     *
     * This is typically a descriptive name that identifies the token in a human-readable form.
     */
    name: string;
    /**
     * The ticker symbol or abbreviation for the token (e.g., "BTC", "ETH").
     *
     * This is typically a short code (usually 3-4 characters) used to uniquely
     * identify the token in trading and display contexts.
     */
    symbol: string;
};

