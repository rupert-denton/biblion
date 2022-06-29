//external dependencies
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import * as api from '../../../../apiClient'

export default function PrizePage() {
  let { prizeId } = useParams()
  const [prizeInfo, setPrizeInfo] = useState({})
  const [bookArr, setbookArr] = useState([{}])

  console.log(bookArr, prizeInfo)
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

  const books = bookArr.map((book, id) => {
    return (
      <li key={id}>
        <Link to={`/books/${book.id}`}>{book.title}</Link>
      </li>
    )
  })

  return (
    <div>
      <div>Prize Info Here</div>

      <div>{books}</div>
    </div>
  )
}
