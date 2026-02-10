/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StateDiffOperation } from './StateDiffOperation';
/**
 * Single state diff for a specific vault
 */
export type StateDiff = {
    /**
     * [Address] of the vault this state diff applies to.
     */
    address: string;
    /**
     * The operation associated to this state diff.
     */
    operation: StateDiffOperation;
};

