import React, { useEffect, Suspense } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Aux from 'hoc/Auxi/Auxi';
import Layout from 'hoc/Layout/Layout';
import Routes from 'Routes';
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
        <Suspense fallback={null}>
          <Routes />
        </Suspense>
      </Layout>
      <ToastContainer
        limit={3}
        position="bottom-left"
        hideProgressBar={true} />
    </Aux>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
);