// An integer is a whole number
const myNumber = 42;

// A number with a decimal point is a float which references the "floating point"
const myFloat = 42.5;

const myString = "42";
const myString2 = "42.123abc";

// Number() : 44 [use the Number function to change a string to the number]
console.log(Number(myString) + 2);
// Number() : "422" [Otherwise JS will add a string to a number and create another string] : "422"
console.log(myString + 2);
// Number() : NaN [If we use the Number function on smth that can't be converted it'll return NaN - Not a Number]
console.log(Number("David"));

// Number.isInteger() : true/false [determines whether the passed value is an integer]
console.log(Number.isInteger(myNumber));

// Number.parseFloat() : 42.5/NaN [parses an argument and returns a floating point number or NaN]
console.log(Number.parseFloat(myFloat));

// Number.toFixed() : "42.12" [formats a number according to how many decimals you provide as a parameter; returns string data]
console.log(Number.parseFloat(myString2).toFixed(2));

// Number.parseInt() : 42 [parses a string argument and returns an integer]
console.log(Number.parseInt(myString2));

// toString() : "42.5" [returns a string representing the number]
console.log(myFloat.toString());
