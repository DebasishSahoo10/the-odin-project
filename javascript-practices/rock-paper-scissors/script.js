const userBtns = document.querySelectorAll("button")
const resultArea = document.querySelector("#result-area")
const scoreArea = document.querySelector('#score-area')

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


const compareChoices = (userChoice) => {
    let computerChoice = computerChoiceRandomizer()
    if (userChoice == computerChoice) {
        resultArea.innerText = "It is a Tie"
        scoreArea.innerText = `Computer's score is ${computerScore} and Your score is ${userScore}`
    } else if (winPairs[userChoice] == computerChoice) {
        userScore +=1
        resultArea.innerText = "You Won"
        scoreArea.innerText = `Computer's score is ${computerScore} and Your score is ${userScore}`
    } else {
        computerScore += 1
        resultArea.innerText = "Computer Won"
        scoreArea.innerText = `Computer's score is ${computerScore} and Your score is ${userScore}`
    }
}



userBtns.forEach(e=>{
    e.addEventListener("click", ()=>{
        compareChoices(e.value)
    })
})





// ------- ANOTHER LOGIC ------- \\


// /* get user's input */
// let userChoice = prompt('please choose one from rock, paper or scissors, and type into the box below');

// /* convert user's input into index */
// userChoice = userChoice.toLowerCase();
// let choiceStack = ['paper', 'rock', 'scissors'];
// let userChoiceIndex = choiceStack.indexOf(userChoice);

// /* generate computer's choice */
// let randomNum = Math.floor(Math.random() * 3);
// let computerChoice = choiceStack[randomNum];

// /* log the each choices on the console */
// console.log(`Your choice is ${userChoice}, the computer's choice is ${computerChoice}.`);

// /* make a two dimensional array */
// const results = [
// ['t', 'c', 'u'],
// ['u', 't', 'c'],
// ['c', 'u', 't'],
// ];

// /* use userChoice index (because in the end we just need the user result) to find the result in this two dimensional array */
// let userResult = results[randomNum][userChoiceIndex];

// /* make an object to convert the final result into a sentence, so we can log it on the console */
// const resultMap = {
// 't': "Tie",
// 'u': "You win",
// 'c': "You lose"
// };
// console.log(resultMap[userResult]);