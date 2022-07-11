/** @jest-environment jsdom */

import React from 'react'
import { screen, render, within } from '@testing-library/react'
import '@testing-library/jest-dom'

import DashTable from '../DashTable'

import { arrBooks, arrLists } from '../../../test/testData'

describe('<PointsTable />', () => {
  test('renders a dynamic column headers based on object keys from books array', () => {
    render(<DashTable tableData={arrBooks} />)
    const table = screen.getByRole('table')
    const columnHeaders = within(table).getAllByRole('columnheader')
    expect(table).toBeInTheDocument()
    expect(columnHeaders[1].textContent).toBe('title')
  })
  test('renders a dynamic column headers based on object keys from lists array', () => {
    render(<DashTable tableData={arrLists} />)
    const table = screen.getByRole('table')
    const columnHeaders = within(table).getAllByRole('columnheader')
    expect(table).toBeInTheDocument()
    expect(columnHeaders[1].textContent).toBe('list_name')
  })

  test('correctly prepares data for adding into table using array of books', () => {
    render(<DashTable tableData={arrBooks} />)
    const table = screen.getByRole('table')
    const firstRow = within(table).getAllByRole('row')[1]
    const cells = within(firstRow).getAllByRole('cell')
    expect(cells[1].textContent).toContain('The Koran')
  })
  test('correctly prepares data for adding into table using array of lists', () => {
    render(<DashTable tableData={arrLists} />)
    const table = screen.getByRole('table')
    const firstRow = within(table).getAllByRole('row')[1]
    const cells = within(firstRow).getAllByRole('cell')
    expect(cells[1].textContent).toBe(
      'Critically Acclaimed Novels by African Authors'
    )
  })
})
