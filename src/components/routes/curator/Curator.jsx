import { Link } from 'react-router-dom'
import './curator_routes/GlobalStyles.css'
import Navbar from '../../ui/Navbar'
import React from 'react'

export default function Curator() {
  return (
    <div className="curator-container">
      <Navbar />

      <h1 className="heading">Curator</h1>
      <h2 className="subheading">Books</h2>
      <h3 className="curator-link">
        <Link to={'/curator/addbook'}>Add a Book</Link>
      </h3>
      <h2 className="subheading">Book Reviews</h2>

      <h2 className="subheading">Prizes</h2>
      <h3 className="curator-link">
        <Link to={'/curator/addprize'}>Add a New Prize</Link>
      </h3>
      <h3 className="curator-link">
        <Link to={'/curator/addbooktoprize'}>Add Books to Prize</Link>
      </h3>
      <h2 className="subheading">Lists</h2>
      <h3 className="curator-link">
        <Link to={'/curator/addlist'}>Add a New List</Link>
      </h3>
      <h3 className="curator-link">
        <Link to={'/curator/addbooktolist'}>Add Books to List</Link>
      </h3>
      <br></br>
      <h3 className="curator-link">
        <Link to={'/curator/dashboard'}>Data Tables</Link>
      </h3>
    </div>
  )
}
