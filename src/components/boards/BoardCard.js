import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import { Link } from 'react-router-dom'
import BoardImg from './BoardImg'

const BoardCard = ({ board }) => {
  const { url, id, counts, name, description } = board
  return (
    <div className="BoardCard">
      <div className="card">
        <Link to={`/boards/view/${id}`}>
          <BoardImg board={board} />
        </Link>
        <div className="p-2">
          <h3 className="text-truncate">{name}</h3>
          {_.isNil(description) ? (
            ''
          ) : (
            <p className="text-truncate">
              <em>{description}</em>
            </p>
          )}
          <div className="row cta-row">
            <div className="col">
              <a href={url} className="btn btn-danger btn-sm pull-left" target="_blank">
                <i className="fa fa-pinterest-p mr-1" />
                <i className="fa fa-external-link" />
              </a>
            </div>
            <div className="col">
              <span className="badge badge-pill badge-info mr-1">
                <i className="fa fa-thumb-tack" /> {counts.pins}
              </span>
              <span className="badge badge-pill badge-info">
                <i className="fa fa-users" /> {counts.followers}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

BoardCard.propTypes = {
  board: PropTypes.shape({
    counts: PropTypes.object.isRequired,
    description: PropTypes.string,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
}

export default BoardCard
