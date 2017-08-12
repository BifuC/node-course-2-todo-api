var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

// POST - localhost:3000/todos
// {
// 	"text": "A test todo post from postman"
// }
app.post('/todos', (req, res) => {
    var todo = new Todo({text: req.body.text, completed: req.body.completed})
    todo.save().then((todo) => {
        res.status(200).send(todo);
    }, (e) => {
        res.status(400).send(e);
    });
    // console.log(req.body);
});

// GET - localhost:3000/todos
app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        //res.status(200).send('Made it here');
        res.send({
            todos: todos //or just todos in ES6
        });
    }, (e) => {
        res.status(400).send(e);
    });
});

// GET - localhost:3000/users
app.get('/users', (req, res) => {
    User.find().then((users) => {
        //res.status(200).send('Made it here');
        res.send({
            users: users //or just todos in ES6
        });
    }, (e) => {
        res.status(400).send(e);
    });
});

app.listen(3000, () => {
    console.log('Started on port 3000');
});


