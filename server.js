const express = require('express');
const mongoose = require('mongoose');
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');
const app = express();

//getting connection string from keys.js in config folder and giving to db constant variable.
const db = require('./config/keys').mongoURI;

//now connecting application to db using connection string got above
mongoose
    .connect(db)
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.log(err));

//first route(testing route)
app.get('/', (req,res)=> res.send('hello world'));
// set up all routes so that code in other routes get linked to server to run and display in application browser
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = 5000;
app.listen(port, () => console.log(`server running on port ${port}`));

