import './GlobalStyles.css'
import React, { useState } from 'react'

export default function AddBook() {
  const [bookData, setBookData] = useState({
    title: '',
    blurb: '',
    cover_image: '',
    pub_year: '',
    genre: '',
  })
  const [authorData, setAuthorData] = useState({
    name: '',
    bio: '',
    image: '',
  })
  const [prizeData, setPrizeData] = useState({
    name: '',
    year: '',
    winner: false,
    shortlist: false,
    longlist: false,
  })

  const dataArr = [bookData, authorData, prizeData]

  console.log(dataArr)

  const handleChangeBook = (e) => {
    let key = e.target.name
    let value = e.target.value
    let prev = { ...bookData }
    prev[key] = value
    setBookData(prev)
  }

  const handleChangeAuthor = (e) => {
    let key = e.target.name
    let value = e.target.value
    let prev = { ...authorData }
    prev[key] = value
    setAuthorData(prev)
  }

  const handleSetPrize = (e) => {
    let key = e.target.name
    let value = e.target.value
    let prev = { ...prizeData }
    prev[key] = value
    setPrizeData(prev)
  }

  return (
    // book
    <div className="curator-container">
      <h1 className="heading">Book Details</h1>
      <div className="prize-details-container">
        <div className="prize-details">
          <select
            className="dropdown"
            name="name"
            value={prizeData.name}
            onChange={(e) => handleSetPrize(e)}
          >
            <option value="" disabled>
              --Prize Name--
            </option>
            <option value="The Booker Prize">The Booker Prize</option>
            <option value="The Pulitzer Prize: Fiction">
              The Pulitzer Prize: Fiction
            </option>
            <option value="Nobel Prize for Literature">
              Nobel Prize for Literature
            </option>
          </select>
          <input
            className="year"
            type="text"
            name="year"
            placeholder="Year"
            value={setPrizeData.year}
            onChange={(e) => handleSetPrize(e)}
          ></input>
        </div>
        <div className="book-status">
          <label>Winner</label>
          <input
            type="checkbox"
            name="winner"
            value={true}
            onChange={(e) => handleSetPrize(e)}
          />
          <label>Shortlist</label>
          <input
            type="checkbox"
            name="shortlist"
            value={true}
            onChange={(e) => handleSetPrize(e)}
          />
          <label>Longlist</label>
          <input
            type="checkbox"
            name="longlist"
            value={true}
            onChange={(e) => handleSetPrize(e)}
          />
        </div>
      </div>

      <h1 className="heading">Book Details</h1>
      <div className="form-container">
        <form>
          <label>Book Title</label>
          <input
            type="text"
            name="title"
            className="form-item"
            value={setBookData.title}
            onChange={(e) => handleChangeBook(e)}
          ></input>
          <label>Blurb</label>
          <textarea
            className="form-item"
            rows="8"
            name="blurb"
            value={setBookData.blurb}
            onChange={(e) => handleChangeBook(e)}
          ></textarea>
          <label>Image Link</label>
          <input
            type="text"
            name="cover_image"
            className="form-item"
            value={setBookData.cover_image}
            onChange={(e) => handleChangeBook(e)}
          ></input>
          <label>Pub Year</label>
          <input
            type="text"
            name="pub_year"
            className="form-item"
            value={setBookData.pub_year}
            onChange={(e) => handleChangeBook(e)}
          ></input>
          <label>Genre</label>
          <input
            type="text"
            name="genre"
            className="form-item"
            value={setBookData.genre}
            onChange={(e) => handleChangeBook(e)}
          ></input>

          <h1 className="heading">Author Details</h1>
          <label>Name</label>
          <input
            type="text"
            name="name"
            className="form-item"
            // value={}
            onChange={(e) => handleChangeAuthor(e)}
          ></input>
          <label>Bio</label>
          <textarea
            className="form-item"
            rows="8"
            name="bio"
            onChange={(e) => handleChangeAuthor(e)}
          ></textarea>

          <label>Image Link</label>
          <input
            type="text"
            name="image"
            className="form-item"
            // value={}
            onChange={(e) => handleChangeAuthor(e)}
          ></input>
          <button type="submit" className="addBook">
            Add Book
          </button>
        </form>
      </div>
    </div>
  )
}

// const { bookChangeHandler } = props

// const handleSubmit = (e) => {
//   e.preventDefault()

//   // bookChangeHandler(bookData) //gives the list item back to app.jsx (to put in the list with the spread operator)
//   // setBookData('')
// }
