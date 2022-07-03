//external dependencies
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import * as api from '../../../../apiClient'
import './PrizePage.css'
import Navbar from '../../../ui/Navbar'

export default function PrizePage() {
  let { prizeId } = useParams()
  const [prizeInfo, setPrizeInfo] = useState({})
  const [bookArr, setbookArr] = useState([{}])

  console.log(prizeInfo)
  console.log(bookArr)
  useEffect(() => {
    api
      .getPrizeById(prizeId)
      .then((prizeInfo) => {
        setPrizeInfo(prizeInfo)
        return null
      })
      .catch((err) => {
        console.log(err)
      })
  }, [prizeId])

  useEffect(() => {
    api
      .getBooksByPrize(prizeId)
      .then((bookArr) => {
        setbookArr(bookArr)
        return null
      })
      .catch((err) => {
        console.log(err)
      })
  }, [prizeId])

  const arr2021 = bookArr.filter((book) => book.year === 2021)
  const arr2020 = bookArr.filter((book) => book.year === 2020)

  const books2021 = arr2021.map((book, id) => {
    return (
      <Link className="book-link" to={`/books/${book.book_id}`}>
        <div className="book-card" key={id}>
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

  const books2020 = arr2020.map((book, id) => {
    return (
      <Link className="book-link" to={`/books/${book.book_id}`} key={id}>
        <div className="book-card">
          <div className="book-card-image">
            <img
              className="cover-image"
              src={book.cover_image}
              alt="The book cover"
            />
          </div>
          <div className="book-title">{book.title}</div>
          <div className="author-name">{book.name}</div>
        </div>
      </Link>
    )
  })

  return (
    <React.Fragment>
      <Navbar />
      <div className="prize-page">
        <div className="prize-header">{prizeInfo.prize_name}</div>
        <div className="prize-winners-group">
          <div className="year">2021</div>
          <div className="book-card-container">{books2021}</div>
        </div>
        <div className="prize-winners-group">
          <div className="year">2020</div>
          <div className="book-card-container">{books2020}</div>
        </div>
      </div>
    </React.Fragment>
  )
}
