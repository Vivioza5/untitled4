function Car(color, model, price) {
    this.id=++ Car.prototype.count;
    this.color = color;
    this.model = model;
    this.price = price;
    this.info = function () {//анонимная функция
        console.log("color = " + color + " model = " + model + " price = " + price);
    };
    this.toHmtlRow = function () {
        return `<tr>` +
            `<td>${this.id}</td>`+
            `<td>${this.color}</td>`+
            `<td>${this.model}</td>`+
            `<td>${this.price}</td>`+
            `<td><a href="${this.id}">delete</a></td>`+
            `</tr>`;
    };
}
Car.prototype.count=0;
let buttonSave= document.getElementById("save");
let color= document.getElementById("color");
let model= document.getElementById("model");
let price= document.getElementById("price");

let tbody=document.getElementById("cars");
var cars=[];
buttonSave.addEventListener('click',function (e) {

        let car = new Car(color.value, model.value, price.value);
tbody.innerHTML+=car.toHmtlRow();
});