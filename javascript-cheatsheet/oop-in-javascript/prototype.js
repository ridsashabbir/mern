// prototyoe is used to reduce redundancy of the code and it use less memory
// we will create changing in the constructor we made before

const person = {
  name: "Ridsa",
  age: 21,
  dob: 2002,
  job: "softaware engineer",
};

// constructor function's name should start from a capital letter
function Person(pName, pAge, pDob, pJob) {
  this.name = pName;
  this.age = pAge;
  this.dob = pDob;
  this.job = pJob;
  // let's create this function using prototype
  //   this.calculateAge = function () {
  //     console.log(2023 - this.dob);
  //   };
}

// let's create this function using prototype
Person.prototype.calculateAge = function () {
  console.log(2023 - this.dob);
};

// we can create as many instances as we want
// instance 1
const ridsa1 = new Person("ridsa1", 23, 2002);
ridsa1.calculateAge();

// instance 2
const ridsa2 = new Person("ridsa2", 67, 2004, "doctor");
ridsa2.calculateAge();

// instance 3
const ridsa3 = new Person("ridsa3", "", 2006, "pilot");
ridsa3.calculateAge();

console.log(ridsa1);
Person.prototype.name = ridsa3;
console.log(ridsa2.dob);

// let's call that function here
// ridsa1.calculateAge();
// ridsa2.calculateAge();
// ridsa3.calculateAge();
