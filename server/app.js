const dotenv = require('dotenv');
const express = require('express');
const app = express();

dotenv.config({path:'./config.env'});
require('./db/conn');

app.use(express.json());
app.use(require('./router/auth'));

const PORT = process.env.PORT;

//middle for validation if any then go to that content
const middleware = (req,res,next) => {
    next();
}

app.get('/', (req,res) => {
    res.send(``);
});

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
})