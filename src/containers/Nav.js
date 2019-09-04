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
        // console.log(this.props.currentUser.username)
    }
 
    render(){
        console.log(this.props.currentUser.username)
        // <p>{this.props.currentUser ? this.props.currentUser.username : null}</p>

    return(
        <nav>
            <Link to="/">Home</Link>
            {this.props.currentUser.username ?
            <div>
              <Link to="/" onClick={this.handleLogout}>Logout</Link>
                <p>{this.props.currentUser.username}</p>
                <h1>ACCOUNT</h1>
            </div>
            :
            <div>
                <Link to="signup">Signup</Link>
                <Link to="login">Login</Link>
            </div>
            }
        </nav>
        )
    }
}

const mapStateToProps = state => ({ 
    currentUser: state
})
const mapDispatchToProps = dispatch => ({
    logoutUser: (history) => dispatch(User.logoutUser(history))
});


export default connect(mapStateToProps, mapDispatchToProps)(Nav)