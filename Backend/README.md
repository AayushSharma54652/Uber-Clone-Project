# User Registration Endpoint

## POST /users/register

### Description
This endpoint is used to register a new user. It requires the user's first name, last name, email, and password.

### Request Body
The request body should be a JSON object containing the following fields:
- `fullname`: An object containing:
  - `firstname`: The user's first name (minimum 3 characters).
  - `lastname`: The user's last name (minimum 3 characters, optional).
- `email`: The user's email address (must be a valid email).
- `password`: The user's password (minimum 6 characters).

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses

#### Success
- **Status Code**: `201 Created`
- **Response Body**: A JSON object containing the newly created user and an authentication token.

Example:
```json
{
  "user": {
    "_id": "60c72b2f9b1e8b001c8e4d3b",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

#### Validation Errors
- **Status Code**: `400 Bad Request`
- **Response Body**: A JSON object containing an array of validation errors.

Example:
```json
{
  "errors": [
    {
      "msg": "Email is not valid",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

#### Missing Fields
- **Status Code**: `400 Bad Request`
- **Response Body**: A JSON object containing an error message indicating that all fields are required.

Example:
```json
{
  "error": "All fields are required"
}
```

# User Profile Endpoint

## GET /users/profile

### Description
This endpoint is used to retrieve the profile of the authenticated user.

### Responses

#### Success
- **Status Code**: `200 OK`
- **Response Body**: A JSON object containing the user's profile information.

Example:
```json
{
  "_id": "60c72b2f9b1e8b001c8e4d3b",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com"
}
```

#### Unauthorized
- **Status Code**: `401 Unauthorized`
- **Response Body**: A JSON object containing an error message indicating that the user is not authenticated.

Example:
```json
{
  "error": "Unauthorized"
}
```

# User Logout Endpoint

## GET /users/logout

### Description
This endpoint is used to log out the authenticated user.

### Responses

#### Success
- **Status Code**: `200 OK`
- **Response Body**: A JSON object containing a message indicating that the logout was successful.

Example:
```json
{
  "message": "Logout successful"
}
```

#### Unauthorized
- **Status Code**: `401 Unauthorized`
- **Response Body**: A JSON object containing an error message indicating that the user is not authenticated.

Example:
```json
{
  "error": "Unauthorized"
}
```

# Captain Registration Endpoint

## POST /captains/register

### Description
This endpoint is used to register a new captain. It requires the captain's first name, last name, email, password, and vehicle details.

### Request Body
The request body should be a JSON object containing the following fields:
- `fullname`: An object containing:
  - `firstname`: The captain's first name (minimum 3 characters).
  - `lastname`: The captain's last name (minimum 3 characters, optional).
- `email`: The captain's email address (must be a valid email).
- `password`: The captain's password (minimum 6 characters).
- `vehicle`: An object containing:
  - `color`: The vehicle's color (minimum 3 characters).
  - `plate`: The vehicle's plate number (minimum 3 characters).
  - `capacity`: The vehicle's capacity (minimum 1).
  - `vehicleType`: The type of vehicle (must be one of 'car', 'motorcycle', 'auto').

Example:
```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane.doe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "red",
    "plate": "XYZ123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

### Responses

#### Success
- **Status Code**: `201 Created`
- **Response Body**: A JSON object containing the newly created captain and an authentication token.

Example:
```json
{
  "captain": {
    "_id": "60c72b2f9b1e8b001c8e4d3b",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane.doe@example.com",
    "vehicle": {
      "color": "red",
      "plate": "XYZ123",
      "capacity": 4,
      "vehicleType": "car"
    }
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

#### Validation Errors
- **Status Code**: `400 Bad Request`
- **Response Body**: A JSON object containing an array of validation errors.

Example:
```json
{
  "errors": [
    {
      "msg": "Email is not valid",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    },
    {
      "msg": "Color must be at least 3 characters long",
      "param": "vehicle.color",
      "location": "body"
    },
    {
      "msg": "Plate must be at least 3 characters long",
      "param": "vehicle.plate",
      "location": "body"
    },
    {
      "msg": "Capacity must be at least 1",
      "param": "vehicle.capacity",
      "location": "body"
    },
    {
      "msg": "Invalid vehicle type",
      "param": "vehicle.vehicleType",
      "location": "body"
    }
  ]
}
```

#### Missing Fields
- **Status Code**: `400 Bad Request`
- **Response Body**: A JSON object containing an error message indicating that all fields are required.

Example:
```json
{
  "error": "All fields are required"
}
```
