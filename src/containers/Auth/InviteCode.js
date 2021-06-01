import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions/index';
import ReactCodeInput from 'react-verification-code-input';
import { Helmet } from "react-helmet";

import Modal from '../../components/UI/Modal/ModalXL';

import '../../App.css';
import './Auth.css';

const InviteCode = props => {

    const [pinloading, setPinLoading] = useState(false);
    const [pinCode, setPinCode] = useState([]);
    const _CodeInputRef = React.createRef(null);

    const dispatch = useDispatch();

    const isValidReferralCode = useSelector(state => state.accountDetails.isValidVerifyCode);

    const onValidateReferralCode = useCallback(
        (code) => dispatch(actions.resetPasswordChange(code)),
        [dispatch]
    );

    useEffect(() => {
        if (pinCode.length >= 6 && isValidReferralCode) {
            setPinLoading(false);
            _CodeInputRef && _CodeInputRef.current.__clearvalues__();
        }

    }, [pinCode, isValidReferralCode]);

    const submitValidateReferralCodeHandler = (event) => {
        event.preventDefault();
        onValidateReferralCode(pinCode)
    }

    const onPinComplete = code => {
        setPinLoading(true);
        onValidateReferralCode(code)
    };

    const handlePincodeChange = vals => {
        if (vals.length >= 6) {
            setPinCode(vals)
        } else if (vals.length === 0) {

        }
    };


    return (
        <Modal show={props.show} onClick={props.closed}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Enter Invite Code</title>
            </Helmet>

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
                                <form onSubmit={submitValidateReferralCodeHandler} className="row flex-column align-items-center py-5 text-center w-50 mx-auto">
                                    <ReactCodeInput
                                        className="mx-auto"
                                        type="number"
                                        fields={6}
                                        fieldWidth={45}
                                        onChange={handlePincodeChange}
                                        onComplete={onPinComplete}
                                        loading={pinloading}
                                        ref={_CodeInputRef}
                                    />
                                    <p className="my-5 fs-5" style={{ color: '#959595' }}>If you received a code, please enter it above.</p>
                                    <div className="btn-wrapper">
                                        <button className="btn btn-hvr theme-pink-bg-color text-white br-radius-40 font-ave-heavy fs-4 px-4 py-2 text-uppercase w-50">Continue</button>
                                        <br />
                                        <button className="btn mt-4 font-ave-heavy text-muted" onClick={() => { props.closed(); props.isSignup() }}>Skip This {' >'}</button>
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


export default InviteCode;
