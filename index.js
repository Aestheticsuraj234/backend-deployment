const express = require("express");

const app = express();



app.get("/" , (req , res)=>{
    res.send("Hello i am deployed")
})

app.listen(8080 , ()=>{
    console.log("Backend is Connected🐇")
})