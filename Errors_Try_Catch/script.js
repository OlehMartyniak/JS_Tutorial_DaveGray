// JS errors and error handling

const makeError = ()=> {
    try {
        const name = "John";
        name = "Booker";
    } catch (error) {
        console.error(error)
    };
};
makeError(); // TypeError: Assignment to constant variable.
             // at makeError (script.js:6:14)
             // at script.js:11:1


// Try, Catch, Finally patterns

const checkError = ()=> {
    let i = 1;
    while (i <= 5) {
        try {                                   // any code following try will not execute if there is an error
            if (i % 2 !== 0) {
                throw new Error("Odd number!")
            };
            console.log("Even number")
        } catch (err) {                         // catch will only execute if there is an error
            console.error(err.stack)
        } finally {                             // finally will executed no matter what (whether there if an error or not)
            console.log("...finally");
            i++;
        };
    };
};
checkError();