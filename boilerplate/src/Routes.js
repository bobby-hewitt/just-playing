
import React from 'react';
import { Route, Switch } from 'react-router'
import Home from './containers/Home'
import MouseHandler from './components/MouseHandler'

import ClickHandler from 'components/ClickHandler'
const Routes = () => (

   
      <div className="app__container">
        <Route exact path="/" component={MouseHandler} />
        
      </div>
   

)

export default Routes;