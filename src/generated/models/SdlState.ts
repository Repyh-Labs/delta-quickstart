/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The state an SDL can reach on the local-state.
 */
export type SdlState = ('Submitted' | 'Proving' | 'Proven' | 'ProofSubmitted' | 'BaseLayerApplied' | 'BaseLayerFailed' | {
    /**
     * State when proof generation failed with error message
     */
    ProvingFailed: string;
});

