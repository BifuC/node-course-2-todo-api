const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

/*var id = '598f5c807069d50a205b8202';

if (!ObjectID.isValid(id)) {
    console.log('ID not valid');
}*/

// Mongoose is smart enough to convert the 'id' variable into a 'new ObjectID(id).
/*Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos', todos);
});

// This will only get the first match.
Todo.findOne({text: 'Trimmed test'}).then((todo) => {
    console.log('Todo', todo);
});

// Note that we need to check for a 'null' todo within the 'then', since 'findById'
// will always be resolved with either a 'todo' or null.
// 'catch' below adds a callback that is only called in the Promise's reject case.  
Todo.findById(id).then((todo) => {
    if (!todo) {
        return console.log('id not found');
    }
    console.log('Todo by id', todo);
}).catch((e) => console.log(e));*/


var challengeId = '598f611cdfce311a90edc6b7';
User.findById(challengeId).then((user) => {
    if (!user) {
        return console.log('id not found');
    }
    console.log('User by id', user);
}).catch((e) => console.log('e'));