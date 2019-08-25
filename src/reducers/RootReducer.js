import NewsReducer from './NewsReducer.js'
import UserReducer from './UserReducer.js'
import { combineReducers } from 'redux'

export default combineReducers({
    news: NewsReducer,
    users: UserReducer
})