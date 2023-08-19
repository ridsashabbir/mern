const path = require("path");

// right click on your file name, copy path and replace backward slash to forward slash
console.log(path.dirname("D:/mern/node-js-cheatsheet/PathModule/pathmod.js"));
console.log(path.extname("D:/mern/node-js-cheatsheet/PathModule/pathmod.js"));
console.log(path.basename("D:/mern/node-js-cheatsheet/PathModule/pathmod.js"));
console.log(path.parse("D:/mern/node-js-cheatsheet/PathModule/pathmod.js"));

const myPath = path.parse("D:/mern/node-js-cheatsheet/PathModule/pathmod.js");
console.log(myPath.root);
