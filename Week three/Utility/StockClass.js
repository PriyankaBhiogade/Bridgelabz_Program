class Stock
{
    constructor(name,share,price)
    {
        this.name=name;
        this.share=share;
        this.price=price;
    }
    total()
    {
        return this.share*this.price;
    }
}
module.exports = {
Stock
}