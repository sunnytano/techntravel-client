const login = user => ({
    type: "LOGIN", 
    payload: user
});

const logout = () => ({
    type: "LOGOUT"
});

const signup = user => ({
    type: "SIGNUP",
    payload: user
});

const persist = user => ({
    type: "PERSIST",
    payload: user
})

const persistFromDB = () => dispatch => {
    const config = {
      headers: { Authorization: "bearer " + localStorage.token }
    };
    fetch("http://localhost:3010/auth", config)
      .then(resp => resp.json())
      .then(user => {
        dispatch(persist(user));
      });
  };

  const createUser = user =>  dispatch => {
    const config = {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    };
    fetch("http://localhost:3010/api/v1/users", config)
    .then(r => r.json())
    .then(data => {
      localStorage.token = data.token;
      dispatch(signup(data.user));
    });
};

const loginUser = user => dispatch => {
    const config = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    };
    fetch("http://localhost:3010/api/v1/login", config)
    .then(resp=>resp.json())
    .then(data=>{
        localStorage.token = data.token
        dispatch(login(data.user))
    })
}
  
const logoutUser = () => dispatch => {
    localStorage.clear();
    dispatch(logout())
}

export default {
    loginUser, 
    createUser,
    persistFromDB, 
    logoutUser
}