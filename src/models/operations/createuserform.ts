/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import * as b64$ from "../../lib/base64.js";

export type CreateUserFormResponse =
  | ReadableStream<Uint8Array>
  | Blob
  | ArrayBuffer
  | Uint8Array
  | string;

/** @internal */
export const CreateUserFormResponse$inboundSchema: z.ZodType<
  CreateUserFormResponse,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.union([
    z.instanceof(ReadableStream<Uint8Array>),
    z.instanceof(Blob),
    z.instanceof(ArrayBuffer),
  ]),
  b64$.zodInbound,
]);

/** @internal */
export type CreateUserFormResponse$Outbound =
  | ReadableStream<Uint8Array>
  | Blob
  | ArrayBuffer
  | Uint8Array;

/** @internal */
export const CreateUserFormResponse$outboundSchema: z.ZodType<
  CreateUserFormResponse$Outbound,
  z.ZodTypeDef,
  CreateUserFormResponse
> = z.union([
  z.union([
    z.instanceof(ReadableStream<Uint8Array>),
    z.instanceof(Blob),
    z.instanceof(ArrayBuffer),
  ]),
  b64$.zodOutbound,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateUserFormResponse$ {
  /** @deprecated use `CreateUserFormResponse$inboundSchema` instead. */
  export const inboundSchema = CreateUserFormResponse$inboundSchema;
  /** @deprecated use `CreateUserFormResponse$outboundSchema` instead. */
  export const outboundSchema = CreateUserFormResponse$outboundSchema;
  /** @deprecated use `CreateUserFormResponse$Outbound` instead. */
  export type Outbound = CreateUserFormResponse$Outbound;
}
