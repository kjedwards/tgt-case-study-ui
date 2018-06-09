import {  createStore,
          applyMiddleware,
          compose } from 'redux'
import rootReducer from './reducers/index'
import thunk from 'redux-thunk'


export default function Store () {
  return createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    compose(applyMiddleware(thunk)))
}
