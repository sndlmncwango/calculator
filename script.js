let sum = 0;
let number1 = 0;
let number2 = 0;
let functionKey = "";
function add(value1, value2) {
    sum = value1 += value2
    return sum
}
function subtract(value1, value2) {
    sum = value1 -= value2
    return sum
}
function divide(value1, value2) {
    sum = value1 /= value2
    return sum
}
function multiply(value1, value2) {
    sum = value1 *= value2
    return sum
}
function operate(num1, fnKey, num2) {
    if (fnKey == "+") {
        add(num1, num2)
    } else if (fnKey == "-") {
        subtract(num1, num2)
    } else if (fnKey == "/") {
        divide(num1, num2)
    } else if (fnKey == "*") {
        multiply(num1, num2)
    }
    display.innerText = sum;
}
const display = document.querySelector("#display")
const numbers = document.querySelector("#numbers")
const operators = document.querySelector("#operators")
const plus = document.querySelector("#plus")
const equalsTo = document.querySelector("#equalsTo")
numbers.addEventListener("click", (e) => {
    e.stopPropagation()
    if (e.target.nodeName === "INPUT") {
        display.append(e.target.value);
    }
});
operators.addEventListener("click", (e) => {
    e.stopPropagation();
    if (e.target.nodeName === "INPUT") {
        number1 = display.innerText;
        functionKey = e.target.value;
        display.innerText = "";
    }
    
});
equalsTo.addEventListener("click", () => {
    number2 = display.innerText;
    operate(parseInt(number1), functionKey, parseInt(number2))
})