let arr1 = ["Cecile", "Lone"];
let arr2 = ["Emil", "Tobias", "Linus"];
let concatenatedArray = arr1.concat(arr2); // Result: ["Cecile", "Lone", "Emil", "Tobias", "Linus"]

let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi"); // Result: ["Banana", "Orange", "Apple", "Mango", "Kiwi"]

let array1 = [1, 2, 3];
array1.unshift(4, 5); // Result: [4, 5, 1, 2, 3]

fruits.pop(); // Result: ["Banana", "Orange", "Apple", "Mango"]

let array2 = [1, 2, 3];
array2.shift(); // Result: [2, 3]

fruits.sort(); // Result: ["Apple", "Banana", "Mango", "Orange"]

let slicedFruits = fruits.slice(1, 3); // Result: ["Banana", "Mango"] (slices from index 1 up to, but not including, index 3)

let months = ["January", "February", "March", "April"]; // Assuming this array exists
months.splice(2, 1, "New Month"); // Removes "March" at index 2 and inserts "New Month"
// Result: ["January", "February", "New Month", "April"]

