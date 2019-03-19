var util =require("../utility/utility");

var read = require('readline-sync');

function ticTacToe() {
    var flag = false;
    var arr = util.intializeGame();
    console.log("Player 1 : Computer, Symbol : O");
    console.log("Player 2 : Your, Symbol : x");
    console.log("Winning isn't everything, but wanting to win is...");
    var count = 1;
    while (count <= 9) {
        arr = util.computerPlayer(arr);
        count++;
        while (count > 4) {
            flag = util.check(arr);
            break;
        }
        if (flag) {
            console.log("Computer is the winner. Better luck next time");
            break;
        }
        else if (count == 8) {
            console.log("Draw match.. Try next!");
            break;
        }
        arr = util.userPlayer(arr);
        while (count > 4) {
            flag = util.check(arr);
            break;

        }
        if (flag) {
            console.log("Gosh!.. I knew it. You are the winner");
            break;
        }
        count++;
    }
    console.log("Game end");
}
ticTacToe();