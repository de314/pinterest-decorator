import React from 'react'
import PropTypes from 'prop-types'

import withAuth from 'hoc/withAuth'

import { Link } from 'react-router-dom'

// import Pinterest from './vendors/Pinterest'
//
// const login = () => {
//   Pinterest.login(() => {})
// }
//
// const myBoards = () => {
//   Pinterest.myBoards(res => {
//     console.log(JSON.stringify(res.data, null, 2))
//   })
// }

const AnonHeader = ({ loggingIn, startLogin }) => {
  return (
    <div className="AnonHeader">
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
            <Link to="/" className="nav-item nav-link">
              Home
            </Link>
            <Link to="/about" className="nav-item nav-link">
              About
            </Link>
          </div>
          <div className="navbar-nav ml-auto">
            {loggingIn ? (
              <span className="nav-item nav-link">Loading...</span>
            ) : (
              <Link
                to="/"
                className="nav-item nav-link"
                disabled={loggingIn}
                onClick={() => startLogin()}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  )
}

AnonHeader.propTypes = {
  loggingIn: PropTypes.bool.isRequired,
  startLogin: PropTypes.func.isRequired,
}

export const RawAnonHeader = AnonHeader

export default withAuth(AnonHeader)
