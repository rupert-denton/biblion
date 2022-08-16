//external dependencies
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import * as api from '../../apiClient'
import './Lists.css'

export default function Lists(props) {
  const [listArray, setListArray] = useState([])

  useEffect(() => {
    api
      .getBooksOnListById(props.listData.id)
      .then((result) => {
        setListArray(result)
        return null
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const books = listArray.map((book, id) => {
    return (
      <Link key={id} className="book-link" to={`/books/${book.book_id}`}>
        <div className="book-card">
          <div className="book-card-image">
            <img
              className="cover-image"
              src={book.cover_image}
              alt="The book cover"
            />
          </div>
          <div className="book-info">
            <div className="book-title">{book.title}</div>
            <div className="book-page-author">{book.name}</div>
          </div>
        </div>
      </Link>
    )
  })

  return (
    <React.Fragment>
      <div className="list-container">
        <div className="list-name">{props.listData.list_name}</div>
        <div className="prize-winners-group">
          <div className="book-card-container">{books}</div>
        </div>
      </div>
    </React.Fragment>
  )
}
