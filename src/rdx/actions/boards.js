import actionCreator from './creator'

export const CLEAR_BOARDS = 'CLEAR_BOARDS'
export const clearBoards = actionCreator(CLEAR_BOARDS, '')

export const APPEND_BOARDS = 'APPEND_BOARDS'
export const appendBoards = actionCreator(APPEND_BOARDS, 'boards')
