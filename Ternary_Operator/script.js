// Conditionals: Ternary Operators

// condition ? ifTrue : ifFalse

let soup = "Real chicken soup";

let response = soup ? `Yes, we have ${soup} today` : `Sorry, we don't have ${soup} today`;
console.log(response);

let isCustomerBanned = true; // false
let soupAccess = isCustomerBanned
    ? `Sorry, no ${soup} for you!`
    : soup 
    ? `Yes, we have ${soup} for you`
    : `Sorry, we run out of ${soup} today`;
console.log(soupAccess);


let testScore = 80;
let myGrade = 
    testScore >= 90
    ? "A"
    : testScore >=80
    ? "B"
    : testScore >= 70
    ? "C"
    : testScore >= 60
    ? "D"
    : "F - failing grade";
console.log(`My test score is ${myGrade}`);


let playerOne = "rock";
let computer = "scissors";
let result = 
    playerOne === computer
    ? "Tie game!"
    : playerOne === "rock" && computer === "paper"
    ? "Computer wins!"
    : playerOne === "paper" && computer === "scissors"
    ? "Computer wins!"
    : playerOne === "scissors" && computer === "rock"
    ? "Computer wins!"
    : "Player wins!";
console.log(result);