
const read = require('readline-sync')
const dsUtil =  require("../Utility/LinkedList")
const util = require('../Utility/utility');
const ref = require('util');
module.exports = {

    hash(data){
    var flag;
    var arr =[]; 
    //Find link remender and stored in linklist

    for (let index = 0; index < data.length; index++) {
        var int = Number(data[index])
        var rem = int % 11;                 //storing remainder in variable
        if (arr[rem] === undefined) {
            arr[rem] = new dsUtil.LinkedList()//creating linklist object
            arr[rem].add(int)
        }
        else {
            arr[rem].add(int)//adding value into particular linklist 
        }
    }
    //from linklist stored in given 10 position depend pn remender
    for (let index = 0; index <= 10; index++) {
        ref.print(index + " Position elements is  : ");
        try {
            arr[index].show();//printing linklist elements

        } catch (err) {
            console.log("empty index");
        }

    }
    //for serching element and if it found then then delele or add
    var str = ''
    var num = read.questionInt('enter the number u want to search :');
    if (!isNaN(num)) {
        rem = Number(num % 11);
        console.log(rem);

        if (arr[rem] === undefined) {
            arr[rem] = new dsUtil.LinkedList();

        }
        console.log(arr[rem])
        console.log(num)
        if (arr[rem].search(Number(num))) {//check for the value wheather the value is presentst or not
            console.log("The number is found in file");
            arr[rem].remove(num);

        } else {
            console.log("Number is not found in file");
            arr[rem].add(num);
        }

        for (let index = 0; index <= 10; index++) {

            ref.print(index + " result elements  --  ");
            try {
                arr[index].show();
                str = str + arr[index].getData();//get data will concat all the data and return the string
                if (arr[index] !== 'undefined' && index < arr.length - 2) {
                    str = str + " ";
                }
            } catch (err) {
                console.log("Empty index");

            }

        }
        console.log(str);
        console.log("\n\n");
    } else {
        console.log("Wrong input ");
    }
}
}