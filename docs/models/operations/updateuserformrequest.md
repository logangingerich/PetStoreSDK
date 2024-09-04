# UpdateUserFormRequest

## Example Usage

```typescript
import { UpdateUserFormRequest } from "pet-store-9424/models/operations";

let value: UpdateUserFormRequest = {
    username: "Ashlee36",
    user: {
        id: 10,
        username: "theUser",
        firstName: "John",
        lastName: "James",
        email: "john@email.com",
        password: "12345",
        phone: "12345",
        userStatus: 1,
    },
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `username`                                           | *string*                                             | :heavy_check_mark:                                   | name that needs to be updated                        |
| `user`                                               | [components.User2](../../models/components/user2.md) | :heavy_minus_sign:                                   | Update an existent user in the store                 |