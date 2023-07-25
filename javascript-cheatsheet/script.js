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

// block scope of var
var name1 = "ridsashabbir1";
{
  var name1 = "Ridsa1";
  console.log(name1);
}
console.log(name1); // it will still print Ridsa as it's not block scoped

// block scope of let
let name2 = "ridsashabbir2";
{
  let name2 = "Ridsa2";
  console.log(name2);
}
console.log(name2); // it will print ridsashabbir1 as this is the block scoped, variable outside the block will not be considered

// block scope of const
const name3 = "ridsashabbir3";
{
  //   const name3 = "Ridsa3"; // it will throw error, const will not let you change the value of variable
  //   console, log(name3);
}
console.log(name3);

// console.clear();

// primitive data types - nn ss bb u
let pa = null; // null is an assigned value, it means nothing
let pb = 456;
let pc = true;
let pd = BigInt(345); // you can also add it like BigInt(345) + BigInt(5) and answer will be 350
let pe = "Ridsa";
let pf = Symbol("I am a symbol");
let pg = undefined; // undefined means a variable has been declared but not defined yet

console.log(pa, pb, pc, pd, pe, pf, pg);

// typeof operator
console.log(typeof pa); // it will print it as a object, it's a bug, originally it's not a object and is primitive
console.log(typeof pb);
console.log(typeof pc);
console.log(typeof pd);
console.log(typeof pe);
console.log(typeof pf);
console.log(typeof pg);

// non-primitive data types - objects
const item = {
  Ridsa: true,
  Ridsa1: false,
  Ridsa2: 56,
  Ridsa3: undefined,
  Ridsa4: 13.4,
};

// console.log(item[Ridsa2]);    // throw an error, we can't use it as a variable
console.log(item["Ridsa2"]); // it is the right way to print any ite from the object
console.log(item[4]); // will print undefined, we can't access it through index
