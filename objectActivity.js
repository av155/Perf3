let car = {
    type: "Honda",
    model: "Civic",
    color: "Blue"
};

console.log(typeof car); // Outputs: "object"

car.type = "Toyota";
console.log(car); // Outputs: {type: "Toyota", model: "Civic", color: "Blue"}

car.wheels = 4;
console.log(car); // Outputs: {type: "Toyota", model: "Civic", color: "Blue", wheels: 4}
