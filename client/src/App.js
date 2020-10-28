import React, { Fragment } from 'react';
import './App.css';
import Navbar from './component/layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './component/layout/Pages/Home';
import About from './component/layout/Pages/About';
import ContactState from './context/Contact/ContactState';

const App = () => {
  return (
    <ContactState>
    <Router>
      <Fragment>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
        </Switch>
      </div>
      </Fragment>
    </Router>
    </ContactState>
  );
}

export default App;