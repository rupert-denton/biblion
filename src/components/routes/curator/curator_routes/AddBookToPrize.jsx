import './GlobalStyles.css'
import React, { useState, useEffect } from 'react'
import * as api from '../../../../apiClient'

export default function AddBookToPrize() {
  const [prizeArray, setPrizeArray] = useState([])
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
    prize_id: '',
    year: '',
    winner: false,
    shortlist: false,
    longlist: false,
  })

  const dataArr = [bookData, authorData, prizeData]

  const handleSubmit = (e) => {
    e.preventDefault()
    api.postBooksToPrize(dataArr)
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
    let prev = { ...authorData }
    prev[key] = value
    setAuthorData(prev)
  }

  const handleSetPrize = (e) => {
    let key = e.target.name
    let value = e.target.value
    let checked = e.target.checked
    let prev = { ...prizeData }
    prev[key] = value || checked
    setPrizeData(prev)
  }

  useEffect(() => {
    api
      .getAllPrizes()
      .then((prizes) => {
        setPrizeArray(prizes)
        return null
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const prizeDropDown = prizeArray.map((prize, id) => {
    return (
      <option name="prize_id" value={prize.id} key={id}>
        {prize.prize_name}
      </option>
    )
  })

  return (
    // book
    <form onSubmit={handleSubmit}>
      <div className="curator-container">
        <h1 className="heading">Book Details</h1>
        <div className="prize-details-container">
          <div className="prize-details">
            <select
              className="dropdown"
              name="prize_id"
              value={prizeData.id}
              onChange={(e) => handleSetPrize(e)}
            >
              <option value="" disabled>
                --Prize Name--
              </option>
              {prizeDropDown}
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
            <select
              className="dropdown"
              name="winner"
              value={prizeData.winner}
              onChange={(e) => handleSetPrize(e)}
            >
              <option value="" disabled>
                --Prize Name--
              </option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
            <label>Shortlist</label>
            <select
              className="dropdown"
              name="shortlist"
              value={prizeData.shortlist}
              onChange={(e) => handleSetPrize(e)}
            >
              <option value="" disabled>
                --Prize Name--
              </option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
            <label>Longlist</label>
            <select
              className="dropdown"
              name="longlist"
              value={prizeData.longlist}
              onChange={(e) => handleSetPrize(e)}
            >
              <option value="" disabled>
                --Prize Name--
              </option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
        </div>

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
