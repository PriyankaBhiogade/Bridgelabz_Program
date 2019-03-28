
function PC(temp) {
  
    this.compName = temp.compName ;
    this.ram = temp.ram ;
    this.hdd = temp.hdd ;
}
function Laptop(temp) {
  
    this.compName = temp.compName || "Apple";
    this.ram = temp.ram || "3 GB";
    this.hdd = temp.hdd || "32 GB"
}

function ComputerFactory(){}
ComputerFactory.prototype.computerClass = PC;


ComputerFactory.prototype.createComputer = function ( temp ) {

    if( temp.Type == PC ){
      this.computerClass = PC;
    }else{
      this.computerclass = "Laptop";
    }
  
return new this.computerClass ( temp );
};

var sample=({
            Type: "PC",
            compName :"Zebronics",
             ram: "2GB",
             hdd: "32GB"

});


var pcFactory = new ComputerFactory();
var pc = ComputerFactory.createComputer=(sample)
            
 

console.log(pc instanceof PC );
 
// Outputs: Car object of color "yellow", doors: 6 in a "brand new" state
console.log( pc );
