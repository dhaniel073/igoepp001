import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Nav = (props, setFirstName={setFirstName}) => {

  const handleLogout= async () => {
   localStorage.clear()
  }
  let menu;

  if(props.first_name === '' || props.last_name === '' || props.email === '' || props.user === ''){
    menu = (
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
      <li className="nav-item">
      <Link className="nav-link" to={"/login"}>Login</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to={"/register"}>Register</Link>
      </li>
      </ul>
    )
  }else {
    menu = (
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
      <li className="nav-item">
      <Link className="nav-link" onClick={handleLogout} to={"/login"}>Logout</Link>
      </li>
      </ul>
    )
  }
  return (
    <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <div className="container-fluid">
                <Link className="navbar-brand" to={"/"}>IGOEPP</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                <li className="nav-item">
                <Link className="nav-link active" to={"/"}>Home</Link>
                </li>
                {menu}
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Nav