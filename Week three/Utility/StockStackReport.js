var read = require('readline-sync');
var file = require('fs');
//var  M = require('../Utility/utilityDataStructure');
//var linkedList = new M.LinkedList();
var util1 = require('../../Week two/Utility/Stack')
var s = 0;
class stockAccount {
    constructor() {
    }
    /**
     *stockCreate creates stock acoount with name,
     *id and share where id is generated unquie for each account. 
     * 
     */
    stockCreate(data) {
        var name1 = read.question(" enter the name of the customer: ");
        var id1 = Math.floor(Math.random() * 100);
        var share1 = Math.floor(Math.random() * 100);

        console.log(id1);
        data.customer.push(
            {
                name: name1,
                id: id1,
                share: share1,
                // time:time

            }
        )
        console.log(data.customer);
        var d = file.writeFileSync('customer.json', JSON.stringify(data));
    }
    /**
     * Buy it adds to the stock account and 
     * customer buys the share from the company.
     *  
     */
    buy(data, data1) {
        var flag = false;
        console.log(data);
        var object = data.customer;
        var id1 = read.question(" enter the id : ");
        /**
         * Loop the customer array object to find id of the customer want to buy.
         */
        for (let i in object) {
            if (object[i].id == id1) {
                var index = data.customer.indexOf(data.customer[i]);
                var customername = object[i].name;
                console.log(" company information ");
                console.log(data1);
                var sym = read.question(" enter symbol of company share you want to buy : ")
                var object1 = data1.company;
                /**
                 * loop over the company array object to buy the share from the company.
                 */
                for (let i in object1) {
                    if (object1[i].symbol == sym) {
                        console.log("company number of shares price of each share");
                        console.log(object1[i]);
                        var name10 = object1[i].name
                        var sym10 = object1[i].symbol;
                        var shar = object1[i].share;
                        do {
                            var number = read.questionInt(" enter the number of shares you want to buy : ");

                            if (number > shar) {
                                console.log(" Please enter the share number which less than company shares ");
                            }
                            else {
                                flag = true;
                            }
                        } while (!flag)
                        var s = " customer name :  " + customername + "  and name of company  " + name10 + " & symbol " + sym10 + "  buy number of shares " + number;
                        console.log(s);
                        //this.stackps(s);
                        var time = new Date();
                        console.log(" Time of buying the share is " + Math.floor(time.getSeconds()) + " sec ");
                        var n = parseInt(data.customer[index].share)
                        var n11 = parseInt(data1.company[i].share)
                        var num = parseInt(number);
                        var n1 = n + num;
                        var n2 = n11 - num;
                        if (n11 > num) {
                            data.customer[index].share = n1;
                            data1.company[i].share = n2;
                            var d = file.writeFileSync('customer.json', JSON.stringify(data));
                            //console.log(d) 
                            var d1 = file.writeFileSync('company.json', JSON.stringify(data1));
                        }
                    }
                }
            }
        }
    }
    /**
     * Sell subtract the share from the stock account and sell the 
     * share to company which user is interested. 
     */
    sell(data, data1) {
        console.log(data);
        var object = data.customer;
        var id1 = read.question(" enter the id : ");
        /**
         * Loop the customer array object to find id of the customer want to sell.
         */
        for (let i in object) {
            if (object[i].id == id1) {
                var index = data.customer.indexOf(data.customer[i])
                var customername1 = object[i].name;
                console.log(" company information ");
                console.log(data1);
                var sym12 = read.question(" enter symbol  of company you want to sell : ");
                var object1 = data1.company;
                /**
                  * loop over the company array object to sell the share from the company.
                  */
                for (let i in object1) {
                    if (object1[i].symbol == sym12) {
                        console.log("company number of shares and price of each share");
                        console.log(object1[i]);
                        var name11 = object1[i].name;
                        var sym13 = object1[i].symbol;
                        var number = read.questionInt("enter how many shares you want to sell :");
                        var s = " customer name :" + customername1 + " and name of company " + name11 + " & symbol  " + sym13 + " sell number of shares :" + number;
                        console.log(s);
                        //this.stackps(s);
                        var time11 = new Date();
                        console.log(" Time of selling the share is " + Math.floor(time11.getSeconds()) + " sec ");
                        //this.queuetime(time1);
                        var n = parseInt(data.customer[index].share)
                        var n11 = parseInt(data1.company[i].share)
                        var num = parseInt(number);
                        var n1 = n - num;
                        var n2 = n11 + num;
                        data.customer[index].share = n1;
                        data1.company[i].share = n2;
                        var d = file.writeFileSync('customer.json', JSON.stringify(data));
                        var d1 = file.writeFileSync('company.json', JSON.stringify(data1));
                    }
                }
            }
        }
    }

    print(data, data1) {
        console.log("customer shares information :");
        console.log(data);
        console.log("company shares information :");
        console.log(data1);
    }
}
module.exports = { stockAccount }

