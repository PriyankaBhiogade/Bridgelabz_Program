var read = require('readline-sync');
//var util = require('./CommercialDataProcessing');
var file = require('fs');
var util11 = require('../../Week two/Utility/Stack')



class StockAccount {
    constructor() {

        this.stack1 = new util11.Stack();
        this.stack2 = new util11.Stack();
        this.id1;
        this.sym;
        this.d;
        this.type = "Buy";
        this.count = 0
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

        this.id1 = read.question("Enter Your ID:: ");

        for (var i in object) {
            if (object[i].Id == this.id1) {
                var index = obj1.customer.indexOf(object[i]);
                var customerName = object[i].Name;
                console.log();
                console.log("******Comapany Information*****");
                console.log();
                console.log(obj2);
                var object1 = obj2.company;

                console.log();
                this.sym = read.question("Enter Symbol of Company::  ");
                //this.stack1.push(sym);
                console.log();
                for (let i in object1) {
                    if (object1[i].Symbol == this.sym) {
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

                        var p = " Customer Name is: " + customerName + "\r \n Company Name : " + name11 + " And Symbol is : " + sym11 + " \r \n And He Buy " + num + " Share"
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
                            this.count++;



                            var time = new Date();
                            console.log()

                            console.log("Time of Buying the Share is:: " + Math.floor(time.getSeconds()) + " sec")
                            console.log()
                            this.d = console.log("Date of Buying the Share is:: " + (time.getDate()) + "/" + (time.getMonth() + 1) + "/" + (time.getFullYear()));

                            console.log("Thank You for Buying!!!!! ");
                            console.log()
                            if (this.count > 0) {
                                console.log();
                                for (let i = this.count; i <= this.count; i++) {
                                    //  var buy = "Buy"

                                    obj3.transaction = {
                                        symbol: this.sym,
                                        customerId: this.id1,
                                        type: this.type,
                                        date: this.d
                                    }
                                    for (var key in obj3.transaction) {
                                        this.stack1.push(obj3.transaction[key])
                                    }
                                    //obj3.transaction = this.stack1;
                                    this.stack1.push(obj3.transaction)
                                    console.log("Stack info")
                                    console.log(obj3.transaction);
                                    file.writeFileSync('Transaction.json', JSON.stringify(obj3.transaction))
                                }

                            }


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
                this.stack2.push(sym);
                console.log();
                for (let i in object1) {
                    if (object1[i].Symbol == sym) {
                        console.log("See Company Detail!!!");
                        console.log(object1[i])
                        var name11 = object1[i].Name;
                        var sym11 = object1[i].Symbol;
                        var share = object1[i].Share;

                        var num = read.question("Enter number of Share You want to Sell::  ");

                        var p = " Customer Name: " + customerName + "\r \n Company Name: " + name11 + " And  Symbol: " + sym11 + "  \r \n He  Sell " + num + "  Share ";
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
                            var time = new Date()
                            console.log();
                            console.log("Time of Selling the Share is:: " + (time.getHours() + ":" + (time.getMinutes())));
                            var d = console.log("Date of Selling the Share is:: " + (time.getDate()) + "/" + (time.getMonth() + 1) + "/" + (time.getFullYear()));
                            console.log();
                            //console.log("sell Stock Symbol is:: "+this.stack2.pop());
                            console.log()
                            this.count++;
                            console.log("Thank You for Selling!!!!! ");
                            if (this.count > 0) {
                                console.log();
                                for (let i = this.count; i <= this.count; i++) {
                                    //  var buy = "Buy"
                                    var type = "sell"
                                    obj3.transaction = {
                                        symbol: sym,
                                        customerId: id1,
                                        type: type,
                                        date: d
                                    }
                                    for (var key in obj3.transaction) {
                                        this.stack2.push(obj3.transaction[key])
                                    }
                                    //obj3.transaction = this.stack1;
                                    this.stack2.push(obj3.transaction)
                                    console.log("Transction Details:: ")
                                    console.log();
                                    console.log("stack info")
                                    console.log(obj3.transaction);
                                    file.writeFileSync('Transaction.json', JSON.stringify(obj3.transaction))
                                }

                            }

                        }
                    }
                }

            }
        }


    }
    print(obj1, obj2) {
        console.log("Customer shares information :");
        console.log()
        console.log(obj1);
        console.log("Company shares information :");
        console.log()
        console.log(obj2);
    }

    printBuyStack(obj3) {
        if (this.count > 0) {
            console.log();
            for (let i = this.count; i <= this.count; i++) {
                //  var buy = "Buy"
                obj3.transaction = {
                    symbol: this.sym,
                    customerId: this.id1,
                    type: this.type,
                    date: this.date,
                }
                for (var key in obj3.transaction) {
                    this.stack1.push(obj3.transaction[key])
                }
                //obj3.transaction = this.stack1;
                this.stack1.push(obj3.transaction)
                console.log("Stack info")
                console.log(obj3.transaction);
                file.writeFileSync('Transaction.json', JSON.stringify(obj3.transaction))
            }

        }
    }
    printSellStack() {
        console.log()
        console.log("Cell Stock Symbol is:: " + this.stack2.pop());

    }

}
module.exports = {
    StockAccount
}


