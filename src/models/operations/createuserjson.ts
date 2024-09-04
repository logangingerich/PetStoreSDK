/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as b64$ from "../../lib/base64.js";
import * as z from "zod";

export type CreateUserJsonResponse =
    | ReadableStream<Uint8Array>
    | Blob
    | ArrayBuffer
    | Buffer
    | Uint8Array
    | string;

/** @internal */
export const CreateUserJsonResponse$inboundSchema: z.ZodType<
    CreateUserJsonResponse,
    z.ZodTypeDef,
    unknown
> = z.union([
    z.union([
        z.instanceof(ReadableStream<Uint8Array>),
        z.instanceof(Blob),
        z.instanceof(ArrayBuffer),
        z.instanceof(Buffer),
    ]),
    b64$.zodInbound,
]);

/** @internal */
export type CreateUserJsonResponse$Outbound =
    | ReadableStream<Uint8Array>
    | Blob
    | ArrayBuffer
    | Buffer
    | Uint8Array;

/** @internal */
export const CreateUserJsonResponse$outboundSchema: z.ZodType<
    CreateUserJsonResponse$Outbound,
    z.ZodTypeDef,
    CreateUserJsonResponse
> = z.union([
    z.union([
        z.instanceof(ReadableStream<Uint8Array>),
        z.instanceof(Blob),
        z.instanceof(ArrayBuffer),
        z.instanceof(Buffer),
    ]),
    b64$.zodOutbound,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateUserJsonResponse$ {
    /** @deprecated use `CreateUserJsonResponse$inboundSchema` instead. */
    export const inboundSchema = CreateUserJsonResponse$inboundSchema;
    /** @deprecated use `CreateUserJsonResponse$outboundSchema` instead. */
    export const outboundSchema = CreateUserJsonResponse$outboundSchema;
    /** @deprecated use `CreateUserJsonResponse$Outbound` instead. */
    export type Outbound = CreateUserJsonResponse$Outbound;
}
