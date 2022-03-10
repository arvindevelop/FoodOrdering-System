import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {NavLink} from 'react-router-dom';

const Mainavbar = () => {
  return (
    <>
            {/* <nav class="navbar navbar-expand-lg pt-2 navbar-light bg-light">
                <div class="container-fluid">
                    <NavLink class="navbar-brand" to="/">Navbar</NavLink>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item active">
                                <NavLink class="nav-link" to="/">Home</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink class="nav-link" to="/login">Login</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink class="nav-link" to="/signup">Register</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                <NavLink className="navbar-brand fw-bolder fs-4 mx-5" to="#">Navbar</NavLink>
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
                    <i className="fa fa-sign-in me-2"></i> login</NavLink>
                    <NavLink to="/signup" className='btn btn-outline-info ms-auto px-4 mx-3 rounded-pill'>
                    <i className="fa fa-user-plus"></i>register</NavLink>
                    </li>
                    <li>
                    <form className="d-flex">
                        <input className="form-control me-1" type="search" placeholder="Search" aria-label="Search"/>
                        <button  type="submit"><i className="fa fa-search"></i></button>
                    </form>
                    </li>
                    </ul>
                    </div>
                </div>
            </nav>
    </>
  )
}

export default Mainavbar;