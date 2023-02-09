function add(value1,value2){
    sum = value1 += value2
    console.log(sum)
    return sum
}
function subtract(value1,value2){
    sum = value1 -= value2
    console.log(sum)
    return sum
}
function divide(value1,value2){
    sum = value1 /= value2
    console.log(sum)
    return sum
}
function multiply(value1,value2){
    sum = value1 *= value2
    console.log(sum)
    return sum
}
function operate(num1,fnKey,num2){
    if(fnKey == "+"){
        add(num1,num2)
    }else if (fnKey == "-"){
        subtract(num1,num2)
    }else if(fnKey == "/"){
        divide(num1,num2)
    }else if(fnKey == "*"){
        multiply(num1,num2)
    }
}
operate(2,"*",6)
const display = document.querySelector("#display")
// const one = document.querySelector("#one");
// const two = document.querySelector("#two");
// const three = document.querySelector("#three");
// const four = document.querySelector("#four");
const keypad = document.querySelector("#keypad-container")
keypad.addEventListener("click", (e) => {
    if (e.target.nodeName == "INPUT") {
        e.stopPropagation()
        display.append(e.target.value)
    }
})


