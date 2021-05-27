import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../../store/actions/index';
import ReactCodeInput from 'react-verification-code-input';
import { Helmet } from "react-helmet";

import Aux from '../../hoc/Auxi/Auxi';
import Modal from '../../components/UI/Modal/ModalXL';


import '../../App.css';
import './Auth.css';

const InviteCode = props => {

    const [isAcceptTerms, setAcceptTerms] = useState(false);
    const [fullname, setFullname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false);
    const [pinCode, setPinCode] = useState('');
    const _CodeInputRef = React.createRef();

    const { authRedirectPath, onSetAuthRedirectPath, isValidVerifyCode } = props;

    useEffect(() => {
        if (authRedirectPath !== '/') {
            onSetAuthRedirectPath();
        }

        if (pinCode.length >= 6 && isValidVerifyCode) {
            setLoading(false);
            _CodeInputRef && _CodeInputRef.current.__clearvalues__();
        }
    }, [authRedirectPath, onSetAuthRedirectPath, pinCode, isValidVerifyCode]);

    const submitSignUpHandler = (event) => {
        event.preventDefault();
        props.onSignUp(fullname, username, email, password, event.target.date_picker.value);
    }

    let authRedirect = null;
    if (props.isAuthenticated) {
        authRedirect = <Redirect to={props.authRedirectPath} />
    }


    const onPinComplete = code => {
        setLoading(true);
        if (username && password) {
            props.onEmailVerification(username, password, code);
        }
    };

    const submitVerificationHandler = (event) => {
        event.preventDefault();
        console.log(pinCode)
        props.onEmailVerification(username, password, pinCode);
    }

    return (
        <Modal show={props.show} onClick={props.closed}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Invite Code</title>
            </Helmet>
            {authRedirect}
            <div className="signapp-modal" id="signapp-modal">
                <div className="modal-content rounded-0 border-0">
                    <div className="modal-header px-5 border-0">
                        <h5 className="modal-title text-uppercase theme-pink-color display-4">Enter Invite Code</h5>
                        <button type="button" className="btn-close rounded-circle border border-2 border-dark"
                            data-bs-dismiss="modal" aria-label="Close" onClick={props.closed}></button>
                    </div>
                    <div className="modal-body px-5">
                        <div className="customs-wrapper w-100 mx-auto">
                            <div className="verif-code my-5">
                                <form onSubmit={submitVerificationHandler} className="row flex-column align-items-center py-5 text-center w-50 mx-auto">
                                    <ReactCodeInput
                                        className="mx-auto"
                                        type="number"
                                        fields={6}
                                        fieldWidth={45}
                                        onChange={value => setPinCode(value)}
                                        onComplete={onPinComplete}
                                        loading={loading}
                                        ref={_CodeInputRef}
                                        values={pinCode}
                                    />
                                    <p className="my-5 fs-5" style={{ color: '#959595' }}>If you received a code, please enter it above.</p>
                                    <div className="btn-wrapper">
                                        <button className="btn btn-hvr theme-pink-bg-color text-white br-radius-40 font-ave-heavy fs-4 px-4 py-2 text-uppercase w-50">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
}


const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        authRedirectPath: state.auth.authRedirectPath,
        isConfirmationEmail: state.auth.isEmailConfirmation,
        isValidVerifyCode: state.auth.isValidVerifyCode
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSignUp: (name, username, email, password, date_picker) => dispatch(actions.signUp(name, username, email, password, date_picker)),
        onFBSignUp: (name, username, email, profile_picture) => dispatch(actions.FBSignUp(name, username, email, profile_picture)),
        onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path)),
        onEmailVerification: (username, password, pincode) => dispatch(actions.emailVerification(username, password, pincode)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(InviteCode);
