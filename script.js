function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return console.error("not allowed to divide against 0!");
    }
}

let n1 = 0;
let n2 = null;
let operator = null;

function operate(n1, n2, operator) {
    if (operator === "+") {
        return add(n1, n2);
    } else if (operator === "-") {
        return substract(n1, n2);
    } else if (operator === "*") {
        return multiply(n1, n2);
    } else if (operator === "/") {
        return divide(n1,n2);
    } else {
        return "Something is wrong here";
    }
}
let currentInput = "";
const display = document.getElementById('result');

function populateDisplay() {

    const numberButtons = document.querySelectorAll('.number');

    numberButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            const clickedNumber = event.target.textContent;

            currentInput += clickedNumber;
            display.value = currentInput;
        });
    });


    const clearButton = document.querySelector('.clear');
    clearButton.addEventListener("click", (event) => {
        display.value = 0;
        currentInput = "";
        n1 = 0;
        n2 = null;
        operator = null;
    });

    //Not working!
    const operatorButtons = document.querySelectorAll('.operator');
    operatorButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            if (n1 !== null && currentInput !== "") {
                //check for chain operations (n2 !== null)
                if (n2 !== null) {
                    n1 = operate(n1, parseFloat(currentInput), operator);
                    n2 = null;
                    operator = null;
                    currentInput = "";
                    display.value = n1;
                } else {
                    n2 = parseFloat(currentInput);
                    currentInput ="";
                }
            }

            operator = event.target.textContent;
            // if (n1 === 0) {
            //     n1 = parseFloat(currentInput);
            //     currentInput = "";
            // }
        });
    });

    const equalButton = document.querySelector('.equal');
    equalButton.addEventListener("click", (event) => {
        if (operator && currentInput) {
            n2 = parseFloat(currentInput);
            const result = operate(n1, n2, operator);
            display.value = result;
            n1 = result;
            n2 = null;
            operator = null;
            currentInput = "";
        }
    });
}

populateDisplay();