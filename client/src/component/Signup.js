import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {NavLink,useHistory} from 'react-router-dom';
import "./signupandlogin.css";


const Signup = () => {
  const history = useHistory();

  const [user,setUser] = useState({name:"",email:"",mobile:"",password:"",cpassword:"" });

  let name,value;
  const handleInputs = (e) =>{
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({...user,[name]:value});
  }

  const PostData = async (e) =>{
    e.preventDefault();

    const {name,email,mobile,password,cpassword } = user;

    const res = await fetch('/register',{
      method:"POST",
      headers:{
        "Content-Type" : "application/json"
      },
      body:JSON.stringify({
        name,email,mobile,password,cpassword
      })
    });
    const data = await res.json();

    if(data.status === 422 || !data){
        window.alert('Invalid registration');
        console.log('Invalid registration');
    }
    else{
      window.alert('Registration successful');
      console.log('Registration successful');
      history.push('/login');
    }
  }

  return (
    <>
    <div className="container shadow my-5">
        <div className="row">
          <div className="col-lg-6 col-12 d-flex  flex-column align-item-center text-white form text-center sign">
            <h1 className="display-4 fw-bolder my-5 my-5">
              Welcome Back
            </h1>
            <p className="lead">
              Enter Your Details</p>
            <h5 className='mb-4'>OR</h5>
            <div className='button d-flex text-white justify-content-center'>
              <NavLink to="/login" className="btn btn-outline-info me-4 rounded-pill px-4">Login</NavLink>
            </div>
          </div>
          <div className="col-lg-6 col-12 ps-5">
          <h4 className='display-6 text-center '>Register</h4>
            <form className='register-form' id='register-form'>
            <div className="row">

              <div className="col-lg-6">
              <label for="Fname" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" name="name" value={user.name} onChange={handleInputs} />
              </div>

            </div>

              <div class="mb-2">
                <label for="exampleInputEmail1" class="form-label">Email</label>
                <input type="email" class="form-control" id="exampleInputEmail1" name="email" value={user.email} onChange={handleInputs}/>
              </div>

              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Mobile</label>
                <input type="number" class="form-control" id="exampleInputPassword1"name="mobile" value={user.mobile} onChange={handleInputs} />
              </div>

              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1"name="password" value={user.password} onChange={handleInputs} />
              </div>

              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1"name="cpassword" value={user.cpassword} onChange={handleInputs} />
              </div>

              <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
              </div>

              <button type="submit" class="btn btn-primary" onClick={PostData}>Register</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup;