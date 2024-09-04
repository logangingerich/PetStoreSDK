# Pet2

## Example Usage

```typescript
import { Pet2 } from "pet-store-9424/models/components";

let value: Pet2 = {
    id: 10,
    name: "doggie",
    category: {
        id: 1,
        name: "Dogs",
    },
    photoUrls: ["<value>"],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `id`                                                       | *number*                                                   | :heavy_minus_sign:                                         | N/A                                                        | 10                                                         |
| `name`                                                     | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        | doggie                                                     |
| `category`                                                 | [components.Category](../../models/components/category.md) | :heavy_minus_sign:                                         | N/A                                                        |                                                            |
| `photoUrls`                                                | *string*[]                                                 | :heavy_check_mark:                                         | N/A                                                        |                                                            |
| `tags`                                                     | [components.Tag](../../models/components/tag.md)[]         | :heavy_minus_sign:                                         | N/A                                                        |                                                            |
| `status`                                                   | [components.Status](../../models/components/status.md)     | :heavy_minus_sign:                                         | pet status in the store                                    |                                                            |