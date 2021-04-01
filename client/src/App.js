import React, { Fragment } from 'react';
import './App.css';
import Navbar from './component/layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './component/layout/Pages/Home';
import About from './component/layout/Pages/About';
import Register from './component/auth/Register';
import Login from './component/auth/Login';
import Alerts from './component/layout/Alerts';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import {ContactState} from './context/Contact/ContactState';
import setAuthToken from './utils/setAuthToken';

if(localStorage.token){
  setAuthToken(localStorage.token);
}
const App = () => {
  return (
    <AuthState>
    <ContactState>
      <AlertState>
    <Router>
      <Fragment>
      <Navbar />
      <div className="container">
      <Alerts />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Register" component={Register} />
          <Route exact path="/Login" component={Login} />
        </Switch>
      </div>
      </Fragment>
    </Router>
    </AlertState>
    </ContactState>
    </AuthState>
  );
}

export default App;
