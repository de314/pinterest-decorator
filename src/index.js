import React from 'react'
import ReactDOM from 'react-dom'
import store from 'rdx/store'
import registerServiceWorker from './registerServiceWorker'

import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import App from 'components/App'

import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
