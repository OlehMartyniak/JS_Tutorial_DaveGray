// Conditionals : If statements

let soup = "Real chicken soup";
let reply;
let customerIsBanned = true; // false
let crackers = true; // false

if (customerIsBanned) {
    reply = "No soup for you!"
} else if (soup && crackers) {
    reply = `Here's your order of ${soup} and crackers.`;
}else if (soup) {
    reply = `Here's your order of ${soup}.`;
} else {
    reply = `Sorry, we are out of soup now.`;
};
console.log(reply);


// Decision tree:

let testScore = 59;
let grade;
let collegeStudent = false; //true

if (testScore >= 90) {
    grade = "A";
} else if (testScore >= 80) {
    grade = "B";
} else if (testScore >= 70) {
    grade = "C"
} else if (testScore >= 60) {
    grade = "D"
} else {
    if(collegeStudent) {
        grade = "U - unsatisfied";
    } else {
        grade = "F - failing grade";
    };
}
console.log(grade);

