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
    <section className="signup">
      <div className='container mt-5'>
        <div className='signup-content'>
          <div className='signup-form'>
            <h2 className='form-title'>Sign up</h2>
            <form className='register-form' id='register-form'>
              <div className='form-group'>
                <label htmlFor='name'>
                  <i className='zmdi zmdi-account material-icons-name'></i>
                </label>
                <input type="text" name="name" id="name" autoComplete="off"
                value={user.name}
                onChange={handleInputs}
                placeholder="Enter your name"/>
              </div>
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
                <label htmlFor='mobile'>
                  <i className='zmdi zmdi-phone-in-talk material-icons-name'></i>
                </label>
                <input type="number" name="mobile" id="mobile" autoComplete="off"
                value={user.mobile}
                onChange={handleInputs}
                placeholder="Enter your mobile no."/>
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
              <div className='form-group'>
                <label htmlFor='cpassword'>
                  <i className='zmdi zmdi-lock material-icons-name'></i>
                </label>
                <input type="password" name="cpassword" id="cpassword" autoComplete="off"
                value={user.cpassword}
                onChange={handleInputs}
                placeholder="Confirm password"/>
              </div>
              <div className='form-group form-button'>
                <input type="submit" name="signup" id="signup" className='form-submit' value='Register' onClick={PostData}/>
                <NavLink to='/login' className='signin-link'>I am already register</NavLink>
              </div>
            </form>

          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Signup;