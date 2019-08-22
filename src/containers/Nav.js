import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import userActions from '../actions/User.js'

const Nav = props => {
    const handleLogout = () => {
        const { logoutUser } = props;
        logoutUser();
    }
    return(
        <nav>
            <Link to="/">Home</Link>
            <Link to="signup">Signup</Link>
            <Link to="login">Login</Link>
            <Link to="/" onClick={handleLogout}>Logout</Link>
            <p>{props.user ? props.user.username : null}</p>
        </nav>
    )
}

const mapStateToProps = state => ({ user: state})
const mapDispatchToProps = {
    logoutUser: userActions.logoutUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav)