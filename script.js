//HTML
const inputValue = document.querySelector('#inputValue')
const lastValue = document.querySelector('#lastValue')
const operatorButtons = document.querySelectorAll('.operator')
const calculate = document.querySelector('.ravno')
const numberButtons = document.querySelectorAll('.number-btn')
const resetButton = document.querySelector('.reset')
const resetCButton = document.querySelector('.reset-c')
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
        if(operator !== ''){
            secondValue = parseFloat(inputValue.textContent)
            result = matchOperator[operator](firstValue, secondValue)
            firstValue = result
            operator = button.id
            lastValue.textContent = `${result} ${operatorSymbols[operator]}` 
        }else{
            operator = button.id
            if(inputValue.textContent !== ''){
                firstValue = parseFloat(inputValue.textContent)
                lastValue.textContent = `${firstValue} ${operatorSymbols[operator]}`
            }
        }
        inputValue.textContent = '0';
    })
})

calculate.addEventListener("click", (e) => {
    if(!operator){
        return
    }
    if (operator === 'divide' && secondValue === 0){
        lastValue.textContent = `${firstValue} ${operatorSymbols[operator]} ${secondValue} = `;
        inputValue.textContent = "Nice try"
        shouldResetScreen = true
        return
    }
    secondValue = parseFloat(inputValue.textContent)
    result = matchOperator[operator](firstValue, secondValue)
    inputValue.textContent = Number(result.toFixed(4));
    lastValue.textContent = `${firstValue} ${operatorSymbols[operator]} ${secondValue} = `;
    operator = ''
    secondValue = 0
    shouldResetScreen = true
})

resetButton.addEventListener("click", (e) => {
    inputValue.textContent = '0'
    lastValue.textContent = '0'
    operator = ''
    secondValue = 0
    firstValue = 0
    shouldResetScreen = false
})

resetCButton.addEventListener("click", (e) => {
    inputValue.textContent = inputValue.textContent.slice(0, -1)
    if(inputValue.textContent === ''){
        inputValue.textContent = '0'
    }
})