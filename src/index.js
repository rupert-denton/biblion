import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './components/App'
import reportWebVitals from './components/reportWebVitals'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Curator from './components/routes/curator/Curator'
import AddPrize from './components/routes/curator/curator_routes/AddPrize'
import AddBook from './components/routes/curator/curator_routes/AddBook'
import PrizePage from './components/routes/client/client_routes/PrizePage'
import BookPage from './components/routes/client/client_routes/BookPage'
import AuthorPage from './components/routes/client/client_routes/AuthorPage'
import AddList from './components/routes/curator/curator_routes/AddList'
import AddBookToPrize from './components/routes/curator/curator_routes/AddBookToPrize'
import AddBookToList from './components/routes/curator/curator_routes/AddBookToList'
import ManageResourcesDashboard from './components/routes/curator/curator_routes/ManageResourcesDashboard'
import { ChakraProvider } from '@chakra-ui/react'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // <React.StrictMode>
  <Router>
    <Routes>
      {/* client */}

      <Route path="/" element={<App />} />
      <Route path="/prize/:prizeId" element={<PrizePage />} />
      <Route path="/books/:bookId" element={<BookPage />} />
      <Route path="authors/:authorId" element={<AuthorPage />} />

      {/* curator */}
      <Route path="/curator" element={<Curator />} />
      <Route path="/curator/addbook" element={<AddBook />} />
      <Route path="/curator/addprize" element={<AddPrize />} />
      <Route path="/curator/addbooktoprize" element={<AddBookToPrize />} />
      <Route path="/curator/addlist" element={<AddList />} />
      <Route path="/curator/addbooktolist" element={<AddBookToList />} />
      <Route path="/curator/dashboard" element={<ManageResourcesDashboard />} />
    </Routes>
  </Router>

  // </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
