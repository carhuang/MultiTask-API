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
3. Common commands for testing this project:
   1. List all databases: `$ show dbs`
   2. Switch the database: `$ use <database>`
   3. Show all collections in the current database: `$ show collections`
   4. Retrieve all documents in the specified collection: `$ db.<collection>.find()`
   5. Delete all documents in the specified collection: ` $ db.<collection>.deleteMany({})`
   6. Delete one document in the collection with the specified condition: `db.<collection>.deleteOne( { name: "Brad Pitt" } )` 


## Run Project Locally
1. Install node modules
```
$ npm install
```
2. Install `nodemon` globally
```
$ npm install nodemon -g
```
3. Sign up and get [EmailAPI key](https://app.sendgrid.com/guide/integrate/langs/nodejs) from [SendGrid](https://signup.sendgrid.com/)
4. Create a new folder `/config` in the root folder and add a new file named `dev.env` into the folder. This folder is going to store the environment variables.
5. Paste below code to `dev.env`, changing the values of SendGrid API key, the jwt secret key, and email. The jwt key can be set to any random string. The email will be used as the sender of the welcome and cancellation emails.
```
PORT=3000
SENDGRID_API_KEY=<Your email API key from step #2>
JWT_SECRET=<Your JWT secret key>
MONGODB_URL=mongodb://127.0.0.1:27017/task-manager-api
EMAIL=<Your verified SendGrid sender email address>
```
6. Run the app. Make sure MongoDB is up and running as well.
```
$ npm run dev
```


## Run Jest Unit Tests
1. Create a new file `test.env` in the `/config` folder. The content would be the same as the content in `dev.env` but with a different variable `MONGODB_URL` to create a separate test database and an additional variable `USER_EMAIL` to test email sending with SendGrid.
```
PORT=3000
SENDGRID_API_KEY=<Your email API key from step #2>
JWT_SECRET=<Your JWT secret key>
MONGODB_URL=mongodb://127.0.0.1:27017/task-manager-api-test
EMAIL=<Your verified SendGrid sender email address>
USER_EMAIL=<Another email address for receieving welcome/goodbye emails>
```
2. Run tests in the `/tests` folder
```
$ npm test
```

## Test app with REST Client
If you are using VSCode, you can install the REST Client extension to do manual testing. The `manual.http` file in the test folder contains some tests for the API.
Read the REST Client [user guide](https://github.com/Huachao/vscode-restclient) for more information on test configurations.


## Test app with Postman
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/a1ed895918d6bb7f0687)


## Run Project in Docker
The files `.dockerignore`, `Dockerfile`, and `compose.yaml` are used to create Docker containers for this app. You will need to install Docker in your computer system.
1.  Change `MONGODB_URL` in `dev.env` and `test.env` to `mongodb://mngo:27017/task-manager-api` and `mongodb://mongo:27017/task-manager-api-test`.
2.  Run `$ docker compose up -d` in the `/Multitask` project directory to run the web and mongo services in detached mode.
3.  You can then run the Jest tests inside the Docker container by:
    ```
    $ docker ps
    ```
    to see the list of current running Docker containers.
    ```
    $ docker exec -it <CONTAINER ID OF multitask-api-web> bash
    ```
    to run commands in the multitask-api-web container.
    ```
    $ npm test
    ```
   to execute the Jest test suites inside the multitask-api-web container.
4. Stop the running services with `$ docker compose down`.
5. If code has been changed, run `$ docker compose build --no-cache` to rebuild the Docker image. Use `$ docker rmi <docker image id>` to remove unwanted Docker images.