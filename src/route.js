import React from 'react';
import { BrowserRouter, HashRouter, Switch, Route, Redirect } from 'react-router-dom';

import Finace from './container/finace';
import Home from './container/home';
import Recharge from './container/recharge';
import SendMsg from './container/sendmsg';
import Setting from './container/setting';
import User from './container/user';

/**
 * 路由配置
 */
const route = (
  <HashRouter>
    <div>
      <Switch>
        <Route path='/finace' component={ Finace }/>
        <Route path='/home' component={ Home }/>
        <Route path='/recharge' component={ Recharge }/>
        <Route path='/sendmsg' component={ SendMsg }/>
        <Route path='/setting' component={ Setting }/>
        <Route path='/user' component={ User }/>
      </Switch>
    </div>
  </HashRouter>
)


export default route