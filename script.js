// Make eventlistener to console.log(button.value)
// Make eventlistener to console.log(input.value)

//HTML
const inputValue = document.querySelector('#inputValue')
const operatorButtons = document.querySelectorAll('.operator')
const calculate = document.querySelector('.ravno')
//JS
let firstValue = 0
let secondValue = 0
let operator = ''
// eventListener
operatorButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        console.log(button.id)
        firstValue = inputValue.value
        console.log(firstValue)
    })
})
