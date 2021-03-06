const FETCH_NEWS = "FETCH_NEWS"

export function fetchNews(){
    return function(dispatch){
        return fetch("http://localhost:3010/api/v1/articles")
        .then(res=>res.json())
        .then(data=>{
            dispatch({type: FETCH_NEWS, payload: data})
        })
    }
}

