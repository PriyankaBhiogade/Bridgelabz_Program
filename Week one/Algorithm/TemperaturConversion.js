var util =require("../Algorithm_utility/utility")

var read = require('readline-sync');
console.log("1.Celsius to Fahrenheit:\n2.Fahrenheit to Celsius : ")
var choice= read.question("enter The choice:");

if(choice==1)
{
var celsius= read.question("enter The temperature:");

 util.convertToF(celsius);
}
if(choice==2)
{
 var fahrenheit= read.question("enter The temperature:");
 util.convertToT(fahrenheit);
}
s