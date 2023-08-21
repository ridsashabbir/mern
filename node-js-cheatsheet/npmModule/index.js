const chalk = require("chalk");
const validator = require("validator");

console.log(chalk.blue("Hello world!"));
console.log(validator.isEmail("ridsa@gmail.com"));
console.log(validator.isEmail("ridsa.gmail.com"));
