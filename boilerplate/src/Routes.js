
import React from 'react';
import { Route, Switch } from 'react-router'
import Home from './containers/Home'
import MouseHandler from './components/MouseHandler'

const Routes = () => (   
      <div className="app__container">
        <Route exact path="/" component={Home} />
      </div>
)

export default Routes;