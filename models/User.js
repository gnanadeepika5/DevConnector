// const mongoose = require('mongoose');
// const schema = mongoose.Schema;


// //create schema

// const UserSchema = new schema({
//   name: {
//     type : String,
//     required : true
//   },
//   email:{
//     type:string,
//     required: true
//   },

//   password:
//   {
//     type : string,
//     required: true
//   },
//   avatar:
//   {
//     type: string,
//     required:false
//   },
//   date:
//   {
//     type:Date,
//     defualt: Date.now
//   }


// });
// module.exports = User = mongoose.model('users', UserSchema);  // 'users' is model name in mongodb. this can be any name of your interest. user is the internal name of this model which can be exported 




const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model('users', UserSchema);