const express = require("express");
const app = express();

app.get("/",(req , res)=>{
  res.end("wellcome to my home page");
});

app.listen(3000 , ()=>{
    console.log("localhost")
})