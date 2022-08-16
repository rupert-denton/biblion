//external dependencies
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as api from '../../../../apiClient'
import Navbar from '../../../ui/Navbar'

export default function AuthorPage() {
  let { authorId } = useParams()
  const [authorInfo, setAuthorInfo] = useState({})
  const [setBooksByAuthor] = useState([{}])

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

  const { name, bio, image } = authorInfo

  return (
    <div>
      <Navbar />
      <div>{name}</div>
      <div>
        <img src={image} alt="the author" />
      </div>
      <div>{bio}</div>
    </div>
  )
}
