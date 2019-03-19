var ul = require('../Utility/utility');
var dque = require('../Utility/Queue');
var rd = require('readline-sync');
/** 
* Purpose      :   Take a range of 0 - 1000 Numbers and find the Prime numbers in that range. Store
                   the prime numbers in a 2D Array
* @file        : ​  Prime2D.js
* @author      :   PriyankaBhiogade
* @version     :   1.0
* @since       :   15-3-2019
**/
try{
//call function
getPrime();

function getPrime() {

var num;
try {
num = rd.question('Enter a number ::');
//call util class method
ul. prime(num);

} catch (err) {
console.log(err);
}
}
}catch (err) {
    console.error(err);
}
