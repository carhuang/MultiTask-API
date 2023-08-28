# MultiTask
A basic task manager web REST API providing CRUD services on task and user data stored in MongoDB. The API is built with Express.js and runs on Node.js. The task and user data is managed with MongoDB and Mongoose.\
The app is deployed on Heroku, and the database is hosted in the cloud with AWS using [MongoDB Atlas](https://www.mongodb.com/cloud/atlas). Check out the [**API Documentation**](./doc/API.md) for the features of MultiTask. 


## MongoDB Local Setup (for Linux and macOS)
1. Download [MongoDB Community Server](https://www.mongodb.com/try/download/community). Select the current MongoDB version, your host operating system, and `.tgz` package.
2. Extract the files from the downloaded archieve to your user home directory and rename the MongoDB folder `mongodb`.
3. Create a new folder called `mongodb-data` in the same directory to store the data.
4. Find your PATH name to the mongodb location, which is your user home directory:
```
$ cd ~; pwd
```
1. Start up MongoDB
```
$ <PATH>/mongodb/bin/mongod --dbpath=<PATH>/mongodb-data
```

## Manage data with MongoDB GUI
1. Download [MongoDB Compass](https://www.mongodb.com/products/compass) Community Edition.
2. Create a new connection with
```
Hostname: localhost
Port: 27017
```

## Manage data with MongoDB Shell
1. Install [mongosh](https://www.mongodb.com/docs/mongodb-shell/install/).
2. Connect to a MongoDB deployment running on localhost with default port 27017 with:
```
$ mongosh
```

## Run Project Locally
1. Install node modules
```
$ npm ci
```
2. Sign up and get [EmailAPI key](https://app.sendgrid.com/guide/integrate/langs/nodejs) from [SendGrid](https://signup.sendgrid.com/)
3. Create a new folder `/config` in the root folder and add a new file named `dev.env` into the folder. This folder is going to store the environment variables.
4. Paste below code to `dev.env`, changing the values of SendGrid API key, the jwt secret key, and email. The jwt key can be set to any random string. The email will be used as the sender of the welcome and cancellation emails.
```
PORT=3000
SENDGRID_API_KEY=<Your email API key from step #2>
JWT_SECRET=<Your JWT secret key>
MONGODB_URL=mongodb://127.0.0.1:27017/task-manager-api
EMAIL=<Your email address>
```
5. Run the app. Make sure MongoDB is up and running as well.
```
$ npm run dev
```


## Run Jest Unit Tests
1. Create a new file `test.env` in the `/config` folder. The content would be the same as the content in `dev.env` but with one change for the variable `MONGODB_URL` to create a separate test database.
```
PORT=3000
SENDGRID_API_KEY=<Your email API key from step #2>
JWT_SECRET=<Your JWT secret key>
MONGODB_URL=mongodb://127.0.0.1:27017/task-manager-api-test
EMAIL=<Your email address>
```
2. Run tests in the `/tests` folder
```
$ npm test
```


## Test app with Postman
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/a1ed895918d6bb7f0687)