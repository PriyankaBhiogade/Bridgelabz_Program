var ul = require('../Utility/utility');
var dque = require('../Utility/Queue');
var rd = require('readline-sync');
/** 
* Purpose      :   Take a range of 0 - 1000 Numbers and find the Prime and Anagrams numbers in 
                   that range. Store the prime Anagrams numbers in a 2D Array
* @file        :   PrimeAnagrams.js
* @author      :   PriyankaBhiogade
* @version     :   1.0
* @since       :   15-3-2019
**/
//call function
getAnagram();

function getAnagram() {

var num;
try {
//num = rd.question('Enter a number ::');
//call util class method
ul.primeAnagram();

} catch (err) {
console.log(err);
}
}
