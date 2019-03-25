var linked = require('../Utility/LinkedList');
var read =  require('readline-sync');
/**
 * Purpose      :   Maintain the List of CompanyShares in a Linked List And add new CompanyShares as 
                    well as or removed easily.
 * @file        :   CompanySharesLinkList.js
 * @overview    :   Create JSON object to read the data.
 * @author      :   PriyankaBhiogade
 * @version     :   1.0
 * @since       :   19-3-2019
 **/



//used for performing file operations.
var fs = require('fs');

//used to read data from json file
var element = fs.readFileSync('CompanyLinkedList.json');

var jsonCompanyData = JSON.parse(element);

var list = new linked.LinkedList;


//used to call a function once for each element in an array, in order
for(var key in jsonCompanyData.company)
{
    list.add(jsonCompanyData.company[key])  
}

function Stocklinkedlist()
{
    console.log('\n1.Add  \n2.Remove  \n3.Save \n4.Display \n5.Exit');
    var choice = read.question('Enter your choice :');
    while(choice!=5)
    {
    
    if(choice == 1)
    {
        var name = read.question('Enter company name :');
        var PerShare = read.question('Enter per share price :');
        var total = read.question('Enter total number of shares :');
        var enterValue = {
            symbol: name,
            pricePerShare: PerShare,
            totalShare: total
        }

        list.add(enterValue);      
        console.log('----- Company added -----');
        Stocklinkedlist();
    }
    else 
    if(choice == 2)
    {
        var array = [];
        array = list.printListStock();  
        console.log(array);
        var curr = list.head;   
        var deleteCompany = read.question('Enter the company name you want to delete :');
        let n = 0;
        var flag=true;
        while(curr && flag)
        {
            n++;           
            if(curr.data.symbol === deleteCompany)
            {  
                console.log('curr :',curr.data.symbol);                
                list.popIndex(n);
                flag=false;              
            }
            curr = curr.next;
        }
        if(flag)
        {
            console.log('Index not found');
        }

        console.log('Updated List');
        var array = [];
        array = list.printListStock();  
        console.log(array);
        Stocklinkedlist();
    }
    else 
    if(choice == 3)
    {
        var arrayForOutput = [];
        arrayForOutput = list.printListStock();
        console.log('Output Array is :');     
        console.log(arrayForOutput);
        var b={"company":arrayForOutput}
        fs.writeFileSync('./CompanyLinkedList.json', JSON.stringify(b), 'utf-8', function () 
        {
            console.log('done')
        });
        console.log('Data saved to file'); 
        Stocklinkedlist();       
    }
    else 
    if(choice == 4)
    {
        var array = [];
        array = list.printListStock();  
        console.log(array);
        Stocklinkedlist();
    }
    else
    if(choice == 5)
    {
        console.log("exit");
        process.exit();
        
    }
    else 
    {
        console.log('-----Invalid choice-----'); 
        Stocklinkedlist();        
    } 
}
}
Stocklinkedlist();