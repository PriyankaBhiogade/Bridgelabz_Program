var read = require('readline-sync');
var util = require('../Utility/DeQueue');
/** 
 * Purpose      :   Construct an algorithm to input a string of characters and check whether 
                    it is a palindrome
 * @file        :   PalindromeCheck.js
 * @author      :   PriyankaBhiogade
 * @version     :   1.0
 * @since       :   12-3-2019
**/
try{
function DeQueue() {
    var deque = new util.DeQueue(); 
    var str = read.question(" Enter the String : ");
    var str1 = deque.palindromeChecker(str);
    if (str1 == false) {
        console.log("String is not a palindrome")
    }
    else{
        console.log("String is a Palindrome")
    }
}DeQueue()
}
catch (err) {
    console.error(err);
}
