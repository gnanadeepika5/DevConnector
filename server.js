// const express = require('express');
// const mongoose = require('mongoose');
// const bodyparser = require('body-parser');
// const users = require('./routes/api/users');
// const profile = require('./routes/api/profile');
// const posts = require('./routes/api/posts');
// const app = express();

// //body parserconfiguration
// app.use(bodyparser.urlencoded({extended:false}));
// app.use(bodyparser.json());

// //getting connection string from keys.js in config folder and giving to db constant variable.
// const db = require('./config/keys').mongoURI;

// //now connecting application to db using connection string got above
// mongoose
//     .connect(db)
//     .then(() => console.log('MongoDB connected successfully'))
//     .catch(err => console.log(err));

// //first route(testing route)
// // app.get('/', (req,res)=> res.send('hello world'));
// // set up all routes so that code in other routes get linked to server to run and display in application browser
// app.use('/api/users', users);
// app.use('/api/profile', profile);
// app.use('/api/posts', posts);

// const port = 5000;
// app.listen(port, () => console.log(`server running on port ${port}`));



const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const users = require('./routes/api/users');
const posts = require('./routes/api/posts');
const profile = require('./routes/api/profile');
const app = express();

//Body parser configuration
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

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
