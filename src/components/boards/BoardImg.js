import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

const BoardImg = ({ board, className = 'card-img-top' }) => {
  const imgSrc = _.defaultTo(
    _.get(board, 'image.medium.url'),
    `https://www.gravatar.com/avatar/${board.id}?d=identicon&s=200`
  )
  return (
    <div
      className={`BoardImg img-square ${className}`}
      style={{ background: `url('${imgSrc}')`, backgroundSize: 'cover' }}
    />
  )
}

BoardImg.propTypes = {
  board: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
  }).isRequired,
}

export default BoardImg
