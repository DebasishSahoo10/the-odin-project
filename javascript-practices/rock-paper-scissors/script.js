const paperBtn = document.querySelector("#paper-btn")
const rockBtn = document.querySelector("#rock-btn")
const scissorsBtn = document.querySelector("#scissor-btn")
const outputArea = document.querySelector("#output-area")




var testingFunc = () => {
    console.log("testing")
}



paperBtn.addEventListener("click", testingFunc)
rockBtn.addEventListener("click", testingFunc)
scissorsBtn.addEventListener("click", testingFunc)