const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log(`Unable to connect to database ${db}`);
    }
    console.log('Connect to database.');
    
    // db.collection('Todos').deleteMany({text:'Something to do'}).then((result) => {
    //     console.log(result);
    // });

    // db.deleteOne();
    // db.collection('Todos').deleteOne({text: 'walk the cat'}).then((result) => {
    //     console.log(result);
    // });

    // db.findOneAndDelete();
    // db.collection('Todos').findOneAndDelete({completed:false}).then((result) => {
    //     console.log(result);
    // });    

    db.collection('Users').deleteMany({name: 'Jim'}).then((result) => {
        console.log(result);
    });

    // db.collection('Users').findOneAndDelete({_id: new ObjectID('598bc3b49f46ff054401e104')}).then((result) => {
    //     console.log(result);
    // });

        //db.close();
});
