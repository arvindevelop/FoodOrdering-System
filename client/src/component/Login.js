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
    </section>
    </>
  )
}

export default Login;