
class Company {
    constructor(name, share, price) {
        this.name = name;
        this.share = share;
        this.price = price;
    }
    total() {
        return this.share * this.price;
    }

}
class Bankofbaroda extends Company {
    constructor(name, share, price) {
        super(name, share, price);
    }


}
class Canarabank extends Company {

    constructor(name, share, price) {
        super(name, share, price);
    }

}
class unionbank extends Company {

    constructor(name, share, price) {
        super(name, share, price);
    }

}
module.exports = {
    Bankofbaroda, unionbank, Canarabank
}
