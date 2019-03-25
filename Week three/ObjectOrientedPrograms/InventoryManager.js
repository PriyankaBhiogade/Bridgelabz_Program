var util = require('../Utility/InventoryManger')
var read = require('readline-sync');
/**
 * Purpose      :   To Create InventoryManager to manage theInventory. The Inventory Manager will
                    use InventoryFactory to create Inventory Object from JSON
 * @file        :   InventoryDataManagement.js
 * @overview    :   Create JSON object to read the data.
 * @author      :   PriyankaBhiogade
 * @version     :   1.0
 * @since       :   18-3-2019
 **/
const fileStream = require('fs');
const InventoryManager = fileStream.readFileSync('InventoryManager.json', 'utf8');

var obj = JSON.parse(InventoryManager)
 var add = new util.Canarabank(name, share, price);
try {
    for (var i = 0; i < obj.Stock1.length; i++) {
        var name = obj.Stock1[i].StockNames;
        var share = obj.Stock1[i].NumberofShare;
        var price = obj.Stock1[i].Share;

       // let add = new util.Canarabank(name, share, price);

        var total = add.total();
        console.log("name : " + name + ": " + "share : " + share);
        console.log("total price is :" + total);
        console.log("*************************************");
        console.log()

    }
    for (var i = 0; i < obj.Stock1.length; i++) {
        var name = obj.Stock1[i].StockNames;
        var share = obj.Stock1[i].NumberofShare;
        var price = obj.Stock1[i].Share;

        //let add = new util.Canarabank(name, share, price);

        var total = add.total();
        console.log("name : " + name + ": " + "share : " + share);
        console.log("total price is :" + total);
        console.log("*************************************");

    }
    console.log()
    for (var i = 0; i < obj.Stock1.length; i++) {
        var name = obj.Stock1[i].StockNames;
        var share = obj.Stock1[i].NumberofShare;
        var price = obj.Stock1[i].Share;

        //let add = new util.Canarabank(name, share, price);

        var total = add.total();
        console.log("name : " + name + ": " + "share : " + share);
        console.log("total price is :" + total);
        console.log("*************************************");

    }
}
catch(e)
{
    console.log(e.message)
}