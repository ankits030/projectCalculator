let x = "";
let y = "";
let operator = "";
let numberRegister = "";

const output = document.getElementById("result");
const buttons = document.querySelectorAll(".btn");

function updateDisplay(value) {
  output.textContent = value;
}

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return y === 0 ? "Error" : x / y;
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.dataset.value;

  
    if (!isNaN(value) || value === ".") {
      numberRegister += value;
      updateDisplay(numberRegister);
      return;
    }

   
    if (["+", "-", "*", "/"].includes(value)) {
      x = Number(numberRegister);
      operator = value;
      numberRegister = "";
      return;
    }

   
    if (value === "=") {
      y = Number(numberRegister);
      let result;

      switch (operator) {
        case "+": result = add(x, y); break;
        case "-": result = subtract(x, y); break;
        case "*": result = multiply(x, y); break;
        case "/": result = divide(x, y); break;
      }

      updateDisplay(result);
      numberRegister = result.toString();
    }
  });
});

document.getElementById("clr").addEventListener("click", () => {
  x = y = operator = numberRegister = "";
  updateDisplay("");
});

document.getElementById("del").addEventListener("click", () => {
  numberRegister = numberRegister.slice(0, -1);
  updateDisplay(numberRegister);
});
