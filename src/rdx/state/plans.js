import _ from 'lodash'
import uuid from 'uuid'
import { CREATE_PLAN, UPDATE_PLAN, DELETE_PLAN } from 'rdx/actions'

const selectSlice = state => _.get(state, 'plans')

export const selectPlans = state => selectSlice(state)
export const selectPlanById = (state, id) => selectSlice(state)[id]

const defaultState = {}
const getNewPlan = (title = 'New Meal Plan') => ({
  id: uuid(),
  title,
  desc: "It's a new week, with ALL NEW MEALS!",
  pins: [],
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case CREATE_PLAN: {
      const newPlan = getNewPlan(action.title)
      return {
        ...state,
        [newPlan.id]: newPlan,
      }
    }

    case UPDATE_PLAN: {
      return {
        ...state,
        [action.plan.id]: action.plan,
      }
    }

    case DELETE_PLAN: {
      return _.omit(state, action.id)
    }

    default:
  }
  return state
}
