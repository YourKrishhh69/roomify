//import some npm for creating basic server
const express = require("express");
const app = express();
const PORT = 3000;

app.get('/',(req,res)=>{
    res.status(200).send('Welcome to our Spa center All service Avilable 😋');
})

app.listen(PORT,(err)=>{
    if(err){
        console.log(`internal server isssue : ${err}`);
    }
})