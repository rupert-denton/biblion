import { configureStore } from '@reduxjs/toolkit'
import listsSlice from './lists-slice'

import prizesSlice from './prizes-slice'

const store = configureStore({
  reducer: { prizes: prizesSlice.reducer, lists: listsSlice.reducer },
})

export default store
