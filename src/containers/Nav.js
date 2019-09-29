import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import User from '../actions/User.js'

class Nav extends React.Component{

    state={
        loggedIn: false
    }

    handleLogout = e => {
        e.preventDefault()
        localStorage.removeItem("token")
        this.props.logoutUser(this.props.history);
        // this.props.history.push("/")
        // console.log(this.props.currentUser.username)
    }
 
    render(){
        console.log(this.props.currentUser)
        // <p>{this.props.currentUser ? this.props.currentUser.username : null}</p>
        //           {this.props.currentUser.username ?
    return(
        <nav>
            <Link to="/">Home</Link>
            <Link to="signup">Signup</Link>
            <Link to="login">Login</Link>
                <p>{this.props.currentUser ? this.props.currentUser.username  &&
                <Link to="/" onClick={this.handleLogout}>Logout</Link>
                    : null}</p>
        
            
        </nav>
        )
    }
}

const mapStateToProps = state => ({ 
    currentUser: state.currentUser
})

const mapDispatchToProps = dispatch => ({
    logoutUser: (history) => dispatch(User.logoutUser(history))
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav)