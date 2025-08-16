const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
    }catch(err){
        console.error('some issue in DataBase file :',err.message);
        process.exet(1)
    }
}

module.exports = connDB;