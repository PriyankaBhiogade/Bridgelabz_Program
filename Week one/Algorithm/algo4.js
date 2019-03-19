var util =require("../Algorithm_utility/utility")

var read = require('readline-sync');

var array=[]
var n =read.question("Enter size of array: ");
console.log("enter element which will search : ");
for(var i=0;i <n;i++) 
{

array[i]=read.question( );

}



util.sortarrayInt(array);
//util.sortarrayString(array);
/*
var array=[]
var n =read.question("Enter size of array: ");
for(var i=0;i <n;i++) 
{
array[i]=read.question('enter elements on ' +i+ ' position : ');
}
 

util.insertionSort(array);


*/
 