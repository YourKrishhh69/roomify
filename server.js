//import some npm for creating basic server
const express = require("express");
const app = express();
const PORT = 3000;


app.listen(PORT,(err)=>{
    if(err){
        console.log(`internal server isssue : ${err}`);
    }
})