/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { PetStore9424Core } from "../core.js";
import { encodeJSON as encodeJSON$ } from "../lib/encodings.js";
import * as m$ from "../lib/matchers.js";
import * as schemas$ from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import * as components from "../models/components/index.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { Result } from "../types/fp.js";

/**
 * Place an order for a pet
 *
 * @remarks
 * Place a new order in the store
 */
export async function storePlaceOrderJson(
  client$: PetStore9424Core,
  request?: ReadableStream<Uint8Array> | Blob | ArrayBuffer | undefined,
  options?: RequestOptions,
): Promise<
  Result<
    components.Order1,
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
    (value$) =>
      z.union([
        z.instanceof(ReadableStream<Uint8Array>),
        z.instanceof(Blob),
        z.instanceof(ArrayBuffer),
      ]).optional().parse(value$),
    "Input validation failed",
  );
  if (!parsed$.ok) {
    return parsed$;
  }
  const payload$ = parsed$.value;
  const body$ = payload$ === undefined
    ? null
    : encodeJSON$("body", payload$, { explode: true });

  const path$ = pathToFunc("/store/order")();

  const headers$ = new Headers({
    "Content-Type": "application/json",
    Accept: "application/json",
  });

  const petstoreAuth$ = await extractSecurity(client$.options$.petstoreAuth);
  const security$ = petstoreAuth$ == null
    ? {}
    : { petstoreAuth: petstoreAuth$ };
  const context = {
    operationID: "placeOrder_json",
    oAuth2Scopes: [],
    securitySource: client$.options$.petstoreAuth,
  };
  const securitySettings$ = resolveGlobalSecurity(security$);

  const requestRes = client$.createRequest$(context, {
    security: securitySettings$,
    method: "POST",
    path: path$,
    headers: headers$,
    body: body$,
    timeoutMs: options?.timeoutMs || client$.options$.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return requestRes;
  }
  const request$ = requestRes.value;

  const doResult = await client$.do$(request$, {
    context,
    errorCodes: ["405", "4XX", "5XX"],
    retryConfig: options?.retries
      || client$.options$.retryConfig,
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  });
  if (!doResult.ok) {
    return doResult;
  }
  const response = doResult.value;

  const [result$] = await m$.match<
    components.Order1,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    m$.json(200, components.Order1$inboundSchema),
    m$.fail([405, "4XX", "5XX"]),
  )(response);
  if (!result$.ok) {
    return result$;
  }

  return result$;
}
