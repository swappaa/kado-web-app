import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import asyncComponent from './hoc/asyncComponent/asyncComponent';
import Aux from './hoc/Auxi/Auxi';
import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import signupTalent from './containers/SignupTalent/SignupTalent';
import talentProfiles from './containers/TalentProfile/TalentProfile';


class App extends Component {
  render() {
    return (
      <Aux>
        <Layout>
          <Switch>
            <Route path="/talent-profile" component={talentProfiles} />
            <Route path="/signup-talent" component={signupTalent} />
            <Route path="/" exact component={Home} />
            <Redirect to="/" />
          </Switch>
        </Layout>
      </Aux>
    )
  }
}

export default connect()(App);
