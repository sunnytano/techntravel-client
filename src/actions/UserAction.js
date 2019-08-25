const FETCH_USER = "FETCH_USER"

export function fetchUsers(){
    return function(dispatch){
        return fetch("http://localhost:3010/api/v1/users")
        .then(res=>res.json())
        .then(data=>{
            dispatch({type: FETCH_USER, payload: data})
        })
    }
}

