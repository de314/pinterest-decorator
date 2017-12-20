import React from 'react'

import { Route, Switch } from 'react-router-dom'
import Home from 'routes/home/Home'
import ProfilePage from 'routes/profile/ProfilePage'
import PlansListPage from 'routes/plans/PlansListPage'
import PlanViewPage from 'routes/plans/PlanViewPage'
// ::IMPORT_AUTH::
import Page404 from 'routes/common/Page404'
// ::IMPORT_COMMON::

const AuthRoutes = () => (
  <div className="AuthRoutes">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/profile" component={ProfilePage} />
      <Route exact path="/plans" component={PlansListPage} />
      <Route exact path="/plans/view/:planId" component={PlanViewPage} />
      {/* ::ROUTE_AUTH:: */}
      {/* ::ROUTE_COMMON:: */}
      <Route component={Page404} />
    </Switch>
  </div>
)

export default AuthRoutes
