var util =require("../utility/utility");

var read = require('readline-sync');

var  stake = read.question("Enter the stake :");

var  goal= read.question("Enter the goal :");

var  beat= read.question("Enter the bets :");

util.gambler( stake,goal,beat)