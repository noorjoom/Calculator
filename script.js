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

let n1, n2, operator;

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

function populateDisplay() {

    const numberButtons = document.querySelectorAll('.number');
    const display = document.getElementById('result');

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
    });

}

populateDisplay();