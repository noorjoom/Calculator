let currentInput = "";
let currentNumber = null;
let operator = null;
const display = document.getElementById('result');

function clearDisplay() {
    display.value = '0';
}

function updateDisplay() {
    if (currentNumber !== null) {
        const roundedNumber = currentNumber.toFixed(6);
        display.value = roundedNumber;
    } else {
        display.value = currentInput;
    }
}

function handleNumberClick(number) {
    currentInput += number;
    updateDisplay();
}

function handleOperatorClick(newOperator) {
    if (currentNumber === null) {
        currentNumber = parseFloat(currentInput);
        currentInput = "";
    } else if (currentInput !== "") {
        currentNumber = operate(currentNumber, parseFloat(currentInput), operator);
        currentInput = "";
    }
    operator = newOperator;
    updateDisplay();
}

function operate(a, b, op) {
    switch (op) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            if (b !== 0) {
                return a / b;
            } else {
                console.error("Not allowed to divide by 0!");
                return display.value = "cannot divide by 0";
            }
        default:
            return null;
    }
}

const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        handleNumberClick(event.target.textContent);
    });
});

const clearButton = document.querySelector('.clear');
clearButton.addEventListener("click", () => {
    currentInput = "";
    currentNumber = null;
    operator = null;
    clearDisplay();
});

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        handleOperatorClick(event.target.textContent);
    });
});

const equalButton = document.querySelector('.equal');
equalButton.addEventListener("click", () => {
    if (currentNumber !== null && operator !== null && currentInput !== "") {
        currentNumber = operate(currentNumber, parseFloat(currentInput), operator);
        operator = null;
        currentInput = "";
        updateDisplay();
    } else {
        console.error("Invalid");
    }
});
