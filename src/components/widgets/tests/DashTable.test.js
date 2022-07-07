/** @jest-environment jsdom */

import React from 'react'
import { screen, render, within } from '@testing-library/react'
import '@testing-library/jest-dom'

import DashTable from '../DashTable'

import { arrBooks } from '../../../test/testData'

describe('<PointsTable />', () => {
  test('renders a dynamic column headers based on object keys', () => {
    render(<DashTable tableData={arrBooks} />)
    const table = screen.getByRole('table')
    expect(table).toBeInTheDocument()
    const columnHeaders = within(table).getAllByRole('columnheader')
    expect(columnHeaders[0].textContent).toBe('TITLE')
    expect(columnHeaders[1].textContent).toBe('BLURB')
    expect(columnHeaders[2].textContent).toBe('COVER_IMAGE')
    expect(columnHeaders[3].textContent).toBe('PUB_YEAR')
    expect(columnHeaders[4].textContent).toBe('GENRE')
  })
  test('renders first row of data to table', () => {
    render(<DashTable tableData={arrBooks} />)
    const table = screen.getByRole('table')
    const firstRow = within(table).getAllByRole('row')[1]
    const cells = within(firstRow).getAllByRole('gridcell')
    expect(cells[0].textContent).toBe('The Koran')
    expect(cells[1].textContent).toBe('Cool book Lorem Ipsum')
    expect(cells[2].textContent).toBe(
      'https://edit.org/images/cat/book-covers-big-2019101610.jpg'
    )
    expect(cells[3].textContent).toBe('2002')
    expect(cells[4].textContent).toBe('Non-Fiction')
  })
})
// it('renders the data of one animal to the table', () => {
//   render(<PointsTable petScores={petsWithScores} />)
//   const table = screen.getByRole('table')
//   const firstRow = within(table).getAllByRole('row')[1]
//   const cells = within(firstRow).getAllByRole('gridcell')
//   expect(cells[0].textContent).toBe('Betty')
//   expect(cells[1].textContent).toBe('1001')
//   expect(cells[2].textContent).toBe('🐶')
// })
// it('renders ten + 1 header rows to the table', () => {
//   render(<PointsTable petScores={petsWithScores} />)
//   const table = screen.getByRole('table')
//   const rows = within(table).getAllByRole('row')
//   expect(rows).toHaveLength(11)
// })
