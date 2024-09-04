<!-- Start SDK Example Usage [usage] -->
```typescript
import { files, PetStore9424 } from "pet-store-9424";

const petStore9424 = new PetStore9424({
    petstoreAuth: process.env["PETSTORE9424_PETSTORE_AUTH"] ?? "",
});

async function run() {
    const result = await petStore9424.pet.updatePetForm(files.toStream("example.file"));

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->