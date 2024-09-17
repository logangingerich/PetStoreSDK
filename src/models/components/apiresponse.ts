/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type ApiResponse = {
  code?: number | undefined;
  type?: string | undefined;
  message?: string | undefined;
};

/** @internal */
export const ApiResponse$inboundSchema: z.ZodType<
  ApiResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.number().int().optional(),
  type: z.string().optional(),
  message: z.string().optional(),
});

/** @internal */
export type ApiResponse$Outbound = {
  code?: number | undefined;
  type?: string | undefined;
  message?: string | undefined;
};

/** @internal */
export const ApiResponse$outboundSchema: z.ZodType<
  ApiResponse$Outbound,
  z.ZodTypeDef,
  ApiResponse
> = z.object({
  code: z.number().int().optional(),
  type: z.string().optional(),
  message: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ApiResponse$ {
  /** @deprecated use `ApiResponse$inboundSchema` instead. */
  export const inboundSchema = ApiResponse$inboundSchema;
  /** @deprecated use `ApiResponse$outboundSchema` instead. */
  export const outboundSchema = ApiResponse$outboundSchema;
  /** @deprecated use `ApiResponse$Outbound` instead. */
  export type Outbound = ApiResponse$Outbound;
}
