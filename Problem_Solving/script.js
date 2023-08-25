// Write code that will return a random letter from your name

let myName = "Oleg";
console.log(myName.charAt(Math.floor(Math.random() * myName.length))); // removed [+1] from the Maht example since we need to start counting from 0 not from 1 (+1 would start counting from 1)

