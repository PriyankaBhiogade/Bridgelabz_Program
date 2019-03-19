var util =require("../utility/utility");

var read = require('readline-sync');

var  num= read.question("Enter the number of coin :");

console.log("");

util.flipCoin(num);

