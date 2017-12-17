import actionCreator from './creator'

export const CLEAR_PINS = 'CLEAR_PINS'
export const clearPins = actionCreator(CLEAR_PINS)

export const APPEND_PINS = 'APPEND_PINS'
export const appendPins = actionCreator(APPEND_PINS, 'pins')
