const mongoose = require('mongoose');

// Use promises instead of callbacks (default).
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

// Define a model.
var Todo = mongoose.model('Todo', 
{
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

var newTodo = new Todo({
    text: 'Cook Dinner'
});

var otherTodo = new Todo({
    text: 'Something Todo',
    completed: true,
    completedAt: 5
});

newTodo.save().then((doc) => {
    console.log('Save todo', doc);
}, (e) => {
    console.log('Unable to Save');
});

otherTodo.save().then((doc) => {
    console.log('Saved todo', doc);
}, (e) => {
    console.log('Error saving');
});
