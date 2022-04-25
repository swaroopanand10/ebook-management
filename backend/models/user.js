const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema({
  fname: { type: String, required:true },
  email: { type: String, required:true, unique:true },
  password: { type: String, required:true },
}
) 
const User = mongoose.model('UserData', UserSchema)
User.createIndexes();
module.exports = User
