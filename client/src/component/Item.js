import React,{useState} from 'react'
import {NavLink} from 'react-router-dom';
import Table from 'react-bootstrap/Table'
import Constant from '../component/Home/Constant';

const Item = () => {
    const [data,setData] = useState([]);
    
    const myStyle = {
      paddingLeft:"40px",
      paddingRight:"40px"
    }
    const getData = async () =>{
    
        const res = await fetch('/getitem');
        const data = await res.json();
        setData(data.data);
      }
      getData();

    
return(
    <>
    <div style={myStyle}>
          <Table bordered>
            <thead>
              <tr>
                <th width="800px">Pid</th>
                <th  width="800px">Product name</th>
                <th  width="800px">Ctegory</th>
                <th  width="800px">Price</th>
                <th  width="800px">Description</th>
                <th  width="800px">Action</th>
          
              </tr>
            </thead>
            </Table>
          </div>
    {data.map((curElem) => {

        const {pid,productname,category,price,description} = curElem;
        const {name,email,mobile} = Constant;
    return (
        <>
        <div style={myStyle}>
          <Table stripped bordered hover size="sm">
            <tbody>
              <tr>
                <td  width="800px">{pid}</td>
                <td  width="800px">{productname}</td>
                <td  width="800px">{category}</td>
                <td  width="800px">{price}₹</td>
                <td  width="800px">{description}</td>
                <td  width="800px"><NavLink to={{pathname: "/order",state:{user_name:name,user_email:email,user_mobile:mobile,product_name:productname,product_id:pid,} }}className="btn btn-outline-info rounded-pill">Add to cart</NavLink></td>
              </tr>
            </tbody>
            </Table>
          </div>
        </>
    )
    })
    }
    </>
)
}


export default Item;
