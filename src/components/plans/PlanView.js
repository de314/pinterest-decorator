import React from 'react'
import PropTypes from 'prop-types'

const PlanView = ({ plan }) => {
  return (
    <div className="PlanView">
      <h1>{plan.title}</h1>
      <p>
        <em>{plan.desc}</em>
      </p>
      TODO Pins
    </div>
  )
}

PlanView.propTypes = {}

export default PlanView
