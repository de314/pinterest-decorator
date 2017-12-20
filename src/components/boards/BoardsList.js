import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import BoardCard from './BoardCard'

const BoardsList = ({ boards }) => {
  return (
    <div className="BoardsList">
      <h1>Boards</h1>
      <div className="row">
        {_.values(boards).map((board, i) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-2 mb-2" key={i}>
            <BoardCard board={board} />
          </div>
        ))}
      </div>
    </div>
  )
}

BoardsList.propTypes = {
  boards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default BoardsList
