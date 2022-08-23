/* eslint react/prop-types: 0 */
/* eslint-disable react/display-name */

import React, { useEffect, useState } from 'react'
import { useTable, useRowSelect } from 'react-table'
import * as api from '../../apiClient'
import PropTypes from 'prop-types'

export default function DashTable({ dataName, tableData }) {
  const [headers, setHeaders] = useState([])
  const [selected, setSelected] = useState('')
  const [dataType, setDataType] = useState('')

  useEffect(() => {
    setDataType(dataName)
  }, [dataName])

  useEffect(() => {
    setHeaders(Object.keys(tableData[0]))
  }, [tableData])

  const data = React.useMemo(
    () =>
      tableData.map((object) =>
        Object.fromEntries(
          Object.values(object).map((value, i) => [`col${i + 1}`, value])
        )
      ),
    [tableData]
  )

  const columns = React.useMemo(
    () =>
      headers.map((key, i) => {
        let col = `col${i + 1}`
        return {
          Header: key,
          accessor: col,
        }
      }),
    [headers]
  )

  const IndeterminateCheckbox = React.forwardRef(
    ({ indeterminate, ...rest }, ref) => {
      const defaultRef = React.useRef()
      const resolvedRef = ref || defaultRef

      React.useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate
      }, [resolvedRef, indeterminate])

      return (
        <>
          <input type="checkbox" ref={resolvedRef} {...rest} />
        </>
      )
    }
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    selectedFlatRows,
    // state: { selectedRowIds },
  } = useTable(
    {
      columns,
      data,
    },
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        // Let's make a column for selection
        {
          id: 'selection',
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
            </div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ])
    }
  )

  useEffect(() => {
    selectedFlatRows.map((d) => setSelected(d.original.col1))
  }, [selectedFlatRows])

  function handleDelete(e) {
    e.preventDefault()
    const dataForPost = {
      id: selected,
      dataType: dataType,
    }
    api.deleteData(dataForPost)
  }

  return (
    <div>
      <div className="dashboard-table-container">
        <div className="table-container">
          <table className="table" {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup, i) => (
                <tr key={i} {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column, j) => (
                    <th key={`${j}-${i}`} {...column.getHeaderProps()}>
                      {column.render('Header')}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row, i) => {
                prepareRow(row)
                return (
                  <tr key={i} {...row.getRowProps()}>
                    {row.cells.map((cell, j) => {
                      return (
                        <td key={j} {...cell.getCellProps()}>
                          {cell.render('Cell')}
                        </td>
                      )
                    })}
                  </tr>
                )
              })}
            </tbody>
          </table>
          <button onClick={handleDelete}>Delete Selected</button>
        </div>
      </div>
    </div>
  )
}

DashTable.displayName = 'DashTable'

DashTable.propTypes = {
  dataName: PropTypes.string,
  tableData: PropTypes.array,
}
