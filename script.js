let x = "";
let y = "";
let operator = "";
let numberRegister = "";
const result = document.getElementById('result');

function add (x, y) {
    return x + y;
}

function substract (x, y) {
    return x - y;
}

function mulitply (x, y) {
    return x * y;
}

function divide (x, y) {
    if (y !== 0) {
        return x / y;
    } else {
        return Error;
    }    
}
