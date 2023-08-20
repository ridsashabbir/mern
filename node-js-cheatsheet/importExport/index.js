// calling the function here which was made in operator.js
// we are importing modules in this file

// 1- access methos using dot
// const oper = require("./operator");

// console.log(oper.add(14, 6));
// console.log(oper.sub(14, 6));

// 2- access methods through object destructuring
const { add, sub, mul } = require("./operator");

console.log(add(14, 6));
console.log(sub(14, 6));
console.log(mul(10, 6));

// 3- you can change the order of passing arugtments too
// const { sub, add } = require("./operator");

// console.log(sub(4, 6));
// console.log(add(14, 6));
