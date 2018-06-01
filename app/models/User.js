/**
 * Created by ruchirapatil on 4/10/17.
 */

// grab the mongoose module
var mongoose = require('mongoose');

// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('users', {
    firstname: String,
    lastname: String,
    email: String,
    username: String,
    password: String,
    mobile: String,
    usertype:String

});
