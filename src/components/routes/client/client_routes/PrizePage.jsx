//external dependencies
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import * as api from '../../../../apiClient'
import './PrizePage.css'
import Navbar from '../../../ui/Navbar'
import PrizeLists from '../../../widgets/PrizeLists'

export default function PrizePage() {
  let { prizeId } = useParams()
  const [prizeInfo, setPrizeInfo] = useState({})
  const [prizeYears, setPrizeYears] = useState([])

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
      .getPrizeYears(prizeId)
      .then((prizeInfo) => {
        setPrizeYears(prizeInfo)
        return null
      })
      .catch((err) => {
        console.log(err)
      })
  }, [prizeId])

  console.log(prizeYears)

  // useEffect(() => {
  //   api
  //     .getBooksByPrize(prizeId)
  //     .then((books) => {
  //       setBookArray(books)
  //       return null
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }, [prizeId])

  const booksByYear = prizeYears.map((year, id) => {
    console.log(year)
    return <PrizeLists key={id} prizeYear={year} prizeId={prizeId} />
  })

  return (
    <React.Fragment>
      <Navbar />
      <div className="prize-page">
        <div className="prize-header">{prizeInfo.prize_name}</div>
        <div className="prize-winners-by-year">{booksByYear}</div>
      </div>
    </React.Fragment>
  )
}
