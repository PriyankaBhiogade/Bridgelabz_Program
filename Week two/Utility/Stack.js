var readlineSync = require('readline-sync');
var util1 = require('../Utility/utility');

class Node {
constructor(data) {
    this.data = data;
    this.next = null;
}
}
class Stack {
constructor() {
    this.top = null;
    this.size = 0;
}

push(data) {// it will add the data into stack 
    if (this.isEmpty()) {//if the stack is  empty the data will add as first node into the stack
        var node = new Node(data);
        this.top = node;//adding first data into stack
        this.size++;
        return;
    }
    else {
        var node = new Node(data);
        node.next = this.top;
        this.top = node
        this.size++
    }
}
pop() {//return data which are in the stack
    if (this.isEmpty()) {
        return 'no data'
    }

    var dat = this.top.data;
    this.top = this.top.next;
    this.size--;
    //console.log("popped value "+dat);
    return dat;

}
peek() {
    return this.top.data//return the top value i.e added in the last
}
display() {//printing the values
    var t = this.top;
    while (t != null) {
        console.log(t.data);
        t = t.next;
    }
}
isEmpty() {//checking wether the stack contain any data if it is not return true
    if (this.size === 0) {
        return true;
    }
    else
        return false
}
getSize() {
    return this.size;//it will return the size of the stack
}
}
module.exports = {
Stack
}

