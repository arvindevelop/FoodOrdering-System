import React from 'react'
import { Route} from 'react-router-dom';
import Mainavbar from './component/Mainavbar';
import Resturant from './component/Home/Resturant';
import Login from './component/Login';
import Signup from './component/Signup';
import Admin from './component/Admin';
import Item from './component/Item';
import Order from './component/Home/Order';

const App = () => {
    return (
        <>
                <Mainavbar />
                <Route exact path="/">
                    <Resturant />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/signup">
                    <Signup />
                </Route>
                <Route path="/order">
                    <Order />
                </Route>
                <Route path="/item">
                    <Item />
                </Route>
                <Route path="/admin">
                    <Admin />
                </Route>
        </>
    )
}

export default App;