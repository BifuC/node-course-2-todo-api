const mongoose = require('mongoose');

// Use promises instead of callbacks (default).
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

// Define a model.
var Todo = mongoose.model('Todo', 
{
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

// var newTodo = new Todo({
//     text: 'Cook Dinner'
// });

var otherTodo = new Todo({
    text: ' Trimmed test   '
});

// newTodo.save().then((doc) => {
//     console.log('Save todo', doc);
// }, (e) => {
//     console.log('Unable to Save');
// });

// otherTodo.save().then((doc) => {
//     console.log('Saved todo', doc);
// }, (e) => {
//     console.log('Error saving', e);
// });

var User = mongoose.model('User', {
    email: {
        type :String,
        required: true,
        trim: true,
        minlength: 1
    }
});

var user = new User({
    email: 'bob@gmail.com'
});

user.save().then((doc) => {
    console.log('Successfully saved', doc);
}, (e) => {
    console.log('Failed', e);
});
