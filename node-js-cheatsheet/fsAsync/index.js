const fs = require("fs");

// create a file in async
fs.writeFile("fsAsync/read.txt", "i am in the file ", (err) => {
  console.log("file is created");
  console.log(err);
});

// append data after existing data in file
fs.appendFile("fsAsync/read.txt", " I am appended data", (err) => {
  console.log("data is appended");
  console.log(err);
});
