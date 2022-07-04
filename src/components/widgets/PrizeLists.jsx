//external dependencies
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import * as api from '../../apiClient'

export default function PrizeLists(props) {
  console.log(props)
  const [listArray, setListArray] = useState([])

  useEffect(() => {
    api
      .getBooksByPrizeAndYear(props.prizeId, props.prizeYear.year)
      .then((result) => {
        setListArray(result)
        return null
      })
      .catch((err) => {
        console.log(err)
      })
  }, [props])

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
            <div className="author-name">{book.name}</div>
          </div>
        </div>
      </Link>
    )
  })

  return (
    <React.Fragment>
      <div className="list-container">
        <div className="prize-winners-group">
          <div className="header-year">{props.prizeYear.year}</div>
          <div className="book-card-container">{books}</div>
        </div>
      </div>
    </React.Fragment>
  )
}
