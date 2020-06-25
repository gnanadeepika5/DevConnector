const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose= require('mongoose');
const User = mongoose.model('users');
const keys = require('../config/keys');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();//passport can look for token in authorization header as a bearer token
opts.secretOrKey = keys.secretOrKey;
//decode token
module.exports = passport =>{
passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
  console.log(jwt_payload);}
  )
  )//take both keys.
}





// const JwtStrategy = require('passport-jwt').Strategy;
// const ExtractJwt = require('passport-jwt').ExtractJwt;
// const mongoose= require('mongoose');
// const User = mongoose.model('users');
// const keys = require('../config/keys');

// const opts = {};
// opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
// opts.secretOrKey = keys.secretOrKey;

// module.exports = passport => {
//   passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
//     console.log(jwt_payload);
//   }))
// }