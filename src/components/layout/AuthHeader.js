import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import moment from 'moment'
import Pinterest from 'vendors/Pinterest'
import { selectPins } from 'rdx/selectors'

import { compose, lifecycle, withProps, withState } from 'recompose'
import withAuth from 'hoc/withAuth'
import { connect } from 'react-redux'

import { Link, NavLink } from 'react-router-dom'

function getSyncText(lastSync) {
  return _.isNil(lastSync) ? '' : moment(lastSync).fromNow()
}

let SyncButton = ({ sync, lastSync }) => (
  <div className="SyncButton">
    <button className="btn btn-success" onClick={sync}>
      <i className="fa fa-refresh" /> {getSyncText(lastSync)}
    </button>
  </div>
)

SyncButton = compose(
  connect(state => ({ lastSync: selectPins(state).lastSync })),
  withState('updateTime', 'setUpdateTime'),
  lifecycle({
    componentDidMount() {
      const { setUpdateTime } = this.props
      this.interval = setInterval(() => setUpdateTime(new Date().getTime()), 10000)
    },
    componentWillUnmount() {
      clearInterval(this.interval)
    },
  })
)(SyncButton)

const AuthHeader = ({ user, startLogout, sync }) => {
  return (
    <div className="AuthHeader">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/" className="navbar-brand">
          Decorator
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav mr-auto">
            <NavLink to="/boards" className="nav-item nav-link">
              Boards
            </NavLink>
            <NavLink to="/pins" className="nav-item nav-link">
              Pins
            </NavLink>
            <NavLink to="/plans" className="nav-item nav-link">
              Meal Plans
            </NavLink>
          </div>
          <div className="navbar-nav ml-auto">
            <span className="nav-item">
              <SyncButton sync={sync} />
            </span>
            <NavLink to="/profile" className="nav-item nav-link">
              Hi {user.first_name}
            </NavLink>
            <Link to="/" className="nav-item nav-link" onClick={() => startLogout()}>
              Logout
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

AuthHeader.propTypes = {
  startLogout: PropTypes.func.isRequired,
  user: PropTypes.object,
}

export const RawAuthHeader = AuthHeader

export default compose(
  withAuth,
  withProps({
    sync: () => Pinterest.ingest(),
  })
)(AuthHeader)
