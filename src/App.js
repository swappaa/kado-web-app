import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import asyncComponent from './hoc/asyncComponent/asyncComponent';

import Aux from './hoc/Auxi/Auxi';
import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import signupTalent from './containers/SignupTalent/SignupTalent';
import talentProfile from './containers/TalentProfile/TalentProfile';
import alertList from './containers/AlertList/AlertList';
import alertMessages from './containers/AlertMessages/AlertMessages';
import kadosList from './containers/KadosList/KadosList';
import kadosDetails from './containers/KadosDetails/KadosDetails';
import Booking from './containers/Booking/Booking';
import Favorites from './containers/Favorites/Favorites';
import Account from './containers/Auth/ContinueSignIn/ContinueSignIn';
import FanSettings from './containers/Settings/FanSettings/FanSettings';
import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions/index';

import './App.css';

const asyncAuth = asyncComponent(() => {
  return import('./containers/Auth/Auth');
});


class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {

    const Page404 = ({ location }) => (
      <div>
        <h2>No match found for <code>{location.pathname}</code></h2>
      </div>
    );

    let routes = (
      <Switch>
        <Route path="/fan-settings" component={FanSettings} />
        <Route path="/talent-profile" component={talentProfile} />
        <Route path="/signup-talent" component={signupTalent} />
        <Route path="/booking" component={Booking} />
        <Route path="/signin" component={asyncAuth} />
        <Route path="/" exact component={Home} />
        <Redirect to="/" />
        <Route component={Page404} />
      </Switch>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/talent-profile" component={talentProfile} />
          <Route path="/alert-list" component={alertList} />
          <Route path="/alert-messages" component={alertMessages} />
          <Route path="/kados-list" component={kadosList} />
          <Route path="/kados-details" component={kadosDetails} />
          <Route path="/booking" component={Booking} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/account" component={Account} />
          <Route path="/logout" component={Logout} />
          <Route path="/" exact component={Home} />
          <Route component={Page404} />
          <Redirect to="/" />
        </Switch>
      );
    }

    return (
      <Aux>
        <Layout>
          {routes}
        </Layout>
      </Aux>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
