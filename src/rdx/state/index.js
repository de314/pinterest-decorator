/*
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * !! DO NOT MODIFY THIS FILE !!
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 */
import { combineReducers } from 'redux'
import auth from './auth'
import pins from './pins'
import plans from './plans'
// ::IMPORT::

export default combineReducers({
  auth,
  pins,
  plans,
  // ::DEFAULT_EXPORT::
})

export * from './auth'
export * from './pins'
export * from './plans'
// ::EXPORT::
