var util =require("../Algorithm_utility/utility")

var read = require('readline-sync');


var arr=[]
var n =read.question("Enter size of array: ");
console.log("enter element which will sort : ");
for(var i=0;i < n;i++) 
{

arr[i]=read.question( );
}

util.bubbleSortInt(arr);
console.log("sorted array: ")
console.log(arr)

/*
util.bubbleSortString(arr) ;
console.log("sorted array: ")
console.log(arr)
*/
/*
util.insertionSortString(arr);
console.log("sorted array: ")
console.log(arr)
*/
/*
util.insertionSortInt(arr);
console.log("sorted array: ")
console.log(arr)
*/