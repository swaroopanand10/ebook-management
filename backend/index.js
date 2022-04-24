//jshint esversion:6
const express = require("express")
const app = express();
const cors = require('cors')
const mongoose = require('mongoose')
const port = 5000

app.use(cors())
app.use(express.json())

app.get('/api/register', (req, res) => {
  res.send('Hello World!')
})


app.post("/api/register", function(req , res){
  console.log(req.body)
  res.json({status: 'ok'})
})

// app.listen(5000, function(){
//   console.log("server is running");
// });
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

