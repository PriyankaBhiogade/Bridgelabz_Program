var util = require("../Utility/LinkedList")
var read = require('readline-sync');
var util1 = require('../Utility/utility');
var util2 = require('../Utility/Stack');

var fs = require('fs');
/** 
* Purpose      :  Create a Ordered Linked List.Search a element if present remove it otherwise 
                  add it to the file.
* @file        :  OrderList.js
* @overview    :  Use readfile to read all the words in the file with space as seperator.
* @author      :  PriyankaBhiogade
* @version     :  1.0
* @since       :  11-3-2019
**/
try {
    var stack = new util2.Stack(); //creating a stack object
    var linklist = new util.LinkedList();//creating linklist object
    var fileName = read.question("Enter The FileName : ")

    let data = util1.fileCall(fileName);

    for (let index = 0; index < data.length; index++) {

        stack.push(parseInt(data[index]));
    }
    console.log("Before the sorting Element :" + data)

    data = util1.insertionSortInt(data);

    //console.log(data);

    for (let index = 0; index < data.length; index++)

        linklist.add(data[index]);

    var display = linklist.display();

    console.log("Arrange the element in Link List :" + display);

    var num = read.question("Enter the data you want to search :");

    var check = linklist.search(num);//calling searching function
    console.log(check);

    if (check) {
        linklist.remove(num);
    }
    else {
        linklist.addToPos(num);
    }
    var display = linklist.display();
    //display the elemets using linklist implementation

    console.log(display);

    util1.writeFile(fileName, display)
    //writting into the file

} catch (err) {

    console.error(err);
}