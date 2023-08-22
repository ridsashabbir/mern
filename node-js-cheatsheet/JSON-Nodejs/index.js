// we will convert this object in JSON
const bioData = {
  name: "Ridsa",
  age: 21,
  gender: "female",
};
console.log(bioData.gender);
console.log(bioData);

// stringify method in json - will convert object in json
const jsonData = JSON.stringify(bioData);
console.log(jsonData);
console.log(jsonData.gender); // you cannot access object's data like this in JSON

// parse method in json - will convert json in object
const objData = JSON.parse(jsonData);
console.log(objData);
console.log(objData.gender); // you can access object's data like this as it's in object form now
