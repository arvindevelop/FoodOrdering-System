import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {NavLink,useHistory} from 'react-router-dom';
import "./signupandlogin.css";


const Admin = () => {
  const history = useHistory();

  const [product,setProduct] = useState({pid:"",productname:"",category:"",price:"",description:""});

  let name,value;
  const handleInputs = (e) =>{
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setProduct({...product,[name]:value});
  }

  const PostData = async (e) =>{
    e.preventDefault();

    const {pid, productname, category, price, description } = product;

    const res = await fetch('/createItem',{
      method:"POST",
      headers:{
        "Content-Type" : "application/json"
      },
      body:JSON.stringify({
        pid, productname, category, price, description
      })
    });
    const data = await res.json();

    if(data.status === 422 || !data){
        window.alert('Invalid item information');
    }
    else{
      window.alert('Item added successful');
      history.push('/admin');
    }
  }

  return (
    <>
    <div className="container shadow my-5 py-5">
        <div className="row">
          <div className="col-lg-6 col-12 d-flex  flex-column align-item-center text-white form text-center sign">
            <h1 className="display-4 fw-bolder my-5 my-5">
              Create Food Item
            </h1>
            <div className='button d-flex text-white justify-content-center'>
              <NavLink to="/" className="btn btn-outline-info me-4 rounded-pill px-4">Home</NavLink>
            </div>
          </div>
          <div className="col-lg-6 col-12 ps-5">
          <h4 className='display-6 text-center '>Create Item</h4>
            <form className='register-form' id='register-form'>
            <div className="row">

              <div className="col-lg-6">
              <label for="Fname" class="form-label">Product Id</label>
                <input type="number" class="form-control" id="pid" name="pid" value={product.pid} onChange={handleInputs} />
              </div>

            </div>

                <div class="mb-2">
                    <label for="exampleInputEmail1" class="form-label">Product name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" name="productname" value={product.productname} onChange={handleInputs}/>
                </div>

              <div class="mb-2">
                <label for="exampleInputEmail1" class="form-label">Category</label>
                <select class="form-control" id="exampleInputEmail1" name="category" value={product.category} onChange={handleInputs}>
                    <option value="breakfast">breakfast</option>
                    <option value="lunch">lunch</option>
                    <option value="evening">evening</option>
                    <option value="dinner">dinner</option>
                </select>
              </div>

              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Price</label>
                <input type="number" class="form-control" id="exampleInputPassword1"name="price" value={product.price} onChange={handleInputs} />
              </div>

              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Description</label>
                <input type="text" class="form-control" id="exampleInputPassword1"name="description" value={product.description} onChange={handleInputs} />
              </div>

              <button type="submit" class="btn btn-primary" onClick={PostData}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Admin;