var mongoose = require('mongoose');

var User = mongoose.model('User', {
    email: {
        type :String,
        required: true,
        trim: true,
        minlength: 1
    }
});

// Example usage.
// var user = new User({
//     email: 'bob@gmail.com'
// });

// user.save().then((doc) => {
//     console.log('Successfully saved', doc);
// }, (e) => {
//     console.log('Failed', e);
// });

module.exports = {User};
