import React from 'react';
import './App.css';
import { connect } from 'react-redux' // higher order component that will add functionality to ur component
import NewsContainer from './containers/NewsContainer';
import { fetchNews } from './actions/NewsAction.js'

class App extends React.Component {

  state={
    loading: true
  }

  componentDidMount(){
    this.props.fetchNews()
    .then(()=>{
      this.setState({
        loading: false
      })
    })
  }

  render(){
    console.log(this.props.news)
    return (
    <div className="App">
      <NewsContainer />
    </div>
  );
}
}

// MSP IS READING TO STATE
// MSP is how you will read from state; this will give you access to the entire redux state
// and whatever you return in the MSP function will be added that components props
// state will be the defaultState in reducer
// this is how a component will gain access to data that is stored within the redux store
// MSP must return an object
// this obj will be appended to the props of the component

function mapStateToProps(state){ 
  console.log(state)
  return { 
    news: state.news // only return the state that you need for this paticular component that will be read as props
  }
}


// MDP IS WRITING TO STATE
// has access to dispactch so it can write to state
// will return an object
// obj will also be appended to props of the component
const mapDispatchToProps = (dispatch) => ({
  fetchNews: () => dispatch(fetchNews())
})

// connect is a higher order function; which is a function that returns a function
// connect makes 2 calls; whatever connect returns is another function
// then that returned function is invoked in turn with App as its argument
export default connect(mapStateToProps, mapDispatchToProps)(App);
