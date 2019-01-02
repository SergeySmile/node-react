import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';

const DashBoard = () => {
  return (
    <div>
      <h2>DashBoard</h2>
    </div>
  );
};

const SurveyNew = () => {
  return (
    <div>
      <h2>SurveyNew</h2>
    </div>
  );
};

const Landing = () => {
  return (
    <div>
      <h2>Landing</h2>
    </div>
  );
};

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={DashBoard} />
            <Route path="/survey/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(App);
