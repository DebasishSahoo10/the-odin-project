const paperBtn = document.querySelector("#paper-btn")
const rockBtn = document.querySelector("#rock-btn")
const scissorsBtn = document.querySelector("#scissor-btn")
const outputArea = document.querySelector("#output-area")

let score = 0

const choiceArray = ["rock", "paper", "scissors"]

const computerChoiceRandomizer = () => {
    let computerChoice = choiceArray[Math.floor(Math.random()*choiceArray.length)]
    console.log(computerChoice)
}






paperBtn.addEventListener("click", computerChoiceRandomizer)
rockBtn.addEventListener("click", computerChoiceRandomizer)
scissorsBtn.addEventListener("click", computerChoiceRandomizer)