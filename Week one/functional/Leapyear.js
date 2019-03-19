var util =require("../utility/utility");

var read = require('readline-sync');

var  year= read.questionInt("Enter the year :");
if (year > 999 && year <=9999)
{
    util.leapYear(year);
}
else
{
    console.log("Year must be a 4 digit");
}
