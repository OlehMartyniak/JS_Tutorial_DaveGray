// Arrays
const myArray = [];

// Arrays cannot be reassigned though it's values are mutable and can be reassigned
myArray[0] = "John";
myArray[1] = 1995;
myArray[2] = false;

// refer to an array
console.log(myArray); // ['John', 1995, false]

// lenght property
console.log(myArray.length); // 3

// last element of an array
console.log(myArray[myArray.length -1]); // false

// adding data to an array - push()
myArray.push("School");
console.log(myArray); // ['John', 1995, false, 'School']

// removing data from an array - pop() [removes last item from an array]
myArray.pop();
console.log(myArray); // ['John', 1995, false]

// pop() not only removes the item it also returns it, so making it a variable will allow us to use it
const lastItem = myArray.pop();
console.log(lastItem); // false

// we can add data to the beginng of an array using unshift()
myArray.unshift(42);
console.log(myArray); // [42, 'John', 1995]

// shift() removes data from the beginnig of the array
myArray.shift();
console.log(myArray); // ['John', 1995]

// shift() not only removes the item but also returns it, so making it a variable will allow us to use it
const firstItem = myArray.shift();
console.log(firstItem); // John

// deleting position from an array will leave an "empty" (undefined) position there
const myArray2 = ["Jane", 1990, true];
delete myArray2[1];
console.log(myArray2); // ['Jane', пусто, true]

// if we need to delete an array element properly it's better to use splice() method
myArray2.splice(1,1);
console.log(myArray2); // ['Jane', true]

// if we need to replace some element we also use splice() method
myArray2.splice(1,2,"Married");
console.log(myArray2); // ['Jane', 'Married']

// if we don't need to delete anything from the array, but still need to insert smth on certain position we also use splice() method
myArray2.splice(1,0,"Employed");
console.log(myArray2); // ['Jane', 'Employed', 'Married']

// slice() method allows us to cut elements from an array; it also returns a new array
const myArray3 = ["A","B","C","D","E","F"];

const newArray = myArray3.slice(2);
console.log(newArray); // ['C', 'D', 'E', 'F']

// slice() methods allows us to choose the number of elements we want to cut off
const newArray2 = myArray3.slice(2,5);
console.log(newArray2); // ['C', 'D', 'E']

// reverse() method allows us to reverse elements in the array; it does not return a new array
myArray3.reverse();
console.log(myArray3); // ['F', 'E', 'D', 'C', 'B', 'A']

// join() method allows us to create a new string from the elements of the array
const newString = myArray3.join();
console.log(newString); // F,E,D,C,B,A

// concat() method combines different arrays to a new one
const myArrayA = ["A","B","C"];
const myArrayB = ["D","E","F"];

const myNewArray = myArrayA.concat(myArrayB);
console.log(myNewArray); // ['A', 'B', 'C', 'D', 'E', 'F']

// another way to combine different arrays to a new one is by using a spread operator - [...]
const myNewArray2 = [...myArrayA, ...myArrayB];
console.log(myNewArray2); // ['A', 'B', 'C', 'D', 'E', 'F']

// how to access element in a two dementional array

const arrayA = ["basketball","football","volleyball"];
const arrayB = ["cat","dog","fish"];
const arrayC = [arrayA,arrayB];

console.log(arrayC[0][1]); // football
