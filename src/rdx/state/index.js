/*
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * !! DO NOT MODIFY THIS FILE !!
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 */
import { combineReducers } from 'redux'
import auth from './auth'
import pins from './pins'
// ::IMPORT::

export default combineReducers({
  auth,
  pins,
  // ::DEFAULT_EXPORT::
})

export * from './auth'
export * from './pins'
// ::EXPORT::
