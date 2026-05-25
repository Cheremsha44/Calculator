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
//JS
let firstValue = 0
let secondValue = 0
let operator = ''
let result = 0
// eventListener
operatorButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        operator = button.id
        firstValue = parseInt(inputValue.value, 10)
        console.log(`${firstValue} ${operator}`)
    })
})

calculate.addEventListener("click", (e) => {
    secondValue = parseInt(inputValue.value, 10)
    result = firstValue + secondValue
    console.log(result)
})
