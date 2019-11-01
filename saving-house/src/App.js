import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import Main from './components/Main';
import Login from './components/Login';
import Map from './containers/Map';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path="/" component={Main}/>
        <Route path="/login" component={Login}/>
        <Route path="/map" component={Map}/>
      </Fragment>
    );
  };
};

export default App;