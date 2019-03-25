var read =require('readline-sync');
var util = require('../Utility/StackUtility');
var file = require('fs');
var util11 =require('../../Week two/Utility/Stack')
/**
 * Purpose      :   Print a Stock Report with total value of each Stock and the total value of Stock.
 * @file        :   StockReport.js
 * @overview    :   Create JSON object to read the data.
 * @author      :   PriyankaBhiogade
 * @version     :   1.0
 * @since       :   20-3-2019
 **/

 var comp = file.readFileSync('Company.json','utf8');
 var cust = file.readFileSync('Customer.json','utf8');
 var tran = file.readFileSync('Transaction1.json','utf8')

obj1 =JSON.parse(cust);
obj2 = JSON.parse(comp);
obj3 = JSON.parse(tran);
var util1 = new util.StockAccount()
stack1 = new util11.Stack();
stack2 = new util11.Stack();

 
function Stock()
{
    console.log("*******Stock Account *******");
    console.log("1: To Create New Account");
    console.log("2: To Buy Shares ");
    console.log("3: To Sell Shares");
    console.log("4: To Print Details of comp and cust");
    console.log("5: To Print Buy Stack Symbol");
    console.log("6: To Print sell Stack Symbol")
    console.log("7: Exit");

    var ch= read.question("Enter your choies:: ")

   switch(parseInt(ch)){
        case 1: 
        util1.createAccount(obj1);
        Stock();
        break;

        case 2:
        util1.buyShares(obj1,obj2,obj3);
        Stock()
        break;

        case 3:
        util1.sellShares(obj1,obj2);
        Stock()
        break;

        case 4:
        util1.print(obj1,obj2);
        Stock()
        break;

        case 5:
        util1.printBuyQueue(obj3);
        Stock()
        break;

        case 6:
        util1.printSellQueue(obj3);
        Stock()
        break;

        case 7:
        console.log("Thank You!!");
        break;

        default:
        console.log("Please enter a valid option!!");
        
    }
}
Stock()