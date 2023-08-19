const fs = require("fs");

// create a file in async
fs.writeFile("fsAsync/read.txt", "i am in the file ", (err) => {
  console.log("file is created");
});
