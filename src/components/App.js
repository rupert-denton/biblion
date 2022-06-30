import './App.css'
import { Link } from 'react-router-dom'
import * as api from '../apiClient'
import { useEffect, useState } from 'react'

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
      <h3 key={id} className="curator-link">
        <Link to={`/prize/${prize.id}`}>{prize.prize_name}</Link>
      </h3>
    )
  })

  return (
    <div className="App">
      <h1>Biblion</h1>
      {prizes}
    </div>
  )
}
