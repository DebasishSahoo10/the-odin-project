import { useState } from 'react'
import './App.css'

function App() {
  const [formState, setFormState] = useState()
  const showForm = () => {
    setFormState("block")
  }

  return (
    <div className="App">

      <div id="card-container">
        <div className="card" id="add-btn-card" onClick={showForm}>+</div>
      </div>
    
      <form action="" id="newBookForm" className={formState}>
        <label htmlFor="tittle-input">Book Name : </label>
        <input type="text" id="tittle-input"></input>
        <label htmlFor="author-input">Author : </label>
        <input type="text" id="author-input"></input>
        <label htmlFor="pages">No. Of Pages : </label>
        <input type="number" id="pages-input"></input>
        <label htmlFor="read-status">Read or Not : </label>
        <input type="checkbox" id="read-status"></input>
        <button id="newBookBtn">Submit</button>
        <button id="formCloseBtn">X</button>
      </form>
      
    </div>
  )
}

export default App
