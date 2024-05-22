let var1;
let var2;
let operator;
let displayvalue = 0;
const displayDiv = document.querySelector(".display");


function add(a, b) {
	return a+b;
};

function subtract(a, b) {
	return a - b;
};

function multiply(a, b) {
    return a*b;
};

function divide(a, b) {
    return a/b;
};

function operate(var1, var2, operator) {
 if (operator === "+") {
    return add(var1, var2);
 } else if (operator === "-") {
    return subtract(var1, var2);
 } else if (operator === "*") {
    return multiply(var1, var2);
 } else if (operator === "/") {
    return divide(var1, var2);
 }
}

function updateDisplay(input) {
   displayvalue += input;
   displayDiv.textContent = displayvalue;
}

function clearDisplay() {
   displayvalue = 0;
   displayDiv.textContent = displayvalue;
}

