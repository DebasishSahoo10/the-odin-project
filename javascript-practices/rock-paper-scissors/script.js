const paperBtn = document.querySelector("#paper-btn")
const rockBtn = document.querySelector("#rock-btn")
const scissorsBtn = document.querySelector("#scissor-btn")
const resultArea = document.querySelector("#result-area")

let userScore = 0
let computerScore = 0

const choiceArray = ["rock", "paper", "scissors"]

const computerChoiceRandomizer = () => {
    let randomChoice = choiceArray[Math.floor(Math.random()*choiceArray.length)]
    return randomChoice
}



const winPairs = {
    "rock" : "scissors",
    "paper" : "rock",
    "scissors" : "paper"
}








paperBtn.addEventListener("click", (e)=>{
    compareChoices(e.target.innerHTML.toLowerCase())
})
rockBtn.addEventListener("click", (e)=>{
    compareChoices(e.target.innerHTML.toLowerCase())
})
scissorsBtn.addEventListener("click", (e)=>{
    compareChoices(e.target.innerHTML.toLowerCase())
})