import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {NavLink} from 'react-router-dom';

const Mainavbar = () => {
  return (
    <>
            <nav class="navbar navbar-expand-lg pt-2 navbar-light bg-light">
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
            </nav>
    </>
  )
}

export default Mainavbar;