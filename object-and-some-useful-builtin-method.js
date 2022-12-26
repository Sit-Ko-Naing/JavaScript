// object

var car = new Object();
car.name = "BMW";
car.price = "$10000";

console.log(car);
console.log(car.name);
console.log(car.price);


function book(a,b){
    this.title = a;
    this.price = b;

}

var result = new book("Myanmar","1200ks");
console.log(result);
