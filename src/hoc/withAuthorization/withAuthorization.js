import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const withAuthorization = Component => {
    class WithAuthorization extends Component {

        render() {
            const { auth } = this.props
            if (auth.accountType === "talent" && auth.token) return <Component {...this.props} />;
            else if (auth.accountType === "fan" || !auth.token) return <Redirect to="/" />;
        }
    }

    return connect(({ auth }) => ({ auth }))(WithAuthorization)
}


export default withAuthorization