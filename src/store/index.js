import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'

const loggerMiddleware = createLogger()

const configureStore = (initialState) => createStore(rootReducer, initialState, applyMiddleware(thunkMiddleware, loggerMiddleware))

export default configureStore
