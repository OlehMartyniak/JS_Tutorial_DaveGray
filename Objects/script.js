// Objects

const vehicle = {
    wheels: 4,
    engine: function() {
        return "Heavy start"
    }
};

// Inheritance - allows objects to inherit another object keys and values
const car = Object.create(vehicle);
car.doors = 2;
console.log(car); // {doors: 2} | though we don't see other values in car expect ones we added ("doors") we have available ones inherited
console.log(car.wheels); // 4
console.log(car.engine()); // Heavy start

// For in loop in an object
const band = {
    BassGuitar: "Roger Waters",
    Guitar: "David Guilmor",
    Keyboard: "Richard Wright" 
};

console.log(Object.keys(band)); // ['BassGuitar', 'Guitar', 'Keyboard']
console.log(Object.values(band)); // ['Roger Waters', 'David Guilmor', 'Richard Wright']

for (let job in band) {
    console.log(`On ${job}, it's ${band[job]}`); // On BassGuitar, it's Roger Waters On Guitar, it's David Guilmor On Keyboard, it's Richard Wright
};

// deleting values from object
delete band.Keyboard;
console.log(band); // {BassGuitar: 'Roger Waters', Guitar: 'David Guilmor'}

// checking on properties (boolean)
console.log(band.hasOwnProperty("Guitar")); // true
console.log(band.hasOwnProperty("Keyboard")); // false

// destructuring objects
const {BassGuitar: myVariable} = band;
console.log(myVariable); // Roger Waters | we created a variable myVariable and defined it's value from the key BassGuitar of the object band 

function sings({ Guitar }) {
    return `${Guitar} sings!`;
};
console.log(sings(band)); // David Guilmor sings!