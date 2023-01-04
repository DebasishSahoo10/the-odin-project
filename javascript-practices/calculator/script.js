const numBtns = document.querySelectorAll('.num-btns')
const equalBtn = document.querySelector('#equal-btn')
const mainDisplay = document.querySelector('#large-display')
const operatorBtns = document.querySelectorAll('.operator-btns')
const upperDisplay = document.querySelector('#upper-display')


let firstNum = ''
let secondNum = ''
let choosedSign = ''
let result = ''
let upperContent = ''



const operatorsFunc = (num1, num2, operator) => {
    if (operator == '+') {
        result = Number(num1) + Number(num2)
    } else if (operator == '-') {
        result = Number(num1) - Number(num2)
    } else if (operator == 'x') {
        result = Number(num1) * Number(num2)
    } else if (operator == '%') {
        result = Number(num1) / Number(num2)
    }
}

numBtns.forEach((e)=>{
    e.addEventListener("click", (e)=>{
       if (choosedSign) {
        secondNum = secondNum + e.target.innerText
        mainDisplay.innerText = secondNum
        upperContent =  `${upperContent} ${secondNum}`
        upperDisplay.innerText = upperContent
       } else {
        firstNum = firstNum + e.target.innerText
        mainDisplay.innerText = firstNum
        upperContent =  `${upperContent} ${firstNum}`
       }
    })
})

operatorBtns.forEach((e)=>{
    e.addEventListener("click", (e)=>{
        if (secondNum) {
            operatorsFunc(firstNum, secondNum, choosedSign)
            choosedSign = e.target.innerText
            firstNum = result
            secondNum = ''
            upperContent = `${result} ${choosedSign}`
            upperDisplay.innerText = upperContent
        } else if (result) {
            firstNum = result
            choosedSign = e.target.innerText
        } else {
            choosedSign = e.target.innerText
            upperContent = `${upperContent} ${choosedSign}`
            upperDisplay.innerText = upperContent
        }
    })
})

equalBtn.addEventListener("click", ()=>{
    operatorsFunc(firstNum, secondNum, choosedSign)
    firstNum = ''
    secondNum = ''
    choosedSign = ''
    mainDisplay.innerText = result
})


