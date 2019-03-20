var read = require('readline-sync')
var util = require('../Utility/OOPutility')
var file = require('fs')
var util1 = require('../../Week two/Utility/Stack')
var D = require('../Utility/StockStackReport')

/**
 * Purpose      :   Further maintain the Stock Symbol Purchased or Sold in a Stack implemented using
                    Linked List to indicate transactions done
 * @file        :   StockStack.js
 * @overview    :   Create JSON object to read the data.
 * @author      :   PriyankaBhiogade
 * @version     :   1.0
 * @since       :   20-3-2019
 **/



function stockAccount() {
    try {
        var data = file.readFileSync('Customer.json', 'utf8')
        var data1 = file.readFileSync('Company.json', 'utf8')
        var object = JSON.parse(data)
        var object11 = JSON.parse(data1)
        var object1 = new D.stockAccount;
        while(num!=5)
     {
        console.log("----------------Stock Account---------------");
        console.log("Enter 1 to create account:")
        //console.log("Enter 2 to total value of amount in account")
        console.log("Enter 2 to buy shares")
        console.log("Enter 3 to sell shares")
        console.log("Enter 4 to information shares of company and customer")
        var num = read.questionInt("choose the number:")
  
        switch (num) {
            case 1:
                object1.stockCreate(object)
                break;
            case 2:
                object1.buy(object, object11)
                break;
            case 3:
                object1.sell(object, object11)
                break;
            case 4:
                object1.print(object, object11)
                break;
        }
    }
    }
    catch (err) {
        console.log(err.message);
    }
} stockAccount();


 