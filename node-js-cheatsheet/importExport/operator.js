// define a function here and call it in index.js
//we are exporting modules from this filev
const add = (a, b) => {
  return a + b;
};

const sub = (a, b) => {
  return a - b;
};

const mul = (a, b) => {
  return a * b;
};

// module.exports.add = add;
// module.exports.sub = sub;
// module.exports.mul = mul;

module.exports = { add, sub, mul };
