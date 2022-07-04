//external dependencies
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import * as api from '../../../../apiClient'
import Navbar from '../../../ui/Navbar'
import './BookPage.css'

export default function BookPage() {
  let { bookId } = useParams()
  console.log(bookId)
  const [bookInfo, setbookInfo] = useState({})

  useEffect(() => {
    api
      .getBookById(bookId)
      .then((bookInfo) => {
        setbookInfo(bookInfo)
        return null
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  console.log(bookInfo)

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
  console.log(bookBlurb)

  const bookParagraphs = bookInfo.blurb
    ? bookBlurb.map((para, i) => {
        return (
          <React.Fragment key={i}>
            <div className="paragraph-text">{para}</div>
          </React.Fragment>
        )
      })
    : ''

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
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
