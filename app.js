// Screens
const prevDisp = document.querySelector(".previous-display");
const currDisp = document.querySelector(".current-display");

// Button container
const btnContainer = document.querySelector(".buttons-container");

// defining variables for intermediate value
let currOperand = "";
let previousOperand = "";
let operation = "";

let equalOrPercentPressed = false;


btnContainer.addEventListener("click", (e) => {
    // if we click any number (num)
    if (e.target.classList.contains("num")) {
        appendNumber(e.target.textContent);
        updateDisplay();
    }

    // if we click any operator (+, -, x, ÷)
    if (e.target.classList.contains("operator")) {
        chooseOperator(e.target.textContent);
        updateDisplay();
    } 
    
    // if we click equal sign (=)
    if (e.target.classList.contains("equal")) {
        calculate();
        updateDisplay();
        equalOrPercentPressed = true;
    } 

    // if we click AC button (AC)
    if (e.target.classList.contains("ac")) {
        previousOperand = "";
        currOperand = "";
        operation = "";
        updateDisplay();
    } 

    // if we click pm button (±)
    if (e.target.classList.contains("pm")) {
        if (!currOperand) return;
        currOperand *= -1;
        updateDisplay();
    } 

    // if we click percent button (%)
    if (e.target.classList.contains("percent")) {
        if (!currOperand) return;
        currOperand = currOperand / 100;
        updateDisplay();
        equalOrPercentPressed = true;
    }
})


const appendNumber = (num) => {
    //if we already have zero and try to click zero => return
    if (currOperand === "0" && num === "0") return;

    //if click first zero then click any number (except .) display the number that just clicked
    //For instance, 04 => 4,  09 => 9,  0.2 => 0.2
    if (currOperand === "0" && num !== ".") {
        currOperand = num;
        return;
    }

    // if the last button "." and previous number containes . => return
    if (num === "." && currOperand.includes(".")) return;

    // prevent to overflow
    if (currOperand.length > 10) return;

    if (equalOrPercentPressed) {
        currOperand = num;
        equalOrPercentPressed = false;
        return;
    }

    // collect the all numbers that clicked
    currOperand += num;
}


const updateDisplay = () => {
    if (currOperand.toString().length > 11) {
        currOperand = Nubmber(currOperand).toExponential(3);
    }
    currDisp.textContent = currOperand;

    // if click any operator before clicking a number, don't display the operator at prevDisp
    if (operation && previousOperand) {
        prevDisp.textContent = `${previousOperand} ${operation}`;
    }
    else {
        prevDisp.textContent = "";
    }
}


const chooseOperator = (op) => {
    //perform operations after the first number entry
    if (previousOperand) {
        calculate();
    }

    //variable swapping
    operation = op;
    previousOperand = currOperand;
    currOperand = "";
}

const calculate = () => {
    let calculation = 0;

    const prev = Number(previousOperand);
    const current = Number(currOperand);

    switch (operation) {
        case "+":
            calculation = prev + current;
            break;
        case "-":
            calculation = prev - current;
            break;
        case "×":
            calculation = prev * current;
            break;
        case "÷":
            calculation = prev / current;
            break;
        default:
            break;
    }

    currOperand = calculation;

    // when we click the equal sign (=) we should delete previousOperand and operation so that we can make them unvisible.  
    previousOperand = "";
    operation = "";
}