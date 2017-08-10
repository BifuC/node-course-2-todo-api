/*
// Object destructuring (in ES6) 
var user = {name: 'Bob', age:25};
// The following destructures the 'user' object, 
// pulling the 'name' property out of it,
// and assigning its value to a variable called 'name'.
var {name} = user;
console.log(name);
*/

// const MongoClient = require('mongodb').MongoClient;
/* Using "Object destructuring" (see example above), we can pull the MongoClient poperty
// from the mongodb library, in addition to any other properties from mongodb (exa, ObjectID).*/
const {MongoClient, ObjectID} = require('mongodb');

// Using ObjectID from the mongodb library, we can create our own ObjectID's. 
/*var obj = new ObjectID();
console.log(obj);*/

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server.');

    // Find -- find returns MongoDB Cursor, which is a pointer to the documents.
    // use the Cursor method 'toArray' to get an array of documents.
    // toArray returns a promise.
    // db.collection('Todos').find({
    //     _id: new ObjectID('598bbef13e7ab22104a244b4')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos (documents).', err);
    // });

    // Count
    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count:${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos (documents).', err);
    // });

    db.collection('Users').find({name: 'Jim'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Failed to find docs.', err);
    });

    // db.close();
});