import _ from 'lodash'
import { CLEAR_BOARDS, APPEND_BOARDS } from 'rdx/actions'

const selectSlice = state => _.get(state, 'boards')

export const selectBoards = state => selectSlice(state)

const defaultState = {
  lastSync: null,
  map: {},
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case CLEAR_BOARDS: {
      return {
        ...state,
        map: {},
      }
    }

    case APPEND_BOARDS: {
      return {
        ...state,
        lastSync: new Date().getTime(),
        map: {
          ...state.map,
          ..._.keyBy(action.boards, 'id'),
        },
      }
    }

    default:
  }
  return state
}
