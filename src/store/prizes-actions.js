import { createAsyncThunk } from '@reduxjs/toolkit'
import * as api from '../apiClient'

// get data
export const fetchPrizeData = createAsyncThunk('prizes/getPrizes', async () => {
  const data = await api.getAllPrizes()
  return data
})
