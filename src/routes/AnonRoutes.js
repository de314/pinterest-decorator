import React from 'react'

import { Route, Switch } from 'react-router-dom'
import AnonHome from 'routes/home/AnonHome'
// ::IMPORT_ANON::
import Page404 from 'routes/common/Page404'
// ::IMPORT_COMMON::

const AnonRoutes = () => (
  <div className="AnonRoutes">
    <Switch>
      <Route exact path="/" component={AnonHome} />
      {/* ::ROUTE_ANON:: */}
      {/* ::ROUTE_COMMON:: */}
      <Route component={Page404} />
    </Switch>
  </div>
)

export default AnonRoutes
