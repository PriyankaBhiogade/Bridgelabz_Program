var util =require("../Algorithm_utility/utility")

var read = require('readline-sync');
/*
    let d = Number(process.argv[4]);
    let m = Number(process.argv[2]);
    let y = Number(process.argv[3]);
    */
  

  var d=read.question("Enter the date: ")
    if (d >= 1 && d <= 31)
    {  
      var m=read.question("Enter the month: ")
      if(m > 1 && m < 12) 
      {
          var y=read.question("Enter the year: ")
          if(y > 999 && y <= 9999)
          {
            var day=util.dayOfWeek(d,m,y);
          }
          else 
          {
            console.log(" Year must be in between 999 to 9999")  
          }
      }    
      else 
      {
      console.log(" month  must be in between 1 to 12")
      }
    }
    else
    {
     console.log(" date must be in between 1 to 31")   
    }

     
    
    var array =['Sunday','Monday','Tuesday','Wednesday','Thusday','Friday','Saturday'];

      console.log(array[day])