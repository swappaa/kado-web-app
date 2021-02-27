import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const withAuthorization = Component => {
    class WithAuthorization extends Component {

        render() {
            const { auth } = this.props
            // const { isAuthUser, type } = props;
            // if (type === "guest" && isAuthUser) return <Redirect to="/home" />;
            // else if (type === "private" && !isAuthUser) return <Redirect to="/" />;
            console.log(auth.accountType);
            return auth.token ? <Component {...this.props} /> : null;
        }
    }

    return connect(({ auth }) => ({ auth }))(WithAuthorization)
}


export default withAuthorization