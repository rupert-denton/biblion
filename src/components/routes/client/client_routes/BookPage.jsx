//external dependencies
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import * as api from '../../../../apiClient'

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
    <div>
      <div>{title}</div>
      <img src={cover_image} alt="the book cover" />
      <Link to={`/authors/${author_id}`}>{author_name}</Link>
      <div>{bookParagraphs}</div>
    </div>
  )
}
