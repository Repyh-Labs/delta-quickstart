/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HashDigest } from '../models/HashDigest';
import type { SdlState } from '../models/SdlState';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SdlsService {
    /**
     * Get all SDL states from the domain runtime
     * @returns any[] SDL states retrieved
     * @throws ApiError
     */
    public static sdlsGetAll(): CancelablePromise<Array<any[]>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sdls',
            errors: {
                500: `Internal error`,
            },
        });
    }
    /**
     * Submit a new SDL from pending diffs and return its hash
     * @returns any SDL submitted
     * @throws ApiError
     */
    public static sdlsSubmit(): CancelablePromise<(null | HashDigest)> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sdls/submit',
            errors: {
                500: `Internal error`,
            },
        });
    }
    /**
     * Get the state of a specific SDL by its hash
     * @param sdlHash Hash of the SDL
     * @returns SdlState SDL state retrieved
     * @throws ApiError
     */
    public static sdlsGet(
        sdlHash: string,
    ): CancelablePromise<SdlState> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sdls/{sdl_hash}',
            path: {
                'sdl_hash': sdlHash,
            },
            errors: {
                404: `SDL not found`,
                500: `Internal error`,
            },
        });
    }
    /**
     * Start proving a specific SDL
     * @param sdlHash Hash of the SDL to prove
     * @returns any Proving started successfully
     * @throws ApiError
     */
    public static sdlsProve(
        sdlHash: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sdls/{sdl_hash}/prove',
            path: {
                'sdl_hash': sdlHash,
            },
            errors: {
                500: `Internal error`,
            },
        });
    }
    /**
     * Submit the proof for a specific SDL
     * @param sdlHash Hash of the SDL whose proof to submit
     * @returns any Proof submitted successfully
     * @throws ApiError
     */
    public static sdlsSubmitProof(
        sdlHash: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sdls/{sdl_hash}/submit_proof',
            path: {
                'sdl_hash': sdlHash,
            },
            errors: {
                500: `Internal error`,
            },
        });
    }
}
