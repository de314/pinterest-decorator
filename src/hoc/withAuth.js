import { selectAuthUserState } from 'rdx/selectors'
import Pinterest from 'vendors/Pinterest'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose, withProps } from 'recompose'

export default Component =>
  compose(
    withRouter,
    connect((state, props) => ({ ...props, ...selectAuthUserState(state) })),
    withProps({
      startLogin: () => Pinterest.login(),
      startLogout: () => Pinterest.logout(),
    })
  )(Component)
