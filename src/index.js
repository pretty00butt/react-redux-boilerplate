import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import configureStore, { history } from './store/configureStore'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

import './styles/index.scss'

// Store Initialization
// ------------------------------------
const store = configureStore(window.__INITIAL_STATE__)

ReactDOM.render(
  <AppContainer>
    <App store={store} history={history} />
  </AppContainer>,
  document.getElementById('root')
)

registerServiceWorker()
