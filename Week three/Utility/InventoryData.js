class Data {
    constructor(n, w, p) {
        this.n = n;
        this.w = w;
        this.p = p;
    }
    total() {
        return this.w * this.p;
    }
}
class Rice extends Data {//Rice class extend the property of data class
 
    constructor(n,w,p)
    {
        super(n,w,p);
    }
}

class Pulses extends Data {//Pulses class extend the property of data class
 
    constructor(n,w,p)
    {
        super(n,w,p);
    }
}

class Wheats extends Data {//Wheats class extend the property of data class
 
    constructor(n,w,p)
    {
        super(n,w,p);
    }
}
module.exports ={
    Rice,Pulses,Wheats 
}