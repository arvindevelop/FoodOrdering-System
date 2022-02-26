import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {useHistory,useLocation} from 'react-router-dom';
import "../signupandlogin.css";

  const Order = () => {  
    const history = useHistory();

  const {user_name,user_email,user_mobile,product_name,product_id} = useLocation().state;
  const [order,setOrder] = useState({name:user_name,email:user_email,mobile:user_mobile,product_name:product_name,product_id:product_id,address:""});

  let name,value;
  const handleInputs = (e) =>{
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setOrder({...order,[name]:value});
  }

  const PostData = async (e) =>{
    e.preventDefault();

    const {name,email,mobile,product_name,product_id,address } = order;

    const res = await fetch('/bookorder',{
      method:"POST",
      headers:{
        "Content-Type" : "application/json"
      },
      body:JSON.stringify({
        name,email,mobile,product_name,product_id,address
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
                <input type="text" name="name" id="name" placeholder="Name..." value={order.name}/>
              </div>

              <div className='form-group'>
                <label htmlFor='email'>
                  <i className='zmdi zmdi-email material-icons-name'></i>
                </label>
                <input type="email" name="email" id="email" placeholder="Email..." value={order.email}/>
              </div>

              <div className='form-group'>
                <label htmlFor='mobile'>
                  <i className='zmdi zmdi-phone-to-talk material-icons-name'></i>
                </label>
                <input type="number" name="mobile" id="mobile" placeholder="Mobile..." value={order.mobile}/>
              </div>
              
              <div className='form-group'>
                <label htmlFor='product_name'>
                </label>
                <input type="text" name="product_name" id="product_name" placeholder="Product name..." value={order.product_name}/>
              </div>

              <div className='form-group'>
                <label htmlFor='produt_id'>
                </label>
                <input type="number" name="product_id" id="product_id" placeholder="Product id..." value={order.product_id}/>
              </div>

              <div className='form-group'>
                <label htmlFor='address'>
                </label>
                <address><input type="string" name="address" id="address" 
                value={order.address}
                onChange={handleInputs}
                Placeholder="Enter your address"/></address>
              </div>

              <div className='form-group form-button'>
                <input type="submit" name="ordered" id="ordered" className='form-submit' value='Place Order' onClick={PostData}/>
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