import './GlobalStyles.css'
import { React, useState } from 'react'
import * as api from '../../../../apiClient'
import Navbar from '../../../ui/Navbar'

export default function AddList() {
  const [newListData, setNewListData] = useState({
    list_name: '',
    list_description: '',
    book_id: 1,
  })

  const handleSetList = (e) => {
    let key = e.target.name
    let value = e.target.value
    let checked = e.target.checked
    let prev = { ...newListData }
    prev[key] = value || checked
    setNewListData(prev)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    api.postNewList(newListData).then((response) => {
      console.log(response)
    })
  }

  return (
    <div className="curator-container">
      <Navbar />
      <h1 className="heading">Add List</h1>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <label>List Name</label>
          <input
            type="text"
            name="list_name"
            className="form-item"
            value={setNewListData.list_name}
            onChange={(e) => handleSetList(e)}
          ></input>
          <label>List Description</label>
          <textarea
            className="form-item"
            rows="8"
            name="list_description"
            value={setNewListData.list_description}
            onChange={(e) => handleSetList(e)}
          ></textarea>
          <button type="submit" className="addPrize">
            Add List
          </button>
        </form>
      </div>
    </div>
  )
}
