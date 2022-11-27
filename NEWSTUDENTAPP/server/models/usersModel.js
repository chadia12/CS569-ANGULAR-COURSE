const mongoose = require('mongoose');
const{Schema}= mongoose;
const userSchema = new Schema({
    email: String,
    fullname: String,
    password:String,
    avatar:{type:String, default:'https://image.shutterstock.com/image-vector/user-sign-icon-person-symbol-260nw-229318795.jpg'} 
})
module.exports = mongoose.model('User',userSchema);