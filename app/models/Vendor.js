/**
 * Created by ruchirapatil on 4/16/17.
 */


// grab the mongoose module
var mongoose = require('mongoose');

// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('vendor', {
    firstname: String,
    vendorType: String,
    vendorEvenType: String,
    email: String,
    mobile: String,
    description:String,
    imageName:String

});

