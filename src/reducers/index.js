import {combineReducers} from 'redux'

import counterReducer from '../reducers/counter'
import articles from "../reducers/articles";

export default combineReducers({
  count: counterReducer,
  articles
})