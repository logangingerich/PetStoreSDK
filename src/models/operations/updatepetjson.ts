/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import * as b64$ from "../../lib/base64.js";

export type UpdatePetJsonResponse =
  | Uint8Array
  | string
  | ReadableStream<Uint8Array>
  | Blob
  | ArrayBuffer;

/** @internal */
export const UpdatePetJsonResponse$inboundSchema: z.ZodType<
  UpdatePetJsonResponse,
  z.ZodTypeDef,
  unknown
> = z.union([
  b64$.zodInbound,
  z.union([
    z.instanceof(ReadableStream<Uint8Array>),
    z.instanceof(Blob),
    z.instanceof(ArrayBuffer),
  ]),
]);

/** @internal */
export type UpdatePetJsonResponse$Outbound =
  | Uint8Array
  | ReadableStream<Uint8Array>
  | Blob
  | ArrayBuffer;

/** @internal */
export const UpdatePetJsonResponse$outboundSchema: z.ZodType<
  UpdatePetJsonResponse$Outbound,
  z.ZodTypeDef,
  UpdatePetJsonResponse
> = z.union([
  b64$.zodOutbound,
  z.union([
    z.instanceof(ReadableStream<Uint8Array>),
    z.instanceof(Blob),
    z.instanceof(ArrayBuffer),
  ]),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdatePetJsonResponse$ {
  /** @deprecated use `UpdatePetJsonResponse$inboundSchema` instead. */
  export const inboundSchema = UpdatePetJsonResponse$inboundSchema;
  /** @deprecated use `UpdatePetJsonResponse$outboundSchema` instead. */
  export const outboundSchema = UpdatePetJsonResponse$outboundSchema;
  /** @deprecated use `UpdatePetJsonResponse$Outbound` instead. */
  export type Outbound = UpdatePetJsonResponse$Outbound;
}
