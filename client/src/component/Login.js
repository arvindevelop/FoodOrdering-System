import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {NavLink,useHistory} from 'react-router-dom';
import "./signupandlogin.css";
import Constant from './Home/Constant';

const Login = () => {
  
  const history = useHistory();

  const [user,setUser] = useState({email:"",password:""});

  let name,value;
  const handleInputs = (e) =>{
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({...user,[name]:value});
  }

  const PostData = async (e) =>{
    e.preventDefault();

    const {email,password} = user;

    const res = await fetch('/signin',{
      method:"POST",
      headers:{
        "Content-Type" : "application/json"
      },
      body:JSON.stringify({
        email,password
      })
    });
    const data = await res.json();
    const userDetail = data.userData;
    Constant.name = userDetail.name;
    Constant.email = userDetail.email;
    Constant.mobile = userDetail.mobile;

    if(data.status === 400 || !data){
        window.alert('Invalid email or password');
        console.log('Invalid email or password');
    }
    else{
      window.alert('Logged in successfully');
      console.log('Logged in successfully');
      history.push('/');
    }
  }
  
  return (
    <>
      {/* <section className="sign-in">
      <div className='container mt-5'>
        <div className='signin-content'>
          <div className='signin-form'>
            <h2 className='form-title'>Sign in</h2>
            <form className='register-form' id='register-form'>

              <div className='form-group'>
                <label htmlFor='email'>
                  <i className='zmdi zmdi-email material-icons-name'></i>
                </label>
                <input type="email" name="email" id="email" autoComplete="off" 
                value={user.email}
                onChange={handleInputs}
                placeholder="Enter your email"/>
              </div>
              
              <div className='form-group'>
                <label htmlFor='password'>
                  <i className='zmdi zmdi-lock material-icons-name'></i>
                </label>
                <input type="password" name="password" id="password" autoComplete="off" 
                value={user.password}
                onChange={handleInputs}
                placeholder="Password"/>
              </div>

              <div className='form-group form-button'>
                <input type="submit" name="signin" id="signin" className='form-submit' value='Login' onClick={PostData}/>
                <NavLink to='/signup' className='signin-link'>Create Account</NavLink>
              </div>
            </form>

          </div>
        </div>
      </div>
    </section> */}
      <div className="container shadow my-5">
        <div className="row">
          <div className="col-lg-6 col-12 d-flex flex-column align-item-center text-white form text-center sign">
            <h1 className="display-4 fw-bolder my-5 my-5">
              Welcome Back
            </h1>
            <p className="lead">
              Enter Your Credential To Login</p>
            <h5 className='mb-4'>OR</h5>
            <div className='button d-flex text-white justify-content-center'>
              <NavLink to="/signup" className="btn btn-outline-info me-4 rounded-pill px-4">Create Account</NavLink>
            </div>
          </div>
          <div className="col-lg-6 col-12 ps-5">
            <h1 className='display-6 '>Login</h1>
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                value={user.email}
                onChange={handleInputs}/>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" name="password" class="form-control" id="exampleInputPassword1" 
                value={user.password}
                onChange={handleInputs}/>
              </div>
              <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
              </div>
              <button type="submit" name="signin" class="btn btn-primary" onClick={PostData}>Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;