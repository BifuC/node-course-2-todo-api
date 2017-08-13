const mongoose = require('mongoose');

// Use promises instead of callbacks (default).
mongoose.Promise = global.Promise;

// Note that you can view all the environment variables from CMD, using "set | more".
// mongoose.connect('URI here', {useMongoClient:true});
mongoose.connect((process.env.MONGODB_URI) ? (process.env.MONGODB_URI) : 'mongodb://localhost:27017/TodoApp', {useMongoClient:true});

// if (process.env.MONGODB_URI) {
//     // Connect using "mongolab" cloud uri.
// } else {
//     mongoose.connect('mongodb://localhost:27017/TodoApp', {useMongoClient:true});
// }

module.exports = {mongoose};