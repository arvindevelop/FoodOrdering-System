import React from 'react'

const Navbar = ({filterItem,menuList}) => {
    const mystyle = {
        display: 'flex',  
        justifyContent:'center',
         alignItems:'center'
      };
    return (
        <>
            <nav className="navbar" style={mystyle}>
                <div className="btn-group">
                    {
                        menuList.map((curElem) => {
                            return (
                            <>
                                <button className="btn-group__item" onClick={() => filterItem(curElem)}>{curElem}</button>
                            </>
                            );
                        })
                    }
                </div>
            </nav>
        </>
    )
}


export default Navbar;
