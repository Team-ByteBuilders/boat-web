import React from 'react'
import "./Admin.css"
import { Link } from 'react-router-dom'
function Admin() {
  return (
    <div className='adminPage'>
      <Link to="/addmonument">Add monument</Link>
      <Link to="checklogs">Check Logs</Link>
    </div>
  )
}

export default Admin
