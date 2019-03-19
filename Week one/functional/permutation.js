
var util =require("../utility/utility");

var read = require('readline-sync');



function permutation()
{
  var string= read.question('Enter the String ');
  var str=util.permutation1(string ,0);
  console.log(str);
}
permutation();
