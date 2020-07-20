const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
// const bodyParser = require('body-parser');

const app = express();

const PORT = process.env.PORT || 8080;

//Set up Mongoose connection
mongoose.connect('mongodb://localhost/students', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!');
});

//HTTP request logger
app.use(morgan('tiny'));

//Test to make sure server is running
app.get("/", (req,res) => {
    res.send("Hello World");
});

//Test api routes to make sure server is running
app.get('/api', (req, res) => {
    const data = {
        username: 'Dane',
        age: 35
    };
    res.json(data);
});

app.get('/api/name', (req, res) => {
    const data = {
        username: 'Taryn',
        age: 31
    };
    res.json(data);
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});