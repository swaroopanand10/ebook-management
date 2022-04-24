//jshint esversion:6

const express = require("express")
const app = express();
const cors = require("cors")
const mongoose = require("mongoose")

app.use(cors())
app.use(express.json())

app.post("/api/register", function(req , res){
  console.log(req.body)
  res.json({status: 'ok'})

})
app.listen(5000, function(){
  console.log("server is running");
});


