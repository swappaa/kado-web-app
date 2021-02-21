import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

const withAuthorization = ComposedComponent => {
    class Authenticate extends React.Component {


        render() {
            return this.props.isAuthenticated ? <ComposedComponent {...this.props} /> : <Redirect to="/login" />
        }
    }

    const mapStateToProps = state => {
        return {
            isAuthenticated: state.auth.token !== null
        }
    }


    return connect(mapStateToProps)(Authenticate);
}

export default withAuthorization

// import React from 'react'
// import { connect } from 'react-redux'
// import { Redirect } from 'react-router-dom'


// const withAuthorization = Component => {
//     class WithAuthorization extends React.Component {

//         render() {
//             const { auth } = this.props
//             return auth.isAuth ? <Component {...this.props} /> : <Redirect to="/login" />
//         }
//     }

//     return connect(({ auth }) => ({ auth }))(WithAuthorization)
// }


// export default withAuthorization





