const {Schema,model} = require("mongoose");

const item = new Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true
    },
    taste:{
        type:String,
        required:true,
        enum:["sweet","spicey","sware"]
    }
})

const Dish = model('item',item);
module.exports = Dish;