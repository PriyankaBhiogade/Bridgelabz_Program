var util =require("../Algorithm_utility/utility")

var read = require('readline-sync');
var arr=[];
var n =read.question("Enter size of array: ");
console.log("enter elements which will sort : ");
for(var i=0;i < n;i++) 
{

    arr[i]=read.question( );
}
util.StopwatchSearchAndSort(arr)
