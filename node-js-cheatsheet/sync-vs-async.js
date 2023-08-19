const fs = require("fs");

// read data of file in sync
const data = fs.readFileSync("fsAsync/read.txt");
console.log(data.toString());
console.log("after the data");

// read data of file in async
fs.readFile("fsAsync/read.txt", (err, data) => {
  console.log(data.toString());
  console.log(err);
});
console.log("after the data");
