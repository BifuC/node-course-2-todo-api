var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

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
    // Use req.body to get the passed in body (exa., JSON) for this post request.
    // Note that you need to 'use' the 'body-parser' middleware above.
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

// GET - localhost:3000/todos/598f5c807069d50a205b8202
app.get('/todos/:id', (req, res) => {
    // req.params allows access to any passed in, request parameters.
    var id = req.params.id;

    if (!ObjectID.isValid(id)) {
        res.status(404).send();
    }

    Todo.findById(id).then((todo) => {
        if (!todo) {
            res.status(404).send();
        }
        res.status(200).send({todo: todo});

    //}).catch((e) => res.status(400).send());
    }, (e) => {
        res.status(400).send();
    })

});

app.listen(3000, () => {
    console.log('Started on port 3000');
});


