//external dependencies
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import * as api from '../../../../apiClient'

export default function AuthorPage() {
  let { authorId } = useParams()
  const [authorInfo, setAuthorInfo] = useState({})
  const [booksByAuthor, setBooksByAuthor] = useState([{}])

  console.log(authorInfo)
  console.log(booksByAuthor)

  useEffect(() => {
    api
      .getAuthorById(authorId)
      .then((authorInfo) => {
        setAuthorInfo(authorInfo)
        return null
      })
      .catch((err) => {
        console.log(err)
      })
  }, [authorId])

  useEffect(() => {
    api
      .getBooksByAuthor(authorId)
      .then((books) => {
        setBooksByAuthor(books)
        return null
      })
      .catch((err) => {
        console.log(err)
      })
  }, [authorId])

  const { id, name, bio, image } = authorInfo

  return (
    <div>
      <div>{name}</div>
      <div>
        <img src={image} alt="the author" />
      </div>
      <div>{bio}</div>
    </div>
  )
}
