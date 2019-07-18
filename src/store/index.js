import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducers'
import logger from '../middlewares/logger'
import randomId from '../middlewares/randomId'

const enhancer = applyMiddleware(randomId, logger)

const store = createStore(
  reducer,
  {},
  enhancer,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// dev only
window.store = store

export default store