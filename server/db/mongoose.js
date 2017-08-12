const mongoose = require('mongoose');

// Use promises instead of callbacks (default).
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};