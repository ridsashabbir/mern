const os = require("os");

// it will give you artchitcture of your os
console.log(os.arch());
console.log(os.hostname());
console.log(os.platform());
console.log(os.tmpdir());
console.log(os.type());

const freeMemory = os.freemem();
console.log(freeMemory); // it will return value in bytes
console.log(`${freeMemory / 1024 / 1024 / 1024}`); // it will return value in GB

const totalMemory = os.totalmem();
console.log(totalMemory); // it will return value in bytes
console.log(`${totalMemory / 1024 / 1024 / 1024}`); // it will return value in GB
