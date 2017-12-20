import actionCreator from './creator'

export const CREATE_PLAN = 'CREATE_PLAN'
export const createPlan = actionCreator(CREATE_PLAN, 'title')

export const UPDATE_PLAN = 'UPDATE_PLAN'
export const updatePlan = actionCreator(UPDATE_PLAN, 'plan')

export const DELETE_PLAN = 'DELETE_PLAN'
export const deletePlan = actionCreator(DELETE_PLAN, 'id')
