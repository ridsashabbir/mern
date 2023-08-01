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
};
console.log(obj);
console.log(obj.a);
console.log(obj.b);
console.log(obj.c);
