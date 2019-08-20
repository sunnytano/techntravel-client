import React from 'react'

class News extends React.Component{
    render(){
        return(
            <div>
                <h4>{this.props.article.title}</h4>
            </div>
        )
    }
}

export default News 