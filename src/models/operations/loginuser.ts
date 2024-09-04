/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type LoginUserRequest = {
    /**
     * The user name for login
     */
    username?: string | undefined;
    /**
     * The password for login in clear text
     */
    password?: string | undefined;
};

export type LoginUserResponseResult = string | string;

export type LoginUserResponse = {
    headers: { [k: string]: Array<string> };
    result: string | string;
};

/** @internal */
export const LoginUserRequest$inboundSchema: z.ZodType<LoginUserRequest, z.ZodTypeDef, unknown> =
    z.object({
        username: z.string().optional(),
        password: z.string().optional(),
    });

/** @internal */
export type LoginUserRequest$Outbound = {
    username?: string | undefined;
    password?: string | undefined;
};

/** @internal */
export const LoginUserRequest$outboundSchema: z.ZodType<
    LoginUserRequest$Outbound,
    z.ZodTypeDef,
    LoginUserRequest
> = z.object({
    username: z.string().optional(),
    password: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LoginUserRequest$ {
    /** @deprecated use `LoginUserRequest$inboundSchema` instead. */
    export const inboundSchema = LoginUserRequest$inboundSchema;
    /** @deprecated use `LoginUserRequest$outboundSchema` instead. */
    export const outboundSchema = LoginUserRequest$outboundSchema;
    /** @deprecated use `LoginUserRequest$Outbound` instead. */
    export type Outbound = LoginUserRequest$Outbound;
}

/** @internal */
export const LoginUserResponseResult$inboundSchema: z.ZodType<
    LoginUserResponseResult,
    z.ZodTypeDef,
    unknown
> = z.union([z.string(), z.string()]);

/** @internal */
export type LoginUserResponseResult$Outbound = string | string;

/** @internal */
export const LoginUserResponseResult$outboundSchema: z.ZodType<
    LoginUserResponseResult$Outbound,
    z.ZodTypeDef,
    LoginUserResponseResult
> = z.union([z.string(), z.string()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LoginUserResponseResult$ {
    /** @deprecated use `LoginUserResponseResult$inboundSchema` instead. */
    export const inboundSchema = LoginUserResponseResult$inboundSchema;
    /** @deprecated use `LoginUserResponseResult$outboundSchema` instead. */
    export const outboundSchema = LoginUserResponseResult$outboundSchema;
    /** @deprecated use `LoginUserResponseResult$Outbound` instead. */
    export type Outbound = LoginUserResponseResult$Outbound;
}

/** @internal */
export const LoginUserResponse$inboundSchema: z.ZodType<LoginUserResponse, z.ZodTypeDef, unknown> =
    z
        .object({
            Headers: z.record(z.array(z.string())),
            Result: z.union([z.string(), z.string()]),
        })
        .transform((v) => {
            return remap$(v, {
                Headers: "headers",
                Result: "result",
            });
        });

/** @internal */
export type LoginUserResponse$Outbound = {
    Headers: { [k: string]: Array<string> };
    Result: string | string;
};

/** @internal */
export const LoginUserResponse$outboundSchema: z.ZodType<
    LoginUserResponse$Outbound,
    z.ZodTypeDef,
    LoginUserResponse
> = z
    .object({
        headers: z.record(z.array(z.string())),
        result: z.union([z.string(), z.string()]),
    })
    .transform((v) => {
        return remap$(v, {
            headers: "Headers",
            result: "Result",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LoginUserResponse$ {
    /** @deprecated use `LoginUserResponse$inboundSchema` instead. */
    export const inboundSchema = LoginUserResponse$inboundSchema;
    /** @deprecated use `LoginUserResponse$outboundSchema` instead. */
    export const outboundSchema = LoginUserResponse$outboundSchema;
    /** @deprecated use `LoginUserResponse$Outbound` instead. */
    export type Outbound = LoginUserResponse$Outbound;
}
