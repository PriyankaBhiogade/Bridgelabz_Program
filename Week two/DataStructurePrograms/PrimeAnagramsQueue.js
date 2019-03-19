var read = require('readline-sync');
var util1 = require('../Utility/Queue');
var util = require('../Utility/utility');

/** 
* Purpose      :   Take a range of 0 - 1000 Numbers and find the Prime and Anagrams numbers in 
                   that range.Stored in a Queue using the Linked List
* @file        :   PrimeAnagramsQueue.js
* @author      :   PriyankaBhiogade
* @version     :   1.0
* @since       :   15-3-2019
**/
try{
function Angrame(){

var queue =new util1.Queue();

var num =read.question("Enter the number :");
var prime="";
var ch =[];
str = util.getPrimeNumber(num) ;
str = str.trim();
arr = str.split(' ');//forloop for Storing anagrams numbers
for (i = 0; i < arr.length - 1; i++) {
for (j = i + 1; j < arr.length; j++) {
 
if (util. findAnagram(arr[i], arr[j])) {
    queue .push(arr[j]);
    queue .push(arr[i]);

}
}
}


len =queue  .getSize();
console.log(len);
//forloop for printing anagrams
for (i = 0; i < len; i++) {
data = queue .pop();
console.log('Anagram number is :: ' + data);
}


}
Angrame()
}
catch (err) {
    console.error(err);
}
