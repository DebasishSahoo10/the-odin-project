

// book.prototype.info = function () {
//     return this.tittle + " by " + this.author + "," + this.pages + "," + this.readStat
// }

// const player1 = new book("The Hobbit","J.R.R. Tolkien","295 pages","not read yet")
// console.log(player1.info())

const myLibrary = []

const addBtnCard = document.getElementById('add-btn-card')
const cardContainer = document.getElementById('card-container')
const newBookBtn = document.getElementById('newBookBtn')
const newBookForm = document.getElementById('newBookForm')
const formCloseBtn = document.getElementById('formCloseBtn')
const tittleInput = document.getElementById('tittle-input')
const authorInput = document.getElementById('author-input')
const pagesInput = document.getElementById('pages-input')
const readStatus = document.getElementById('read-status')

function book (tittle, author, pages, readStat) {
    this.tittle = tittle
    this.author = author
    this.pages = pages
    this.readStat = readStat
}

addBtnCard.addEventListener("click", ()=>{
    newBookForm.style.display = "block"
})
formCloseBtn.addEventListener("click", ()=>{
    newBookForm.style.display = "none"
})
newBookBtn.addEventListener("click", (event)=>{
    event.preventDefault()
    const newBook = new book(tittleInput.value, authorInput.value, pagesInput.value, readStatus.checked)
    // console.log(newBook)
})

// addBtnCard.addEventListener("click", ()=>{
//     const newCard = document.createElement("div")
//     newCard.className = "card"
//     cardContainer.appendChild(newCard)
// })