import { selectAuthUserState } from 'rdx/selectors'
import Pinterest from 'vendors/Pinterest'

import { connect } from 'react-redux'
import { compose, withProps } from 'recompose'

export default Component =>
  compose(
    connect(state => ({ ...selectAuthUserState(state) })),
    withProps({
      startLogin: () => Pinterest.login(),
      startLogout: () => Pinterest.logout(),
    })
  )(Component)
