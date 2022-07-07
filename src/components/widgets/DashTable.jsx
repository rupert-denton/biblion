import React, { useEffect, useState } from 'react'

export default function DashTable(props) {
  const columnHeaders = props.tableData
    ? Object.keys(props.tableData[0]).map((key, i) => {
        return <th key={i}>{key.toUpperCase()}</th>
      })
    : ''

  const tableRows = props.tableData
    ? props.tableData.map((data, i) => {
        console.log(data)
        return (
          <tr key={i}>
            <td>{data.id}</td>
            <td>{data.title}</td>
            <td className="table-blurb">{data.blurb}</td>
            <td>{data.author}</td>
            <td>{data.cover_image}</td>
            <td>{data.pub_year}</td>
            <td>{data.genre}</td>
          </tr>
        )
      })
    : ''

  return (
    <div>
      <div className="dashboard-table-container">
        <div className="table-container">
          <table className="table">
            <tr>{columnHeaders}</tr>
            {tableRows}
          </table>
        </div>
      </div>
    </div>
  )
}
