import './App.css'
import { Link } from 'react-router-dom'
import * as api from '../apiClient'
import { useEffect, useState } from 'react'
import Navbar from './ui/Navbar'

export default function App() {
  const [prizesData, setPrizesData] = useState([{}])
  useEffect(() => {
    api
      .getAllPrizes()
      .then((prizesData) => {
        setPrizesData(prizesData)
        console.log(prizesData)
        return null
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

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
      <div className="homepage-container">{prizes}</div>
    </div>
  )
}
