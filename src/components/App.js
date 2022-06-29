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
        return null
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div className="App">
      <h1>Biblion</h1>
      <h3 className="curator-link">
        <Link to={`/prize/${prizesData[0].id}`}>{prizesData[0].name}</Link>
      </h3>
    </div>
  )
}
