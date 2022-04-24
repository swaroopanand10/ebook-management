//jshint esversion:6
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const port = 5000

const app = express();
// app.use(cors())
// app.use(express.json())
mongoose.connect('mongodb://localhost:27017/ebook-management')

app.use('/api/register', require('./routes/register.js')) // app.listen(5000, function(){
//   console.log("server is running");
// });
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

