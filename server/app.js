const dotenv = require('dotenv');
//const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({path:'./config.env'});
require('./db/conn');

app.use(express.json());


//const User = require('./model/userSchema');

app.use(require('./router/auth'));

const PORT = process.env.PORT;



//middle for validation if any then go to that content
const middleware = (req,res,next) => {
    next();
}

app.get('/', (req,res) => {
    res.send(`Hello MERN World Arvind`);
});

// app.get('/about',middleware, (req,res) => {
//     res.send(`Hello MERN World about`);
// })

// app.get('/contact', (req,res) => {
//     res.send(`Hello MERN World contact`);
// })

// app.get('/signin', (req,res) => {
//     res.send(`Hello MERN World signin`);
// })

// app.get('/signup', (req,res) => {
//     res.send(`Hello MERN World signup`);
// })

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
})