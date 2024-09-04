/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as b64$ from "../../lib/base64.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type AddPetJsonResponse = components.Pet2 | Uint8Array | string;

/** @internal */
export const AddPetJsonResponse$inboundSchema: z.ZodType<
    AddPetJsonResponse,
    z.ZodTypeDef,
    unknown
> = z.union([components.Pet2$inboundSchema, b64$.zodInbound]);

/** @internal */
export type AddPetJsonResponse$Outbound = components.Pet2$Outbound | Uint8Array;

/** @internal */
export const AddPetJsonResponse$outboundSchema: z.ZodType<
    AddPetJsonResponse$Outbound,
    z.ZodTypeDef,
    AddPetJsonResponse
> = z.union([components.Pet2$outboundSchema, b64$.zodOutbound]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AddPetJsonResponse$ {
    /** @deprecated use `AddPetJsonResponse$inboundSchema` instead. */
    export const inboundSchema = AddPetJsonResponse$inboundSchema;
    /** @deprecated use `AddPetJsonResponse$outboundSchema` instead. */
    export const outboundSchema = AddPetJsonResponse$outboundSchema;
    /** @deprecated use `AddPetJsonResponse$Outbound` instead. */
    export type Outbound = AddPetJsonResponse$Outbound;
}