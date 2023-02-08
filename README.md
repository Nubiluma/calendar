# calendar

This app is an approach of a digital calendar, using vanilla JS and Node.js.

## Install mongoDB

The calendar uses a MongoDB database. This can be downloaded via the following script:

```
cd backend
npm run download-mongo
```

The mongo.zip must then be unpacked locally. Afterwards, the database can be started as described in 
the [instructions](https://www.npmjs.com/package/mongodb#user-content-start-a-mongodb-server):

```
cd backend/mongo/mongodb-win-32-x86_64-windows-6.0.4
.\mongod.exe --dbpath=./../../../data
```

After that, the mongodb runs on 127.0.0.1:27017.