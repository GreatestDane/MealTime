const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
// const bodyParser = require('body-parser');

const app = express();

const PORT = process.env.PORT || 8080;


//URI to connect server to MongoDB Atlas
const MONGODB_URI = 'mongodb+srv://DaneGoodman:<Irvine000>@recipesdb.bqo2e.mongodb.net/<dbname>?retryWrites=true&w=majority'

//Set up Mongoose connection
mongoose.connect(MONGODB_URI || 'mongodb://localhost/recipes', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!');
});

//Setup Schema for mongoose
const Schema = mongoose.Schema;
const BlogPostSchema = new Schema({
    title: String,
    body: String,
    date: {
        type: String,
        default: Date.now()
    }
});

//Model
const BlogPost = mongoose.model('BlogPost', BlogPostSchema);

//Saving data to our Mongo Database
const data = {
    title: "First instance to DB",
    body: "This is a trial run before I build the recipe schema"
};

// .save()
const newBlogPost = new BlogPost(data); //instance of the model

newBlogPost.save((error) => {
    if(error) {
        console.log('OOPS! There has been an error');
    }
    else {
        console.log('Data has been saved!')
    }
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