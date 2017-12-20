import React from 'react'
import _ from 'lodash'
import { selectBoards } from 'rdx/selectors'

import { connect } from 'react-redux'

import BoardsList from 'components/boards/BoardsList'
import Breadcrumbs from 'components/layout/Breadcrumbs'

const path = [{ text: 'Home', href: '/' }, 'Boards']

const BoardsListPage = ({ boards }) => (
  <div className="BoardsListPage">
    <Breadcrumbs parts={path} />
    <BoardsList boards={boards} />
  </div>
)

export default connect(state => ({ boards: _.values(selectBoards(state).map) }))(BoardsListPage)
