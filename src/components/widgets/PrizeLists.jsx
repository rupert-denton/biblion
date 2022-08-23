//external dependencies
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import * as api from '../../apiClient'
import PropTypes from 'prop-types'

export default function PrizeLists({ prizeYear, prizeId }) {
  const [listArray, setListArray] = useState([])

  useEffect(() => {
    api
      .getBooksByPrizeAndYear(prizeId, prizeYear.year)
      .then((result) => {
        setListArray(result)
        return null
      })
      .catch((err) => {
        console.log(err)
      })
  }, [prizeId])

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
        <div className="prize-winners-group">
          <div className="header-year">{prizeYear.year}</div>
          <div className="book-card-container">{books}</div>
        </div>
      </div>
    </React.Fragment>
  )
}

PrizeLists.propTypes = {
  prizeYear: PropTypes.object,
  prizeId: PropTypes.any,
}
