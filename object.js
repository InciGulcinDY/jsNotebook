//Creating Object
let user = {
    name: "inci gulcin",
    surname: "durak yolcu"
};

let car = new Object();
car.color = "red";
car.brand = "Suzuki";

let movie = Object.create(null); //No inheritence

let bike = Object.create(car);
bike.brand = "Bisan";
bike.color = "black";
