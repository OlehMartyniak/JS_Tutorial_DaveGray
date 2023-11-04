// DOM - Document Object Model

const view1 = document.getElementById("view1");

const view2 = document.querySelector("#view2");

view1.style.display = "flex";
view2.style.display = "flex";

const views = document.getElementsByClassName("view");
const sameViews = document.querySelectorAll(".view");

const divs = view1.querySelectorAll("div");
const sameDivs = view1.getElementsByTagName("div");

const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
for(let i = 0; i < evenDivs.length; i++) {
    evenDivs[i].style.backgroundColor = "darkblue"
};

const navText = document.querySelector("nav h1");
navText.textContent = "Hello World";

const navbar = document.querySelector("nav");
navbar.innerHTML = `<h1>Hello!</h1> <p>This should align right</p>`;

console.log(evenDivs[0]); // div
console.log(evenDivs[0].parentElement); 
console.log(evenDivs[0].parentElement.children); // HTMLCollection(12) [div, div, div, div, div, div, div, div, div, div, div, div]
console.log(evenDivs[0].parentElement.childNodes); // NodeList(25) [text, div, text, div, text, div, text, div, text, div, text, div, text, div, text, div, text, div, text, div, text, div, text, div, text]
console.log(evenDivs[0].parentElement.hasChildNodes()); // true
console.log(evenDivs[0].parentElement.lastChild); // #text
console.log(evenDivs[0].parentElement.lastElementChild); 
console.log(evenDivs[0].parentElement.firstChild); // #text
console.log(evenDivs[0].parentElement.firstElementChild); // <div>1</div>
console.log(evenDivs[0].nextSibling); // #text
console.log(evenDivs[0].nextElementSibling.nextElementSibling);
console.log(evenDivs[0].previousSibling); // #text
console.log(evenDivs[0].previousElementSibling); // <div>1</div>



const remove = ()=> view2.children[0].remove();
remove();

const createDiv = (parent,iter)=> {
    const newDiv = document.createElement("div");
    newDiv.textContent = iter;
    newDiv.style.backgroundColor = "#000";
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.margin = "10px";
    newDiv.style.display = "flex";
    newDiv.style.justifyContent = "center";
    newDiv.style.alignItems = "center";
    parent.append(newDiv);
};
// createDiv(view2,10);

for (let i = 1; i <= 10; i++) {
    createDiv(view2, i)
};
