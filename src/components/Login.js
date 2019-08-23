import React from 'react'
import { connect } from 'react-redux'
import User from '../actions/User.js'

class Login extends React.Component {
    state = {
        username: "", 
        password: "", 
    }

    handleChange = e => 
        this.setState({ 
        [e.target.name]: e.target.value
    })

    handleSubmit =  e => {
        e.preventDefault();
        const { login } = this.props;
        login(this.state)
    }

    render(){
        return(
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <h3>Login</h3>
                    <input
                        type="text"
                        onChange={this.handleChange}
                        name="username"
                        value={this.state.username}
                        />
                    <input
                        type="password"
                        onChange={this.handleChange}
                        name="password"
                        value={this.state.password}
                        />   
                    <input type="submit" value="Submit"/>
                </form>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    user: state
})

const mapDispatchToProps = {
    login: User.loginUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
