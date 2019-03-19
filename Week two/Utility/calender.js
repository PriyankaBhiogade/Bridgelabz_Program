//var utilds = require("../Utility/LinkedList")
var take = require('util');
var ref = require('readline-sync')
var util1 = require('./Queue');
var util2 = require('./Stack');

module.exports = {
    /***********************CalenderQueue**************************/
    calenderQueue(month, year) {
        var weekqueue = new util1.Queue();
        var datesqueue = new util1.Queue();
        var week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        var dates = [0, 31, 28, 31, 30, 31, 31, 30, 31, 30, 31, 30, 31]

        var day = this.dayOfWeek('1', month, year);

        // console.log(day);

        //var leap = this.leapYear(year);//checking wheather the given year is leap year by using isleapyear function
        if (this.leapYear(year) && month == 2) {

            dates[2] = 29;//if the year is leap year then the number of days is 29
        }

        for (var i = 0; i < week.length; i++) {

            weekqueue.push(week[i] + "  ")

        }
        for (var i = 1; i <= dates[month]; i++) {

            datesqueue.push(i)

        }
        for (var i = 0; i < week.length; i++) {

            take.print(weekqueue.pop());

            //take.print(week[i] + "  ");  printing weekdays
        }

        console.log();

        for (var i = 0; i < (day * 5); i++) {
            take.print(" ");
        }

        for (var i = 1; i <= dates[month]; i++) {
            var k = datesqueue.pop()

            if (i < 10) {

                take.print("0" + k + "   ");//printing dates less than 10
            }
            else {
                take.print(k + "   ")//printing dates greater than 10
            }
            if ((i + day) % 7 == 0) {
                console.log();
            }

        }


        console.log("\n\n");

    },
    /********************** Day of a week***********************/
    dayOfWeek(d, m, y) {
        var y0 = y - parseInt((14 - m)) / 12;
        var x = y0 + parseInt(y0 / 4) - parseInt(y0 / 100) + parseInt((y0 / 400));
        var m0 = m + 12 * parseInt(((14 - m) / 12)) - 2;
        var day = (((d + x + 31 * parseInt(m0 / 12)) % 7));
        // console.log(day)
        return Math.floor(day);


    },

    /***************************LeapYear*****************************/
    leapYear(year) {

        if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
            //console.log(year + " is leap year ")
            return true;
        }
        else {
            return false;
            //console.log(year + ' is not leap year')
        }

    },
    /***********************CalenderSimple**************************/
    calender(month, year) {

        var week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        var dates = [0, 31, 28, 31, 30, 31, 31, 30, 31, 30, 31, 30, 31]

        var day = this.dayOfWeek('1', month, year);

        // console.log(day);

        //var leap = this.leapYear(year);//checking wheather the given year is leap year by using isleapyear function
        if (this.leapYear(year) && month == 2) {

            dates[2] = 29;//if the year is leap year then the number of days is 29
        }
        for (var i = 0; i < week.length; i++) {
            take.print(week[i] + "  ");//printing weekdays
        }
        console.log();
        for (var i = 0; i < (day * 5); i++) {
            take.print(" ");
        }

        for (var i = 1; i <= dates[month]; i++) {
            if (i < 10) {

                take.print("" + "0" + i + "   ");//printing dates less than 10
            }

            if (i > 9) {
                take.print("" + i + "   ")//printing dates greater than 10
            }
            if ((i + day) % 7 == 0) {
                console.log();
            }

        }

        console.log("\n\n");

    },
    /**********************calender Stack  *****************************/
    calenderStack(month, year) {
        var weekstack = new util2.Stack();
        var datesstack = new util2.Stack();
        var weekstack1 = new util2.Stack();
        var datesstack1 = new util2.Stack();
        var week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        var dates = [0, 31, 28, 31, 30, 31, 31, 30, 31, 30, 31, 30, 31]

        var day = this.dayOfWeek('1', month, year);

        //var leap = this.leapYear(year);//checking wheather the given year is leap year by using isleapyear function
        if (this.leapYear(year) && month == 2) {

            dates[2] = 29;//if the year is leap year then the number of days is 29
        }

        for (var i = 0; i < week.length; i++) {

            weekstack.push(week[i] + "  ")
        }

        for (var i = 1; i <= dates[month]; i++) {

            datesstack.push(i)
        }

        for (var i = 0; i < week.length; i++) {

            weekstack1.push(weekstack.pop())
        }

        for (var i = 1; i <= dates[month]; i++) {

            datesstack1.push(datesstack.pop())
        }
        for (var i = 0; i < week.length; i++) {
            // for (var i = week.length; i > 0; i--) {
            take.print(weekstack1.pop());

            //take.print(week[i] + "  ");  printing weekdays
        }

        console.log();

        for (var i = 0; i < (day * 5); i++) {
            take.print(" ");
        }

        for (var i = 1; i <= dates[month]; i++) {
            var k = datesstack1.pop()

            if (i < 10) {
                take.print("0" + k + "   ")

                //printing dates less than 10
            }
            else {
                take.print(k + "   "); //printing dates greater than 10
            }
            if ((i + day) % 7 == 0) {
                console.log();
            }

        }
            console.log("\n\n");
        }
}