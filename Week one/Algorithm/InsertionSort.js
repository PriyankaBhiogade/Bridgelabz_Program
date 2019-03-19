var util =require("../Algorithm_utility/utility")

var read = require('readline-sync');
var data=[]/*
var n =read.question("Enter size of array: ");
console.log("enter the list of words: ");
for(var i=0;i <n;i++) 
{

arr[i]=read.question( );

}
*/
var fileName = read.question("Enter the file name: ");
    data = util.fileCall(fileName);

 var temp =util.insertionSortInt(data);
console.log("sorted array: ")
console.log(temp);