// REPL
// 1- js expression
// 2- use variables
// 3- multiline code
// 4- use (_) to get the last result
// 5- we can use editor mode

const fs = require("fs");

// creating a new file
fs.writeFileSync("read.txt", "hello hello"); // it will give output as hello hello
fs.writeFileSync("read.txt", "i am ridsa shabbir"); // it will override the previous output and show the recent msg only
fs.appendFileSync("read.txt", "i am appending this data"); // it will append the data and won't override the previously present data
fs.appendFileSync("read.txt", "\nthis will shift output in new line"); // this will shift output in new line and append it with previous output

// read file
const data = fs.readFileSync("read.txt");
console.log(data); // it will print buffer data
original_data = data.toString(); // if you want to see the original data and not buffer data, use toString
console.log(original_data);
