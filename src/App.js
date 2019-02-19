import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Route,
  NavLink,
  HashRouter,
  Router,
  Switch
} from "react-router-dom";
import createHistory from 'history/createBrowserHistory'
//import SignIn from './components/login';
import Login from './components/login/signin';
import Dashboard from './components/dashboard/dashboard';
import {
  Provider
} from 'react-redux'
import store from './store'

const history = createHistory();
history.listen((location, action) => {
  //   console.log(location.pathname);
  window.scrollTo(0, 0)
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          {/* <Switch> */}
          <div>
            <Route exact path="/" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />
            {/* </Switch> */}
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
