
var read = require('readline-sync');
var util1 = require('../Utility/utility');
var util2 = require('../Utility/Queue');
var fs = require('fs');
/** 
 * Purpose      :   Push and Pull the element from the Queue data structure
 * @file        :   BankQueue.js
 * @overview    :   Use readfile to read all the words in the file with space as seperator.
 * @author      :   PriyankaBhiogade
 * @version     :   1.0
 * @since       :   12-3-2019
**/
try{
function Queue() {
    var queue = new util2.Queue; // create Object of Queue 
    var bankBalance = 10000;
    flag = true;
    var data = read.question("Enter total number of people : ")

    if (data > 0) {
        for (i = 1; i <= data; i++) {
            console.log("Enter "+i+" person operation")
            var ans = read.question("Press 1 for deposit and 2 for withdraw: ");
            if (ans == 1) {
                let amt = read.question("Enter total amount do you want to Deposit: ");
               // var format = /[0-9]/;
                if (!isNaN(amt)) {
                    queue.push(Number(amt));
                    console.log("Deposit Sucessfully......")
                    flag = true;
                }
                else{
                    console.log("Please enter amount in digit")
                }
            }

            else if (ans == 2) {
                let amt = read.question("Enter total amount do you want to withdraw: ");
                if (amt <= bankBalance) {
                    queue.push(Number(-amt));
                    console.log("Withraw Sucessfully......")
                    flag = true;
                }

                else {
                    console.log("Insufficient Balance ..!");
                }
            }

            else {
                console.log("Make sure that, you entered the correct key ");
                flag = false;
                return;
            }
        }
    }
    else {
        console.log("Invalid input ");
        return;
    }
    if (flag) {
        var addition = 0;
        for (let i = 1; i <= data; i++) {
            addition = (addition + queue.pop());//adding the total amount they deposit or 
        }
        //console.log(addition);
        var totaltransaction = bankBalance+ addition;//cal total transaction 
        if (totaltransaction > 0) {
            console.log("At the end of the day Total amount left in the bank "+ totaltransaction);
        }


        if (totaltransaction < bankBalance) {
            console.log("Bank cash is not Maintain");
        }
        else {
            console.log("Bank cash is Maintain");//printing to the console
        }
    }
}
Queue();
}
catch (err) {
    console.error(err);
}
