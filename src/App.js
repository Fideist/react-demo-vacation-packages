import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import './styles/App.css';
import VacationPackages from './components/VacationPackages';
import Home from './components/Home';
import MainHeader from './components/MainHeader';
import Login from './components/Login';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <MainHeader />
          <Switch>
            <Route path="/vacations" component={VacationPackages} />
            <Route path="/login" component={Login} />
            <Route path="/" component={Home} />
          </Switch>
          <Footer>
            <input placeholder="email" />
            <a href="http://google.com">google</a>
          </Footer>
        </div>
      </Router>
    );
  }
}

export default App;
