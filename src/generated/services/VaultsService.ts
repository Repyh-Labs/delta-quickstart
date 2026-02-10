/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { u64 } from '../models/u64';
import type { Vault } from '../models/Vault';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class VaultsService {
    /**
     * Get a vault by owner ID
     * @param ownerId Owner ID of the vault
     * @returns Vault Vault found
     * @throws ApiError
     */
    public static vaultsGet(
        ownerId: string,
    ): CancelablePromise<Vault> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vaults/{owner_id}',
            path: {
                'owner_id': ownerId,
            },
            errors: {
                404: `Vault not found`,
                500: `Internal error`,
            },
        });
    }
    /**
     * Get the next nonce for a vault
     * @param ownerId Owner ID of the vault
     * @returns u64 Nonce retrieved
     * @throws ApiError
     */
    public static vaultsGetNonce(
        ownerId: string,
    ): CancelablePromise<u64> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vaults/{owner_id}/nonce',
            path: {
                'owner_id': ownerId,
            },
            errors: {
                500: `Internal error`,
            },
        });
    }
}
