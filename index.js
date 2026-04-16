import { add, subtract, multiply, divide } from "./maths.js";

let display = document.getElementById("display");
let expression = "";

window.appendToDisplay = function(value) {
  expression += value;
  display.innerText = expression;
};

window.clearDisplay = function() {
  expression = "";
  display.innerText = "";
};

window.calculate = function() {
  let operator;
  let num1;
  let num2;

  if (expression.includes("+")) {
    operator = "+";
  } else if (expression.includes("-")) {
    operator = "-";
  } else if (expression.includes("*")) {
    operator = "*";
  } else if (expression.includes("/")) {
    operator = "/";
  }

  let parts = expression.split(operator);
  num1 = Number(parts[0]);
  num2 = Number(parts[1]);

  let result;

  switch (operator) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = subtract(num1, num2);
      break;
    case "*":
      result = multiply(num1, num2);
      break;
    case "/":
      result = divide(num1, num2);
      break;
  }

  display.innerText = result;
  expression = result.toString();
};

window.addEventListener("keydown", function(event) {
  const key = event.key;
    if (/\d/.test(key) || ["+", "-", "*", "/"].includes(key)) {
        appendToDisplay(key);
    } else if (key === "Enter") {
        calculate();
    } else if (key === "Backspace") {
        expression = expression.slice(0, -1);
        display.innerText = expression;
    } else if (key === "Escape") {
        clearDisplay();
    }
});