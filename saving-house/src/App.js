import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Main from './components/Main';
import Login from './components/Login';
import ReportList from './components/ReportList';
import FindMap from './containers/Map';

class App extends Component {
  render() {
    return (
      <>
        <Route exact path="/" component={Main}/>
        <Route path="/login" component={Login}/>
        <Route path="/reportList" component={ReportList}/>
        <Route path="/map" component={FindMap}/>
      </>
    );
  };
};

export default App;