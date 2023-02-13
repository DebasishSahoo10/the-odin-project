import { useState } from 'react'
import './App.css'

function App() {
  const [formState, setFormState] = useState()
  const [tittle, setTittle] = useState()
  const [author, setAuthor] = useState()
  const [pages, setPages] = useState()
  const [readStat, setReadStat] = useState()
  const [myLibrary, setMyLibrary] = useState([])
  
  function book (tittle, author, pages, readStat) {
    this.tittle = tittle
    this.author = author
    this.pages = pages
    this.readStat = readStat
  }
  const addToLibrary = (event) => {
    event.preventDefault()
    const newBook = new book(tittle, author, pages, readStat)
    setMyLibrary(old => [...old, newBook])
    console.log(myLibrary)
  }

  return (
    <div className="App">

      <div id="card-container">
        <div className="card" id="add-btn-card" onClick={()=>setFormState("block")}>+</div>
        
          {myLibrary.map((e)=>(
            <div className='card'>
              <h4>{e.tittle}</h4>
            </div>
          ))}
        {/* <button onClick={()=>{console.log(myLibrary)}}>test</button> */}
      </div>
    
      <form action="" id="newBookForm" className={formState}>
        <label htmlFor="tittle-input">Book Name : </label>
        <input type="text" id="tittle-input" onChange={(e)=>setTittle(e.target.value)}></input>
        <label htmlFor="author-input">Author : </label>
        <input type="text" id="author-input" onChange={(e)=>setAuthor(e.target.value)}></input>
        <label htmlFor="pages">No. Of Pages : </label>
        <input type="number" id="pages-input" onChange={(e)=>setPages(e.target.value)}></input>
        <label htmlFor="read-status">Read or Not : </label>
        <input type="checkbox" id="read-status" onChange={(e)=>setReadStat(e.target.checked)}></input>
        <button id="newBookBtn" type='submit' onClick={addToLibrary}>Submit</button>
        <button id="formCloseBtn" onClick={(e)=>{
          e.preventDefault()
          setFormState("none")
        }}>X</button>
      </form>
      
    </div>
  )
}

export default App
