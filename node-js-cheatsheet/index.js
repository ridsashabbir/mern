// REPL
// 1- js expression
// 2- use variables
// 3- multiline code
// 4- use (_) to get the last result
// 5- we can use editor mode

const fs = require("fs");

// creating a new file
fs.writeFileSync("read.txt", "i am ridsa shabbir");
fs.writeFileSync("read.txt", "hello world, i am ridsa shabbir ");
fs.appendFileSync("read.txt", "i am appending this data");
