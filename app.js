//declaring screens
const process = document.getElementById("screen-p");
const outcome = document.getElementById("screen-o");

//declaring buttons
const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const ac = document.getElementById("ac");
const sign_reverse = document.getElementById("sign_reverse");
const percentage = document.getElementById("percentage");
const division = document.getElementById("division");
const multi = document.getElementById("multi");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const dot = document.getElementById("dot");
const equal = document.getElementById("equal");


//capturing
let select_btn = document.querySelector(".buttons");
select_btn.addEventListener("click", (event) => {

    if (event.target.classList.contains("basic")) {
        process.innerHTML += event.target.innerHTML;
    }

    else if (event.target.className == "row1-1") {
        process.innerHTML = ""
        outcome.innerHTML = ""
    }

    else if (event.target.className == "row1-2") {
        process.innerHTML *= -1 
        outcome.innerHTML = process.innerHTML
    }

    else if (event.target.className == "row1-3") {
        process.innerHTML /= 100 
        outcome.innerHTML = process.innerHTML
    }

    else if (event.target.className == "row1-3") {
        process.innerHTML /= 100 
        outcome.innerHTML = process.innerHTML
    }

    else if (event.target.className == "row5-3") {
        outcome.innerHTML = process.innerHTML
    }
 
})



