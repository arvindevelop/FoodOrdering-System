import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {NavLink,useHistory} from 'react-router-dom';
import "../signupandlogin.css";

const Order = () => {
    const history = useHistory();

  const [order,setOrder] = useState({name:"",email:"",mobile:"",product_id:"",home_delivery:"",address:""});

  let name,value;
  const handleInputs = (e) =>{
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setOrder({...order,[name]:value});
  }

  const PostData = async (e) =>{
    e.preventDefault();

    const {name,email,mobile,product_id,home_delivery,address } = order;

    const res = await fetch('/bookorder',{
      method:"POST",
      headers:{
        "Content-Type" : "application/json"
      },
      body:JSON.stringify({
        name,email,mobile,product_id,home_delivery,address
      })
    });
    const data = await res.json();

    if(data.status === 422 || !data){
        window.alert('Invalid order details');
        console.log('Invalid order details');
    }
    else{
      window.alert('Order confirmed');
      console.log('Order confirmed');
      history.push('/');
    }
  }

  return (
    <>
      <section className="bookOrder">
      <div className='container mt-5'>
        <div className='order-content'>
          <div className='order-form'>
            <h2 className='form-title'>Order Now</h2>
            <form className='register-form' id='register-form'>

            <div className='form-group'>
                <label htmlFor='name'>
                  <i className='zmdi zmdi-account material-icons-name'></i>
                </label>
                <input type="text" name="name" id="name" autoComplete="off" placeholder="" value=""/>
              </div>

              <div className='form-group'>
                <label htmlFor='email'>
                  <i className='zmdi zmdi-email material-icons-name'></i>
                </label>
                <input type="email" name="email" id="email" autoComplete="off" placeholder="" value=""/>
              </div>

              <div className='form-group'>
                <label htmlFor='mobile'>
                  <i className='zmdi zmdi-phone-to-talk material-icons-name'></i>
                </label>
                <input type="number" name="mobile" id="mobile" autoComplete="off" placeholder="" value=""/>
              </div>
              
              <div className='form-group'>
                <label htmlFor='produt_id'>
                </label>
                <input type="number" name="product_id" id="product_id" autoComplete="off" placeholder="" value=""/>
              </div>

              <div className='form-group'>
                <label htmlFor='address'>
                </label>
                <address><input type="string" name="address" id="address" Placeholder="Enter your address"/></address>
              </div>

              <div className='form-group form-button'>
                <input type="submit" name="ordered" id="ordered" className='form-submit' value='Order'/>
              </div>
            </form>

          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Order;