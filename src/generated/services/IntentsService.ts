/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VerifiableType } from '../models/VerifiableType';
import type { VerifiableWithDiffs } from '../models/VerifiableWithDiffs';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class IntentsService {
    /**
     * Submit ordered signed verifiables to be default-executed and applied immediately
     * @param requestBody
     * @returns any Verifiables executed and applied successfully
     * @throws ApiError
     */
    public static intentsExecute(
        requestBody: Array<VerifiableType>,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/intents/execute',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                500: `Internal error`,
            },
        });
    }
    /**
     * Submit ordered and executed signed verifiables to be applied immediately
     * @param requestBody
     * @returns any Verifiables applied successfully
     * @throws ApiError
     */
    public static intentsSubmit(
        requestBody: Array<VerifiableWithDiffs>,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/intents/submit',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                500: `Internal error`,
            },
        });
    }
}
