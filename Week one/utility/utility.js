var read = require('readline-sync');


module.exports = {

	/**
	 * @Purpose:User Input and Replace String Template “Hello <<UserName>>, How are you?” 
	 * @author:
     * PriyankaBhiogade
	 * @version:1.0
	 * @since 4-3-2019
	 **/

    replaceString(str) {

        var str1 = "hello <<username>>,How are you ?";

        if (str.length > 3) {

            var str2 = str1.replace("<<username>>", str);
            console.log(str2);
        }
        else {
            console.log("Invalid Input");
        }

    },
    /**
	 * @Purpose:Filp coin print out heads or tails finally prints percentage of heads and tails
	 * @author PriyankaBhiogade
	 * @version 1.0
	 * @since 4-3-2019
	 **/


    flipCoin(num) {
        var head = 0;
        var tail = 0;
        var i;
        if (num > 0) {
            let side = [];
            for (i = 0; i < num; i++) {
                side[i] = (Math.random());
                console.log(side[i]);

                if (side[i] < 0.5) {

                    console.log("head");
                    head++;
                    console.log("");
                }

                else {
                    console.log("tail");
                    tail++;
                    console.log("");
                }
            }
            head = (head * 100) / num;
            console.log(head + '% of head was fliped');
            console.log("");
            tail = (tail * 100) / num;
            console.log(tail + '% of tail was fliped');
        }
        else {
            console.log("number should be greater than 0");
        }
    },

    /**
	 * @Purpose:Check Year is Leap Year or not
	 * @author PriyankaBhiogade
	 * @version 1.0
	 * @since  4-3-2019
	 **/

    leapYear(year) {

        if ((year % 100 != 0)&& (year % 4 == 0) || (year % 400 == 0)) {
            console.log(year + " is leap year ")
        }
        else {
            console.log(year + ' is not leap year')
        }

    },


    /**
    * @Purpose:Print the table of power of two that are less then or equal to 2^n
    * @author PriyankaBhiogade
    * @version 1.0
    * @since 4-3-2019
    **/


    poweroftwo(number) {
        var i = 0;

        var power = 1;

        while (i <= number) {

            {
                console.log("2^" + i + " = " + power);

                power = power * 2;
                i++;
            }

        }

    },
    /**
    * @Purpose: Print the n harmonic number 
    * @author PriyankaBhiogade
    * @version 1.0
    * @since  4-3-2019
    **/

    harmonicNumber(num) {
        var i;
        var result=0.0;
        var temp =0.0;
        if (num > 0) {
            console.log("Harmonic series of " + num + " number = ");
            for (i = 1; i <= num; i++) {
                result += 1/i;
               // console.log("1/" + i);
               console.log("Result is:"+(temp+1/i) )
                if (i == num)
                    break;

                //console.log(" +");

            }
            console.log("Final Result:"+result)
           
        }
        else
            console.log("Number must be greater than zero")
    },

    /**
	 * @Purpose:Computes the prime factorization of N using brute force.
	 * @author PriyankaBhiogade
	 * @version 1.0
	 * @since  4-3-2019
	 **/

    fact(num) {
        while (num % 2 == 0) {
            console.log(2 + ' ');
            num /= 2;
        }
        for (var i = 3; i <= Math.sqrt(num); i = i + 2) {

            while (num % i == 0) {

                console.log(i + ' ');
                num /= i;
            }
        }

        if (num > 2)

            console.log(num + ' ');

    },
    /**
         * @Purpose:gambler starts with certain stake in INR and place fair Re 1 bet until he/she goes broke or reaches the goal set as input
         * @author PriyankaBhiogade
         * @version 1.0
         * @since  4-3-2019
         **/


    gambler(stake, goal, bets) {
        var wins = 0;
        var loss = 0;
        var cash = stake;

        if (goal <= cash)
            console.log("goal is less than or equal to cash");

        else {
            for (var i = 1; i <= bets; i++) {

                if (Math.random() < 0.5) {
                    loss++;
                    cash = cash--;
                }
                else {
                    wins++;
                    cash = cash++;
                }
            }

            if (cash >= goal)
                console.log("reached goal...");
            else
                console.log("can't reach the goal...");

            var pw = (wins * 100) / bets;
            console.log(" win percentage=" + pw);
            var pl = (loss * 100) / bets;
            console.log(" loss percentage=" + pl);
        }
    },
    /**
         * @Purpose: Given N distinct Coupon Numbers, how many random numbers do you need to generate distinct coupon number? This program simulates this random process 
         * @author PriyankaBhiogade
         * @version 1.0
         * @since  4-3-2019
         **/

    CouponNumbers(number) {
        var arr = [];
        var num = 0;
        while (number != num) {
            var x = Math.round(Math.random() * number)
            if (!arr.includes(x)) {
                arr.push(x);
                num++;
            }
        }
        console.log(arr)
    },

    /**
         * @Purpose:Reading in 2D arrays of integers, doubles, or booleans from standard input and printing them out to standard output 
         * @author PriyankaBhiogade
         * @version 1.0
         * @since  4-3-2019
         **/

    array(row, col) {
        var arr = [];
        for (var i = 0; i < row; i++) {
            arr[i] = [];
            for (var j = 0; j < col; j++) {
                arr[i][j] = read.question("Enter the element of :'Row' " + i + " 'Column' " + j + ": ");

            }
        }


        console.log(arr);

    },
    /**
         * @Purpose:A program with cubic running time. Read in N integers and counts the number of triples that sum to exactly 0.
         * @author PriyankaBhiogade
         * @version 1.0
         * @since  4-3-2019
         **/


    triplet(array) {

        // var sum = 0;



        if (array.length != 0) {
            for (var i = 0; i < array.length - 2; i++) {
                for (var j = i + 1; j < array.length - 1; j++) {

                    for (var k = j + 1; k < array.length; k++) {

                        if (parseInt(array[i]) + parseInt(array[j]) + parseInt(array[k]) == 0) {
                            console.log("Triplet is " + array[i] + ", " + array[j] + ", " + array[k]);
                            //console.log(array);
                        }
                    }
                }
            }
        }

        else {

            console.log("invalid Input ");
        }




    },

    /**
         * @Purpose:Euclidean distance from(x,y)to the origin(o,o).and then calculate the distance=sqrt(x*x+y*y)   
         * @author PriyankaBhiogade
         * @version 1.0
         * @since  4-3-2019
         **/



    point(x1, y1) {

        dis = Math.sqrt((x1 * x1) + (y1 * y1));

        console.log("distance between(" + x1 + "," + y1 + ") to origin (0,0)=" + dis);
    },


    /**
         * @Purpose:permutation of a String using iterative method and Recursion method
         * @author PriyankaBhiogade
         * @version 1.0
         * @since  4-3-2019
         **/


    permutation1(str, first) {
        var string = "";
        last = string.length - 1;
        if (first == last) {
            //console.log(str);
            string = string + str;
        }
        else {
            for (var index = first; index <= last; index++) {
                //call swapstring method swap the characters 
                str = this.swapString(str, first, index);
                // recursion method 
                string = this.permutation1(str, first + 1);
                str = this.swapString(str, first, index);
            }
        }
        return string;
    },

    // Swap method for swaping the string character

    swapString(str, first, last) {
        var as = '';
        //empty array
        var ch = [];
        //split string into the character
        ch = str.split('');
        // temporary variable
        var temp = ch[first];
        ch[first] = ch[last];
        ch[last] = temp;
        for (let index = 0; index < str.length; index++) {
            as = as + ch[index];
        }
        return as;
    },

    /**
	 * @Purpose:To find Quadratic Equation
	 * @author PriyankaBhiogade
	 * @version 1.0
	 * @since  4-3-2019
	 **/

    quadratic(a, b, c) {
        var determine = b * b - 4 * a * c;
        var r1 = 0, r2 = 0;
        if (determine > 0) {
            sqrt = Math.sqrt(determine);
            r1 = (-b + sqrt) / (2 * a);
            r2 = (-b - sqrt) / (2 * a);
            console.log("Root 1 :" + r1);
            console.log("Root 2 :" + r2);
        }
        else if (determine == 0) {
            r1 = -b / (2 * a);
            console.log("Root1 And Root2 :" + r1);
        }
        else {

            var rpart = -b / (2 * a);
            var ipart = Math.sqrt(-determine) / (2 * a);
            console.log("real part imaginary part " + rpart + " , " + ipart);
        }


    },
    /**
         * @Purpose:Simulate Stopwatch Program
         * @author PriyankaBhiogade
         * @version 1.0
         * @since  4-3-2019
         **/

    stopwatch() {
        var time = new Date();
        return time.getSeconds();
    },

    stopwatchmill() {
        var time = new Date();
        return time.getMilliseconds();
    },

    findTime() {
        var sptime;
        var sttime;

        var sttime = read.question("enter starting time :")

        var start = this.stopwatch();
        console.log("Start Time: "+start)

        var sp = read.question("enter stop time :");

        var stop = this.stopwatch();
        console.log("End  Time: "+stop)
        var temp = stop - start;
        console.log(temp);
    },

    /**
     * @Purpose:Write a program to Find Temprature Density
     * @author PriyankaBhiogade
     * @version 1.0
     * @since  4-3-2019
     **/

    windchill(v, t) {

        if (t >= 50 || v >= 120 || v <= 3) {

            console.log("Invalid Input")
        }
        else {
            var w = 35.74 + 0.6215 * t + (0.4275 * t - 35.75) * Math.pow(v, 0.16);

            console.log("Temperature  = " + t);

            console.log("Wind speed  = " + v);

            console.log("Wind chill  = " + w);
        }
    },
/********************* Tic tac toe**********************/
    intializeGame() 
    {
        var game = [];
        for (let i = 0; i <= 2; i++) 
        {
            game [i]=[];
            for (let j = 0; j <= 2; j++)
                game[i][j] = '-';
        }
        return game;
    },
    
    random() 
    {
        var value = Math.floor(Math.random() * 3);
        console.log(value+1);
        return value;
    },
    
    mark(game, x, y, value) 
    {
        if (game[x][y] == '-')
            game[x][y] = value;
        for (let i = 0; i <= 2; i++) 
        {
            var print = [];
            for (let j = 0; j <= 2; j++)
                print[j] = game[i][j];
            console.log(print);
        }
        return game;
    }
    ,
    computerPlayer(game) 
    {
        var arr;
        var flag = false;
        while (flag == false) 
        {
            var x = this.random();
            var y = this.random();
            if (game[x][y] == '-') 
            {
                arr = this.mark(game, x, y, 'O');
                flag = true;
            }
        }
        return game;
    }
    ,
    userPlayer(game) 
    {
        var flag = false;
        while (flag == false) 
        {
            console.log("Enter the row value:");
            let x = read.questionInt('Enter the value of x within 1,2,3 : ')-1;
            let y = read.questionInt('Enter the value of y within 1,2,3 : ')-1;
            if (game[x][y] == '-') 
            {
                this.mark(game, x, y, 'X');
                flag = true;
            }
            else
                console.log("Please enter the correct choice");
        }
        return game;
    }
    ,
    check(game) 
    {
        for (let i = 0; i <= 2; i++) 
        {
            if (game[i][0] == game[i][1] && game[i][1] == game[i][2]) 
            {
                if (game[i][0] == 'O' || game[i][0] == 'X') 
                {
                    return true;
                }
            }
            if (game[0][i] == game[1][i] && game[1][i] == game[2][i]) 
            {
                if (game[0][i] == 'O' || game[0][i] == 'X') 
                {
                    return true;
                }
            }
        }
        var k = 0, l = 0;
        if (game[k][k] == game[k + 1][k + 1] && game[k + 1][k + 1] == game[k + 2][k + 2]) 
        {
            if (game[0][0] == 'O' || game[0][0] == 'X') 
            {
                return true;
            }
        }
        if (game[l][l + 2] == game[l + 1][l + 1] && game[l + 1][l + 1] == game[l + 2][l]) 
        {
            if (game[0][0] == 'O' || game[0][0] == 'X')
            {
                return true;
            }
        }
        return false;
},
}



