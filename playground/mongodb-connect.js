const MongoClient = require('mongodb').MongoClient;

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

        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    db.close();
});