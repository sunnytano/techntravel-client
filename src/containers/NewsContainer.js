import React from "react"
import News from '../components/News.js'
import { connect } from 'react-redux'

class NewsContainer extends React.Component{

    render(){

  
        return(
            <div> 
                <h3>{this.props.likes}</h3>
                <button onClick={this.props.addLikes}>LIKE</button>

                <input name="input" onChange={(e)=>this.props.changeInput(e.target.value)}/>
                <h3>{this.props.input}</h3>
                <h4>{this.props.news.map(article=>{
                         return <News
                                 key={article.id} 
                                 article={article}
                                />
         })}</h4>

            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        likes: state.likes, 
        input: state.input,
        news: state.news
    }
}

function mapDispatchToProps(dispatch){
    return{
        addLikes: ()=>{
            dispatch({type: "ADD_LIKES"})
        },
        changeInput: (input)=>{
            dispatch({type: "CHANGE_INPUT", payload: input})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer);