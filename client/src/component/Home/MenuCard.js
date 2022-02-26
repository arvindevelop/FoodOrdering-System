import React from 'react'
import {NavLink} from 'react-router-dom';
import Constant from './Constant';

const MenuCard = ({ menuData }) => {

    return (
        <>
            <section className="main-card--cointainer">
                {menuData.map((curElem) => {

                    const {id,product_name,category,image,description} = curElem;
                    const {name,email,mobile} = Constant;

                    return (
                        <>
                            <div className="card-container" key={id}>
                                <div className="card">
                                    <div className="card-body">
                                        <span className="card-number card-circle subtle">{id}</span>
                                        
                                        <span className="card-author subtle">{category}</span>
                                        <h2 className="card-title">{product_name}</h2>
                                        <span className="card-description subtle">
                                        {description}
                                        </span>
                                        <div className="card-read">Read</div>
                                    </div>
                                    <img src={image} alt="images" className="card-media"/>
                                    <NavLink to={{pathname: "/order",state:{user_name:name,user_email:email,user_mobile:mobile,product_name:product_name,product_id:id,} }}><span className="card-tag subtle">Order Now</span></NavLink>
                                </div>
                            </div>
                        </>
                    )
                })}
            </section>
        </>
    )
}


export default MenuCard;
