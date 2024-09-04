/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { PetStore9424Core } from "../core.js";
import { encodeJSON as encodeJSON$, encodeSimple as encodeSimple$ } from "../lib/encodings.js";
import * as m$ from "../lib/matchers.js";
import * as schemas$ from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
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
import * as z from "zod";

/**
 * Update user
 *
 * @remarks
 * This can only be done by the logged in user.
 */
export async function userUpdateUserJson(
    client$: PetStore9424Core,
    request: operations.UpdateUserJsonRequest,
    options?: RequestOptions
): Promise<
    Result<
        void,
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
        (value$) => operations.UpdateUserJsonRequest$outboundSchema.parse(value$),
        "Input validation failed"
    );
    if (!parsed$.ok) {
        return parsed$;
    }
    const payload$ = parsed$.value;
    const body$ = encodeJSON$("body", payload$.User, { explode: true });

    const pathParams$ = {
        username: encodeSimple$("username", payload$.username, {
            explode: false,
            charEncoding: "percent",
        }),
    };

    const path$ = pathToFunc("/user/{username}")(pathParams$);

    const headers$ = new Headers({
        "Content-Type": "application/json",
        Accept: "*/*",
    });

    const petstoreAuth$ = await extractSecurity(client$.options$.petstoreAuth);
    const security$ = petstoreAuth$ == null ? {} : { petstoreAuth: petstoreAuth$ };
    const context = {
        operationID: "updateUser_json",
        oAuth2Scopes: [],
        securitySource: client$.options$.petstoreAuth,
    };
    const securitySettings$ = resolveGlobalSecurity(security$);

    const requestRes = client$.createRequest$(
        context,
        {
            security: securitySettings$,
            method: "PUT",
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
        errorCodes: ["4XX", "5XX"],
        retryConfig: options?.retries || client$.options$.retryConfig,
        retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
    });
    if (!doResult.ok) {
        return doResult;
    }
    const response = doResult.value;

    const [result$] = await m$.match<
        void,
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >(
        m$.fail(["4XX", "5XX"]),
        m$.nil("default", z.void())
    )(response);
    if (!result$.ok) {
        return result$;
    }

    return result$;
}
