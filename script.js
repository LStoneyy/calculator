let var1 = "";
let var2 = "";
let operator = null;
let displayvalue = "";
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
   const num1 = parseFloat(var1);
   const num2 = parseFloat(var2);

 if (operator === "+") {
    return add(num1, num2);
 } else if (operator === "-") {
    return subtract(num1, num2);
 } else if (operator === "*") {
    return multiply(num1, num2);
 } else if (operator === "/") {
    return divide(num1, num2);
 }
}

function updateDisplay(input) {
   if (operator === null) {
       var1 += input;
       displayvalue = var1;
   } else {
       var2 += input;
       displayvalue = var2;
   }
   displayDiv.textContent = displayvalue;
}

function clearDisplay() {
   var1 = "";
   var2 = "";
   operator = null;
   displayvalue = "";
   displayDiv.textContent = "0";
}

function getOperator(input) {
   if (var1 !== "") {
      operator = input;
      displayvalue = "";
      displayDiv.textContent = "0";
  }
}

function calculate() {
   if (var1 !== "" && var2 !== "" && operator !== null) {
      const result = operate(var1, var2, operator);
      displayDiv.textContent = result;
      var1 = result.toString();
      var2 = "";
      operator = null;
      displayvalue = var1;
  }
}

displayDiv.textContent = "0";

