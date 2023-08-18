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
fs.mkdirSync("Ridsa");

//created new file bio.txt
fs.writeFileSync("Ridsa/bio.txt", "My name is ridsa.");

// added data at the end of existing data
fs.appendFileSync("Ridsa/bio.txt", " This is appended data.");

// read data without getting buffer data
const data = fs.readFileSync("Ridsa/bio.txt");
console.log(data.toString());

// rename file
fs.renameSync("Ridsa/bio.txt", "Ridsa/mybio.txt");

// delete file
fs.unlinkSync("Ridsa/mybio.txt");

// deleted folder
fs.rmdirSync("Ridsa");
