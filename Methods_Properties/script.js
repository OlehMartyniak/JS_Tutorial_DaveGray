//Strings
const myVariable = "Mathematics";

// The length property: 11
console.log(myVariable.length);

// charAt() - character at: m
console.log(myVariable.charAt(5));

// indexOF(): 0 [provides the first occurence of the character]
console.log(myVariable.indexOf("Math"));

// lastIndexOf(): 6 [provides the last occurence of the character]
console.log(myVariable.lastIndexOf("at"));

// slice(a,b): hem [accepts starting and ending position parameters and returns the characters from the starting position to the ending position; the result does not include the ending position]
console.log(myVariable.slice(3,6));
// slice(a): hematics [if the ending parameter is not provided the slice method returns the character from the start position to the end of the string]
console.log(myVariable.slice(3));

// toUpperCase() : MATHEMATICS
console.log(myVariable.toUpperCase());

// toLoverCase() : mathematics
console.log(myVariable.toLowerCase());

// includes : true/false
console.log(myVariable.includes("Math"));

// split : ['Math', 'matics'] [returns multiple strings within an array; splitting character is not included in the resulting array]
console.log(myVariable.split("e"));
// split : ['M', 'a', 't', 'h', 'e', 'm', 'a', 't', 'i', 'c', 's'] [empty quotes as a splitting character returns every character as a separate string]
console.log(myVariable.split(""));
// split : ['John', 'Dave', 'Angie'] [if we split wherever a comma occurs each value is represented as it's own string in the resulting array]
console.log("John,Dave,Angie".split(","));
// split : ['I', 'have', 'become', 'comfortably', 'numb'] [if we split a sentence wherever there is a space each word becomes a string in the resulting array]
console.log("I have become comfortably numb".split(" "));