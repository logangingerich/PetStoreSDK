/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { PetStore9424Core } from "../core.js";
import { encodeSimple as encodeSimple$ } from "../lib/encodings.js";
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

export enum GetOrderByIdAcceptEnum {
    applicationJson = "application/json",
    applicationXml = "application/xml",
}

/**
 * Find purchase order by ID
 *
 * @remarks
 * For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.
 */
export async function storeGetOrderById(
    client$: PetStore9424Core,
    request: operations.GetOrderByIdRequest,
    options?: RequestOptions & { acceptHeaderOverride?: GetOrderByIdAcceptEnum }
): Promise<
    Result<
        operations.GetOrderByIdResponse,
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
        (value$) => operations.GetOrderByIdRequest$outboundSchema.parse(value$),
        "Input validation failed"
    );
    if (!parsed$.ok) {
        return parsed$;
    }
    const payload$ = parsed$.value;
    const body$ = null;

    const pathParams$ = {
        orderId: encodeSimple$("orderId", payload$.orderId, {
            explode: false,
            charEncoding: "percent",
        }),
    };

    const path$ = pathToFunc("/store/order/{orderId}")(pathParams$);

    const headers$ = new Headers({
        Accept: options?.acceptHeaderOverride || "application/json;q=1, application/xml;q=0",
    });

    const petstoreAuth$ = await extractSecurity(client$.options$.petstoreAuth);
    const security$ = petstoreAuth$ == null ? {} : { petstoreAuth: petstoreAuth$ };
    const context = {
        operationID: "getOrderById",
        oAuth2Scopes: [],
        securitySource: client$.options$.petstoreAuth,
    };
    const securitySettings$ = resolveGlobalSecurity(security$);

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
        operations.GetOrderByIdResponse,
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >(
        m$.bytes(200, operations.GetOrderByIdResponse$inboundSchema, { ctype: "application/xml" }),
        m$.json(200, operations.GetOrderByIdResponse$inboundSchema),
        m$.fail([400, 404, "4XX", "5XX"])
    )(response);
    if (!result$.ok) {
        return result$;
    }

    return result$;
}