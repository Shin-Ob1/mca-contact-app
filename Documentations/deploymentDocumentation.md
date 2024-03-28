# Deployment Documentation

## Local Deployment

1. Clone the repository:

***bash code***
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
4. Start the server:

***bash***
```
npm start
```
5. Access the API endpoints as described in the API documentation.

## Deployment to Heroku
1. Create a Heroku account and install the Heroku CLI.

2. Log in to Heroku CLI:

***bash***
```
heroku login
```
3. Create a new Heroku app:

***bash***
```
heroku create
```
4. Set the environment variables in Heroku:

***bash***
```
heroku config:set PORT=5001 CONNECTION_STRING
```