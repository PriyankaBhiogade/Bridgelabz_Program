var read = require('readline-sync')
var util = require('../Utility/OOPutility')
const fileStream = require('fs')

/**
 * Purpose      :   Print a Stock Report with total value of each Stock and the total value of Stock.
 * @file        :   StockReport.js
 * @overview    :   Create JSON object to read the data.
 * @author      :   PriyankaBhiogade
 * @version     :   1.0
 * @since       :   19-3-2019
 **/

//const fileStream = require('fs');
const StockReport = fileStream.readFileSync('StockReport.json', 'utf8');

var obj = JSON.parse(StockReport)
try {
    for (var i = 0; i < obj.Stock1.length; i++) {
        var name = obj.Stock1[i].StockNames;
        var share = obj.Stock1[i].NumberofShare;
        var price = obj.Stock1[i].Share;

        var total = share * price
        console.log("name : " + name + ": " + "share : " + share);
        console.log("value of one stock is: "+ price)
        console.log("total values is :" + total);
        console.log("*************************************");
        console.log()

    }
}
catch (e) {
    console.log(e.message)
}