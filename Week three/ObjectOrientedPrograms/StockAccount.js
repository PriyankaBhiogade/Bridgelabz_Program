var read =require('readline-sync')

var fs =  require('fs');

/**
 * Purpose      :   Print a Stock Report with total value of each Stock and the total value of Stock.
 * @file        :   StockReport.js
 * @overview    :   Create JSON object to read the data.
 * @author      :   PriyankaBhiogade
 * @version     :   1.0
 * @since       :   20-3-2019
 **/


var companyData = fs.readFileSync('Company.json','utf8');
var customerData = fs.readFileSync('Customer.json','utf8');
var transactionData = fs.readFileSync('Transaction.json','utf8');

var jsoncompanyData = JSON.parse(companyData);
var jsoncustomerData = JSON.parse(customerData);
var jsontransactionData = JSON.parse(transactionData);

function commercial()
{
    while(choice!=6)
    {
    var read = require('readline-sync');
    console.log("1 Create account ");
    console.log("2 Open account ");
    console.log("3 Edit ");
    console.log("4 Save");
    console.log("5 Exit ");
    
    var choice = read.question('Please enter your choice: ');
    if(choice == 1)
    {
        var NewId = read.question('Id of  new customer :');
        var NewCustomer = read.question('name of new customer :');
            
        jsoncustomerData.customer.push({
            customerId: NewId,
            customerName: NewCustomer,
            symbol: "",
            amount: 0,
            shares: 0
        })
        commercial();
            
        
    }
    if(choice == 2)
    {
        var existingId = read.question('Enter your id: ');
        for(let i = 0 ; i < jsoncustomerData.customer.length ; i++)
        {
            if(jsoncustomerData.customer[i].customerId == existingId)
            {

                console.log('This is your account details: ');
                console.log();
                console.log('symbol: ',jsoncustomerData.customer[i].symbol);
                console.log('customer id: ',jsoncustomerData.customer[i].customerId);
                console.log('customer name: ',jsoncustomerData.customer[i].customerName);
                console.log('amount: ',jsoncustomerData.customer[i].amount);
                console.log('shares: ',jsoncustomerData.customer[i].shares);
                console.log('\n1 Add Money \n2 Buy \n3 Sell \n4 Display \n5 Save \n6 exit');

                var choice4 = read.question('Enter your choice :');

                if(choice4 == 1)
                {
                    var Newamount = read.question('Enter amount you want to add : ');
                    jsoncustomerData.customer[i].amount =  parseInt(jsoncustomerData.customer[i].amount+parseInt(Newamount));
                    console.log(jsoncustomerData);
                   
                } 
                if(choice4 == 2)
                {
                    var nameOfCompanyForShares = read.question('Enter company name from which you want to buy shares :')
                    for(let j = 0 ; j < jsoncompanyData.company.length ; j++)
                    {
                    if(jsoncompanyData.company[j].symbol === nameOfCompanyForShares)
                    {
                             
                        var buyShares = read.question('Enter shares you want to buy:');

                        if(parseInt(buyShares) < parseInt(jsoncompanyData.company[j].totalShares))
                        {
                            console.log('entered shares: ',buyShares);
                            console.log('company,s total shares: ',jsoncompanyData.company[j].totalShares);
                                 
                            jsoncompanyData.company[j].totalShares =parseInt(jsoncompanyData.company[j].totalShares - buyShares); 
                            jsoncustomerData.customer[i].shares =parseInt(jsoncustomerData.customer[i].shares + parseInt(buyShares))
                            jsontransactionData.transaction[i].type = "buy";

                            var d = new Date();
                            var date = d.getDate();
                            var month = d.getMonth();
                            var year = d.getFullYear();
                            var today = date+"/"+(month+1)+"/"+year;
                            jsontransactionData.transaction[i].date = today;
                                 
                            jsontransactionData.transaction.push
                            ({
                            symbol: jsoncompanyData.company[j].symbol,
                            customerId: jsoncustomerData.customer[i].customerId,
                            type: "buy",
                            date: date+"/"+(month+1)+"/"+year
                                     
                            });        
                        }
                        else
                        {
                            console.log('you shares amount is greater then company,s shares');
                        }
                         
                    }

                    }
                    commercial();
                } 
                if(choice4 == 3)
                {
                    var nameOfCompanyForSell = read.question('Enter company name to which you want to sell shares :')
                    for(let z = 0 ; z < jsoncompanyData.company.length ; z++)
                    {
                        if(jsoncompanyData.company[z].symbol === nameOfCompanyForSell)
                        {
                            var sellShares = read.question('Enter shares you want to sell:');
                            sellShares = parseInt(sellShares);
                            jsoncompanyData.company[z].totalShares =parseInt(jsoncompanyData.company[z].totalShares +parseInt(sellShares)); 
                            jsoncustomerData.customer[i].shares =parseInt(jsoncustomerData.customer[i].shares - sellShares);
                            jsontransactionData.transaction[i].type = "sell";
                        
                            var d = new Date();
                            var date = d.getDate();
                            var month = d.getMonth();
                            var year = d.getFullYear();
                            var today = date+"/"+(month+1)+"/"+year;

                            jsontransactionData.transaction[i].date = today;
                            jsontransactionData.transaction.push
                            ({
                            symbol: jsoncompanyData.company[z].symbol,
                            customerId: jsoncustomerData.customer[i].customerId,
                            type: "sell",
                            date: date+"/"+(month+1)+"/"+year        
                            });         
   
                        }
                    }
                    commercial();
                } 
                if(choice4 == 4)
                {
                    console.log(jsoncustomerData.customer[i]);
                    commercial();

                } 
                if(choice4 == 5)
                {
                    fs.writeFileSync('./customer.json', JSON.stringify(jsoncustomerData),'utf-8', function(err){
                    if (err) throw err
                    console.log('Done!');
                    })
                    commercial();

                } 
                if(choice4 == 6)
                {
                    process.exit();
                } 

            }
        }
        commercial();

    }
    if(choice == 3)
    {
        console.log('1 Add company');
        console.log('2 Remove company');
        var choice3 = read.question('Enter your choice: ');
        if(choice3 == 1)
        {
            var CompanyName = read.question('Enter new company name: ');
            var PeicePerShares = read.question('Enter price per shares: ');
            var TotalShares = read.question('Enter total shares: ');

            jsoncompanyData.company.push({
                symbol : CompanyName,
                pricePerShares : PeicePerShares,
                totalShares : TotalShares
            })
            console.log(jsoncompanyData);
            
        }
        if(choice3 == 2)
        {
            var attribute = read.question('Enter company name you want to delete:');
            for(var i=0;i<jsoncompanyData.company.length;i++)
            {
                if(attribute === jsoncompanyData.company[i].symbol)
                {
                    console.log('deleted element',attribute);
                    console.log('search elemetn in array: ',jsoncompanyData.company[i].symbol);
                    jsoncompanyData.company.splice(i, 1);
                }
            }
            console.log(jsoncompanyData);


        }
        
        commercial();

    }
    if(choice == 4)
    {
        fs.writeFileSync('./customer.json', JSON.stringify(jsoncustomerData),'utf-8', function(err){
            if (err) throw err
            console.log('Done!');
        })
        fs.writeFileSync('./company.json', JSON.stringify(jsoncompanyData),'utf-8', function(err){
            if (err) throw err
            console.log('Done!');
        })
        fs.writeFileSync('./transaction.json', JSON.stringify(jsontransactionData),'utf-8', function(err){
            if (err) throw err
            console.log('Done!');
        })
        commercial();

    }
    if(choice == 5)
    {
        process.exit();

    }

}
}
commercial();