import './App.css'
import * as api from '../apiClient'
import { useEffect } from 'react'

export default function App() {
  useEffect(() => {
    api.getAllPrizes()
  }, [])

  return (
    <div className="App">
      <h1>Biblion Will Live Here Soon</h1>
    </div>
  )
}
