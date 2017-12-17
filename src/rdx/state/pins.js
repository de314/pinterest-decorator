import _ from 'lodash'
import { CLEAR_PINS, APPEND_PINS } from 'rdx/actions'

const selectSlice = state => _.get(state, 'pins')

export const selectPins = state => selectSlice(state)

const defaultState = {
  lastSync: null,
  map: {},
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case CLEAR_PINS: {
      return {
        ...state,
        map: {},
      }
    }

    case APPEND_PINS: {
      return {
        ...state,
        lastSync: new Date().getTime(),
        map: {
          ...state.map,
          ..._.keyBy(action.pins, 'id'),
        },
      }
    }

    default:
  }
  return state
}
