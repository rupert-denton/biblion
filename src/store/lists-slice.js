import { createSlice } from '@reduxjs/toolkit'
import { fetchListData } from './lists-actions'

const listsSlice = createSlice({
  name: 'lists',
  initialState: {
    listsArray: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    // we setup an extra reducer that will update the state
    // when the async thunk resolved
    // add in other states here (pending etc.)
    builder.addCase(fetchListData.fulfilled, (state, action) => {
      state.listsArray = action.payload
    })
  },
})

export const listsSliceActions = listsSlice.actions
export default listsSlice
