import NewsReducer from './NewsReducer.js'
import { combineReducers } from 'redux'

export default combineReducers({
    news: NewsReducer
})