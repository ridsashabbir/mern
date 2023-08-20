// define a function here and call it in index.js
//we are exporting modules from this filev
const add = (a, b) => {
  return a + b;
};

const sub = (a, b) => {
  return a - b;
};

module.exports.add = add;
module.exports.sub = sub;
