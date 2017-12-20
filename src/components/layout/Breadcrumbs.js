import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import classnames from 'classnames'

import { Link } from 'react-router-dom'

function renderPart(part = '', href) {
  return _.isNil(href) ? part : <Link to={href}>{part}</Link>
}

const Breadcrumbs = ({ parts }) => (
  <div className="Breadcrumbs">
    <nav className="breadcrumb">
      <ol className="breadcrumb p-0 m-0">
        {parts.map((part, i) => {
          if (_.isString(part)) {
            part = { text: part }
          }
          let { text, href, active = false } = part
          return (
            <li className={classnames('breadcrumb-item', { active })} key={i}>
              {renderPart(text, href)}
            </li>
          )
        })}
      </ol>
    </nav>
  </div>
)

Breadcrumbs.propTypes = {
  parts: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        active: PropTypes.bool,
        href: PropTypes.string,
        text: PropTypes.string.isRequired,
      }),
    ])
  ).isRequired,
}

export default Breadcrumbs
