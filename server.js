const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const passport = require('passport');

const users = require('./routes/api/users');
const posts = require('./routes/api/posts');
const profile = require('./routes/api/profile');
const app = express();

//Body parser configuration
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

//passport configuration
app.use(passport.initialize());
require('./config/passportfile')(passport);//execute passport within passportfile(calling "passportfile" and executing passport with in that)

//Db config
const db = require('./config/keys').mongoURI;

//Connect to mongodb
mongoose
  .connect(db)
  .then(() => console.log('Mongodb connected'))
  .catch(err => console.log(err));

//Let's write our first route
app.get('/', (req, res)=> res.send('Hello'));

//Use routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
