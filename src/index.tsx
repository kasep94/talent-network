import * as React from 'react';
import * as ReactDOM from 'react-dom';

import 'antd/dist/antd.css';
import './public';
import registerServiceWorker from './registerServiceWorker';
import './style.scss';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import childrens from './routing.children';

import Header from './app/header/header';

import routes from './routing';



const RouteWithSubRoutes = (route: any) => (
  <Route path={route.path} component={route.component}/>
)

/**
 * 初始化页面
 */
const init = () => {
  const RouteConfigExample = () => {
      return (
      <Router>
          <div>
            <Switch>
              <Route exact={true} path='/' component={Header}/>
              {childrens.map((route, i) => {
                return (<RouteWithSubRoutes key={i} {...route}/>
              )})}
            </Switch>
            <Switch>
              {routes.map((route, i) => {
                return (<RouteWithSubRoutes key={i} {...route}/>
              )})}
            </Switch>
          </div>
      </Router>
  )}

  ReactDOM.render(<RouteConfigExample />, document.getElementById('root') as HTMLElement);
}

init();

/* ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
); */
registerServiceWorker();
