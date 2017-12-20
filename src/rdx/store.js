import { createStore, applyMiddleware, compose } from 'redux'
import persistState from 'redux-localstorage'
import rootReducer from './state'

// TODO: sagas

const middleware = []
const persistedSlices = ['auth', 'plans']

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  rootReducer,
  /* preloadedState, */
  composeEnhancers(applyMiddleware(...middleware), persistState(persistedSlices))
)

export default store
