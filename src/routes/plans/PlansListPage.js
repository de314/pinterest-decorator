import React from 'react'
import _ from 'lodash'
import { selectPlans } from 'rdx/selectors'
import { createPlan, deletePlan } from 'rdx/actions'

import { connect } from 'react-redux'

import PlansList from 'components/plans/PlansList'
import Breadcrumbs from 'components/layout/Breadcrumbs'

const path = [{ text: 'Home', href: '/' }, 'Meal Plans']

const PlansListPage = ({ plans, createPlan, deletePlan }) => (
  <div className="PlansListPage">
    <Breadcrumbs parts={path} />
    <PlansList plans={_.values(plans)} createPlan={createPlan} deletePlan={deletePlan} />
  </div>
)

export default connect(
  state => ({ plans: selectPlans(state) }),
  dispatch => ({
    createPlan: title => dispatch(createPlan(title)),
    deletePlan: plan => {
      if (window.confirm(`Are your sure? Delete ${plan.title}`)) {
        dispatch(deletePlan(plan.id))
      }
    },
  })
)(PlansListPage)
