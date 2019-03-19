
var dsUtil = require('../Utility/utility')
var read = require('readline-sync')
/** 
 * Purpose      :   Find in how many ways can input number can be search by using binary tree
 * @file        :   BinarySearchTree.js
 * @author      :   PriyankaBhiogade
 * @version     :   1.0
 * @since       :   13-3-2019
**/
try{
var num = read.questionInt("enter the total number of BST :")
var arr = []
console.log("Enter " + num + " number in BST")
for (var i = 1; i <= num; i++) {
    arr[i] = read.questionInt();

}
console.log();
for (var j = 1; j <= num; j++) {
    var fact = dsUtil.findFactorial(2 * Number(arr[j]))//finding factorial of the number
    var fact1 = dsUtil.findFactorial(Number(arr[j]) + 1) * dsUtil.findFactorial(Number(arr[j]))
    var res =Math.floor( Number(fact) / Number(fact1 ));
    console.log("Possible combination:"+res)
}
}
catch (err) {
    console.error(err);
}
