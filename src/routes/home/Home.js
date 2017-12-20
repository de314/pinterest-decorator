import React from 'react'

import { Link } from 'react-router-dom'

const Home = () => (
  <div className="Home">
    <div className="row" style={{ minHeight: '75vh' }}>
      <div className="col col-md-6">
        <Link to="/pins">
          <div className="border rounded m-1 h-50 d-flex justify-content-center align-items-center">
            <h1>Pins</h1>
          </div>
        </Link>
      </div>
      <div className="col col-md-6">
        <Link to="/plans">
          <div className="border rounded m-1 h-50 d-flex justify-content-center align-items-center">
            <h1>Meal Plans</h1>
          </div>
        </Link>
      </div>
    </div>
  </div>
)

export default Home
