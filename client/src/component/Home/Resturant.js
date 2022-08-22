import React from 'react';
import './style.css';
import Menu from './menuApi';
import MenuCard from './MenuCard';
import Navbar from './Navbar';
import {NavLink} from 'react-router-dom';

const uniqueList = [
    ...new Set(
        Menu.map((curElem) => {
            return curElem.category;
        })
    ),
    "All",
];

const Restaurant = () => {
    const [menuData, setMenuData] = React.useState(Menu);
    const [menuList, SetMenuList] = React.useState(uniqueList);

    const mystyle = { 
        display:'flex',
        justifyContent:'center',
         alignItems:'center'
      };

    const filterItem = (category) => {
        if(category === "All"){
            setMenuData(Menu);
            return;
        }
        const updatedList = Menu.filter((curElem) => {
            return curElem.category === category;
        })

        setMenuData(updatedList);
    }
    return (
        <>
            <Navbar filterItem={filterItem} menuList={menuList}/>
            <div style={mystyle}>
                <NavLink to="/item" className="btn btn-outline-info me-4 rounded-pill px-4">More Items</NavLink>
            </div>
            <MenuCard menuData={menuData} />
            
        </>
    );
};

export default Restaurant;