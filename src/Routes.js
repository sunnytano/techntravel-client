import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import Login from './components/Login.js'
import NewsContainer from './containers/NewsContainer.js'
import Signup from './components/Signup.js'


class Routes extends React.Component {
    render(){
        //  { this.props.currentUser.username ?
        console.log(this.props.currentUser.username)
    return (
        <Switch>
        
             <Route path ='/' component={NewsContainer}/>
            <Route path='/signup' component={Signup}/>
            <Route path ='/login' component={Login}/>

        </Switch>
        )
    }
}

const mapStateToProps = state => ({ 
    currentUser: state.currentUser
})


export default connect(mapStateToProps, null)(Routes)