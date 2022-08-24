import './App.css'
import { Link } from 'react-router-dom'
import React, { useEffect } from 'react'
import Navbar from './ui/Navbar'
import Lists from './widgets/Lists'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPrizeData } from '../store/prizes-actions'
import { fetchListData } from '../store/lists-actions'
import { CssBaseline } from '@mui/material'

export default function App() {
  const dispatch = useDispatch()
  const prizesData = useSelector((state) => state.prizes.prizesArray)
  const listsData = useSelector((state) => state.lists.listsArray)

  useEffect(() => {
    dispatch(fetchPrizeData())
  }, [dispatch])

  useEffect(() => {
    dispatch(fetchListData())
  }, [dispatch])

  const prizes = prizesData.map((prize, id) => {
    return (
      <Link key={id} className="prize-container" to={`/prize/${prize.id}`}>
        <div className="prize-name">{prize.prize_name}</div>
      </Link>
    )
  })

  const listsForDisplay = listsData.map((list, i) => {
    return <Lists key={i} listData={list} />
  })

  return (
    <div className="App">
      <CssBaseline />
      <Navbar />
      <div className="homepage-container">
        <div className="prizes">
          <div className="prize-header">Discover Award Winning Books</div>
          {/* here */}
          <div className="prizes-container">{prizes}</div>
        </div>

        <div className="prizes-lists-divider"></div>
        <div className="lists-container">{listsForDisplay}</div>
      </div>
    </div>
  )
}
