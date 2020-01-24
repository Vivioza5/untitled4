{
    var a=10;
    let b=10;
    console.log(b);
}

console.log(a);
function foo() {
    var a=20;
    console.log("локальная переменняа"+ a );
}
foo();
console.log("Global var" + a);

function Car(color, model, price) {
    this.color=color;
    this.model=model;
    this.price=price;
    this.toHmtlRow= function () {
return  "<tr>"+
        "<td>this.color</td>"+
        "<td>this.model</td>"+
        "<td>this.price</td>"+
        "</tr>";
    };
}
// let audi= new Car("red", "audi100","20000$") ;
// console.log(audi);
// Car.prototype.info1=function () {console.log("color = "+this.color+ " model= " + this.model+" price= " +this.price );
//
// }
// audi.info1();
