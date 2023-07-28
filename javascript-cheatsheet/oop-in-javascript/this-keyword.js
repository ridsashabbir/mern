// this keyword refers to the current context
// it is used to access the properties and methods which are part of object
// this keyword always refers to single object and used inside of the function

const fname = "RidsaShabbir"; //suppose we have another fname variable, let's try to print it
const person = {
  fname: "Ridsa",
  lname: "Shabbir",
  age: 21,
  gender: "female",
  getFname: function () {
    console.log(this.fname);
    // console.log(fname);  // so we won't use this keyword and it will print RidsaShabhir, with the use of this, it will print Ridsa as it will refer the current context inside the object
  },
  getLname: function () {
    console.log(this.lname);
  },
  getAge: function () {
    console.log(this.age);
  },
  getGender: function () {
    console.log(this.gender);
  },

  // suppose this object has abother property which is parent
  parent: {
    fname: "Shabbir",
    lname: "Malik",
    getFname: function () {
      console.log(this.fname);
    },
  },
};

person.getFname();
person.getLname();
person.getAge();
person.getGender();
person.parent.getFname(); // we will access another property like this
