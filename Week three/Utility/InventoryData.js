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
class Rice extends Data {
 
    constructor(n,w,p)
    {
        super(n,w,p);
    }
}

class Pulses extends Data {
 
    constructor(n,w,p)
    {
        super(n,w,p);
    }
}

class Wheats extends Data {
 
    constructor(n,w,p)
    {
        super(n,w,p);
    }
}
module.exports ={
    Rice,Pulses,Wheats 
}