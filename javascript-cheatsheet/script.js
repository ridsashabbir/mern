console.log("hello world");

let a = 67;
console.log(a);
a = "Ridsa"; // allowed, as we used let
console.log(a);

var b = 11;
console.log(b);
b = "Ridsa"; // also allowed but scope is different from let
console.log(b);

const c = 23;
console.log(c);
c = "Ridsa"; // not allowed, const would not let you change the value of variable.
console.log(c);
