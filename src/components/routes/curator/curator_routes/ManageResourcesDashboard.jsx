//external dependencies
import React, { useEffect, useState, useRef } from 'react'

import './ManageResourcesDashboard.css'
import * as fakeProps from '../../../../test/testData'
import DashTable from '../../../widgets/DashTable'
import * as api from '../../../../apiClient'

export default function ManageResourcesDashboard() {
  const [tableData, setTableData] = useState([{}])

  useEffect(() => {
    api
      .getAllBooks()
      .then((result) => {
        setTableData(result)
        return null
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <React.Fragment>
      <DashTable tableData={tableData} />
    </React.Fragment>
  )
}
