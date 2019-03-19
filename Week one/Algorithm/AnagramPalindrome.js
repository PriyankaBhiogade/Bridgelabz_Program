var util =require("../Algorithm_utility/utility")

var read = require('readline-sync');
var num =read.question("Enter the number :");
var prime="";
var ch =[];
//console.log("Prime no. that are Anagram and palindrom:");

//var str = util.primeAnagramPalindrom();
 prime = util.primeNum(num);
prime =prime.trim();
ch =prime.split(" ");
util.primeAnagramPalindrom(num);



//console.log(str);


