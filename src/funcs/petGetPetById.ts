/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { PetStore9424Core } from "../core.js";
import { encodeSimple as encodeSimple$ } from "../lib/encodings.js";
import * as m$ from "../lib/matchers.js";
import * as schemas$ from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { resolveSecurity, SecurityInput } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import {
    ConnectionError,
    InvalidRequestError,
    RequestAbortedError,
    RequestTimeoutError,
    UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";

export enum GetPetByIdAcceptEnum {
    applicationJson = "application/json",
    applicationXml = "application/xml",
}

/**
 * Find pet by ID
 *
 * @remarks
 * Returns a single pet
 */
export async function petGetPetById(
    client$: PetStore9424Core,
    request: operations.GetPetByIdRequest,
    security: operations.GetPetByIdSecurity,
    options?: RequestOptions & { acceptHeaderOverride?: GetPetByIdAcceptEnum }
): Promise<
    Result<
        operations.GetPetByIdResponse,
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >
> {
    const input$ = request;

    const parsed$ = schemas$.safeParse(
        input$,
        (value$) => operations.GetPetByIdRequest$outboundSchema.parse(value$),
        "Input validation failed"
    );
    if (!parsed$.ok) {
        return parsed$;
    }
    const payload$ = parsed$.value;
    const body$ = null;

    const pathParams$ = {
        petId: encodeSimple$("petId", payload$.petId, { explode: false, charEncoding: "percent" }),
    };

    const path$ = pathToFunc("/pet/{petId}")(pathParams$);

    const headers$ = new Headers({
        Accept: options?.acceptHeaderOverride || "application/json;q=1, application/xml;q=0",
    });

    const security$: SecurityInput[][] = [
        [
            {
                fieldName: "api_key",
                type: "apiKey:header",
                value: security?.apiKey,
            },
        ],
        [
            {
                fieldName: "Authorization",
                type: "oauth2",
                value: security?.petstoreAuth,
            },
        ],
    ];
    const securitySettings$ = resolveSecurity(...security$);
    const context = { operationID: "getPetById", oAuth2Scopes: [], securitySource: security };

    const requestRes = client$.createRequest$(
        context,
        {
            security: securitySettings$,
            method: "GET",
            path: path$,
            headers: headers$,
            body: body$,
            timeoutMs: options?.timeoutMs || client$.options$.timeoutMs || -1,
        },
        options
    );
    if (!requestRes.ok) {
        return requestRes;
    }
    const request$ = requestRes.value;

    const doResult = await client$.do$(request$, {
        context,
        errorCodes: ["400", "404", "4XX", "5XX"],
        retryConfig: options?.retries || client$.options$.retryConfig,
        retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
    });
    if (!doResult.ok) {
        return doResult;
    }
    const response = doResult.value;

    const [result$] = await m$.match<
        operations.GetPetByIdResponse,
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >(
        m$.bytes(200, operations.GetPetByIdResponse$inboundSchema, { ctype: "application/xml" }),
        m$.json(200, operations.GetPetByIdResponse$inboundSchema),
        m$.fail([400, 404, "4XX", "5XX"])
    )(response);
    if (!result$.ok) {
        return result$;
    }

    return result$;
}
