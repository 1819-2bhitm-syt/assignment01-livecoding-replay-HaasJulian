console.log("Hallo Welt! ");
require("./hallo");

let data = require("./hallo.js");
console.log(data);


const data1=require("./hallo.js");

console.log(data1);

const data2 = require("./hallo.js");
console.log(data2.name());


const data4 = require("./hallo.js");

console.log(data4.name("Hallo "));

require("./unterordner/appunterordner.js");