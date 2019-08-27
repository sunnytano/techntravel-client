import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import User from '../actions/User.js'

class Nav extends React.Component{

    handleLogout = () => {
        this.props.logoutUser();
        console.log(this.props.users)
    }
 
    render(){
        console.log(this.props.users.username)
    return(
        <nav>
            <Link to="/">Home</Link>
            <Link to="signup">Signup</Link>
            <Link to="login">Login</Link>
            <Link to="/" onClick={this.handleLogout}>Logout</Link>
            <p>{this.props.users ? this.props.users.username : null}</p>
        </nav>
        )
    }
}

const mapStateToProps = state => ({ 
    users: state
})
const mapDispatchToProps = {
    logoutUser: User.logoutUser
};


export default connect(mapStateToProps, mapDispatchToProps)(Nav)