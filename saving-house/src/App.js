import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Main from './components/Main';
import Login from './components/Login';
import ReportList from './components/ReportList';
import FindMap from './containers/Map';
import Info from './components/ReportInfoPage';

class App extends Component {
  render() {
    return (
      <>
        <Route exact path="/" component={Main}/>
        <Route path="/login" component={Login}/>
        <Route path="/reportList" component={ReportList}/>
        <Route path="/map" component={FindMap}/>
        <Route path="/info/:id" component={Info}/>
      </>
    );
  };
};

export default App;