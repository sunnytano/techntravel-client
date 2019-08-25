import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './components/Login.js'
import NewsContainer from './containers/NewsContainer.js'
import Signup from './components/Signup.js'


const Routes = () => {
    return (
        <Switch>
            <Route path='/signup' component={Signup}/>
            <Route path ='/login' component={Login}/>
            <Route path ='/' component={NewsContainer}/>
        </Switch>
    )
}

export default Routes