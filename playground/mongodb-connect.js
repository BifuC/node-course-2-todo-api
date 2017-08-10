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

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }

    //     // result is returned if things went well.
    //     // result.ops contains all of the documents (records) that were inserted.
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // Insert new doc into new Users collection (name, age, location)
    db.collection('Users').insertOne({
        name: 'Jim',
        age: 39,
        location: 'town'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert user', err);
        }

        // This will output the ObjectId for the document(record) inserted.
        //console.log(result.ops[0]._id);
        // This will output the timestamp in the ObjectId for the document(record) inserted.
        //console.log(result.ops[0]._id.getTimestamp());

    });

    db.close();
});