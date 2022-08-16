import { createAsyncThunk } from '@reduxjs/toolkit'
import * as api from '../apiClient'

// get data
export const fetchListData = createAsyncThunk('prizes/get lists', async () => {
  const data = await api.getAllLists()
  return data
})
