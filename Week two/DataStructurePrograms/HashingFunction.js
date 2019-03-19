const read = require('readline-sync')
const dsUtil =  require("../Utility/LinkedList")
const util = require('../Utility/utility');
const ref = require('util');
var util11=require('../Utility/HashingFunction')
/** 
 * Purpose      :   Create a Slot of 10 to store Chain of Numbers that belong to each Slot to 
                    efficiently search a number from a given set of number using Hashing Function
 * @file        :   HashingFunction.js
 * @author      :   PriyankaBhiogade
 * @version     :   1.0
 * @since       :   13-3-2019
**/
try{
var fileName = read.question('enter the filename :');
                 //creating array of 10 elements
data = util.fileCall(fileName);  
util11.hash(data);       
}
catch (err) {
    console.error(err);
}
