import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {NavLink} from 'react-router-dom';

const Mainavbar = () => {
  return (
    <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                <NavLink className="navbar-brand fw-bolder fs-4 mx-5" to="#">Food Mart</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto  mb-lg-0">
                        <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                        </li>
                    <li className="nav-item ms-5">
                    <NavLink to="/login" className='btn btn-outline-success ms-auto px-4 mx-3 rounded-pill'>
                    <i className="fas fa-sign-in-alt"></i>  Login</NavLink>
                    <NavLink to="/signup" className='btn btn-outline-info ms-auto px-4 mx-3 rounded-pill'>
                    <i className="fa fa-user-plus"></i>  Register</NavLink>
                    <NavLink to="/admin" className='btn btn-outline-info ms-auto px-4 mx-3 rounded-pill'>
                    <i className="fa fa-user"></i>  Admin</NavLink>
                    </li>
                
                    </ul>
                    </div>
                </div>
            </nav>
    </>
  )
}

export default Mainavbar;