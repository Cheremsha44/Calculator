// Make eventlistener to console.log(button.value)
// Make eventlistener to console.log(input.value)


// 1) Vvod in input
// 2) Click button operator {firstValue} and {operator}
// 3) Vvod in input {secondValue}
// 4) Click button calculate {secondValue}
// 5) Calculate {firstValue} and {operator} and {secondValue}
//---------------------------------------------------------------------------------------------------------
//HTML
const inputValue = document.querySelector('#inputValue')
const operatorButtons = document.querySelectorAll('.operator')
const calculate = document.querySelector('.ravno')
const numberButtons = document.querySelectorAll('.number-btn')
const resetButton = document.querySelector('.reset')
//JS
let firstValue = 0
let secondValue = 0
let operator = ''
let result = 0
let shouldResetScreen = false
const matchOperator = {
    add: (a,b)=>a+b,
    subtract: (a,b)=>a-b,
    multiply: (a,b)=>a*b,
    divide: (a,b)=>a/b
}
// eventListener
numberButtons.forEach((button) =>{
    button.addEventListener("click", (e) => {
        const digit = button.textContent
        if(digit === '.' && inputValue.value.includes('.')){
            return
        }
        if(shouldResetScreen || inputValue.value === "0"){
            if(digit !== '.'){
                inputValue.value = digit
            }else{

                inputValue.value = inputValue.value + digit
            }
            shouldResetScreen = false
        }else{
            inputValue.value = inputValue.value + digit
        }
    })
})

operatorButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        operator = button.id
        if(inputValue.value!== ''){
            firstValue = parseFloat(inputValue.value)
            inputValue.value = '';
        }
    })
})

calculate.addEventListener("click", (e) => {
    if(!operator){
        return
    }
    secondValue = parseFloat(inputValue.value)
    result = matchOperator[operator](firstValue, secondValue)
    inputValue.value = result;
    operator = ''
    secondValue = 0
    shouldResetScreen = true
})

resetButton.addEventListener("click", (e) => {
    inputValue.value = 0
    operator = ''
    secondValue = 0
    firstValue = 0
    shouldResetScreen = false
})