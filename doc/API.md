# MultiTask API
All API access is over HTTPS from from ~~`https://carly-task-manager.herokuapp.com`~~. All responses and requests are in JSON format. Passwords are protected with `bcrypt` encryption.

## Users
<details>
 <summary><h3><code>POST</code> <code><b>/users</b></code> <code>(Signup/create a new user)</code></h3></summary>

#### Authentication

not required

#### Parameters

| name       | type     | data type | description                                       |
|------------|----------|-----------|---------------------------------------------------|
| `name`     | required | string    | The name of the user                              |
| `email`    | required | string    | A valid email that doesn't exists in the database |
| `password` | required | string    | Password of the user                              |
| `age`      | optional | int       | Age of the user                                   |

#### Example Request Body

```json
{
  "name": "Micky Mouse",
	"email": "holiday@gmail.com",
	"password": "rainbow543",
  "age": 20
}
```

#### Success Response

- **Code**: `201 Created`
- **Example Response Body**
  ```json
  {
    "user": {
      "age": 20,
      "_id": "64ed1f001acc5e7da922f522",
      "name": "Dou Mao",
      "email": "holiday@gmail.com",
      "createdAt": "2023-08-28T22:26:08.658Z",
      "updatedAt": "2023-08-28T22:26:08.725Z",
      "__v": 1
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGVkMWYwMDFhY2M1ZTdkYTkyMmY1MjIiLCJpYXQiOjE2OTMyNjE1Njh9.UWguNN5AFF3UR86tmrc2paVE9ll9hvw__hmFN60xM4k"
  }
  ```
- **Actions**: Send a welcome email to the new user and adds a new JWT to the user's `tokens` data.

#### Error Response

- **Code**: `400 Bad Request`

</details>

<details>
 <summary>👉 <code>POST</code> <code><b>/users/login</b></code> <code>(Login user)</code></summary>

#### Authentication

not required

#### Parameters

| name       | type     | data type | description          |
|------------|----------|-----------|----------------------|
| `email`    | required | string    | Email of the user    |
| `password` | required | string    | Password of the user |

#### Example Request Body

```json
{
	"email": "Micky Mouse",
	"password": "rainbow543"
}
```

#### Success Response

- **Code**: `200 OK`
- **Example Response Body**
  ```json
  {
    "user": {
      "age": 20,
      "_id": "64ed1f001acc5e7da922f522",
      "name": "Micky Mouse",
      "email": "holiday@gmail.com",
      "createdAt": "2023-08-28T22:26:08.658Z",
      "updatedAt": "2023-08-29T00:10:41.517Z",
      "__v": 2
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGVkMWYwMDFhY2M1ZTdkYTkyMmY1MjIiLCJpYXQiOjE2OTMyNjc4NDF9.xSuIWxSsM45WIpczLCMJb1MMlZ510iC9Js6sfAqqftw"
  }
  ```
- **Action**: Adds a new JWT to the user's `tokens` data.

#### Error Response

- **Code**: `400 Bad Request`

</details>

