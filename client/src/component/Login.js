import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {NavLink} from 'react-router-dom';
import "./signupandlogin.css";

const Login = () => {
  return (
    <>
      <section className="sign-in">
      <div className='container mt-5'>
        <div className='signin-content'>
          <div className='signin-form'>
            <h2 className='form-title'>Sign in</h2>
            <form className='register-form' id='register-form'>

              <div className='form-group'>
                <label htmlFor='email'>
                  <i className='zmdi zmdi-email material-icons-name'></i>
                </label>
                <input type="email" name="email" id="email" autoComplete="off" placeholder="Enter your email"/>
              </div>
              
              <div className='form-group'>
                <label htmlFor='password'>
                  <i className='zmdi zmdi-lock material-icons-name'></i>
                </label>
                <input type="password" name="password" id="password" autoComplete="off" placeholder="Password"/>
              </div>

              <div className='form-group form-button'>
                <input type="submit" name="signin" id="signin" className='form-submit' value='Login'/>
                <NavLink to='/signup' className='signin-link'>Create Account</NavLink>
              </div>
            </form>

          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Login;