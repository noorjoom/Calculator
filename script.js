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

function operation(n1, n2, operator) {
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