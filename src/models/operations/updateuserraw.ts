/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type UpdateUserRawRequest = {
  /**
   * name that needs to be updated
   */
  username: string;
  /**
   * Update an existent user in the store
   */
  user?: ReadableStream<Uint8Array> | Blob | ArrayBuffer | undefined;
};

/** @internal */
export const UpdateUserRawRequest$inboundSchema: z.ZodType<
  UpdateUserRawRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  username: z.string(),
  User: z.union([
    z.instanceof(ReadableStream<Uint8Array>),
    z.instanceof(Blob),
    z.instanceof(ArrayBuffer),
  ]).optional(),
}).transform((v) => {
  return remap$(v, {
    "User": "user",
  });
});

/** @internal */
export type UpdateUserRawRequest$Outbound = {
  username: string;
  User?: ReadableStream<Uint8Array> | Blob | ArrayBuffer | undefined;
};

/** @internal */
export const UpdateUserRawRequest$outboundSchema: z.ZodType<
  UpdateUserRawRequest$Outbound,
  z.ZodTypeDef,
  UpdateUserRawRequest
> = z.object({
  username: z.string(),
  user: z.union([
    z.instanceof(ReadableStream<Uint8Array>),
    z.instanceof(Blob),
    z.instanceof(ArrayBuffer),
  ]).optional(),
}).transform((v) => {
  return remap$(v, {
    user: "User",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateUserRawRequest$ {
  /** @deprecated use `UpdateUserRawRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateUserRawRequest$inboundSchema;
  /** @deprecated use `UpdateUserRawRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateUserRawRequest$outboundSchema;
  /** @deprecated use `UpdateUserRawRequest$Outbound` instead. */
  export type Outbound = UpdateUserRawRequest$Outbound;
}
