import './GlobalStyles.css'
import { React, useState } from 'react'
import * as api from '../../../../apiClient'
import Navbar from '../../../ui/Navbar'

export default function AddPrize() {
  const [newPrizeData, setNewPrizeData] = useState({
    prize_name: '',
    country: '',
    about: '',
    link: '',
    genre: '',
  })

  const handleSetPrize = (e) => {
    let key = e.target.name
    let value = e.target.value
    let checked = e.target.checked
    let prev = { ...newPrizeData }
    prev[key] = value || checked
    setNewPrizeData(prev)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    api.postNewPrize(newPrizeData).then((response) => {
      console.log(response)
    })
  }

  return (
    <div className="curator-container">
      <Navbar />
      <h1 className="heading">Add Prize</h1>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <label>Prize Name</label>
          <input
            type="text"
            name="prize_name"
            className="form-item"
            value={setNewPrizeData.prize_name}
            onChange={(e) => handleSetPrize(e)}
          ></input>
          <label>Prize Country</label>
          <input
            type="text"
            name="country"
            className="form-item"
            value={setNewPrizeData.country}
            onChange={(e) => handleSetPrize(e)}
          ></input>
          <label>Prize Description</label>
          <textarea
            className="form-item"
            rows="8"
            name="about"
            value={setNewPrizeData.about}
            onChange={(e) => handleSetPrize(e)}
          ></textarea>
          <label>Prize Website</label>
          <input
            type="text"
            name="link"
            className="form-item"
            value={setNewPrizeData.link}
            onChange={(e) => handleSetPrize(e)}
          ></input>
          <label>Prize Genre</label>
          <input
            type="text"
            name="genre"
            className="form-item"
            value={setNewPrizeData.genre}
            onChange={(e) => handleSetPrize(e)}
          ></input>
          <button type="submit" className="addPrize">
            Add Prize
          </button>
        </form>
      </div>
    </div>
  )
}
