import { useState } from 'react'
import './App.css'

function App() {
  const [formState, setFormState] = useState()
  const [tittle, setTittle] = useState()
  const [author, setAuthor] = useState()
  const [pages, setPages] = useState()
  const [readStat, setReadStat] = useState()
  const [image, setImage] = useState("https://hometownreads.com/images/your-book-here.jpg")
  const [myLibrary, setMyLibrary] = useState([{
    tittle: 'Everything',
    author: 'J.R.R. Tolkien',
    pages: '295',
    readStat: false,
    image : 'https://kottke.org/plus/misc/images/movie-posters-2022-07.jpg'
  },
  {
    tittle: 'Loving Vincent',
    author: 'J.R.R. Tolkien',
    pages: '184',
    readStat: true,
    image: 'https://m.media-amazon.com/images/M/MV5BMjIwYjU4YjgtZGYyOS00NGZmLTg2MzItODIwYmI2N2FkMjQ5XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg'
  }])
  
  function book (tittle, author, pages, readStat, image) {
    this.tittle = tittle
    this.author = author
    this.pages = pages
    this.readStat = readStat
    this.image = image
  }
  const addToLibrary = (event) => {
    event.preventDefault()
    const newBook = new book(tittle, author, pages, readStat, image)
    setMyLibrary(old => [...old, newBook])
  }
  
  return (
    <div className="App">

      <div className='header-section flex'>
        <div className='user-header flex'>
          <div>
            <p className='hey-user'>Hi, Aurora</p>
            <h1>Grab a Book!</h1>
          </div>
          <div>
            <img src="src\assets\Ellipse 4.png" alt="" className='user-picture'/>
          </div>
        </div>
        <div className='search-header'>
          <input type="text" className='search-bar' placeholder='👀 Search Feature Coming Soon'/>
          {/* <img src="" alt="" className='qr-bar'/> */}
        </div>
      </div>

      <div className='category-container flex'>
        <button className='btn-1'>Crime</button>
        <button className='btn-2'>Comedy</button>
        <button className='btn-3'>Thriller</button>
        <button className='btn-4'>Fantasy</button>
        <button className='btn-5'>Mythology</button>
        <button className='btn-6'>Categorisation Coming Soon..</button>
      </div>
      <div id="card-container">
        <div className="card" id="add-btn-card" onClick={()=>setFormState("block")}>+</div>
        
          {myLibrary.map((e, index)=>(
            <div className='card' key={e.tittle}>
              <div className='left-section'>
              <div className='author-tittle'>
              <h4 className='tittle'>{e.tittle}</h4>
              <p className='author'>{e.author}</p>
            </div>
            <div>
            <div className='flex'>
                <div className="btn-container">
                  
                  <div className='flex'>
                    <p>Read : </p>
                    <input type="checkbox" className='check' defaultChecked={e.readStat} onClick={(a)=>{
                    if (e.readStat) {
                      e.readStat = false
                      a.target.checked = false
                    } else {
                      e.readStat = true
                      a.target.checked = true
                    }
                    }}/>
                  </div>

                  {/* <button onClick={()=>{
                  setMyLibrary(myLibrary.splice(index, 1))
                  }}>Remove Book</button> */}
                </div>
              </div>
            </div>
              <div className='flex'>
                <p className='pages-number'>{e.pages} </p><span className='pages-text'>pages</span>
              </div>
      
              </div>
              <div>
                <img src={e.image} alt="" className='poster' />
              </div>
            </div>
          ))}
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
        
        <div>
          <button id="newBookBtn" type='submit' onClick={addToLibrary} className='submit-btn'>Submit</button>
          <button id="formCloseBtn" onClick={(e)=>{
            e.preventDefault()
            setFormState("none")
          }} className='close-btn'>close</button>
        </div>
        
      </form>
      
    </div>
  )
}

export default App
