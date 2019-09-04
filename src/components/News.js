import React from 'react'
import { connect } from 'react-redux'

class News extends React.Component{
    render(){
        return(
            <div>
                <p>{this.props.currentUser ? this.props.currentUser.username : null}</p>
                <h4>{this.props.article.title}</h4>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    // currentUser: state.currentUser
    news: state.news
})

export default connect(mapStateToProps, null)(News)