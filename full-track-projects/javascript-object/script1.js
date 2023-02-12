// function book (tittle, author, pages, readStat) {
//     this.tittle = tittle
//     this.author = author
//     this.pages = pages
//     this.readStat = readStat
// }

// book.prototype.info = function () {
//     return this.tittle + " by " + this.author + "," + this.pages + "," + this.readStat
// }

// const player1 = new book("The Hobbit","J.R.R. Tolkien","295 pages","not read yet")
// console.log(player1.info())

const addBtnCard = document.getElementById('add-btn-card')
const cardContainer = document.getElementById('card-container')
const newBookBtn = document.getElementById('newBookBtn')
const newBookForm = document.getElementById('newBookForm')
const formCloseBtn = document.getElementById('formCloseBtn')



addBtnCard.addEventListener("click", ()=>{
    newBookForm.style.display = "block"
})
formCloseBtn.addEventListener("click", ()=>{
    newBookForm.style.display = "none"
})

// addBtnCard.addEventListener("click", ()=>{
//     const newCard = document.createElement("div")
//     newCard.className = "card"
//     cardContainer.appendChild(newCard)
// })