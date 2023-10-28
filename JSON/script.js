// JSON - Java Script Object Notation
// JSON is used to send and receive data (and not only in JavaScript)

const myObj = {
    name: "Booker",
    hobbies: ["eat","sleep","code"],
    hello: ()=> {
        console.log("Hello!")
    }
};

console.log(myObj); // {name: 'Booker', hobbies: Array(3), hello: ƒ}
myObj.hello(); // Hello!

// JSON не надсилає функцій, тому в JSON обʼєкт переносяться значення
const sendJSON = JSON.stringify(myObj);
console.log(sendJSON); // {"name":"Booker","hobbies":["eat","sleep","code"]}
console.log(typeof sendJSON); // string

// Також отримуючи обʼєкт JSON ми втратимо будь-яку функцію яка могла б бути там закладена
const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON); // {name: 'Booker', hobbies: Array(3)}
console.log(typeof receiveJSON); // object
