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
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // <React.StrictMode>
  <Router>
    <Routes>
      {/* client */}
      <Route path="/" element={<App />} />
      <Route path="/:awardname" element={<App />} />
      <Route path="/:bookId" element={<App />} />
      <Route path="/:authorId" element={<App />} />

      {/* curator */}
      <Route path="/curator" element={<Curator />} />
      <Route path="/curator/addprize" element={<AddPrize />} />
      <Route path="/curator/addbooktoprize" element={<AddBook />} />
    </Routes>
  </Router>
  // </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
