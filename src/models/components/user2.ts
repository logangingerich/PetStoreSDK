/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type User2 = {
    id?: number | undefined;
    username?: string | undefined;
    firstName?: string | undefined;
    lastName?: string | undefined;
    email?: string | undefined;
    password?: string | undefined;
    phone?: string | undefined;
    /**
     * User Status
     */
    userStatus?: number | undefined;
};

/** @internal */
export const User2$inboundSchema: z.ZodType<User2, z.ZodTypeDef, unknown> = z.object({
    id: z.number().int().optional(),
    username: z.string().optional(),
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    email: z.string().optional(),
    password: z.string().optional(),
    phone: z.string().optional(),
    userStatus: z.number().int().optional(),
});

/** @internal */
export type User2$Outbound = {
    id?: number | undefined;
    username?: string | undefined;
    firstName?: string | undefined;
    lastName?: string | undefined;
    email?: string | undefined;
    password?: string | undefined;
    phone?: string | undefined;
    userStatus?: number | undefined;
};

/** @internal */
export const User2$outboundSchema: z.ZodType<User2$Outbound, z.ZodTypeDef, User2> = z.object({
    id: z.number().int().optional(),
    username: z.string().optional(),
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    email: z.string().optional(),
    password: z.string().optional(),
    phone: z.string().optional(),
    userStatus: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace User2$ {
    /** @deprecated use `User2$inboundSchema` instead. */
    export const inboundSchema = User2$inboundSchema;
    /** @deprecated use `User2$outboundSchema` instead. */
    export const outboundSchema = User2$outboundSchema;
    /** @deprecated use `User2$Outbound` instead. */
    export type Outbound = User2$Outbound;
}