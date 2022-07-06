import './GlobalStyles.css'
import React, { useState, useEffect } from 'react'
import * as api from '../../../../apiClient'

export default function AddBook() {
  const [authorArray, setAuthorArray] = useState([])
  const [bookData, setBookData] = useState({
    title: '',
    blurb: '',
    cover_image: '',
    pub_year: '',
    genre: '',
  })

  const [newAuthorData, setNewAuthorData] = useState({
    name: '',
    bio: '',
    image: '',
  })

  const [existingAuthorData, setExistingAuthorData] = useState({
    author_id: '',
  })

  useEffect(() => {
    api
      .getAllAuthors()
      .then((authors) => {
        setAuthorArray(authors)
        return null
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const dataForPost = [
    bookData,
    newAuthorData.name !== '' ? newAuthorData : existingAuthorData,
  ]

  const authorDropDown = authorArray.map((author, id) => {
    return (
      <option name="author_id" value={author.id} key={id}>
        {author.name}
      </option>
    )
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    api.postBookWithAuthor(dataForPost)
  }

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
    let prev = { ...newAuthorData }
    prev[key] = value
    setNewAuthorData(prev)
  }

  const handleSetExistingAuthor = (e) => {
    let key = e.target.name
    let value = e.target.value
    let prev = { ...existingAuthorData }
    prev[key] = value
    setExistingAuthorData(prev)
  }

  return (
    // book
    <form onSubmit={handleSubmit}>
      <div className="curator-container">
        <h1 className="heading">Book Details</h1>
        <div className="form-container">
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
          <select
            className="dropdown"
            name="author_id"
            // value={authorArray.id}
            onChange={(e) => handleSetExistingAuthor(e)}
          >
            <option value="" disabled>
              --Author Name--
            </option>
            {authorDropDown}
          </select>

          <h1 className="heading">Add New Author</h1>
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
            onChange={(e) => handleChangeAuthor(e)}
          ></input>
          <button type="submit" className="addBook">
            Add Book
          </button>
        </div>
      </div>
    </form>
  )
}

// const { bookChangeHandler } = props

// const handleSubmit = (e) => {
//   e.preventDefault()

//   // bookChangeHandler(bookData) //gives the list item back to app.jsx (to put in the list with the spread operator)
//   // setBookData('')
// }
