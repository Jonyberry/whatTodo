import { combineReducers, createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import promise from 'redux-promise-middleware'
import todos from './modules/todos';

const reducer = combineReducers({todos});
const middleware = applyMiddleware(promise(), createLogger());

export default createStore(reducer, middleware)