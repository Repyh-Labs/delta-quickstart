/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StateDiff } from './StateDiff';
import type { VerifiableType } from './VerifiableType';
/**
 * A [VerifiableType] paired with the actually executed [StateDiff]s
 */
export type VerifiableWithDiffs = {
    /**
     * The corresponding state-diffs
     */
    state_diffs: Array<StateDiff>;
    /**
     * The verifiable
     */
    verifiable: VerifiableType;
};

