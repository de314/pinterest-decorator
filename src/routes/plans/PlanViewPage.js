import React from 'react'
import _ from 'lodash'
import { selectPlanById } from 'rdx/selectors'

import { withRouter } from 'react-router-dom'
import { branch, compose, renderComponent, withProps } from 'recompose'
import { connect } from 'react-redux'

import PlanView from 'components/plans/PlanView'
import Page404 from 'routes/common/Page404'
import Breadcrumbs from 'components/layout/Breadcrumbs'

const path = title => [{ text: 'Home', href: '/' }, { text: 'Meal Plans', href: '/plans' }, title]

const Content = branch(({ plan }) => _.isNil(plan), renderComponent(Page404))(PlanView)

let PlanViewPage = ({ plan = { title: 'Not Found' } }) => (
  <div className="PlanViewPage">
    <Breadcrumbs parts={path(plan.title)} />
    <Content plan={plan} />
  </div>
)

export default compose(
  withRouter,
  withProps(({ match }) => ({
    planId: match.params.planId,
  })),
  connect((state, { planId }) => ({ plan: selectPlanById(state, planId) }))
)(PlanViewPage)
