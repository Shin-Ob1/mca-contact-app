# API Documentation

## Register a User
- **URL: /api/users/register**
- **Method: POST**
- **Description: Register a new user**
- **Request Body:**
***json***
```
{
  "username": "string",
  "email": "string",
  "password": "string"
}
```
- **Respons:**
- Status: 201
- Body:
***json***
```
{
  "_id": "string",
  "email": "string"
}
```

## Login
- **URL: /api/users/login**
- **Method: POST**
- **Description: Login an existing user**
- **Request Body:**
***json***
```
{
  "email": "string",
  "password": "string"
}
```
- **Response:**
- Status: 200
- Body:
***json***
```
{
  "accessToken": "string"
}
```

## Get Current User
- **URL: /api/users/current**
- **Method: GET**
- **Description:** Get current user information
- **Authorization:** Bearer <accessToken>
- **Response:**
- Status: 200
- Body:
***json***
```
{
  "username": "string",
  "email": "string",
  "id": "string"
}
```

## Get All Contacts
- **URL: /api/contacts**
- **Method: GET**
- **Description:** Get all contacts for the current user
- **Authorization:** Bearer <accessToken>
- **Response:**
- Status: 200
- Body: Array of contact objects

## Create a Contact
- **URL: /api/contacts**
- **Method: POST**
- **Description:** Create a new contact
- **Authorization:** Bearer <accessToken>
- **Request Body:**
***json***
```
{
  "name": "string",
  "phone": "string",
  "dateofbirth": "string",
  "email": "string",
  "address": "string"
}
```

## Response:
- Status: 201
- Body: Created contact object

## Get a Contact
- **URL: /api/contacts/:id**
- **Method: GET**
- **Description:** Get a contact by ID
- **Authorization:** Bearer <accessToken>
- **Response:**
- Status: 200
- Body: Contact object

## Update a Contact
- **URL: /api/contacts/:id**
- **Method: PUT**
- **Description:** Update a contact by ID
- **Authorization:** Bearer <accessToken>
- **Request Body:** Any contact field to update
- **Response:**
- Status: 200
- Body: Updated contact object

## Delete a Contact
- **URL: /api/contacts/:id**
- **Method: DELETE**
- **Description:** Delete a contact by ID
- **Authorization:** Bearer <accessToken>
- **Response:**
- Status: 200
- Body: { "Deleted": contact }

## Readme File
### Project Structure
- **dbconnection.js:** Connects to the MongoDB database.
- **contactcontroller.js:** Contains CRUD operations for contacts.
- **usercontroller.js:** Contains user registration, login, and current user information.
- **contactmodel.js:** Defines the contact schema.
- **usermodel.js:** Defines the user schema.
- **contactroutes.js:** Defines routes for contact-related operations.
- **userroutes.js:** Defines routes for user-related operations.
- **server.js:** Entry point of the application.
- **constants.js:** Defines error constants.
- **validatetokenhandler.js:** Middleware to validate JWT token.
- **errorhandler.js:** Handles different types of errors.

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

Create a **.env** file in the root directory and add the following:

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
2. Access the API endpoints as described in the API documentation.

## Dependencies
- **bcrypt:** ^5.1.1
- **dotenv:** ^16.4.5
- **express:** ^4.18.3
- **express-async-handler:** ^1.2.0
- **jsonwebtoken:** ^9.0.2
- **mongoose:** ^8.2.2
- **nodemon:** ^3.1.0

## License
This project is licensed under the MIT License.