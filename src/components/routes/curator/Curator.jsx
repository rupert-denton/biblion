import { Link } from 'react-router-dom'
import './curator_routes/GlobalStyles.css'
import Navbar from '../../ui/Navbar'

export default function Curator() {
  return (
    <div className="curator-container">
      <Navbar />

      <h1 className="heading">Curator</h1>
      <h3 className="curator-link">
        <Link to={'/curator/addprize'}>Add a New Prize</Link>
      </h3>
      <h3 className="curator-link">
        <Link to={'/curator/addbooktoprize'}>Add Books to Prize</Link>
      </h3>
    </div>
  )
}
