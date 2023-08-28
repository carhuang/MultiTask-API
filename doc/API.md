# MultiTask API
All API access is over HTTPS from from `https://carly-task-manager.herokuapp.com`. All responses and requests are in JSON format.

## Users
<details>
 <summary><code>POST</code> <code><b>/users</b></code> <code>(Signup/create a new user)</code></summary>

##### Authentication

> not required

##### Parameters

| name       | type     | data type | description          |
|------------|----------|-----------|----------------------|
| `name`     | required | string    | The name of the user |
| `email`    | required | string    | Email of the user    |
| `password` | required | string    | Password of the user |
| `age`      | optional | int       | Age of the user      |

##### Success Response

- Code: `201 Created`
- Example Response Body:
  ```javascript
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

##### Error Response

- Code: `400 Bad Request`

##### Example Request Body

> ```javascript
>{
>   "name": "Micky Mouse",
>	  "email": "holiday@gmail.com",
>	  "password": "rainbow543",
>	  "age": 20
>}
> ```

</details>

#### Actions on Users
- Signup/create new user
  `GET /users`
#### Request Body
```
{
	"name": "John Doe",
	"email": "john.doe@gmail.com",
	"password": "palapala32",
	"age": 23
}
```
#### Response Body
```
{
    "user": {
        "age": 23,
        "_id": "5e0ec517242cda0017350cb1",
        "name": "Carl Lin",
        "email": "campy@gmail.com",
        "createdAt": "2020-01-03T04:37:43.515Z",
        "updatedAt": "2020-01-03T04:37:43.753Z",
        "__v": 1
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTBlYzUxNzI0MmNkYTAwMTczNTBjYjEiLCJpYXQiOjE1NzgwMjYyNjN9.b1QFI-DcJhzyfNGsjyAdbYLjXjuB89cAeo_sYqH7NbY"
}
```
