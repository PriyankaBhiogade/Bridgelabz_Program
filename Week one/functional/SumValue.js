var util =require("../utility/utility");

var read = require('readline-sync');

//var array=[1,2,-3,4,5,-9,]; 
var array=[]
var n =read.question("Enter size of array: ");
for(var i=0;i <n;i++) 
{
array[i]=read.question('enter elements on ' +i+ ' position : ');
}
 
util.triplet(array);
