const express = require('express');
const app = express();


// middleware
const middleware = (req, res, next) => {
    console.log('This is my middleware');
    next(); // without calling this, it will take alot of time in loading
}

// call this function in about page
// middleware();


// this will show what is the name of your file that you want to get
app.get('/' , (req, res) => {
    res.send(`Hello world from the server`);
})

// run it on browser by typing localhost:3000/about
app.get('/about' , middleware , (req, res) => {
    res.send(`About page from the server`);
})

// run it on browser by typing localhost:3000/contact
app.get('/contact' , (req, res) => {
    res.send(`Contact page from the server`);
})

// run it on browser by typing localhost:3000/signin
app.get('/signin' , (req, res) => {
    res.send(`login page from the server`);
})

// run it on browser by typing localhost:3000/signup
app.get('/signup' , (req, res) => {
    res.send(`sign up page from the server`);
})

// that's how nodemon can make it easy to run your file. 
// you have no need to run it again and again, 
// nodemon will show the latest output itself as it's installed globally.
console.log('Hello World')
console.log('Hello Ridsa')

// type localhost:3000 in chrome to verify whether the server is running or not
app.listen(3000, () => {
    console.log('Server is running at port no 3000')
})