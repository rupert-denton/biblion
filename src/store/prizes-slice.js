import { createSlice } from '@reduxjs/toolkit'
import { fetchPrizeData } from './prizes-actions'

const prizesSlice = createSlice({
  name: 'prizes',
  initialState: {
    prizesArray: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    // we setup an extra reducer that will update the state
    // when the async thunk resolved
    // add in other states here (pending etc.)
    builder.addCase(fetchPrizeData.fulfilled, (state, action) => {
      state.prizesArray = action.payload
    })
  },
})

export const prizesSliceActions = prizesSlice.actions
export default prizesSlice
