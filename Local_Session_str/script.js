// Web storage API - both local and session storages store string data and convert other types

// Not part of the DOM - refers to the Window API
// Available to the JS via the global variable: window

// We do not have to type window. It is implied:

const myArr = ["eat","sleep","code"];
const myObj = {
    name: "Dave",
    hobbies: ["eat","sleep","code"],
    logName: function() {
        console.log(this.name)
    }
};

sessionStorage.setItem("mySessionStore", myObj); // додаємо в sessionStorage вкладку з назвою mySessionStore і інформацією з myObj

const mySessionData = sessionStorage.getItem("mySessionStore"); // отримуємо доступ до інформації з sessionStorage

console.log(mySessionData); // [object Object] (string)

// Через те, що session i local storage перетворюють все в стрінгу, нам краще користуватись методом JSON, аби збергіти дані

sessionStorage.setItem("mySessionStorage2", JSON.stringify(myObj));
const mySessionData2 = JSON.parse(sessionStorage.getItem("mySessionStorage2"));
console.log(mySessionData2); // {name: 'Dave', hobbies: Array(3)} (object)



localStorage.setItem("myLocalStore", JSON.stringify(myArr));
const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"));
console.log(myLocalData); // ['eat', 'sleep', 'code'] (array)

// localStorage.removeItem() - видаляє вкладку
// localStorage.clear() - очистити весь storage

console.log(localStorage.key(0)); // поверну назву першої вкладки
console.log(localStorage.length); // поверне кількість вкладок в local storage