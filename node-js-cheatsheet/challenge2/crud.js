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

// added data at the end of existing data
fs.appendFile("challenge2/Ridsa/bio.txt", " This is appended data.", (err) => {
  console.log("data is appended");
});

// read data without getting buffer data
fs.readFile("challenge2/Ridsa/bio.txt", (err, data) => {
  console.log(data.toString());
  console.log(err);
});
