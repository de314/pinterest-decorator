import React from 'react'

import { Route, Switch } from 'react-router-dom'
import Home from 'routes/home/Home'
import ProfilePage from 'routes/profile/ProfilePage'
// ::IMPORT_AUTH::
import Page404 from 'routes/common/Page404'
// ::IMPORT_COMMON::

const AuthRoutes = () => (
  <div className="AuthRoutes">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/profile" component={ProfilePage} />
      {/* ::ROUTE_AUTH:: */}
      {/* ::ROUTE_COMMON:: */}
      <Route component={Page404} />
    </Switch>
  </div>
)

export default AuthRoutes
