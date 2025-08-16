const {Schema,model} = require("mongoose");

const newUser = new Schema({
    name:{
        type:String,
        required:true
    },
    gmail:{
        type:String,
        required:true,
        unique: true
    },
    location:{
        type:String,
        required:true,
        enum:["delhi","noida","mumbai","goa"]

    },
    Username:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    }
})

const NewUser = model('user',newUser);
module.exports = NewUser;