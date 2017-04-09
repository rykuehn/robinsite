import React from 'react';
import {broserHistory, Router, Route} from 'react-router';

import App from './components/App';
import Resume from './components/Resume';
import Intro from './components/IntroBlock';

const Routes = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/resume" component={Resume}/>
        <Route path="/intro" component={Intro}/>
      </Route>
  </Router> )
}

export default Routes;