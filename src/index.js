import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux'
import * as serviceWorker from './serviceWorker';
import NewsReducer from './reducers/NewsReducer.js'
import { Provider } from 'react-redux' // Provider is a component, it provides to the entire application access to the store'
import News from './components/News';
import thunk from 'redux-thunk';
// import RootReducer from './reducers/RootReducer.js'


// store is used to manage state
// contains state as an object and functions that manipulate/read state
const store = createStore(NewsReducer, applyMiddleware(thunk))

console.log("reading state before dispatch", store.getState())

// dispatch is the functions used to write to the state, 
// dipatch takes objects as arguments called "action"
// the action must have at least a property called "type"
// calling dispatch tells redux to call your reducer, this will initate your reducer
// the type here is exactly the same as what is passed in action which is the second argument in the reducer function
// const newsCategory = {name: "Tech"}
// store.dispatch({type: "CHANGE_LOADING"}) 
// store.dispatch({type: "ADD_CATEGORY", payload: newsCategory})
// store.dispatch({type: "CHANGE_FILTER", payload: "hello" })
// console.log("reading state after dispatch", store.getState())

// payload can be any data type; object, array, string, etc
// when you hook up react with redux and  make a fetch; calling dispatch and then passing in (fetch)data as a payload and using that to write to state in reducer
// everytime you call dispatch, the reducer is called
// type is used to determine what to do in reducer
// payload is used to determine what new data needs to be used to change state
// data is always action.payload => payloads are like sources of information


// Provider is a component, it provides to the entire application access to the store
ReactDOM.render(
    <Provider store={store}> 
        <App />
    </Provider>,

    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
