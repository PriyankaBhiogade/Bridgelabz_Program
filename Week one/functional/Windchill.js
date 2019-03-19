var util =require("../utility/utility");

var read = require('readline-sync');

  
    console.log('Enter value for v between "3-120" and for t less than "50" : ');

    var v = process.argv[2];
    var t = process.argv[3];

    util.windchill(v,t);