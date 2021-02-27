import React, { useEffect, Suspense  } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

import Aux from 'hoc/Auxi/Auxi';
import Layout from 'hoc/Layout/Layout';
import Routes from 'Routes';
import Spinner from 'components/UI/Spinner/Spinner';
import * as actions from 'store/actions/index';

import 'App.css';


const App = props => {
  const { onTryAutoSignup } = props;

  useEffect(() => {
    onTryAutoSignup();
  }, [onTryAutoSignup]);

  return (
     <Aux>
        <Layout>
           <Suspense fallback={<Spinner/>}><Routes /></Suspense> 
        </Layout>
        <ReactNotification />
      </Aux>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);