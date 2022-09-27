import { Link, useNavigate } from 'react-router-dom';
import React from 'react'

export default function Navbar2() {
    const navigate = useNavigate();

    const onLogout = () => {
        localStorage.clear();
            navigate("/login");
    }

  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  <Link className="navbar-brand mx-3" to="/">Students_Spot</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className="nav-link active text-primary" to="/property">Properties</Link>
        </li>
        <li className="nav-item dropdown">
        <Link className="nav-link active text-primary" to="/">Contact Us</Link>

        </li>
       
      </ul>
      <button type="button" onClick={onLogout} className="btn btn-primary mx-3">Logout</button>
      <a href='/uploadProperty'><button type="button" className="btn btn-primary mx-3">Upload-Property</button></a>

    </div>
  </div>
</nav>
    </div>
  )
}

