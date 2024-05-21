let var1;
let var2;
let operator;

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

console.log(operate(2, 3, "-"))