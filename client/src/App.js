import React from 'react'
import { Route} from 'react-router-dom';
import Mainavbar from './component/Mainavbar';
import Resturant from './component/Home/Resturant';
import Login from './component/Login';
import Signup from './component/Signup';
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
        </>
    )
}

export default App;