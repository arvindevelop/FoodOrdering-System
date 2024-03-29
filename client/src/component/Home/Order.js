import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {useHistory,useLocation,NavLink} from 'react-router-dom';
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
        // console.log('Invalid order details');
    }
    else{
      window.alert('Order confirmed');
      // console.log('Order confirmed');
      history.push('/');
    }
  }
  
  return (
    <>
    <div className="container shadow my-5 py-5">
        <div className="row">
          <div className="col-lg-6 col-12 d-flex  flex-column align-item-center text-white form text-center sign">
            <h1 className="display-4 fw-bolder my-5 my-5">
              Welcome Back
            </h1>
            <p className="lead">
              Order Details</p>
            <h5 className='mb-4'>OR</h5>
            <div className='button d-flex text-white justify-content-center'>
              <NavLink to="/" className="btn btn-outline-info me-4 rounded-pill px-4">Home</NavLink>
            </div>
          </div>
          <div className="col-lg-6 col-12 ps-5">
          <h4 className='display-6 text-center '>ORDER</h4>
            <form className='register-form' id='register-form'>
            <div className="row">

              <div className="col-lg-6">
              <label for="Fname" class="form-label">User Name</label>
                <input type="text" class="form-control" id="name" name="name" value={order.name} disabled/>
              </div>

            </div>

              <div class="mb-2">
                <label for="exampleInputEmail1" class="form-label">User Email</label>
                <input type="email" class="form-control" id="exampleInputEmail1" name="email" value={order.email} disabled/>
              </div>

              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">User Mobile</label>
                <input type="number" class="form-control" id="exampleInputPassword1"name="mobile" value={order.mobile} disabled/>
              </div>

              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Product Name</label>
                <input type="text" class="form-control" id="exampleInputPassword1"name="product_name" value={order.product_name} disabled/>
              </div>

              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Product ID</label>
                <input type="number" class="form-control" id="exampleInputPassword1"name="product_id" value={order.product_id} disabled/>
              </div>

              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Address</label>
                <input type="text" class="form-control" id="exampleInputPassword1"name="address" placeholder="Enter your address" value={order.address} onChange={handleInputs} />
              </div>

              <button type="submit" class="btn btn-primary" onClick={PostData}>Place Order</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Order;