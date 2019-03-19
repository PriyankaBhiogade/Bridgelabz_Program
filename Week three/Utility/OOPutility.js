var readline = require('readline-sync');
const fileStream = require('fs')
var ref = require('util')
var que = require('../../Week two/Utility/Queue')
var algo = require("../../Week one/Algorithm_utility/utility")
module.exports = {

    replceRegex(name, fullName, num, day, fileString) {

        fileString = fileString.replace("<<name>>", name);

        fileString = fileString.replace(/<<fullName>>/g, fullName);

        fileString = fileString.replace(/xxxxxxxxxx/g, num);

        fileString = fileString.replace(/xx-xx-xxxx/g, day);

        //console.log(fileString)
        return fileString;
    },

    deckOfCards() {

        var suit = []
        suit = ["Clubs", "Diamonds", "Hearts", "Spades"]

        var rank = []
        rank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"]

        var n = suit.length * rank.length;
        var deck = [];

        for (let i = 0; i < suit.length; i++) {

            for (let j = 0; j < rank.length; +j++) {
                let temp = "";
                deck.push(temp + rank[j] + "  " + suit[i]);


            }
        }
        for (let i = 0; i < n; i++) {
            var r = parseInt((Math.random() * deck.length));

            var temp = deck[i];
            deck[i] = deck[r];
            deck[r] = temp;
        }

        // print shuffled deck
        var arr = [[], [], [], []]
        var x = 0, y = 9;
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 9; j++) {
                arr[i][j] = deck[j + x]
                //console.log()


            }
            x = x + 9;
            //console.log()
            //ref.print(arr)

        }
        console.log(arr)

        console.log(",")
        console.log('\n')



        for (var k = 0; k < 4; k++) {
            for (var p = 0; p < 9; p++) {
                //str= str + array1[k][p] + " "
                ref.print("[" + arr[k][p] + "]")

                console.log()
            }
            console.log('\n')//printing into the console
        }
    },

    deckOfCardsQueue() {
        var player1 = new que.Queue();
        var player2 = new que.Queue();
        var player3 = new que.Queue();
        var player4 = new que.Queue();

        var suit = []
        suit = ["Clubs", "Diamonds", "Hearts", "Spades"]

        var rank = []
        rank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"]

        var n = suit.length * rank.length;
        var deck = new Array();

        for (let i = 0; i < suit.length; i++) {

            for (let j = 0; j < rank.length; +j++) {
               let temp = "";
                deck.push( temp+rank[j] + " " + suit[i]);
            }

        }
        for (let i = 0; i < n; i++) {
            var r = parseInt((Math.random() * deck.length));

            var temp = deck[i];
            deck[i] = deck[r];
            deck[r] = temp;
        }

        for (let index = 0; index < deck.length; index++) {
            if (index < 13) {
    
                player1.push(deck[index])//pushing values into the queue
            }
            else if (index < 26 && index >= 13) {
    
                player2.push(deck[index])//pushing values into the queue
            }
            else if (index < 39 && index >= 26) {
                player3.push(deck[index])//pushing values into the queue
            }
            else {
                player4.push(deck[index])//pushing values into the queue
            }
        }
        array1 = player1.getData().split(" ")//splitting data that is in the queue
        array2 = player2.getData().split(" ")
        array3 = player3.getData().split(" ")
        array4 = player4.getData().split(" ")
    
        algo.insertionSortString(array1)//sorting all the values using insertion sort
        algo.insertionSortString(array2)
        algo.insertionSortString(array3)
        algo.insertionSortString(array4) 
        console.log(array1)
        console.log("The cards that 1st player is having is " + array1.join())//displaying all the cards that the player have
         console.log()
        console.log("The cards that 2nd player is having is " + array2.join())
        console.log()
        console.log("The cards that 3rd player is having is " + array3.join())
        console.log()
        console.log("The cards that 4th player is having is " + array4.join())
        console.log()
    }
    
}




