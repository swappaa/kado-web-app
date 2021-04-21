import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actions from '../../store/actions/index';
import './DisableAccount.css';


const DisableAccount = props => {
    const dispatch = useDispatch();
    const [termination_reason, setTermination_reason] = useState('');

    const onTerminationReasonValueChange = (event) => {
        setTermination_reason(event.target.value);
    }

    const onDisableAccount = useCallback(
        (access_token, username, termination_reason) => dispatch(actions.disableAccount(access_token, username, termination_reason)),
        [dispatch]
    );

    const submitTerminationAccountHandler = (event) => {
        event.preventDefault();
        onDisableAccount(props.accessToken, props.userName, termination_reason);
    }

    const isDisabledAccount = useSelector(state => state.accountDetails.disabledAccount);

    if (isDisabledAccount === true) {
        props.history.push('/logout')
    }

    return (
        <div className="modal fade" id="disable-account-modal" tabIndex="-1" aria-labelledby="staticBackdropLabel"
            aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-xl">
                <div className="modal-content rounded-0 border-0">
                    <div className="modal-header px-5 border-0">
                        <h5 className="modal-title text-uppercase theme-pink-color display-4">Account deactivation</h5>
                        <button type="button" className="btn-close rounded-circle border border-2 border-dark"
                            data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body px-5">
                        <div className="card mb-3 border-0 py-5">
                            <div className="row g-0">
                                <div className="col-12">
                                    <div className="card-body fs-3 text-dark font-ave-reg">
                                        <h6 className="fs-1 font-ave-reg mb-4">We’ll miss you.</h6>
                                        <p className="card-text">Your account will be deactivated after you click “Deactivate Now” below. Please let us know why you’re deactivating.</p>
                                        <form onSubmit={submitTerminationAccountHandler}>
                                            <div className="form-check mb-2">
                                                <input className="form-check-input" type="radio" name="reason-deactivate-account" value="Didn’t find the Talent I was looking for." onChange={onTerminationReasonValueChange} />
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                    Didn’t find the Talent I was looking for.
                                                </label>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input className="form-check-input" type="radio" name="reason-deactivate-account" value="Too expensive." onChange={onTerminationReasonValueChange} />
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                    Too expensive.
                                                </label>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input className="form-check-input" type="radio" name="reason-deactivate-account" value="Too hard to use." onChange={onTerminationReasonValueChange} />
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                    Too hard to use.
                                                </label>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input className="form-check-input" type="radio" name="reason-deactivate-account" value="Just didn’t need it." onChange={onTerminationReasonValueChange} />
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                    Just didn’t need it.
                                                </label>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input className="form-check-input" type="radio" name="reason-deactivate-account" value="Poor quality videos." onChange={onTerminationReasonValueChange} />
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                    Poor quality videos.
                                                </label>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input className="form-check-input" type="radio" name="reason-deactivate-account" value="Other" onChange={onTerminationReasonValueChange} />
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                    Other
                                                </label>
                                            </div>

                                            <div className="other-wrapper w-50 mw-100 ms-5 mb-5">
                                                <textarea className="form-control border-dark rounded-lg" rows="6" style={{ borderRadius: '15px' }} onChange={(e) => setTermination_reason(e.target.value)}></textarea>
                                            </div>

                                            <div className="btn-wrapper w-50 mw-100 mx-auto mb-5 d-grid">
                                                <button className="btn btn-hvr text-decoration-none theme-pink-bg-color text-white text-uppercase br-radius-40 font-ave-heavy fs-4 w-75 mw-100 mx-auto px-4 py-2" type="button" data-bs-dismiss="modal" aria-label="Close">WAIT! DON’T DEACTIVATE!</button>
                                                <button className="btn mt-5 fs-4" type="submit">Deactivate Now</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withRouter(DisableAccount);
