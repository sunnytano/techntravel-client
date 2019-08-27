const defaultState = {
    news: [], 
    input: "", 
    likes: 0,
    users: [],
    currentUser: {}
}

// reducer: is used to control changes to state
// whatever is returned from the reducer becomes state
// type is used to determine what to do in reducer
// payload is used to determine what new data needs to be used to change state

// function NewsReducer(state=defaultState, action){
//     // console.log("STATE in reducer", state)
//     // console.log("ACTION in reducer", action)
//     switch(action.type){ //action.type is really just a string and MUST be called type
//         case "CHANGE_LOADING":
//             return {...state, loading: false} // making a copy, using spread operator to preserve old state but only changing what we want to change
//         case "ADD_CATEGORY":
//             return {...state, news: [...state.news, action.payload]} //using spread operator here bc adding to the array
//         case "ADD_TO_FAVORITES":
//             return {...state, favorites: [...state.favorites, action.payload]} //using spread operator here bc adding to the array        
//         case "SET_NEWS":
//             return {...state, selectNews: action.payload}
//         case "CHANGE_FILTER":
//             return {...state, filter: action.payload} // do not need spread operator bc only changing state, not adding to it
//         default:
//             return state //whatever is returned from the reducer becomes state, its like setting state
//     }
// }

function NewsReducer(state=defaultState, action){
    switch(action.type){
        case "FETCH_NEWS":
            return {...state, news: action.payload }
        case "FETCH_USER":
            return {...state, users: action.payload }
        case "ADD_LIKES":
            return {...state, likes: state.likes + 1}
        case "CHANGE_INPUT":
            return {...state, input: action.payload}
        case "LOGIN":
        case "SIGNUP":
        case "PERSIST":
            return action.payload;
        case "LOGOUT":
            return {...state, currentUser: {}}
        default: 
            return state
    }
}

export default NewsReducer
