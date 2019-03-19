var readlineSync = require('readline-sync');
var util1 = require('../Utility/utility');

class Node {
constructor(data) { // node clasc constructor
    this.data = data;

    this.next = null;
}
}

class LinkedList {
constructor() {  //linklist constructor
    this.first = null;
    this.size = 0;
}
add(data) {//it will add data to the linklist 
    var node = new Node(data);//creating node whenever the user want to add data
    if (this.first == null) {//if the user adding data for 1st time
        this.first = node;
        this.size++;

    }
    else {//if the user adding data for the more than 1 time
        var temp = this.first;
        while (temp.next) {
            temp = temp.next;
        }
        this.size++;//inc size
        
        temp.next = node;//assighning node adress to the prev node
    }
}
search(item) {//to search the element given by user
    if (this.first == null) {
        return false;
    }

    var temp = this.first;
    while (temp) {
        if (temp.data == item) {//checking is user given data is equal to the temp pointing to the node 
            return true;
        }

        temp = temp.next;
    }
    return false;
}
addToPos(data) {//adding data to the position where the data can fit
    var temp = this.first;
    var prev = temp;

    if (data < temp.data) {//checking for the 1st data
        this.insertFirst(data);
        return
    }
    var node = new Node(data);//creating new node
    while (temp.next) {
        if (temp.data < data) {
            prev = temp;
            temp = temp.next;
        }
        else {
            prev.next = node
            node.next = temp

            break;
        }
    }
    if (!temp.next) {//if the data is adding at the last
        temp.next = node;
    }
    this.size++;
}
remove(data) {

    var temp = this.first;
    if (temp.data == data) {
        this.deleteFirst();//deleting first element
        return;
    }
    var prev = temp;
    while (temp) {
        if (temp.data == data) {
            prev.next = temp.next;
            this.size--;
            return temp.data;

        }

        prev = temp;
        temp = temp.next;
    }
    return null;
}
display() {
    var temp = this.first;
    var str = "";
    while (temp) {
        str = str + " " + temp.data;//concating all the data in the list 
        temp = temp.next;
    }
    return str;
}
insertFirst(data) {//inserting data for the first time
    var node = new Node(data);
    if (this.first == null) {
        this.first = node;
        this.size++;
        return;
    }
    else {
        node.next = this.first;
        this.first = node;
        this.size++;
        return;
    }
}
insert(index, data) {//inserting data into the exaxt position
    if (index == 1) {
        this.insertFirst(data);//adding data at the fisrt
        return;
    }
    if (this.first == null) {
        return;
    }
    var node = new Node(data);//creating new node
    var count = 0, prev = this.first, temp = this.first;
    try {
        while (temp) {//if the addinbdata is not 1st element
            if (count == index - 1) {
                prev.next = node;
                node.next = temp;
                this.size++;
                return;
            }
            count++;//incrementing the count
            prev = temp;
            temp = temp.next;
        }
        return false;
    }
    catch (exception) {
        console.log(exception + "Enter correct index");
    }

}
deleteFirst() {//to delete the first value
    if (this.first == null) {
        console.log("Linked List empty");
        return;
    }
    var n = this.first.data;
    this.first = this.first.next;//pointing fist to the next elment in that list
    this.size--;//decrementing size
    return n;
}
show() {
    var temp = this.first;
    var str = "";
    while (temp) {
        str = str + temp.data + " ";
        if (temp.next != null) {
            str = str + "  ";
        }
        temp = temp.next;
    }
    console.log(str);
    return str;



}
getData() {
    var temp = this.head;
    var str = "";
    while (temp) {
        str = str + temp.data;
        if (temp.next != null) {
            str = str + " ";
        }
        temp = temp.next;
    }
    return str;
}

}




module.exports = {
LinkedList



}
     



