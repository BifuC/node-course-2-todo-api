const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log(`Unable to connect to database ${db}`);
    }
    console.log('Connect to database.');
    
    // To see the various update operators:
    // https://docs.mongodb.com/manual/reference/operator/update/
    // db.collection('Todos').findOneAndUpdate({_id: new ObjectID("598f0e63fa304580c8146245")
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // },
    // {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    //Update 'name' to 'Julie' and increments the 'age' of 'Julie'.
    db.collection('Users').findOneAndUpdate({_id: new ObjectID('598bc1c256ac9f2370f40b9d')
    }, {
        $set: { name: 'Julie' },
        $inc: { age: 1 }
    },
    { returnOriginal: false}).then((result) => {
        console.log(result);
    });

    //db.close();
});
