import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from './store'
import Routes from './Routes'
import 'bootstrap/dist/css/bootstrap.css';
import './index.scss'

render(
    <Provider store={store}>
    <ConnectedRouter history={history}>
      <React.Fragment>
        
        <Routes/>
      </React.Fragment>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)