var read = require('readline-sync');
var que = require('../Utility/Queue');
var sta = require('../Utility/Stack');
var ref = require('util')
module.exports = {
  /***************************File read *************************/
  fileCall(fileName) {
    var fileStream = require('fs');
    var f = fileStream.readFileSync(fileName, 'utf8');
    var arr = f.trim().split(' ');
    //console.log(arr+" ")
    return arr;

  },
  /*************************File Write ******************************************/

  writeFile(fileName, data) {
    const fs = require('fs');
    fs.writeFile(fileName, data, function (err) {
      if (err) {
        return console.log(err);
      }

      //console.log("The file is saved!");
    });
  },

  /************************ Insertion Sort*************************************/
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
  /*********************Check Anagrame************************/
  findAnagram(str1, str2) {
    var status = true;
    var char1 = [], char2 = [];
    str1 = str1.toString();
    str2 = str2.toString();
    var s1 = str1.replace(/\s/g, '');
    var s2 = str2.replace(/\s/g, '');
    // console.log(s1 +' '+s2);

    if (s1.length != s2.length) {
      status = false;
    } else {

      //converting string to array with lower case lattere
      char1 = s1.toLowerCase().split('');
      char2 = s2.toLowerCase().split('');
      //sorting the array values
      char1 = char1.sort();
      char2 = char2.sort();
      // console.log(char1+' '+char2);
      //conveting array to string
      s1 = char1.toString();
      s2 = char2.toString();
      //if condition for comparing
      if (s1 == s2)
        status = true;
      else
        status = false;

    }
    if (status) {
      return true;
    } else {
      return false;
    }
  },//findAnagram



  /**********************isSingle **********************/
  isSingle(arr) {
    var str = []
    arr = arr + "";
    str = arr.split('');
    if (str.length == 1) {
      return true;
    }
    else {
      return false;
    }
  },

  /**************** prime number*************************/
  getPrimeNumber(num) {
    var i, j, temp, prime = ' ';
    for (i = 1; i <= num; i++) {
      temp = 0;
      for (j = i; j >= 1; j--) {
        if (i % j == 0) {
          temp++;
          //  num = i;
        }
      }
      if (temp == 2) {
        prime = prime + i + ' ';
        //console.log(prime+' is prime number');
      }
    }
    //display values
    // console.log('Prime number from 1 to '+no+' is '+prime);
    return prime;

  },//getPrimeNumber();

  /*******************PrimeAnagram Queue**********************/

  primeAnagramQueue(num) {

    var str, arr = [], i, j, q, len, data;

    //calling primeNumber method from utility of algorithms
    str = this.getPrimeNumber(num);
    str = str.trim();
    arr = str.split(' ');
    //queue object creation
    q = new que.Queue();
    //forloop for Storing anagrams numbers
    for (i = 0; i < arr.length - 1; i++) {
      for (j = i + 1; j < arr.length; j++) {

        if (this.findAnagram(arr[i], arr[j])) {
          q.push(arr[j]);
          q.push(arr[i]);

        }
      }
    }


    len = q.getSize();
    console.log(len);
    //forloop for printing anagrams
    for (i = 0; i < len; i++) {
      data = q.pop();
      console.log('Anagram number is :: ' + data);
    }

  },
  /************************Prime Anagrame Stack **************************/
  primeAnagramStack(num) {

    var str, arr = [], i, j, s, len, data;

    //calling primeNumber method from utility of algorithms
    str = this.getPrimeNumber(num);
    str = str.trim();
    arr = str.split(' ');
    //queue object creation
    s = new sta.Stack();
    //forloop for Storing anagrams numbers
    for (i = 0; i < arr.length - 1; i++) {
      for (j = i + 1; j < arr.length; j++) {

        if (this.findAnagram(arr[i], arr[j])) {
          s.push(arr[j]);
          s.push(arr[i]);

        }
      }
    }

    len = s.getSize();
    console.log(len);
    //forloop for printing anagrams
    for (i = 0; i < len; i++) {
      data = s.pop();
      console.log('Anagram number is :: ' + data);
    }


  },
  /********************2D Array PrimeAnagrame **********************/
  primeAnagram() {
    var arr = [], range = 100; var k = 0; var p = 1; var x = 0;
   // var str ="";
    array1 = [['0 - 100'], ['100 - 200'], ['200- 300'], ['300 - 400'], ['400 - 500'],
             ['500 - 600'], ['600 - 700'], ['700 - 800'], ['800 - 900'], ['900 - 1000']]
    //calling primeNumber method from utility of algorithms
    for (num = 2; num < 1000; num++) {
      if (this.isprime(num)) {
        arr.push(num);
        //console.log(arr)
      }
    }

    //forloop for Storing anagrams numbers
    for (let i = 0; i < arr.length; i++) {

      for (let j = i + 1; j < arr.length; j++) {

        if (this.isAnagram(arr[i], arr[j])) {
          console.log(arr[i], arr[j])
          if (arr[i] <= range) {
            if (arr[j] <= range) {
              array1[x].push(arr[i])
              array1[x].push(arr[j])
            }
          }
          else {
            range = range + 100;
            x++;
            if (arr[j] <= range) {
              array1[x].push(arr[i])
              array1[x].push(arr[j])

            }
          }
        }
      }
    }
    console.log("The number which are Prime and Anagram : ")
    for (var k = 0; k < array1.length; k++) {
      for (var p = 0; p < array1[k].length; p++) {
        //str= str + array1[k][p] + " "
       ref.print(array1[k][p])
      
        if (p == 0) {
          
          ref.print(" => ")
        }
        else {
          if (p != array1[k].length - 1) {
            ref.print(",")
           
          }
          
        }
        
      
        console.log()
      }
      console.log('\n')//printing into the console
    }
  },
  /******************Factorial********************************/

  findFactorial(num) {
    var fact = 1
    for (let i = 1; i <= num; i++) {//loop over till get num value and return th eproduct of all
      fact = fact * i
    }

    return fact;

  },

  /********************2D Array Prime **********************/
  prime(num1) {

    var arr = [], range = 100; var k = 0; var p = 1;
    array1 = [['0 - 100'], ['100 - 200'], ['200- 300'], ['300 - 400'], ['400 - 500'],
    ['500 - 600'], ['600 - 700'], ['700 - 800'], ['800 - 900'], ['900 - 1000']]
    for (num = 2; num < num1; num++) {
      if (this.isprime(num)) {
        if (num <= range) {
          array1[k][p] = num;
          p++;
        }

        else {
          p = 1;
          range = range + 100;
          k++;
          array1[k][p] = num
        }
      }
    }
    console.log("Prime Number present in the given range")
    for (var k = 0; k < array1.length; k++) {
      //arr[k] = [];
      for (var p = 0; p < array1[k].length; p++) {
        ref.print(array1[k][p] + " ")
      }
      console.log()//printing into the console
    }

  },
  /*****************Prime no ****************/
  isprime(num) {
    if (num == 0 || num == 1) {
      return false;
    }
    var temp = 0;
    for (let i = 2; i < num; i++) {

      if (num % i == 0) {
        temp++;
      }
    } if (temp == 0) {
      //console.log(num)
      return true;
    }
    else {
      return false;
    }
  },
  /************************is Prime **************************/
  isAnagram(string1, string2) {
    string1=string1+"";
    string2=string2+"";
    if (string1.length != string2.length) {
    return false;
    }
    var arr = [];
    for (let index = 0; index < 36; index++) {
    arr[index] = 0;
    }
    for (let index = 0; index < string1.length; index++) {
    var ch = string1.charAt(index);
    if (ch >= 'a' && ch <= 'z') {
    var code = ch.charCodeAt(0);
    arr[code - 97]++;
    } else if (ch >= 'A' && ch <= 'Z') {
    var code = ch.charCodeAt(0);
    arr[code - 65]++;
    } else {
    var code = ch.charCodeAt(0);
    arr[code - 22]++;
    }
    ch = string2.charAt(index);
    if (ch >= 'a' && ch <= 'z') {
    var code = ch.charCodeAt(0);
    arr[code - 97]--;
    } else if (ch >= 'A' && ch <= 'Z') {
    var code = ch.charCodeAt(0);
    arr[code - 65]--;
    } else {
    var code = ch.charCodeAt(0);
    arr[code - 22]--;
    }
    }
    for (let index = 0; index < 36; index++) {
    if (arr[index] != 0) {
    return false;
    }
    }
    return true;
    },
}