import './GlobalStyles.css'
import { React, useState, useEffect } from 'react'
import * as api from '../../../../apiClient'
import Navbar from '../../../ui/Navbar'

export default function AddBookToList() {
  const [bookListData, setbookListData] = useState({
    list_id: '',
    book_id: '',
  })
  const [listArray, setListArray] = useState([{}])
  const [bookArray, setBookArray] = useState([{}])
  const [booksOnListArray, setBooksOnListArray] = useState([{}])

  const getBooksOnList = (id) => {
    api
      .getBooksOnListById(id)
      .then((books) => {
        console.log(books)
        setBooksOnListArray(books)
        return null
      })
      .catch((err) => {
        console.log(err)
      })
  }

  console.log(booksOnListArray)

  const handleSetList = (e) => {
    console.log(e.target.value)
    setBooksOnListArray([{}])
    let id = e.target.value
    let key = e.target.name
    let value = e.target.value
    let prev = { ...bookListData }
    prev[key] = value
    setbookListData(prev)
    getBooksOnList(id)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(bookListData)
    api.postBooksToList(bookListData).then((response) => {
      console.log(response)
    })
  }

  const handleDeleteItem = (e) => {
    e.preventDefault()
    console.log(`Deleting: ${e.target.value}`)
  }

  console.log(listArray)
  useEffect(() => {
    api
      .getAllLists()
      .then((lists) => {
        setListArray(lists)
        return null
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  useEffect(() => {
    api
      .getAllBooks()
      .then((books) => {
        setBookArray(books)
        return null
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const listDropDown = listArray.map((list, id) => {
    return (
      <option name="list_id" value={list.id} key={id}>
        {list.list_name}
      </option>
    )
  })

  const booksOnList =
    booksOnListArray.length === 0
      ? ''
      : booksOnListArray.map((book, id) => {
          return (
            <div className="book-item" key={id}>
              <span>{book.title}</span>
              <span>
                <button
                  name="book_id"
                  value={book.id}
                  onClick={(e) => handleDeleteItem(e)}
                >
                  Remove
                </button>
              </span>
            </div>
          )
        })

  const books = bookArray.map((book, id) => {
    return (
      <div className="book-item" key={id}>
        <span>{book.title}</span>
        <span>
          <button
            name="book_id"
            value={book.id}
            onClick={(e) => handleSetList(e)}
          >
            Add
          </button>
        </span>
      </div>
    )
  })

  // ;<button type="submit" className="addPrize">
  //   Add List
  // </button>

  return (
    <div className="curator-container">
      <Navbar />
      <h1 className="heading">Add Books to List</h1>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <label>Select List</label>
          <select
            className="dropdown"
            name="list_id"
            value={listArray.list_id}
            onChange={(e) => handleSetList(e)}
          >
            {listDropDown}
          </select>

          <h3>Books On List</h3>
          <div className="book-list">{booksOnList}</div>
          <h3>Books in Database</h3>
          <div className="book-list">{books}</div>
        </form>
      </div>
    </div>
  )
}
