var util = require("../Utility/LinkedList")
var read = require('readline-sync');
var util1 = require('../Utility/utility');
var fs = require('fs');
/** 
* Purpose      :   Create a Unordered Linked List.Search a element if present remove it otherwise 
                   add it to the file.
* @file        :   UnorderList.js
* @overview    :   Use readfile to read all the words in the file with space as seperator.
* @author      :   PriyankaBhiogade
* @version     :   1.0
* @since       :   11-3-2019
**/
try {
    var linklist = new util.LinkedList();//creating list object

    var fileName = read.question("Enter the file name :  ");

    var data = util1.fileCall(fileName);

    for (let index = 0; index < data.length; index++)

        linklist.add(data[index]);

    var display = linklist.display();

    console.log("Arrange the element in Link List :" + display);

    var word = read.question("Enter the data you want to search :");

    var check = linklist.search(word);//calling searching function
   
    
    console.log(check);
    if (check) {
        linklist.remove(word);//rempove the element if it is already inthe file
    }
    else {
        linklist.add(word);
    }
    var display = linklist.display();//display the elemets using linklist implementation
    console.log(display);

    util1.writeFile(fileName, display);
} catch (err) {
    console.error(err);
}