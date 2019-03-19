var read = require('readline-sync')
var util = require('../Utility/OOPutility')
const fileStream = require('fs')

/**
 * Purpose      :   Replace the particular strings of the file using regex.
 * @file        :   RepalceName.js
 * @overview    :   Use readfile to read all the words in the file with space as seperator.
 * @author      :   PriyankaBhiogade
 * @version     :   1.0
 * @since       :   18-3-2019
 **/

const String = fileStream.readFileSync('String.txt', 'utf8')

function Replace() {
    try {
        var name = read.question("Enter the name: ")
        console.log()
        while (!isNaN(name)) {
            console.log("Please Enter valid Name and Alphabet only")
            console.log()
            var name = read.question("Enter the name: ")
            console.log()

        }
        var fullName = read.question("Enter the Full name: ")
        console.log()
        while (!isNaN(fullName)) {
            console.log("Please Enter valid Full Name and Alphabet only")
            console.log()
            var fullName = read.question("Enter the Full name: ")

        }

        var num = read.question("Enter Mobile Number: ")
        console.log()
        while (isNaN(num) && num.length != 10) {
            console.log("Please Enter valid 10 digit Mobile Number ")
            console.log()
            var num = read.question("Enter the Mobile Number: ")

        }
        console.log()
        var date = new Date();
        var day = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
        var answer = util.replceRegex(name, fullName, num, day, String)
        console.log(answer)
    }

    catch (error) {
        console.log(error.message)
    }
}
Replace();