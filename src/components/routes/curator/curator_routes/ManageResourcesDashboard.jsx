//external dependencies
import React, { useState } from 'react'

import './ManageResourcesDashboard.css'
import DashTable from '../../../widgets/DashTable'
import * as api from '../../../../apiClient'
import Navbar from '../../../ui/Navbar'

export default function ManageResourcesDashboard() {
  const [tableData, setTableData] = useState([{}])
  const [dataName, setDataName] = useState('')

  let apiCall = api.getAllBooks()

  const handleSetData = (e) => {
    let value = e.target.value
    if (value === 'books') {
      apiCall = api.getAllBooks()
      setDataName('books')
    } else if (value === 'lists') {
      apiCall = api.getAllLists()
      setDataName('lists')
    } else if (value === 'prizes') {
      apiCall = api.getAllPrizes()
      setDataName('prizes')
    }

    apiCall
      .then((result) => {
        setTableData(result)
        return null
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <React.Fragment>
      <Navbar />
      <select
        className="dropdown"
        name="data-selector"
        onChange={(e) => handleSetData(e)}
      >
        <option value="" disabled>
          --Choose List--
        </option>
        <option value="books">Books</option>
        <option value="lists">Lists</option>
        <option value="prizes">Prizes</option>
      </select>
      <DashTable dataName={dataName} tableData={tableData} />
    </React.Fragment>
  )
}
