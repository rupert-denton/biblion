//external dependencies
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import * as api from '../../../../apiClient'
import Navbar from '../../../ui/Navbar'
import './BookPage.css'

export default function BookPage() {
  let { bookId } = useParams()
  const [bookInfo, setbookInfo] = useState({})
  const [booksByAuthor, setBooksByAuthor] = useState([{}])

  console.log(bookId)
  useEffect(() => {
    api
      .getBookById(bookId)
      .then((bookInfo) => {
        setbookInfo(bookInfo)
        api.getBooksByAuthor(bookInfo.author_id).then((books) => {
          console.log(books[0].id)
          let otherBooks = books.filter((bookObj) => bookObj.id !== bookId)
          console.log(otherBooks)
          setBooksByAuthor(otherBooks)
          return null
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }, [bookId])

  const {
    id,
    title,
    blurb,
    author,
    cover_image,
    pub_year,
    genre,
    author_id,
    author_name,
    bio,
    image,
  } = bookInfo

  const bookBlurb = bookInfo.blurb ? bookInfo.blurb.split(/\r?\n/) : ''

  const bookParagraphs = bookInfo.blurb
    ? bookBlurb.map((para, i) => {
        return (
          <React.Fragment key={i}>
            <div className="paragraph-text">{para}</div>
          </React.Fragment>
        )
      })
    : ''

  // const otherBooks =
  //   Object.keys(booksByAuthor).length === 0
  //     ? {}
  //     : booksByAuthor.filter((object) => object.id !== bookInfo.id)

  const otherBooksForDisplay = booksByAuthor.map((book, i) => {
    console.log(book)
    return (
      <Link key={i} className="book-link" to={`/books/${book.id}`}>
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
      <Navbar />
      <div className="book-page">
        <div className="book-info-container">
          <div className="book-image-container">
            <img
              className="book-image"
              src={cover_image}
              alt="the book cover"
            />
          </div>
          <div className="book-info">
            <div className="book-title-author-container">
              <div className="book-page-title">{title}</div>
              <div className="book-page-author">{author_name}</div>
            </div>
            <div className="book-blurb">
              <div>{bookParagraphs}</div>
            </div>
            <div className="author-info-container">
              <div className="book-image-container author-image-container">
                <img className="author-image" src={image} alt="the author" />
              </div>
              <div className="author-info">
                <div className="book-title-author-container">
                  <div className="author-name">About {author_name}</div>
                </div>
                <div className="author-bio">
                  <div>{bio}</div>
                </div>
              </div>
            </div>
            <div className="prize-winners-group book-page-prize-winner-group">
              <div className="author-name">Other books by {author_name}</div>
              <div className="book-card-container smaller-container">
                {otherBooksForDisplay}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
