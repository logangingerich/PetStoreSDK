# Pet
(*pet*)

## Overview

Everything about your Pets

Find out more
<http://swagger.io>

### Available Operations

* [updatePetJson](#updatepetjson) - Update an existing pet
* [updatePetRaw](#updatepetraw) - Update an existing pet
* [updatePetForm](#updatepetform) - Update an existing pet
* [addPetJson](#addpetjson) - Add a new pet to the store
* [addPetRaw](#addpetraw) - Add a new pet to the store
* [addPetForm](#addpetform) - Add a new pet to the store
* [findPetsByStatus](#findpetsbystatus) - Finds Pets by status
* [findPetsByTags](#findpetsbytags) - Finds Pets by tags
* [getPetById](#getpetbyid) - Find pet by ID
* [updatePetWithForm](#updatepetwithform) - Updates a pet in the store with form data
* [deletePet](#deletepet) - Deletes a pet
* [uploadFile](#uploadfile) - uploads an image

## updatePetJson

Update an existing pet by Id

### Example Usage

```typescript
import { openAsBlob } from "node:fs";
import { PetStore9424 } from "pet-store-9424";

const petStore9424 = new PetStore9424({
  petstoreAuth: process.env["PETSTORE9424_PETSTORE_AUTH"] ?? "",
});

async function run() {
  const result = await petStore9424.pet.updatePetJson(await openAsBlob("example.file"));
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { openAsBlob } from "node:fs";
import { PetStore9424Core } from "pet-store-9424/core.js";
import { petUpdatePetJson } from "pet-store-9424/funcs/petUpdatePetJson.js";

// Use `PetStore9424Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const petStore9424 = new PetStore9424Core({
  petstoreAuth: process.env["PETSTORE9424_PETSTORE_AUTH"] ?? "",
});

async function run() {
  const res = await petUpdatePetJson(petStore9424, await openAsBlob("example.file"));

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [ReadableStream<Uint8Array>](../../models/components/pet.md)                                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdatePetJsonResponse](../../models/operations/updatepetjsonresponse.md)\>**

### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |


## updatePetRaw

Update an existing pet by Id

### Example Usage

```typescript
import { openAsBlob } from "node:fs";
import { PetStore9424 } from "pet-store-9424";

const petStore9424 = new PetStore9424({
  petstoreAuth: process.env["PETSTORE9424_PETSTORE_AUTH"] ?? "",
});

async function run() {
  const result = await petStore9424.pet.updatePetRaw(await openAsBlob("example.file"));
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { openAsBlob } from "node:fs";
import { PetStore9424Core } from "pet-store-9424/core.js";
import { petUpdatePetRaw } from "pet-store-9424/funcs/petUpdatePetRaw.js";

// Use `PetStore9424Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const petStore9424 = new PetStore9424Core({
  petstoreAuth: process.env["PETSTORE9424_PETSTORE_AUTH"] ?? "",
});

async function run() {
  const res = await petUpdatePetRaw(petStore9424, await openAsBlob("example.file"));

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [ReadableStream<Uint8Array>](../../models/components/pet.md)                                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdatePetRawResponse](../../models/operations/updatepetrawresponse.md)\>**

### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |


## updatePetForm

Update an existing pet by Id

### Example Usage

```typescript
import { openAsBlob } from "node:fs";
import { PetStore9424 } from "pet-store-9424";

const petStore9424 = new PetStore9424({
  petstoreAuth: process.env["PETSTORE9424_PETSTORE_AUTH"] ?? "",
});

async function run() {
  const result = await petStore9424.pet.updatePetForm(await openAsBlob("example.file"));
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { openAsBlob } from "node:fs";
import { PetStore9424Core } from "pet-store-9424/core.js";
import { petUpdatePetForm } from "pet-store-9424/funcs/petUpdatePetForm.js";

// Use `PetStore9424Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const petStore9424 = new PetStore9424Core({
  petstoreAuth: process.env["PETSTORE9424_PETSTORE_AUTH"] ?? "",
});

async function run() {
  const res = await petUpdatePetForm(petStore9424, await openAsBlob("example.file"));

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [ReadableStream<Uint8Array>](../../models/components/pet1.md)                                                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdatePetFormResponse](../../models/operations/updatepetformresponse.md)\>**

### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |


## addPetJson

Add a new pet to the store

### Example Usage

```typescript
import { openAsBlob } from "node:fs";
import { PetStore9424 } from "pet-store-9424";

const petStore9424 = new PetStore9424({
  petstoreAuth: process.env["PETSTORE9424_PETSTORE_AUTH"] ?? "",
});

async function run() {
  const result = await petStore9424.pet.addPetJson(await openAsBlob("example.file"));
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { openAsBlob } from "node:fs";
import { PetStore9424Core } from "pet-store-9424/core.js";
import { petAddPetJson } from "pet-store-9424/funcs/petAddPetJson.js";

// Use `PetStore9424Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const petStore9424 = new PetStore9424Core({
  petstoreAuth: process.env["PETSTORE9424_PETSTORE_AUTH"] ?? "",
});

async function run() {
  const res = await petAddPetJson(petStore9424, await openAsBlob("example.file"));

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [ReadableStream<Uint8Array>](../../models/components/pet1.md)                                                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AddPetJsonResponse](../../models/operations/addpetjsonresponse.md)\>**

### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |


## addPetRaw

Add a new pet to the store

### Example Usage

```typescript
import { openAsBlob } from "node:fs";
import { PetStore9424 } from "pet-store-9424";

const petStore9424 = new PetStore9424({
  petstoreAuth: process.env["PETSTORE9424_PETSTORE_AUTH"] ?? "",
});

async function run() {
  const result = await petStore9424.pet.addPetRaw(await openAsBlob("example.file"));
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { openAsBlob } from "node:fs";
import { PetStore9424Core } from "pet-store-9424/core.js";
import { petAddPetRaw } from "pet-store-9424/funcs/petAddPetRaw.js";

// Use `PetStore9424Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const petStore9424 = new PetStore9424Core({
  petstoreAuth: process.env["PETSTORE9424_PETSTORE_AUTH"] ?? "",
});

async function run() {
  const res = await petAddPetRaw(petStore9424, await openAsBlob("example.file"));

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [ReadableStream<Uint8Array>](../../models/components/pet1.md)                                                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AddPetRawResponse](../../models/operations/addpetrawresponse.md)\>**

### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |


## addPetForm

Add a new pet to the store

### Example Usage

```typescript
import { PetStore9424 } from "pet-store-9424";

const petStore9424 = new PetStore9424({
  petstoreAuth: process.env["PETSTORE9424_PETSTORE_AUTH"] ?? "",
});

async function run() {
  const result = await petStore9424.pet.addPetForm({
    id: 10,
    name: "doggie",
    category: {
      id: 1,
      name: "Dogs",
    },
    photoUrls: [
      "<value>",
    ],
  });
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PetStore9424Core } from "pet-store-9424/core.js";
import { petAddPetForm } from "pet-store-9424/funcs/petAddPetForm.js";

// Use `PetStore9424Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const petStore9424 = new PetStore9424Core({
  petstoreAuth: process.env["PETSTORE9424_PETSTORE_AUTH"] ?? "",
});

async function run() {
  const res = await petAddPetForm(petStore9424, {
    id: 10,
    name: "doggie",
    category: {
      id: 1,
      name: "Dogs",
    },
    photoUrls: [
      "<value>",
    ],
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.Pet2](../../models/components/pet2.md)                                                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AddPetFormResponse](../../models/operations/addpetformresponse.md)\>**

### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |


## findPetsByStatus

Multiple status values can be provided with comma separated strings

### Example Usage

```typescript
import { PetStore9424 } from "pet-store-9424";

const petStore9424 = new PetStore9424({
  petstoreAuth: process.env["PETSTORE9424_PETSTORE_AUTH"] ?? "",
});

async function run() {
  const result = await petStore9424.pet.findPetsByStatus({});
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PetStore9424Core } from "pet-store-9424/core.js";
import { petFindPetsByStatus } from "pet-store-9424/funcs/petFindPetsByStatus.js";

// Use `PetStore9424Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const petStore9424 = new PetStore9424Core({
  petstoreAuth: process.env["PETSTORE9424_PETSTORE_AUTH"] ?? "",
});

async function run() {
  const res = await petFindPetsByStatus(petStore9424, {});

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.FindPetsByStatusRequest](../../models/operations/findpetsbystatusrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.FindPetsByStatusResponse](../../models/operations/findpetsbystatusresponse.md)\>**

### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |


## findPetsByTags

Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.

### Example Usage

```typescript
import { PetStore9424 } from "pet-store-9424";

const petStore9424 = new PetStore9424({
  petstoreAuth: process.env["PETSTORE9424_PETSTORE_AUTH"] ?? "",
});

async function run() {
  const result = await petStore9424.pet.findPetsByTags({});
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PetStore9424Core } from "pet-store-9424/core.js";
import { petFindPetsByTags } from "pet-store-9424/funcs/petFindPetsByTags.js";

// Use `PetStore9424Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const petStore9424 = new PetStore9424Core({
  petstoreAuth: process.env["PETSTORE9424_PETSTORE_AUTH"] ?? "",
});

async function run() {
  const res = await petFindPetsByTags(petStore9424, {});

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.FindPetsByTagsRequest](../../models/operations/findpetsbytagsrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.FindPetsByTagsResponse](../../models/operations/findpetsbytagsresponse.md)\>**

### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |


## getPetById

Returns a single pet

### Example Usage

```typescript
import { PetStore9424 } from "pet-store-9424";

const petStore9424 = new PetStore9424();

async function run() {
  const result = await petStore9424.pet.getPetById({
    petId: 504151,
  }, {
    apiKey: process.env["PETSTORE9424_API_KEY"] ?? "",
  });
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PetStore9424Core } from "pet-store-9424/core.js";
import { petGetPetById } from "pet-store-9424/funcs/petGetPetById.js";

// Use `PetStore9424Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const petStore9424 = new PetStore9424Core();

async function run() {
  const res = await petGetPetById(petStore9424, {
    petId: 504151,
  }, {
    apiKey: process.env["PETSTORE9424_API_KEY"] ?? "",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetPetByIdRequest](../../models/operations/getpetbyidrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetPetByIdSecurity](../../models/operations/getpetbyidsecurity.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetPetByIdResponse](../../models/operations/getpetbyidresponse.md)\>**

### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |


## updatePetWithForm

Updates a pet in the store with form data

### Example Usage

```typescript
import { PetStore9424 } from "pet-store-9424";

const petStore9424 = new PetStore9424({
  petstoreAuth: process.env["PETSTORE9424_PETSTORE_AUTH"] ?? "",
});

async function run() {
  await petStore9424.pet.updatePetWithForm({
    petId: 303241,
  });
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PetStore9424Core } from "pet-store-9424/core.js";
import { petUpdatePetWithForm } from "pet-store-9424/funcs/petUpdatePetWithForm.js";

// Use `PetStore9424Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const petStore9424 = new PetStore9424Core({
  petstoreAuth: process.env["PETSTORE9424_PETSTORE_AUTH"] ?? "",
});

async function run() {
  const res = await petUpdatePetWithForm(petStore9424, {
    petId: 303241,
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdatePetWithFormRequest](../../models/operations/updatepetwithformrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |


## deletePet

Deletes a pet

### Example Usage

```typescript
import { PetStore9424 } from "pet-store-9424";

const petStore9424 = new PetStore9424({
  petstoreAuth: process.env["PETSTORE9424_PETSTORE_AUTH"] ?? "",
});

async function run() {
  await petStore9424.pet.deletePet({
    petId: 441876,
  });
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PetStore9424Core } from "pet-store-9424/core.js";
import { petDeletePet } from "pet-store-9424/funcs/petDeletePet.js";

// Use `PetStore9424Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const petStore9424 = new PetStore9424Core({
  petstoreAuth: process.env["PETSTORE9424_PETSTORE_AUTH"] ?? "",
});

async function run() {
  const res = await petDeletePet(petStore9424, {
    petId: 441876,
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeletePetRequest](../../models/operations/deletepetrequest.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |


## uploadFile

uploads an image

### Example Usage

```typescript
import { PetStore9424 } from "pet-store-9424";

const petStore9424 = new PetStore9424({
  petstoreAuth: process.env["PETSTORE9424_PETSTORE_AUTH"] ?? "",
});

async function run() {
  const result = await petStore9424.pet.uploadFile({
    petId: 565380,
  });
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PetStore9424Core } from "pet-store-9424/core.js";
import { petUploadFile } from "pet-store-9424/funcs/petUploadFile.js";

// Use `PetStore9424Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const petStore9424 = new PetStore9424Core({
  petstoreAuth: process.env["PETSTORE9424_PETSTORE_AUTH"] ?? "",
});

async function run() {
  const res = await petUploadFile(petStore9424, {
    petId: 565380,
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UploadFileRequest](../../models/operations/uploadfilerequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ApiResponse](../../models/components/apiresponse.md)\>**

### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
