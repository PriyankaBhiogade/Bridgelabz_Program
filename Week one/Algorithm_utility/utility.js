var read = require('readline-sync');

module.exports = {
  /**
  * @Purpose:An Anagram Detection Example
  * @author PriyankaBhiogade
  * @version 1.0
  * @since 4-3-2019
  **/

  checkAnagram(string1, string2) {

    //var result;
    var ch1 =[], ch2 =[];
    string1 =string1 + ""
    string2=string2 + ""
    ch1 =string1.split('');
    ch2 =string2.split('');
    if (ch1.length !== ch2.length) {
     //console.log("string are not anagram");
      return false;
    }

    var str1 = ch1.sort();
    var str2 = ch2.sort();
    for (var i = 0; i < str1.length; i++) {
      var count = 0;
        for (var j = 0; j < str2.length; j++) {

        if (str2[j].toLowerCase() == str1[i].toLowerCase()) {
           
          count++;
          break;
         
        }
      }

    }
if (count > 0){
   //console.log("string are anagram");
    return true;
}
else
//console.log("string is not anagram ")
return false

  },
  /**  
 * @Purpose:To find rang of prime number 
 * @author PriyankaBhiogade
 * @version 1.0
 * @since 4-3-2019
 **/
 

  primeNum(num) {
    var result = "" ;
    if (num >= 1 && num <= 1000) {
      for (var i = 0; i <= num; i++) {
        var temp = 0;
        for (var j = 0; j <= i; j++) {
          if (i % j == 0)

            temp = temp + 1;

        }

        if (temp == 2) {
          console.log("Number is Prime " + i + " ");
          result =result + i +" ";

        }
      }

      return result;
     
    }
    else {
      console.log("Number in between 0 to 1000:")
    }
  },
  /**
  * @Purpose:To find the prime numbers that are Anagram and Palindrome
  * @author PriyankaBhiogade
  * @version 1.0
  * @since 4-3-2019
  **/


  primeAnagramPalindrom(str) {
  
   
    var i, j;
    //console.log(str);
   
    for (i = 0; i < str.length - 1; i++) {
      for (j = i + 1; j < str.length; j++) {
        if (this.checkAnagram(str[i], str[j])){
          //console.log("Is Anagram")
      
      if (this.palindrom(str)){
        console.log(str + " are palindrome")
      }
          
        }
      }

      }
    

  },
  /************************palindrom*************************/

  palindrom(str) {
  
    var num , rev = 0 , rem;
   num = str;
    while( num != 0 )
    {
        rem = num % 10;
        rev = rev * 10 + rem;
        num  /= 10;
    }

    if (str == rev)
        return str;
 



},

  /**
  * @Purpose:Check using Stopwatch the Elapsed Time using Static Search and Sorted List
  * @author PriyankaBhiogade
  * @version 1.0
  * @since 4-3-2019
  **/
  /****************  Binary Search Int************************/

  binarySearchInt(arr, number) {
  //console.log("in binary search " + arr)
  var temp = arr.length
  var high = temp - 1;
  var low = 0;
  var mid = 0;

  while (low < high) {
    mid = Math.floor((high + low) / 2)
    if (arr[mid] == number) {
      console.log("number is present in " + (mid + 1) + "rd position")
      return true
    }
    else if (arr[mid] > number) {

      high = mid - 1
    }
    else {
      low = mid + 1
    }
    if (low > high) {

      //return false;
      console.log("invalid input")
    }
  }
},

sortarrayInt(array) {
  var sort = array.sort(function (a, b) { return a - b });
  console.log(sort)

  var number = read.question("enter the number which you want to search: ")

  var arr = sort;
  var sortedlist = this.binarySearchInt(arr, number);

},

/****************  Binary Search string************************/

binarySearchString(arr, string) {
  console.log("in binary search [ " + arr + ' ]')
  var temp = arr.length
  var high = temp - 1;
  var low = 0;
  var mid = 0;

  while (low < high) {
    mid = Math.floor((high + low) / 2)
    if (arr[mid] == string) {
      console.log("string is present in " + (mid + 1) + "rd position")
      return true
    }
    else if (arr[mid] > string) {

      high = mid - 1
    }
    else {
      low = mid + 1
    }
    if (low > high) {

      //return false;
      console.log("invalid input")
    }
  }
},
sortarrayString(array) {
  var s1 = array.sort();
  console.log(s1)
  var arr = s1;
  var String = read.question("enter the string which you want to search: ")


  var sortedlist = this.binarySearchString(arr, String);

},
/************************ read file     **************************************/
 
fileCall(fileName) {
  var fileStream = require('fs');
  var f = fileStream.readFileSync(fileName, 'utf8');
  var arr = f.trim().split(' ');
 console.log(arr + "   in arr")
  return arr;
},

/********************* Insertion Sort String*************************/


insertionSortString(arr) {
  for (var i = 1; i < arr.length; i++) {
    var temp = arr[i];
    var j = i - 1;
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = temp;
  }
  return arr;
},


/********************* Insertion Sort int*************************/


insertionSortInt(arr) {
  for (var i = 1; i < arr.length; i++) {
    var temp = parseInt(arr[i]);
    var j = i - 1;
    while (j >= 0 && parseInt(arr[j]) > temp) {
      arr[j + 1] = parseInt(arr[j]);
      j = j - 1;
    }
    arr[j + 1] = temp;
  }
  return arr;
},

/***************************** Bubble Sort Int *********************** */

bubbleSortInt(arr) {
  var n = arr.length;
  for (var i = 0; i < n - 1; i++) {
    for (var j = 0; j < n - i - 1; j++) {
      if (parseInt(arr[j]) > parseInt(arr[j + 1])) //Desending Order
      {
        var temp = parseInt(arr[j]);
        arr[j] = parseInt(arr[j + 1]);
        arr[j + 1] = temp;
      }

    }
  }
  console.log(arr)
  return arr;
},
/***************************** Bubble Sort String*********************** */

bubbleSortString(arr) {
  var n = arr.length;
  for (var i = 0; i < n - 1; i++) {
    for (var j = 0; j < n - i - 1; j++) {
      if ((arr[j]) > (arr[j + 1])) {
        var temp = (arr[j]);
        arr[j] = (arr[j + 1]);
        arr[j + 1] = temp;
      }

    }
  }
  return arr;
},


/************************Stopwatch using bubble sort **************************/
StopwatchSearchAndSort(arr) {

  //binary search

  var start = this.stopwatchmill()
  var temp = this.sortarrayInt(arr)
  var stop = this.stopwatchmill()
  var totaltime1 = stop - start;
  console.log("Binary Search take " + totaltime1 + " millsecond to exicute the code");
  console.log();


  //bubble Sort
  var start = this.stopwatchmill()
  var temp = this.bubbleSortInt(arr)
  var stop = this.stopwatchmill()
  var totaltime2 = stop - start;
  console.log("Bubble Sort take " + totaltime2 + " millsecond  to exicute the code");
  console.log();




  //insertion sort

  var start = this.stopwatchmill()
  var temp = this.insertionSortInt(arr)
  var stop = this.stopwatchmill()
  var totaltime3 = stop - start;
  console.log("Insertion Sort take " + totaltime3 + " millsecond  to exicutethe code");




},

stopwatchmill() {
  var time;
  var date = new Date();
  time = date.getMilliseconds();
  console.log(time)

  return time

},

stopwatch() {
  var date = new Date();
  return date.getSeconds();
},
/**
* @Purpose:convert decimal to binary and Swap nibbles and find the new number 
* @author PriyankaBhiogade
* @version 1.0
* @since 4-3-2019
**/

toBinary(num) {
  var temp = num;
  var st = "";
  while (temp > .9) {

    var s = Math.floor(temp % 2)
    st = s + st
    temp = temp / 2

  }

  console.log("binary value for given number is:" + st)
  var swap = this.swap(st)
},

swap(num) {
  var fn = num.slice(0, 4)
  var ln = num.slice(4)
  swap = ln + fn;
  //var swap = ((num & 0x0F) << 4 | (num & 0xF0) >> 4)
  console.log("After Swaping two nibbles" + swap)
  console.log("Decimal number is :" + parseInt(swap, 2))
},
/**
* @Purpose:To find square using Newton method
* @author PriyankaBhiogade
* @version 1.0
* @since 4-3-2019
**/

findSquare(c) {

  var epsilon = 1e-15;
  var t = c;

  while (Math.abs(t - c / t) > epsilon * t) {
    t = (c / t + t) / 2.0;
  }

  // print out the estimate of the square root of c
  console.log("estimated of the square root :" + t);
  return t;
},
/**
* @Purpose:Find monthly payment using formula
* @author PriyankaBhiogade
* @version 1.0
* @since 4-3-2019
**/


monthlyPayment(Y, R, P) {
  var n = 12 * Y;
  var r = R / (12 * 100)
  var d = 1 - (1 + r) ** (-n)
  var mp = (P * r) / d;
  console.log(" monthly Payment is :" + mp)


},
/**
* @Purpose:add temperaturConversion static function and find temperature in Celsius or viceversa
* @author PriyankaBhiogade
* @version 1.0
* @since 4-3-2019
**/

convertToF(celsius) {
  var fahrenheit;

  fahrenheit = (celsius * (9 / 5)) + 32;

  console.log(fahrenheit)
},

convertToT(fahrenheit) {
  var celsius;

  celsius = (fahrenheit - 32) * 5 / 9;

  console.log(celsius)

},

/**
* @Purpose:Find day in a week using formula
* @author PriyankaBhiogade
* @version 1.0
* @since 4-3-2019
**/

dayOfWeek(d, m, y) {


  var y0 = y - parseInt((14 - m)) / 12;
  var x = y0 + parseInt(y0 / 4) - parseInt(y0 / 100) + parseInt((y0 / 400));
  var m0 = m + 12 * parseInt(((14 - m) / 12)) - 2;
  var day = (d + x + 31 * parseInt(m0 / 12)) % 7;
  console.log(Math.floor(day))

  return Math.floor(day);
},
/**
* @Purpose:to convert decimaldemo into binary 
* @author PriyankaBhiogade
* @version 1.0
* @since 4-3-2019
**/


toDecimal(num) {
  //num = this.toBinary(num)
  //binary convertion
  var str = num;
  var bin = (+str).toString(2);
  console.log(bin)
  console.log(num+"=")

  len = bin.length - 1;

  for (var i = 0; i < bin.length; i++) {
    var x = Math.floor(Math.pow(2, len))

    if (bin[i] == 1) {
      var result = " " + x + " + ";
      len--;
      bin.length--;
      //console.log("Decimal value" + result);
      console.log(result)
     
      //console.log("+")
    }
    else {
      result = "" + x;
      //console.log(result)
      len--;
      bin.length--;
    }
  }

},
/**
* @Purpose:Find the Fewest Notes to be returned for Vending Machine
* @author PriyankaBhiogade
* @version 1.0
* @since 4-3-2019
**/


vendingMachine(arr, amount) {

  var notes = 0
  for (let i = 0; i < arr.length; i++) {
    if (amount / arr[i] >= 1) {
      var c = Math.floor(amount / arr[i])
      notes = notes + c
      console.log(arr[i] + " notes are :" + c)
      amount = amount % arr[i]
      if (amount == 0)
        return
    }
  }
  console.log("total number of notes :" + notes)

},
/**
* @Purpose:​ Write a program with Static Functions to do Merge Sort of list of Strings.
* @author PriyankaBhiogade
* @version 1.0
* @since 4-3-2019
**/

mergeSort(res) {

  var n = res.length;

  if (n == 1) {
    return;
  }

  var mid = Math.floor(n / 2);
  var left = [mid];
  var right = [n - mid];

  for (let i = 0; i < mid; i++) {
    left[i] = res[i];
  }

  for (let j = mid; j < n; j++) {
    right[j - mid] = res[j];
  }

  this.mergeSort(left);

  this.mergeSort(right);

  this.merge(left, right, res);

},

merge(arr, brr, crr) {
  var i = 0; var j = 0;
  var k = 0;

  while (i < parseInt(arr.length) && j < parseInt(brr.length)) {
    if (parseInt(arr[i]) <= parseInt(brr[j])) {
      crr[k] = arr[i]
      i++;
    }
    else {
      crr[k] = parseInt(brr[j]);
      j++;
    }
    k++;
  }

  while (i < parseInt(arr.length)) {
    crr[k] = arr[i];
    i++;
    k++;
  }

  while (j < parseInt(brr.length)) {
    crr[k] = brr[j];
    j++;
    k++;
  }
  return crr;
},

/*******************assignment*************************/
demo(number1,number2) {
  var arr = [];
  var num = 0;
  while (number2 != num) {
      var x = Math.round(Math.random() * number2)
      if( x >= number1){
      if (!arr.includes(x)) {
          arr.push(x);
          num++;
      }
  }
  else{ 
      num++;
  }
}
  console.log(arr)
},
}