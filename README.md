# TaskManager
A basic task manager with CRUD services, user authenication build with Node.js. The data is managed with mongoDB and Mongoose. The app is integrated with user authetication.
 
## MongoDB Local Setup
1. Download [MongoDB](https://www.mongodb.com/download-center/community) to your user directory
2. Create new folder called "mongodb-data" in the same directory to store the data
3. Find your PATH name to the mongodb location
```
$ cd ~
$ pwd
```
4. Start up MongoDB
```
$ <PATH>/mongodb/bin/mongod --dbpath=<PATH>/mongodb-data
```

## Run Project Locally
```
$ npm install
$ npm run start
```
Or run the project with nodemon
```
$ npm run dev
```