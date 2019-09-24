import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import Login from './components/Login.js'
import NewsContainer from './containers/NewsContainer.js'
import Signup from './components/Signup.js'


class Routes extends React.Component {
    render(){
        console.log(this.props.currentUser.username)
    return (
        <Switch>
            { !this.props.currentUser.username ?
            <div>
            <Route path='/signup' component={Signup}/>
            <Route path ='/login' component={Login}/>
            </div>
                :
            <Route path ='/' component={NewsContainer}/>
            }
        </Switch>
        )
    }
}

const mapStateToProps = state => ({ 
    currentUser: state.currentUser
})


export default connect(mapStateToProps, null)(Routes)