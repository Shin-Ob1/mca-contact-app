# MCA Contacts Backend API
This is an Express.js project for managing contacts, with authentication using JWT. The project provides APIs for registering users, logging in, managing contacts, and retrieving current user information.

## Installation
1. Clone the repository:

***bash***
```
git clone https://github.com/yourusername/mcacontacts-backend-api.git
```

2. Install dependencies:

***bash***
```
cd mcacontacts-backend-api
npm install
```

3. Set up environment variables:

Create a .env file in the root directory and add the following:

***plaintext***
```
PORT=5001
CONNECTION_STRING=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/mcacontacts-backend?retryWrites=true&w=majority&appName=<appname>
ACCESS_TOKEN_SECRET=your_secret_key
```
Replace <username>, <password>, <cluster>, <appname>, and your_secret_key with your MongoDB credentials and access token secret.

## Usage
1. Start the server:

***bash***
```
npm start
```
2. Access the API endpoints:

- Register a user: POST /api/users/register
- Login: POST /api/users/login
- Get current user: GET /api/users/current
- Get all contacts: GET /api/contacts
- Create a contact: POST /api/contacts
- Get a contact: GET /api/contacts/:id
- Update a contact: PUT /api/contacts/:id
- Delete a contact: DELETE /api/contacts/:id

## API Documentation
### Register a User
- **URL: /api/users/register**
- **Method: POST**
- **Request Body:**
***json***
```
{
  "username": "username",
  "email": "email@example.com",
  "password": "password"
}
```
- **Response:**
***json***
```
{
  "_id": "user_id",
  "email": "email@example.com"
}
```

## Login
- **URL: /api/users/login**
- **Method: POST**
- **Request Body:**
***json***
```
{
  "email": "email@example.com",
  "password": "password"
}
```
- **Response:**
***json***
```
{
  "accessToken": "jwt_token"
}
```

## Get Current User
- **URL: /api/users/current**
- **Method: GET**
- **Authorization: Bearer jwt_token**

## Get All Contacts
- **URL: /api/contacts**
- **Method: GET**
- **Authorization: Bearer jwt_token**

## Create a Contact
- **URL: /api/contacts**
- **Method: POST**
- **Authorization: Bearer jwt_token**
- **Request Body:**
***json***
```
{
  "name": "contact_name",
  "phone": "contact_phone",
  "dateofbirth": "contact_dateofbirth",
  "email": "contact_email",
  "address": "contact_address"
}
```

## Get a Contact
- **URL: /api/contacts/:id**
- **Method: GET**
- **Authorization: Bearer jwt_token**

## Update a Contact
- **URL: /api/contacts/:id**
- **Method: PUT**
- **Authorization: Bearer jwt_token**
- **Request Body: Any contact field to update**

## Delete a Contact
- **URL: /api/contacts/:id**
- **Method: DELETE**
- **Authorization: Bearer jwt_token**

## Error Handling
- Validation errors: 400 status code
- Not found errors: 404 status code
- Unauthorized errors: 401 status code
- Forbidden errors: 403 status code
- Server errors: 500 status code

## Dependencies
- bcrypt: ^5.1.1
- dotenv: ^16.4.5
- express: ^4.18.3
- express-async-handler: ^1.2.0
- jsonwebtoken: ^9.0.2
- mongoose: ^8.2.2
- nodemon: ^3.1.0

## License
This project is licensed under the MIT License. See the LICENSE file for details.
---
© 2024 Obinna Ukwa






