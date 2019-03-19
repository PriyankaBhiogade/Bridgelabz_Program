var util =require("../utility/utility");

var read = require('readline-sync');


var a=read.question("enter the value of a:");

var b=read.question("enter the value of b:");

var c=read.question("enter the value of c:");

//var determine=b * b - 4 * a * c;

util.quadratic(a,b,c);