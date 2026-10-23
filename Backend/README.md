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

## Captain Registration Endpoint

### Endpoint
`POST /captains/register`

### Description
This endpoint registers a new captain in the system. It validates the incoming request data, hashes the password, creates a captain record with vehicle details, and returns the captain details along with a JWT token.

### Request Method
`POST`

### Status Codes
- `201 Created` — Captain successfully registered.
- `400 Bad Request` — Validation failed or required fields are missing/invalid.
- `500 Internal Server Error` — Server error while processing the request.

### Request Body Format
The request body must be a JSON object in the following format:

```json
{
  "fullname": {
   "firstname": "Vatsal",
      "lastname": "Chaturvedi"
  },
     "email": "vatsal123@gmail.com",
    "password": "vatsal212",
    "status": "inactive",
    "vehicle": {
      "color": "black",
      "plate": "UP 24 AZ 6204",
      "capacity": "1",
      "vehicleType": "car"
  }
}
```

### Required Data
- `fullname.firstname` — Required
  - Minimum length: `3` characters
  - Example: `"Rahul"`
- `fullname.lastname` — Optional but recommended
  - Minimum length: `3` characters if provided
  - Example: `"Sharma"`
- `email` — Required
  - Must be a valid email address
  - Example: `"rahul@example.com"`
- `password` — Required
  - Minimum length: `6` characters
  - Example: `"123456"`
- `vehicle.color` — Required
  - Minimum length: `3` characters
- `vehicle.plate` — Required
  - Minimum length: `3` characters
- `vehicle.capacity` — Required
  - Must be an integer greater than or equal to `1`
- `vehicle.vehicleType` — Required
  - Allowed values: `car`, `motorcycle`, `auto`

### Validation Rules
- `email` must be a valid email format.
- `fullname.firstname` must be at least 3 characters long.
- `password` must be at least 6 characters long.
- `vehicle.color` must be at least 3 characters long.
- `vehicle.plate` must be at least 3 characters long.
- `vehicle.capacity` must be at least `1`.
- `vehicle.vehicleType` must be one of `car`, `motorcycle`, or `auto`.

### Example Request
```bash
curl -X POST http://localhost:4000/captains/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullname": {
      "firstname": "Rahul",
      "lastname": "Sharma"
    },
    "email": "rahul@example.com",
    "password": "123456",
    "vehicle": {
      "color": "Black",
      "plate": "DL01AB1234",
      "capacity": 4,
      "vehicleType": "car"
    }
  }'
```

### Example Success Response
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YWRhZjc1NDQ4YWQyMDQxMTYzYWY5NjciLCJpYXQiOjE3OTI3MzUwNjAsImV4cCI6MTc5MjgyMTQ2MH0.GTJH1izoi1atdOHkM7rlkxkmZkGlMlfW6eTupdYuJY0",
  "captain": {
    "fullname": {
      "firstname": "Vatsal",
      "lastname": "Chaturvedi"
    },
    "email": "vatsal123@gmail.com",
    "password": "$2b$10$4Il2lAFLur57SD.qT163f.0lbaTp1MUx47TZHIcUVkwPALx8XLh1S",
    "status": "inactive",
    "vehicle": {
      "color": "black",
      "plate": "UP 24 AZ 6204",
      "capacity": "1",
      "vehicleType": "car"
    },
    "_id": "6adaf75448ad2041163af967",
    "__v": 0
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
