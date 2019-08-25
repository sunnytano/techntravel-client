import React from 'react'
import { connect } from 'react-redux'
import User from '../actions/User.js'

class Signup extends React.Component {

    state={
        username: "",
        password: ""
    }

    handleChange = e => 
        this.setState({
        [e.target.name]: e.target.value
    })

    handleSubmit = e => {
        e.preventDefault()
        this.props.createUser(this.state)
    }

    render(){
        return(
           <React.Fragment>
               <form onSubmit={this.handleSubmit}>
                    <h3>Signup</h3>
                    <input
                        type="text"
                        onChange={this.handleChange}
                        name="username"
                        value={this.state.username}
                     />
                      <input
                        type="text"
                        onChange={this.handleChange}
                        name="password"
                        value={this.state.password}
                     />
                     <input type="submit" value="submit"/>
               </form>
           </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    user: state
})

const mapDispatchToProps = {
    createUser: User.createUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)