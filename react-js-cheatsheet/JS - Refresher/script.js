// variables in javascript
let a = 34;
a = 4;
console.log(a);

const b = 34;
// b = 4; // you cannot change value of const
console.log(b);

var c = 34;
var c = 4; // var don't give you error even if variable id redeclared
console.log(c);

// function in js
function Hello() {
  console.log("Hello");
}
Hello();

// object in js
const obj = {
  a: 2,
  b: 3,
  c: 4,
  function: function myfunction(num) {
    console.log("The number is: ", num);
  },
};
console.log(obj);
console.log(obj.a);
console.log(obj.b);
console.log(obj.c);
console.log(obj.function(19));

// add event listener
document.addEventListener("click", function click() {
  console.log("clicked");
  alert("it's clicked");
});

// array in js
let arr = [45, 46, 47, 48];
for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  console.log(element);
}

// use of this
function myfunction(num) {
  console.log("The number is: ", this);
}
myfunction();
