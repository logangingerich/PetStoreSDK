/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { AddPetFormAcceptEnum, petAddPetForm } from "../funcs/petAddPetForm.js";
import { AddPetJsonAcceptEnum, petAddPetJson } from "../funcs/petAddPetJson.js";
import { AddPetRawAcceptEnum, petAddPetRaw } from "../funcs/petAddPetRaw.js";
import { petDeletePet } from "../funcs/petDeletePet.js";
import {
  FindPetsByStatusAcceptEnum,
  petFindPetsByStatus,
} from "../funcs/petFindPetsByStatus.js";
import {
  FindPetsByTagsAcceptEnum,
  petFindPetsByTags,
} from "../funcs/petFindPetsByTags.js";
import { GetPetByIdAcceptEnum, petGetPetById } from "../funcs/petGetPetById.js";
import {
  petUpdatePetForm,
  UpdatePetFormAcceptEnum,
} from "../funcs/petUpdatePetForm.js";
import {
  petUpdatePetJson,
  UpdatePetJsonAcceptEnum,
} from "../funcs/petUpdatePetJson.js";
import {
  petUpdatePetRaw,
  UpdatePetRawAcceptEnum,
} from "../funcs/petUpdatePetRaw.js";
import { petUpdatePetWithForm } from "../funcs/petUpdatePetWithForm.js";
import { petUploadFile } from "../funcs/petUploadFile.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export { UpdatePetJsonAcceptEnum } from "../funcs/petUpdatePetJson.js";

export { UpdatePetRawAcceptEnum } from "../funcs/petUpdatePetRaw.js";

export { UpdatePetFormAcceptEnum } from "../funcs/petUpdatePetForm.js";

export { AddPetJsonAcceptEnum } from "../funcs/petAddPetJson.js";

export { AddPetRawAcceptEnum } from "../funcs/petAddPetRaw.js";

export { AddPetFormAcceptEnum } from "../funcs/petAddPetForm.js";

export { FindPetsByStatusAcceptEnum } from "../funcs/petFindPetsByStatus.js";

export { FindPetsByTagsAcceptEnum } from "../funcs/petFindPetsByTags.js";

export { GetPetByIdAcceptEnum } from "../funcs/petGetPetById.js";

export class Pet extends ClientSDK {
  /**
   * Update an existing pet
   *
   * @remarks
   * Update an existing pet by Id
   */
  async updatePetJson(
    request: ReadableStream<Uint8Array> | Blob | ArrayBuffer,
    options?: RequestOptions & {
      acceptHeaderOverride?: UpdatePetJsonAcceptEnum;
    },
  ): Promise<operations.UpdatePetJsonResponse> {
    return unwrapAsync(petUpdatePetJson(
      this,
      request,
      options,
    ));
  }

  /**
   * Update an existing pet
   *
   * @remarks
   * Update an existing pet by Id
   */
  async updatePetRaw(
    request: ReadableStream<Uint8Array> | Blob | ArrayBuffer,
    options?: RequestOptions & {
      acceptHeaderOverride?: UpdatePetRawAcceptEnum;
    },
  ): Promise<operations.UpdatePetRawResponse> {
    return unwrapAsync(petUpdatePetRaw(
      this,
      request,
      options,
    ));
  }

  /**
   * Update an existing pet
   *
   * @remarks
   * Update an existing pet by Id
   */
  async updatePetForm(
    request: ReadableStream<Uint8Array> | Blob | ArrayBuffer,
    options?: RequestOptions & {
      acceptHeaderOverride?: UpdatePetFormAcceptEnum;
    },
  ): Promise<operations.UpdatePetFormResponse> {
    return unwrapAsync(petUpdatePetForm(
      this,
      request,
      options,
    ));
  }

  /**
   * Add a new pet to the store
   *
   * @remarks
   * Add a new pet to the store
   */
  async addPetJson(
    request: ReadableStream<Uint8Array> | Blob | ArrayBuffer,
    options?: RequestOptions & { acceptHeaderOverride?: AddPetJsonAcceptEnum },
  ): Promise<operations.AddPetJsonResponse> {
    return unwrapAsync(petAddPetJson(
      this,
      request,
      options,
    ));
  }

  /**
   * Add a new pet to the store
   *
   * @remarks
   * Add a new pet to the store
   */
  async addPetRaw(
    request: ReadableStream<Uint8Array> | Blob | ArrayBuffer,
    options?: RequestOptions & { acceptHeaderOverride?: AddPetRawAcceptEnum },
  ): Promise<operations.AddPetRawResponse> {
    return unwrapAsync(petAddPetRaw(
      this,
      request,
      options,
    ));
  }

  /**
   * Add a new pet to the store
   *
   * @remarks
   * Add a new pet to the store
   */
  async addPetForm(
    request: components.Pet2,
    options?: RequestOptions & { acceptHeaderOverride?: AddPetFormAcceptEnum },
  ): Promise<operations.AddPetFormResponse> {
    return unwrapAsync(petAddPetForm(
      this,
      request,
      options,
    ));
  }

  /**
   * Finds Pets by status
   *
   * @remarks
   * Multiple status values can be provided with comma separated strings
   */
  async findPetsByStatus(
    request: operations.FindPetsByStatusRequest,
    options?: RequestOptions & {
      acceptHeaderOverride?: FindPetsByStatusAcceptEnum;
    },
  ): Promise<operations.FindPetsByStatusResponse> {
    return unwrapAsync(petFindPetsByStatus(
      this,
      request,
      options,
    ));
  }

  /**
   * Finds Pets by tags
   *
   * @remarks
   * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
   */
  async findPetsByTags(
    request: operations.FindPetsByTagsRequest,
    options?: RequestOptions & {
      acceptHeaderOverride?: FindPetsByTagsAcceptEnum;
    },
  ): Promise<operations.FindPetsByTagsResponse> {
    return unwrapAsync(petFindPetsByTags(
      this,
      request,
      options,
    ));
  }

  /**
   * Find pet by ID
   *
   * @remarks
   * Returns a single pet
   */
  async getPetById(
    request: operations.GetPetByIdRequest,
    security: operations.GetPetByIdSecurity,
    options?: RequestOptions & { acceptHeaderOverride?: GetPetByIdAcceptEnum },
  ): Promise<operations.GetPetByIdResponse> {
    return unwrapAsync(petGetPetById(
      this,
      request,
      security,
      options,
    ));
  }

  /**
   * Updates a pet in the store with form data
   */
  async updatePetWithForm(
    request: operations.UpdatePetWithFormRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(petUpdatePetWithForm(
      this,
      request,
      options,
    ));
  }

  /**
   * Deletes a pet
   */
  async deletePet(
    request: operations.DeletePetRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(petDeletePet(
      this,
      request,
      options,
    ));
  }

  /**
   * uploads an image
   */
  async uploadFile(
    request: operations.UploadFileRequest,
    options?: RequestOptions,
  ): Promise<components.ApiResponse> {
    return unwrapAsync(petUploadFile(
      this,
      request,
      options,
    ));
  }
}
