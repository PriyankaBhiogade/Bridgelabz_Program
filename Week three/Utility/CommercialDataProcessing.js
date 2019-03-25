var read = require('readline-sync');
//var util = require('./CommercialDataProcessing');
var file = require('fs');

class StockAccount {
    constructor() {

    }


    createAccount(obj1) {
        var name = read.question("Enter Your Name::  ");

        var id = Math.round(Math.random() * 100);

        var share = read.question("How many Share you want to Add::  ")
        console.log();
        console.log("Your Id is:: " + id);
        console.log();
        obj1.customer.push({
            "Name": name,
            "Id": id,
            "Share": share
        })
        console.log(obj1.customer);
        var data = file.writeFileSync('Customer.json', JSON.stringify(obj1))
        console.log("Account Created Sucessfully!!!!")
    }

    buyShares(obj1, obj2) {
        var flag = false;

        console.log(obj1);
        var object = obj1.customer;

        var id1 = read.question("Enter Your ID:: ");

        for (var i in object) {
            if (object[i].Id == id1) {
                var index = obj1.customer.indexOf(object[i]);
                var customerName = object[i].Name;
                console.log();
                console.log("******Comapany Information*****");
                console.log();
                console.log(obj2);
                var object1 = obj2.company;

                console.log();
                var sym = read.question("Enter Symbol of Company::  ");
                console.log();
                for (let i in object1) {
                    if (object1[i].Symbol == sym) {
                        console.log();
                        console.log("See Company Detail!!!");
                        console.log(object1[i])
                        var name11 = object1[i].Name;
                        var sym11 = object1[i].Symbol;
                        var share = object1[i].Share;

                        do {
                            console.log();
                            var num = read.question("Enter number of Share You want to Buy::  ");
                            if (num > share) {
                                console.log("Please Enter Number of Share less than Company Share..")
                            }
                            else
                                var flage = true;

                        } while (!flage)

                        var p = " Customer Name is: " + customerName + "\r \n Company Name : " + name11 + " And Symbol is : " + sym11 + " \r \n And He Buy "+ num + " Share"
                        console.log(p);

                        
                        var n = parseInt(obj1.customer[index].Share);
                        var n11 = parseInt(obj2.company[i].Share);
                        var number = parseInt(num);
                        var cusTotal = n + number;
                        var comToatal = n11 - number;
                        if (n11 > number) {
                            obj1.customer[index].Share = cusTotal;
                            obj2.company[i].Share = comToatal;
                            var x = file.writeFileSync('Customer.json', JSON.stringify(obj1));
                            var y = file.writeFileSync('Company.json', JSON.stringify(obj2));
                            var time = new Date();
                        console.log("Time of Buying the Share is:: " + Math.floor(time.getSeconds()) + " sec")
                        console.log("Date of Buying the Share is:: " + Math.floor(time.getDate()) + "/" + (time.getMonth() + 1) + "/" + (time.getFullYear()));
                        }
                    }
                }
            }
        }

    }
    sellShares(obj1, obj2) {
        var flag = false;

        console.log(obj1);
        var object = obj1.customer;

        var id1 = read.question("Enter Your ID:: ");

        for (let i in object) {
            if (object[i].Id == id1) {
                var index = obj1.customer.indexOf(object[i]);
                var customerName = object[i].Name;
                console.log();
                console.log("    Comapany Information   ");
                console.log();
                console.log(obj2);
                var object1 = obj2.company;
                console.log();
                var sym = read.question("Enter Symbol of Company::  ");
                console.log();
                for (let i in object1) {
                    if (object1[i].Symbol == sym) {
                        console.log("See Company Detail!!!");
                        console.log(object1[i])
                        var name11 = object1[i].Name;
                        var sym11 = object1[i].Symbol;
                        var share = object1[i].Share;

                        var num = read.question("Enter number of Share You want to Sell::  ");

                        var p = " Customer Name: " + customerName + "\r \n Company Name: " + name11 + " And  Symbol: " + sym11 + "  \r \n He  Sell "+ num +"Share " ;
                        console.log(p);

                       

                        var n = parseInt(obj1.customer[index].Share);
                        var n11 = parseInt(obj2.company[i].Share);
                        var number = parseInt(num);
                        var cusTotal = n - number;
                        var comToatal = n11 + number;
                        if (n11 > number) {
                            obj1.customer[index].Share = cusTotal;
                            obj2.company[i].Share = comToatal;
                            var x = file.writeFileSync('Customer.json', JSON.stringify(obj1));
                            var y = file.writeFileSync('Company.json', JSON.stringify(obj2));
                            var time = new Date();
                            console.log("Time of Selling the Share is:: " + Math.floor(time.getHours()) + " sec");
                            console.log("Date of Selling the Share is:: " + Math.floor(time.getDate()) + "/" + (time.getMonth() + 1) + "/" + (time.getFullYear()));
                        }
                    }
                }

            }
        }


    }

    print(obj1, obj2) {
        console.log("Customer shares information :");
        console.log(obj1);
        console.log("Company shares information :");
        console.log(obj2);
    }


}
module.exports = {
    StockAccount
}


