var util = require('../Utility/InventoryData')
var read = require('readline-sync');
/**
 * Purpose      :   Create a JSON file having Inventory Details for Rice, Pulses and Wheats
                    with properties name, weight, price per kg 
 * @file        :   InventoryDataManagement.js
 * @overview    :   Create JSON object to read the data.
 * @author      :   PriyankaBhiogade
 * @version     :   1.0
 * @since       :   18-3-2019
 **/
const fileStream = require('fs');
const InventoryData = fileStream.readFileSync('InventoryData.json', 'utf8');

var obj = JSON.parse(InventoryData)
try{
for (var i = 0; i < obj.Rice.length; i++) {
    var n = obj.Rice[i].name;
    var w = obj.Rice[i].weight;
    var p = obj.Rice[i].price;

    let product = new util.Rice(n, w, p);//object of Rice class
    var total = product.total();
    console.log((i+1)+"] Name of Rice is " + n + " And " + " Weight is " + w)
    console.log();
    console.log("Total Price of Rice is " + total)
    console.log("--------------------------------------------")
    console.log();
}

for (var i = 0; i < obj.Pulses.length; i++) {
    var n = obj.Pulses[i].name;
    var w = obj.Pulses[i].weight;
    var p = obj.Pulses[i].price;

    var add = new util.Pulses(n, w, p)//object of Pulses class
    var total = add.total();
    console.log((i+1)+"] Name of pulses is  " + n + " And " + " Weight is " + w)
    console.log();
    console.log("Total Price of pulses is " + total)
    console.log("--------------------------------------------")
    console.log();
}

for (var i = 0; i < obj.Wheats.length; i++) {
    var n = obj.Wheats[i].name;
    var w = obj.Wheats[i].weight;
    var p = obj.Wheats[i].price;

    var add = new util.Wheats (n, w, p)//object of Wheat class
    var total = add.total();
    console.log((i+1)+"] Name of Wheat is " + n + " And " + " Weight is " + w)
    console.log();
    console.log("Total Price  of Wheat is  " + total)
    console.log("--------------------------------------------")
    console.log();
}
}
catch(e){
    console.log(e.message)
}