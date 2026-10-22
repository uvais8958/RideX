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


## User Profile Endpoint

### Endpoint
`GET /users/profile`

### Description
This endpoint returns the authenticated user's profile information. It requires a valid JWT token passed either in the cookie `token` or in the `Authorization` header as a Bearer token.

### Request Method
`GET`

### Status Codes
- `200 OK` — User profile returned successfully.
- `401 Unauthorized` — Token is missing, invalid, or blacklisted.
- `500 Internal Server Error` — Server error while processing the request.

### Authentication
Use a valid JWT token in either of these formats:

```http
Cookie: token=YOUR_JWT_TOKEN
```

```http
Authorization: Bearer YOUR_JWT_TOKEN
```

### Example Request
```bash
curl -X GET http://localhost:4000/users/profile \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

### Example Success Response
```json
{
  "_id": "64c8f7d3c9f1a2b3d4e5f6g7",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "hashed_password_here",
  "socketId": null
}
```

### Example Error Response
```json
{
  "message": "Unauthorized"
}
```


## User Logout Endpoint

### Endpoint
`GET /users/logout`

### Description
This endpoint logs the authenticated user out by clearing the cookie and storing the current token in the blacklist so it cannot be reused.

### Request Method
`GET`

### Status Codes
- `200 OK` — User successfully logged out.
- `401 Unauthorized` — Token is missing or invalid.
- `500 Internal Server Error` — Server error while processing the request.

### Authentication
The user must be logged in and send a valid JWT token in either cookie or Authorization header.

### Example Request
```bash
curl -X GET http://localhost:4000/users/logout \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

### Example Success Response
```json
{
  "message": "Logged out"
}
```

### Example Error Response
```json
{
  "message": "Unauthorized"
}
```
