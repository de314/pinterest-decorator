import React from 'react'
import PropTypes from 'prop-types'

import { withState } from 'recompose'

import { Link } from 'react-router-dom'

const PlansList = ({ plans, newTitle, setNewTitle, createPlan, deletePlan }) => {
  return (
    <div className="PlansList">
      <div className="row">
        <div className="col col-md-6">
          <h1>Meal Plans</h1>
        </div>
        <div className="col col-md-6">
          <div className="pull-right">
            <div className="input-group">
              <input
                type="text"
                className="form-control form-control-lg"
                value={newTitle}
                onChange={e => setNewTitle(e.target.value)}
                placeholder="New Meal Plan"
              />
              <button
                className="btn btn-lg input-group-addon"
                disabled={newTitle.length === 0}
                onClick={() => {
                  createPlan(newTitle)
                  setNewTitle('')
                }}
              >
                <i className="fa fa-plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <table className="table table-striped table-hover mt-3">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Pins Count</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {plans.map((plan, i) => (
            <tr key={i}>
              <td>{plan.title}</td>
              <td>{plan.desc}</td>
              <td>{plan.pins.length}</td>
              <td className="text-center">
                <Link to={`/plans/view/${plan.id}`} className="btn btn-sm btn-info mr-1">
                  <i className="fa fa-search" />
                </Link>
                <Link to={`/plans/edit/${plan.id}`} className="btn btn-sm btn-warning mr-1">
                  <i className="fa fa-pencil" />
                </Link>
                <button className="btn btn-sm btn-danger" onClick={() => deletePlan(plan)}>
                  <i className="fa fa-trash" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {plans.length > 0 ? (
        ''
      ) : (
        <div className="text-center p-2">
          <h3 className="text-muted">There is nothing here</h3>
        </div>
      )}
    </div>
  )
}

PlansList.propTypes = {
  createPlan: PropTypes.func.isRequired,
  plans: PropTypes.arrayOf(
    PropTypes.shape({
      desc: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      pins: PropTypes.arrayOf(PropTypes.object).isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default withState('newTitle', 'setNewTitle', '')(PlansList)
