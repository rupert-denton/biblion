//external dependencies
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import * as api from '../../../../apiClient'

export default function BookPage() {
  let { bookId } = useParams()
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

  return (
    <div>
      <div>{title}</div>
      <img src={cover_image} alt="the book cover" />
      <Link to={`/authors/${author_id}`}>{author_name}</Link>
      <div>{blurb}</div>
    </div>
  )
}
