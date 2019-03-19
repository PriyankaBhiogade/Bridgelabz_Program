var ul = require('../Utility/utility');
var dque = require('../Utility/Stack');
var rd = require('readline-sync');
/** 
* Purpose      :   Take a range of 0 - 1000 Numbers and find the Prime and Anagrams numbers in 
                   that range.Stored in a Stack using the Linked List
* @file        :   ​PrimeAnagramsStack.js
* @author      :   PriyankaBhiogade
* @version     :   1.0
* @since       :   15-3-2019
**/
//call function
getAnagram();

function getAnagram() {

var num;
try {
num = rd.question('Enter a number ::');
//call util class method
ul.primeAnagramStack(num);

} catch (err) {
console.log(err);
}
}

