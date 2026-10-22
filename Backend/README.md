# RideX API Documentation

## User Registration Endpoint

### Endpoint
`POST /users/register`

### Description
This endpoint registers a new user in the system. It validates the incoming request data, hashes the password, creates a new user record, and returns the user details along with a JWT token.

### Request Method
`POST`

### Status Codes
- `201 Created` — User successfully registered.
- `400 Bad Request` — Validation failed or required fields are missing/invalid.
- `500 Internal Server Error` — Server error while processing the request.

### Request Body Format
The request body must be a JSON object in the following format:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "123456"
}
```

### Required Data
- `fullname.firstname` — Required
  - Minimum length: `3` characters
  - Example: `"John"`
- `fullname.lastname` — Optional but recommended
  - Minimum length: `3` characters if provided
  - Example: `"Doe"`
- `email` — Required
  - Must be a valid email address
  - Example: `"john.doe@example.com"`
- `password` — Required
  - Minimum length: `6` characters
  - Example: `"123456"`

### Validation Rules
- `email` must be a valid email format.
- `fullname.firstname` must be at least 3 characters long.
- `password` must be at least 6 characters long.

### Example Request
```bash
curl -X POST http://localhost:4000/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "123456"
  }'
```

### Example Success Response
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "64c8f7d3c9f1a2b3d4e5f6g7",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "hashed_password_here",
    "socketId": null
  }
}
```

### Example Error Response
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "path": "email",
      "location": "body"
    }
  ]
}
```


## User Login Endpoint

### Endpoint
`POST /users/login`

### Description
This endpoint authenticates an existing user by validating the provided email and password. If the credentials are correct, it returns a JWT token and the user details.

### Request Method
`POST`

### Status Codes
- `200 OK` — User successfully logged in.
- `400 Bad Request` — Validation failed or required fields are missing/invalid.
- `401 Unauthorized` — Invalid email or password.
- `500 Internal Server Error` — Server error while processing the request.

### Request Body Format
The request body must be a JSON object in the following format:

```json
{
  "email": "john.doe@example.com",
  "password": "123456"
}
```

### Required Data
- `email` — Required
  - Must be a valid email address
  - Example: `"john.doe@example.com"`
- `password` — Required
  - Minimum length: `6` characters
  - Example: `"123456"`

### Validation Rules
- `email` must be a valid email format.
- `password` must be at least 6 characters long.

### Example Request
```bash
curl -X POST http://localhost:4000/users/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john.doe@example.com",
    "password": "123456"
  }'
```

### Example Success Response
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "64c8f7d3c9f1a2b3d4e5f6g7",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "hashed_password_here",
    "socketId": null
  }
}
```

### Example Error Response
```json
{
  "message": "Invalid email or password"
}
```
