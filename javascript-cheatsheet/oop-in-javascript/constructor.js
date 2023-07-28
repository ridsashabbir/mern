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
  // let's try it with a fuction
  this.calculateAge = function () {
    console.log(2023 - this.dob);
  };
}

// we can create as many instances as we want
// instance 1
const ridsa1 = new Person("ridsa1", 23, 2002);
console.log(ridsa1);

// instance 2
const ridsa2 = new Person("ridsa2", 67, 2222, "doctor");
console.log(ridsa2);

// instance 3
const ridsa3 = new Person("ridsa3", "", 6666, "pilot");
console.log(ridsa3);

// let's call that function here
ridsa1.calculateAge();