<details>
 <summary>👉 <code>POST</code> <code><b>/users/logout</b></code> <code>(Log out of user's current session)</code></summary>

#### Authentication

JWT of the user's current session

#### Parameters

none

#### Success Response

- **Code**: `200 OK`
- **Action**: Removes the current JWT from the user's `tokens` data.

#### Error Response

| http code                   | response body                       |
|-----------------------------|-------------------------------------|
| `500 Internal Server Error` | none                                |
| `401 Unauthorized`          | `{"error": "Please authenticate."}` |

</details>

<details>
 <summary><code>POST</code> <code><b>/users/logoutAll</b></code> <code>(Log out of all user's sessions)</code></summary>

#### Authentication

JWT of the user's current session

#### Parameters

none

#### Success Response

- **Code**: `200 OK`
- **Action**: Removes all JWTs from the user's `tokens` data.

#### Error Response

| http code                   | response body                       |
|-----------------------------|-------------------------------------|
| `500 Internal Server Error` | none                                |
| `401 Unauthorized`          | `{"error": "Please authenticate."}` |

</details>

<details>
 <summary><code>GET</code> <code><b>/users/me</b></code> <code>(Get user account information)</code></summary>

#### Authentication

JWT of the user's current session

#### Parameters

none

#### Success Response

- **Code**: `200 OK`
- **Example Response Body**
  ```json
  {
    "age": 20,
    "_id": "64ed44db5577279fff97e05e",
    "name": "Micky Mouse",
    "email": "holiday@gmail.com",
    "createdAt": "2023-08-29T01:07:39.021Z",
    "updatedAt": "2023-08-29T03:53:44.100Z",
    "__v": 11
  }
  ```

#### Error Response

| http code          | response body                       |
|--------------------|-------------------------------------|
| `401 Unauthorized` | `{"error": "Please authenticate."}` |

</details>

<details>
 <summary><code>PATCH</code> <code><b>/users/me</b></code> <code>(Edit user information)</code></summary>

#### Authentication

JWT of the user's current session

#### Parameters

| name       | type     | data type | description                                       |
|------------|----------|-----------|---------------------------------------------------|
| `name`     | optional | string    | The name of the user                              |
| `email`    | optional | string    | A valid email that doesn't exists in the database |
| `password` | optional | string    | Password of the user                              |
| `age`      | optional | int       | Age of the user                                   |

#### Example Request Body

```json
{
	"age": 55,
	"name": "Wise Owl"
}
```

#### Success Response

- **Code**: `200 OK`
- **Example Response Body**
  ```json
  {
    "age": 55,
    "_id": "64ed44db5577279fff97e05e",
    "name": "Wise Owl",
    "email": "holiday@gmail.com",
    "createdAt": "2023-08-29T01:07:39.021Z",
    "updatedAt": "2023-08-29T04:14:48.936Z",
    "__v": 12
  }
  ```

#### Error Response

| http code          | response body                       |
|--------------------|-------------------------------------|
| `400 Bad Request`  | none                                |
| `401 Unauthorized` | `{"error": "Please authenticate."}` |
| `403 Forbidden`    | `{"error": "Invalid update."}`      |

</details>

<details>
 <summary><code>DELETE</code> <code><b>/users/me</b></code> <code>(Delete user account)</code></summary>

#### Authentication

JWT of the user's current session

#### Parameters

none

#### Success Response

- **Code**: `200 OK`
- **Example Response Body**
  ```json
  {
    "age": 55,
    "_id": "64ed44db5577279fff97e05e",
    "name": "Wise Owl",
    "email": "holiday@gmail.com",
    "createdAt": "2023-08-29T01:07:39.021Z",
    "updatedAt": "2023-08-29T04:14:48.936Z",
    "__v": 12
  }
  ```
- **Action**: Send a goodbye email to the user.

#### Error Response

| http code                   | response body                       |
|-----------------------------|-------------------------------------|
| `500 Internal Server Error` | none                                |
| `401 Unauthorized`          | `{"error": "Please authenticate."}` |

</details>

<details>
 <summary><code>POST</code> <code><b>/users/me/avatar</b></code> <code>(Upload user profile picture)</code></summary>

#### Authentication

JWT of the user's current session

#### Parameters

| name     | type     | data type | description                                           |
|----------|----------|-----------|-------------------------------------------------------|
| `avatar` | required | form-data | The link to a `.jpg`, `.jpeg`, or `.png` image file |

#### Success Response

- **Code**: `200 OK`
- **Action**: Resize the uploaded image and saves it to the user's `avatar` data.

#### Error Response

| http code          | response body                       |
|--------------------|-------------------------------------|
| `400 Bad Request`  | `{"error": <error message>}`        |
| `401 Unauthorized` | `{"error": "Please authenticate."}` |

</details>

<details>
 <summary><code>DELETE</code> <code><b>/users/me/avatar</b></code> <code>(Delete user profile picture)</code></summary>

#### Authentication

JWT of the user's current session

#### Parameters

none

#### Success Response

- **Code**: `200 OK`

#### Error Response

| http code          | response body                       |
|--------------------|-------------------------------------|
| `401 Unauthorized` | `{"error": "Please authenticate."}` |

</details>
