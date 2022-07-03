//external dependencies
import React, { useEffect, useState, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import * as api from '../../apiClient'
import '../routes/client/client_routes/PrizePage'

export default function Lists() {
  const [listInfo, setListInfo] = useState({})
  const [listArray, setListArray] = useState([{}])
  const refs = useRef(listArray.map(() => React.createRef()))

  //   const isOverflown = ({ clientWidth, clientHeight, scrollWidth, scrollHeight }) => {
  //     return scrollHeight > clientHeight || scrollWidth > clientWidth;
  // }

  useEffect(() => {
    api
      .getListsWithBooks()
      .then((lists) => {
        setListArray(lists)
        return null
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  console.log(listArray)

  const lgbtqibooksArray = listArray.filter(
    (list) => list.list_name === 'Critically Acclaimed Books By LGBTQI Authors'
  )
  const greatbooksArray = listArray.filter(
    (list) => list.list_name === 'Great Books'
  )

  const greatBooks = greatbooksArray.map((book, id) => {
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
          <div className="book-info">
            <div className="book-title">{book.title}</div>
            <div className="author-name">{book.name}</div>
          </div>
        </div>
      </Link>
    )
  })

  const lgbtqibooks = lgbtqibooksArray.map((book, id) => {
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
        <div className="prize-header">{listArray[0].list_name}</div>
        <div className="prize-winners-group">
          <div className="book-card-container">{greatBooks}</div>
        </div>
        <div className="prize-header">
          {lgbtqibooksArray.length === 0 ? '' : lgbtqibooksArray[0].list_name}
        </div>
        <div className="prize-winners-group">
          <div className="book-card-container">{lgbtqibooks}</div>
        </div>
      </div>
    </React.Fragment>
  )
}
