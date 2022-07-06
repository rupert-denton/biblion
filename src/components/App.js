import './App.css'
import { Link } from 'react-router-dom'
import * as api from '../apiClient'
import { useEffect, useState } from 'react'
import Navbar from './ui/Navbar'
import Lists from './widgets/Lists'

export default function App() {
  const [prizesData, setPrizesData] = useState([{}])
  const [listArray, setListArray] = useState([])
  useEffect(() => {
    api
      .getAllPrizes()
      .then((prizesData) => {
        setPrizesData(prizesData)
        return null
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  useEffect(() => {
    api
      .getAllLists()
      .then((lists) => {
        setListArray(lists)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const listsForDisplay = listArray.map((list, i) => {
    return <Lists key={i} listData={list} />
  })

  const prizes = prizesData.map((prize, id) => {
    return (
      <Link key={id} className="prize-container" to={`/prize/${prize.id}`}>
        <div className="prize-name">{prize.prize_name}</div>
      </Link>
    )
  })

  return (
    <div className="App">
      <Navbar />
      <div className="homepage-container">
        <div className="prizes">
          <div className="prize-header">Discover Award Winning Books</div>
          <div className="prizes-container">{prizes}</div>
        </div>

        <div className="prizes-lists-divider"></div>
        <div className="lists-container">{listsForDisplay}</div>
      </div>
    </div>
  )
}
