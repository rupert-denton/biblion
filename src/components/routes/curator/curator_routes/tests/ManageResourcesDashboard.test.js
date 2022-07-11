/** @jest-environment jsdom */

import React from 'react'
import { screen, render, within } from '@testing-library/react'
import '@testing-library/jest-dom'

import ManageResourcesDashboard from '../ManageResourcesDashboard'

describe('<ManageResourcesDashboard />', () => {
  test('a drop down list is rendered', () => {
    render(<ManageResourcesDashboard />)
    const dropDown = screen.getByRole('listbox')
  })

  test.todo('when a drop down option is selected the data updates')
})
