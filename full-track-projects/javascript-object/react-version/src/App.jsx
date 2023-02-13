import { useState } from 'react'
import './App.css'

function App() {
  

  return (
    <div className="App">
      
      <div id="card-container">
        <div class="card" id="add-btn-card">+</div>
      </div>
    
      <form action="" id="newBookForm">
        <label for="tittle-input">Book Name : </label>
        <input type="text" id="tittle-input"></input>
        <label for="author-input">Author : </label>
        <input type="text" id="author-input"></input>
        <label for="pages">No. Of Pages : </label>
        <input type="number" id="pages-input"></input>
        <label for="read-status">Read or Not : </label>
        <input type="checkbox" id="read-status"></input>
        <button id="newBookBtn">Submit</button>
        <button id="formCloseBtn">X</button>
      </form>
      
    </div>
  )
}

export default App
