/**
 * Purpose      :   Create Object Oriented Analysis and Design of a simple ​ Address Book Problem.
 * @file        :   AddressBook.js
 * @overview    :   Create JSON object to read the data.
 * @author      :   PriyankaBhiogade
 * @version     :   1.0
 * @since       :   20-3-2019
 **/
var read = require('readline-sync')
var util = require('../Utility/AddressBook')
var fs =require('fs')
var data = fs.readFileSync('AddressBook.json','utf8');
var address = JSON.parse(data);

var a = new util.Address;

console.log("********Address Book Detail**********")
console.log()
console.log('1: Add New Person')
console.log('2: List The Details Of Address Book')
console.log('3: Change The Information')
console.log('4: Delete Person Information')
var choice = read.question("Enter Your Choice: ")
switch(parseInt(choice))
{
    case 1: 
       a.createProfile(address)
       break;

       case 2: 
       a.displayDetail(address)
       break;

       case 3: 
       a. updateProfile(address) 
       break;

       case 4: 
       a.deleteDetail(address)
       break;

       case 5: 
       console.log("Thank You!....")
       break;

       default:
       console.log("Please enter a valid option!!");
}