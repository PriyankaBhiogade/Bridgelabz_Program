var util =require("../Algorithm_utility/utility")

var read = require('readline-sync');


var arr=[]
var n =read.question("Enter size of array: ");

for(var i=0;i < n-1;i++) 
{

//arr[i]=read.question( );
arr[i]=i+1;
}

//var num= read.question("Enter the Number which you want to search:")
util.sortarrayInt(arr);