// Challenge # 1 :

// - create a new folder
// - create file in it named bio.txt and add data to it
// - add more data in the file at the end of existing data
// - read the file without getting buffer data
// - rename file to mybio.txt
// - now delete both file and folder

// CRUD : Create - Update - Read - Delete

const fs = require("fs");

// created new folder
fs.mkdir("challenge2/Ridsa", (err) => {
  console.log("folder is created");
});

// created new file bio.txt
fs.writeFile("challenge2/Ridsa/bio.txt", "My name is ridsa.", (err) => {
  console.log("file is created");
});
