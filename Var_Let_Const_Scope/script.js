// global scope
var x = 1; 
let y = 2;
const z = 3;

// local scope (there are 2 types: block scope and function scope)

{
    let y = 4; // [we don't get an arror since this vatiable is defined inside local scope]
}

//[in a scope we can get access to the elements from the scope "above" but not "below"]
function myFunc() {
    const z = 5;
    console.log(y); // 2

    {
        let y = 4;
        console.log(y); // 4
    }
}
myFunc();


