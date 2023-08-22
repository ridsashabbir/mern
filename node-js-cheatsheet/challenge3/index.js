// 1- convert object to JSON
// 2- add json data into another file
// 3- read file
// 4- convert json to object'
// 5- console.log

const fs = require("fs");

// 1- convert object to JSON
const bioData = {
  name: "Ridsa",
  age: 21,
  gender: "female",
};
const jsonData = JSON.stringify(bioData);
console.log(jsonData);

// 2- add json data into another file
fs.writeFile("json1.json", jsonData, (err) => {
  console.log("data added");
  console.log(err);
});
