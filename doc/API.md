# MultiTask API
All API access is over HTTPS from from `https://carly-task-manager.herokuapp.com`. All responses and requests are in JSON format.

## Users
<details>
 <summary><code>POST</code> <code><b>/users</b></code> <code>(Signup/create a new user)</code></summary>

#### Authentication

not required

#### Parameters

| name       | type     | data type | description          |
|------------|----------|-----------|----------------------|
| `name`     | required | string    | The name of the user |
| `email`    | required | string    | Email of the user    |
| `password` | required | string    | Password of the user |
| `age`      | optional | int       | Age of the user      |

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
- **Extra actions**: Triggers SendGrid to send a welcome email to the new user and adds a new JWT to the user's `tokens` data.

#### Error Response

- **Code**: `400 Bad Request`

</details>

<details>
 <summary><code>POST</code> <code><b>/users/login</b></code> <code>(Login user)</code></summary>

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
- **Extra actions**: Adds a new JWT to the user's `tokens` data.

#### Error Response

- **Code**: `400 Bad Request`

</details>

<details>
 <summary><code>POST</code> <code><b>/users/logout</b></code> <code>(Log out of user's current session)</code></summary>

#### Authentication

JWT of the user's current session

#### Parameters

none

#### Success Response

- **Code**: `200 OK`
- **Extra actions**: Removes the current JWT from the user's `tokens` data.

#### Error Response

- **Code**: `500 Internal Server Error`

</details>
