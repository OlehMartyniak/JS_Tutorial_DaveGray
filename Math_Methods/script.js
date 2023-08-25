// Math methods and properties

console.log(Math.PI); // 3.141592653589793

// Math.trunc() : 3 [returns integer portion of a number and truncates (обрізає) any decimals (десяткові значення)]
console.log(Math.trunc(Math.PI)); // 3

// Math.round() : 4 [returns the value rounded to the nearest integer]
console.log(Math.round(3.5)); // 4

// Math.ceil() : 5 [rounds the value up]
console.log(Math.ceil(4.4)); // 5

// Math.floor() : 6 [rounds the value down]
console.log(Math.floor(6.6)); // 6

// Math.pow() : 16 [takes the base number and brings it to the power of exponent (піднесення до ступеня)]
console.log(Math.pow(2,4)); // 16

// Math.min() : 2 [returns the smallest number]
console.log(Math.min(4,2,6)); // 2

// Math.max() : 6 [retunrs the biggest number]
console.log(Math.max(3,6,1)); // 6

// Math.random() : [returns random number from 0 to 1]
console.log(Math.random()); // random from 0 to 1

// From 1 to 10 with Math.random()
console.log(Math.floor(Math.random() * 10) + 1); // random from 1 to 10
