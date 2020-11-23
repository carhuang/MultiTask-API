# MultiTask API
All API access is over HTTPS and accessed from `https://carly-task-manager.herokuapp.com`. All responses and requests are in JSON format.

## Users
#### User Object
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
