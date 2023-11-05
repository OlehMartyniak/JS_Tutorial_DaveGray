// JS event listeners

// const view = document.querySelector("#view2");
// const div = view.querySelector("div");
// const h2 = div.querySelector("h2");

// Syntax: addEventListener (event, function, useCapture)

// const doSomething = ()=> {
//     alert("doing something")
// };

// h2.addEventListener("click", doSomething, false);
// h2.removeEventListener("click",doSomething,false);

// // We can add an anonymous function to events

// h2.addEventListener("click", (event) => {
//     console.log(event.target);
//     event.target.textContent = "Clicked";
// });



document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {               // if readyState === "complete" then DOM is loaded
        console.log("readtState: complete");                    // and the page is ready to interact with
        initApp2();
        initApp3();                                             // initApp() is a common function name; in this case it'll
    };                                                          // fire a function to download DOM changes we add to that function
});

// const initApp = ()=> {

//     // const view = document.querySelector("#view2");
//     // const div = view.querySelector("div");
//     // const h2 = div.querySelector("h2");

//     view.addEventListener("click", (event) => {
//         view.style.backgroundColor = "purple"; 
//     });

//     div.addEventListener("click", (event) => {
//         div.style.backgroundColor = "blue";
//     });

//     h2.addEventListener("click", (event) => {
//         event.stopPropagation();
//         event.target.textContent = "Clicked";                    // the lowest event once clicked shall triger events above (div,view)
//     });                                                         // that's called "bubbling"
// };                                                              // we can change that by adding stopPrpagation()


const initApp2 = () => {

    const view = document.querySelector("#view2");
    const div = view.querySelector("div");
    const h2 = div.querySelector("h2"); 
    const nav =document.querySelector("nav");

    view.addEventListener("click", (event) => {
        view.classList.toggle("purple");
        view.classList.toggle("darkblue"); 
    });

    div.addEventListener("click", (event) => {
        div.classList.toggle("blue");
        div.classList.toggle("black"); 
    });

    h2.addEventListener("click", (event) => {
        const myText = event.target.textContent;
        myText === "My 2nd View"
            ? (event.target.textContent = "Clicked")
            : (event.target.textContent = "My 2nd View")  
    });

    nav.addEventListener("mouseover", (event) => {
        event.target.classList.add("height100");
    });
    nav.addEventListener("mouseout", (event) => {
        event.target.classList.remove("height100")
    });
};



// When submitting a form we might need to add preventDefault() to prevent the page from reloading

const initApp3 = ()=> {
    const view3 = document.querySelector("#view3");
    const myForm = view3.querySelector("#myForm");
    myForm.addEventListener("submit", (event) => {
        event.preventDefault();
        console.log("Submit event");
    });
};