/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { PetStore9424Core } from "../core.js";
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

export enum UpdatePetRawAcceptEnum {
  applicationJson = "application/json",
  applicationXml = "application/xml",
}

/**
 * Update an existing pet
 *
 * @remarks
 * Update an existing pet by Id
 */
export async function petUpdatePetRaw(
  client$: PetStore9424Core,
  request: ReadableStream<Uint8Array> | Blob | ArrayBuffer,
  options?: RequestOptions & { acceptHeaderOverride?: UpdatePetRawAcceptEnum },
): Promise<
  Result<
    operations.UpdatePetRawResponse,
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
      ]).parse(value$),
    "Input validation failed",
  );
  if (!parsed$.ok) {
    return parsed$;
  }
  const payload$ = parsed$.value;
  const body$ = payload$;

  const path$ = pathToFunc("/pet")();

  const headers$ = new Headers({
    "Content-Type": "application/xml",
    Accept: options?.acceptHeaderOverride
      || "application/json;q=1, application/xml;q=0",
  });

  const petstoreAuth$ = await extractSecurity(client$.options$.petstoreAuth);
  const security$ = petstoreAuth$ == null
    ? {}
    : { petstoreAuth: petstoreAuth$ };
  const context = {
    operationID: "updatePet_raw",
    oAuth2Scopes: [],
    securitySource: client$.options$.petstoreAuth,
  };
  const securitySettings$ = resolveGlobalSecurity(security$);

  const requestRes = client$.createRequest$(context, {
    security: securitySettings$,
    method: "PUT",
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
    errorCodes: ["400", "404", "405", "4XX", "5XX"],
    retryConfig: options?.retries
      || client$.options$.retryConfig,
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  });
  if (!doResult.ok) {
    return doResult;
  }
  const response = doResult.value;

  const [result$] = await m$.match<
    operations.UpdatePetRawResponse,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    m$.bytes(200, operations.UpdatePetRawResponse$inboundSchema, {
      ctype: "application/xml",
    }),
    m$.json(200, operations.UpdatePetRawResponse$inboundSchema),
    m$.fail([400, 404, 405, "4XX", "5XX"]),
  )(response);
  if (!result$.ok) {
    return result$;
  }

  return result$;
}
