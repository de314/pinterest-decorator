import React from 'react'

import AuthHeader from './AuthHeader'
import AuthRoutes from 'routes/AuthRoutes'

const AuthLayout = ({ location }) => (
  <div className="AuthLayout container-fluid">
    <AuthHeader />
    <div className="main-content">
      <AuthRoutes />
    </div>
  </div>
)

export const RawAuthLayout = AuthLayout

export default AuthLayout
