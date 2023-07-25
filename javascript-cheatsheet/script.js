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
// c = "Ridsa"; // not allowed, const would not let you change the value of variable.
console.log(c);

var name1 = "ridsashabbir1";
{
  var name1 = "Ridsa1";
  console.log(name1);
}
console.log(name1); // it will still print Ridsa as it's not block scoped

let name2 = "ridsashabbir2";
{
  let name2 = "Ridsa2";
  console.log(name2);
}
console.log(name2); // it will print ridsashabbir1 as this is the block scoped, variable outside the block will not be considered

const name3 = "ridsashabbir3";
{
  const name3 = "Ridsa3"; // it will throw error, const will not let you change the value of variable
  console, log(name3);
}
console.log(name3);
