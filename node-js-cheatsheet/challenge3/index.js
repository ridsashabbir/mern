// 1- convert object to JSON
// 2- add data into another file
// 3- read file
// 4- convert json to object'
// 5- console.log

// 1- convert object to JSON
const bioData = {
  name: "Ridsa",
  age: 21,
  gender: "female",
};
const jsonData = JSON.stringify(bioData);
console.log(jsonData);
