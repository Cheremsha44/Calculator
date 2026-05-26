//HTML
const inputValue = document.querySelector('#inputValue')
const lastValue = document.querySelector('#lastValue')
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
const operatorSymbols = {
    add: '+',
    subtract: '-',
    multiply: '*',
    divide: '/'
}
//---------------------------------------------------------------------------------------------------------
numberButtons.forEach((button) =>{
    button.addEventListener("click", (e) => {
        const digit = button.textContent
        if(digit === '.' && inputValue.textContent.includes('.')){
            return
        }
        if(shouldResetScreen || inputValue.textContent === "0"){
            if(digit !== '.'){
                inputValue.textContent = digit
            }else{

                inputValue.textContent = inputValue.textContent + digit
            }
            shouldResetScreen = false
        }else{
            inputValue.textContent = inputValue.textContent + digit
        }
    })
})

operatorButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        operator = button.id
        if(inputValue.textContent !== ''){
            firstValue = parseFloat(inputValue.textContent)
            lastValue.textContent = firstValue
            inputValue.textContent = '';
        }
    })
})

calculate.addEventListener("click", (e) => {
    if(!operator){
        return
    }
    secondValue = parseFloat(inputValue.textContent)
    result = matchOperator[operator](firstValue, secondValue)
    inputValue.textContent = result;
    lastValue.textContent = `${firstValue} ${operatorSymbols[operator]} ${secondValue} = `;
    operator = ''
    secondValue = 0
    shouldResetScreen = true
})

resetButton.addEventListener("click", (e) => {
    inputValue.textContent = '0'
    lastValue.textContent = ''
    operator = ''
    secondValue = 0
    firstValue = 0
    shouldResetScreen = false
})