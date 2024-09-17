# pet-store-9424

Developer-friendly & type-safe Typescript SDK specifically catered to leverage *pet-store-9424* API.

<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=pet-store-9424&utm_campaign=typescript"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>


## 🏗 **Welcome to your new SDK!** 🏗

It has been generated successfully based on your OpenAPI spec. However, it is not yet ready for production use. Here are some next steps:
- [ ] 🛠 Make your SDK feel handcrafted by [customizing it](https://www.speakeasy.com/docs/customize-sdks)
- [ ] ♻️ Refine your SDK quickly by iterating locally with the [Speakeasy CLI](https://github.com/speakeasy-api/speakeasy)
- [ ] 🎁 Publish your SDK to package managers by [configuring automatic publishing](https://www.speakeasy.com/docs/advanced-setup/publish-sdks)
- [ ] ✨ When ready to productionize, delete this section from the README

<!-- Start Summary [summary] -->
## Summary

Swagger Petstore - OpenAPI 3.0: This is a sample Pet Store Server based on the OpenAPI 3.0 specification.  You can find out more about
Swagger at [http://swagger.io](http://swagger.io). In the third iteration of the pet store, we've switched to the design first approach!
You can now help us improve the API whether it's by making changes to the definition itself or to the code.
That way, with time, we can improve the API in general, and expose some of the new features in OAS3.

Some useful links:
- [The Pet Store repository](https://github.com/swagger-api/swagger-petstore)
- [The source API definition for the Pet Store](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml)

For more information about the API: [Find out more about Swagger](http://swagger.io)
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents

* [SDK Installation](#sdk-installation)
* [Requirements](#requirements)
* [SDK Example Usage](#sdk-example-usage)
* [Available Resources and Operations](#available-resources-and-operations)
* [Standalone functions](#standalone-functions)
* [File uploads](#file-uploads)
* [Retries](#retries)
* [Error Handling](#error-handling)
* [Server Selection](#server-selection)
* [Custom HTTP Client](#custom-http-client)
* [Authentication](#authentication)
* [Debugging](#debugging)
<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add pet-store-9424
```

### PNPM

```bash
pnpm add pet-store-9424
```

### Bun

```bash
bun add pet-store-9424
```

### Yarn

```bash
yarn add pet-store-9424 zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { openAsBlob } from "node:fs";
import { PetStore9424 } from "pet-store-9424";

const petStore9424 = new PetStore9424({
  petstoreAuth: process.env["PETSTORE9424_PETSTORE_AUTH"] ?? "",
});

async function run() {
  const result = await petStore9424.pet.updatePetJson(
    await openAsBlob("example.file"),
  );

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [pet](docs/sdks/pet/README.md)

* [updatePetJson](docs/sdks/pet/README.md#updatepetjson) - Update an existing pet
* [updatePetRaw](docs/sdks/pet/README.md#updatepetraw) - Update an existing pet
* [updatePetForm](docs/sdks/pet/README.md#updatepetform) - Update an existing pet
* [addPetJson](docs/sdks/pet/README.md#addpetjson) - Add a new pet to the store
* [addPetRaw](docs/sdks/pet/README.md#addpetraw) - Add a new pet to the store
* [addPetForm](docs/sdks/pet/README.md#addpetform) - Add a new pet to the store
* [findPetsByStatus](docs/sdks/pet/README.md#findpetsbystatus) - Finds Pets by status
* [findPetsByTags](docs/sdks/pet/README.md#findpetsbytags) - Finds Pets by tags
* [getPetById](docs/sdks/pet/README.md#getpetbyid) - Find pet by ID
* [updatePetWithForm](docs/sdks/pet/README.md#updatepetwithform) - Updates a pet in the store with form data
* [deletePet](docs/sdks/pet/README.md#deletepet) - Deletes a pet
* [uploadFile](docs/sdks/pet/README.md#uploadfile) - uploads an image


### [store](docs/sdks/store/README.md)

* [getInventory](docs/sdks/store/README.md#getinventory) - Returns pet inventories by status
* [placeOrderJson](docs/sdks/store/README.md#placeorderjson) - Place an order for a pet
* [placeOrderRaw](docs/sdks/store/README.md#placeorderraw) - Place an order for a pet
* [placeOrderForm](docs/sdks/store/README.md#placeorderform) - Place an order for a pet
* [getOrderById](docs/sdks/store/README.md#getorderbyid) - Find purchase order by ID
* [deleteOrder](docs/sdks/store/README.md#deleteorder) - Delete purchase order by ID

### [user](docs/sdks/user/README.md)

* [createUserJson](docs/sdks/user/README.md#createuserjson) - Create user
* [createUserRaw](docs/sdks/user/README.md#createuserraw) - Create user
* [createUserForm](docs/sdks/user/README.md#createuserform) - Create user
* [createUsersWithListInput](docs/sdks/user/README.md#createuserswithlistinput) - Creates list of users with given input array
* [loginUser](docs/sdks/user/README.md#loginuser) - Logs user into the system
* [logoutUser](docs/sdks/user/README.md#logoutuser) - Logs out current logged in user session
* [getUserByName](docs/sdks/user/README.md#getuserbyname) - Get user by user name
* [updateUserJson](docs/sdks/user/README.md#updateuserjson) - Update user
* [updateUserRaw](docs/sdks/user/README.md#updateuserraw) - Update user
* [updateUserForm](docs/sdks/user/README.md#updateuserform) - Update user
* [deleteUser](docs/sdks/user/README.md#deleteuser) - Delete user

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [petAddPetForm](docs/sdks/pet/README.md#addpetform)
- [petAddPetJson](docs/sdks/pet/README.md#addpetjson)
- [petAddPetRaw](docs/sdks/pet/README.md#addpetraw)
- [petDeletePet](docs/sdks/pet/README.md#deletepet)
- [petFindPetsByStatus](docs/sdks/pet/README.md#findpetsbystatus)
- [petFindPetsByTags](docs/sdks/pet/README.md#findpetsbytags)
- [petGetPetById](docs/sdks/pet/README.md#getpetbyid)
- [petUpdatePetForm](docs/sdks/pet/README.md#updatepetform)
- [petUpdatePetJson](docs/sdks/pet/README.md#updatepetjson)
- [petUpdatePetRaw](docs/sdks/pet/README.md#updatepetraw)
- [petUpdatePetWithForm](docs/sdks/pet/README.md#updatepetwithform)
- [petUploadFile](docs/sdks/pet/README.md#uploadfile)
- [storeDeleteOrder](docs/sdks/store/README.md#deleteorder)
- [storeGetInventory](docs/sdks/store/README.md#getinventory)
- [storeGetOrderById](docs/sdks/store/README.md#getorderbyid)
- [storePlaceOrderForm](docs/sdks/store/README.md#placeorderform)
- [storePlaceOrderJson](docs/sdks/store/README.md#placeorderjson)
- [storePlaceOrderRaw](docs/sdks/store/README.md#placeorderraw)
- [userCreateUserForm](docs/sdks/user/README.md#createuserform)
- [userCreateUserJson](docs/sdks/user/README.md#createuserjson)
- [userCreateUserRaw](docs/sdks/user/README.md#createuserraw)
- [userCreateUsersWithListInput](docs/sdks/user/README.md#createuserswithlistinput)
- [userDeleteUser](docs/sdks/user/README.md#deleteuser)
- [userGetUserByName](docs/sdks/user/README.md#getuserbyname)
- [userLoginUser](docs/sdks/user/README.md#loginuser)
- [userLogoutUser](docs/sdks/user/README.md#logoutuser)
- [userUpdateUserForm](docs/sdks/user/README.md#updateuserform)
- [userUpdateUserJson](docs/sdks/user/README.md#updateuserjson)
- [userUpdateUserRaw](docs/sdks/user/README.md#updateuserraw)


</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start File uploads [file-upload] -->
## File uploads

Certain SDK methods accept files as part of a multi-part request. It is possible and typically recommended to upload files as a stream rather than reading the entire contents into memory. This avoids excessive memory consumption and potentially crashing with out-of-memory errors when working with very large files. The following example demonstrates how to attach a file stream to a request.

> [!TIP]
>
> Depending on your JavaScript runtime, there are convenient utilities that return a handle to a file without reading the entire contents into memory:
>
> - **Node.js v20+:** Since v20, Node.js comes with a native `openAsBlob` function in [`node:fs`](https://nodejs.org/docs/latest-v20.x/api/fs.html#fsopenasblobpath-options).
> - **Bun:** The native [`Bun.file`](https://bun.sh/docs/api/file-io#reading-files-bun-file) function produces a file handle that can be used for streaming file uploads.
> - **Browsers:** All supported browsers return an instance to a [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) when reading the value from an `<input type="file">` element.
> - **Node.js v18:** A file stream can be created using the `fileFrom` helper from [`fetch-blob/from.js`](https://www.npmjs.com/package/fetch-blob).

```typescript
import { openAsBlob } from "node:fs";
import { PetStore9424 } from "pet-store-9424";

const petStore9424 = new PetStore9424({
  petstoreAuth: process.env["PETSTORE9424_PETSTORE_AUTH"] ?? "",
});

async function run() {
  const result = await petStore9424.pet.updatePetJson(
    await openAsBlob("example.file"),
  );

  // Handle the result
  console.log(result);
}

run();

```
<!-- End File uploads [file-upload] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { openAsBlob } from "node:fs";
import { PetStore9424 } from "pet-store-9424";

const petStore9424 = new PetStore9424({
  petstoreAuth: process.env["PETSTORE9424_PETSTORE_AUTH"] ?? "",
});

async function run() {
  const result = await petStore9424.pet.updatePetJson(
    await openAsBlob("example.file"),
    {
      retries: {
        strategy: "backoff",
        backoff: {
          initialInterval: 1,
          maxInterval: 50,
          exponent: 1.1,
          maxElapsedTime: 100,
        },
        retryConnectionErrors: false,
      },
    },
  );

  // Handle the result
  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { openAsBlob } from "node:fs";
import { PetStore9424 } from "pet-store-9424";

const petStore9424 = new PetStore9424({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  petstoreAuth: process.env["PETSTORE9424_PETSTORE_AUTH"] ?? "",
});

async function run() {
  const result = await petStore9424.pet.updatePetJson(
    await openAsBlob("example.file"),
  );

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging. 


```typescript
import { openAsBlob } from "node:fs";
import { PetStore9424 } from "pet-store-9424";
import { SDKValidationError } from "pet-store-9424/models/errors";

const petStore9424 = new PetStore9424({
  petstoreAuth: process.env["PETSTORE9424_PETSTORE_AUTH"] ?? "",
});

async function run() {
  let result;
  try {
    result = await petStore9424.pet.updatePetJson(
      await openAsBlob("example.file"),
    );

    // Handle the result
    console.log(result);
  } catch (err) {
    switch (true) {
      case (err instanceof SDKValidationError): {
        // Validation errors can be pretty-printed
        console.error(err.pretty());
        // Raw value may also be inspected
        console.error(err.rawValue);
        return;
      }
      default: {
        throw err;
      }
    }
  }
}

run();

```
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https:///api/v3` | None |

```typescript
import { openAsBlob } from "node:fs";
import { PetStore9424 } from "pet-store-9424";

const petStore9424 = new PetStore9424({
  serverIdx: 0,
  petstoreAuth: process.env["PETSTORE9424_PETSTORE_AUTH"] ?? "",
});

async function run() {
  const result = await petStore9424.pet.updatePetJson(
    await openAsBlob("example.file"),
  );

  // Handle the result
  console.log(result);
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

```typescript
import { openAsBlob } from "node:fs";
import { PetStore9424 } from "pet-store-9424";

const petStore9424 = new PetStore9424({
  serverURL: "https:///api/v3",
  petstoreAuth: process.env["PETSTORE9424_PETSTORE_AUTH"] ?? "",
});

async function run() {
  const result = await petStore9424.pet.updatePetJson(
    await openAsBlob("example.file"),
  );

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { PetStore9424 } from "pet-store-9424";
import { HTTPClient } from "pet-store-9424/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new PetStore9424({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name                         | Type                         | Scheme                       | Environment Variable         |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `petstoreAuth`               | oauth2                       | OAuth2 token                 | `PETSTORE9424_PETSTORE_AUTH` |

To authenticate with the API the `petstoreAuth` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { openAsBlob } from "node:fs";
import { PetStore9424 } from "pet-store-9424";

const petStore9424 = new PetStore9424({
  petstoreAuth: process.env["PETSTORE9424_PETSTORE_AUTH"] ?? "",
});

async function run() {
  const result = await petStore9424.pet.updatePetJson(
    await openAsBlob("example.file"),
  );

  // Handle the result
  console.log(result);
}

run();

```

### Per-Operation Security Schemes

Some operations in this SDK require the security scheme to be specified at the request level. For example:
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
  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { PetStore9424 } from "pet-store-9424";

const sdk = new PetStore9424({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `PETSTORE9424_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=pet-store-9424&utm_campaign=typescript)
