const express = require('express');
const app = express();

// this will show what is the name of your file that you want to get
app.get('/' , (req, res) => {
    res.send(`Hello world from the server`);
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