import { combineReducers } from 'redux'
import NewsReducer from './NewsReducer.js'
import UserReducer from './UserReducer.js'

export default combineReducers({
    news: NewsReducer,
    users: UserReducer
})