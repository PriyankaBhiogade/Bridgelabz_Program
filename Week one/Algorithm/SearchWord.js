var util =require("../Algorithm_utility/utility")

var read = require('readline-sync');

var arr = [];

//var n =read.question("Enter size of array: ");
//console.log("enter Sentence : ");
var fileName = read.question("Enter the file name: ");
    let data = util.fileCall(fileName);
//str=read.question( );
//arr=data.split(' ');   
//console.log(data)
util.sortarrayString(data)