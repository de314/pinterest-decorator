import React from 'react'

import withAuth from 'hoc/withAuth'

import AnonHeader from './AnonHeader'
import AnonRoutes from 'routes/AnonRoutes'

const AnonLayout = ({ loggingIn, startLogin }) => {
  return (
    <div className="AnonLayout container-fluid">
      <AnonHeader />
      <div className="main-content">
        <AnonRoutes />
      </div>
    </div>
  )
}

export const RawAnonLayout = AnonLayout

export default withAuth(AnonLayout)
