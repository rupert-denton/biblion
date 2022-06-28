import logo from './logo.svg'
import './App.css'
import * as api from '../apiClient'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    api.getAllPrizes()
  }, [])

  return (
    <div className="App">
      <h1>Biblion Will Live Here Soon</h1>
    </div>
  )
}

export default App
