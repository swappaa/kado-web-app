import React from 'react';

import './DisableAccount.css';


const DisableAccount = () => {

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
                                        <form>
                                            <div class="form-check mb-2">
                                                <input class="form-check-input" type="radio" name="reason-deactivate-account" />
                                                <label class="form-check-label" for="flexRadioDefault1">
                                                    Didn’t find the Talent I was looking for.
                                                </label>
                                            </div>
                                            <div class="form-check mb-2">
                                                <input class="form-check-input" type="radio" name="reason-deactivate-account" />
                                                <label class="form-check-label" for="flexRadioDefault1">
                                                    Too expensive.
                                                </label>
                                            </div>
                                            <div class="form-check mb-2">
                                                <input class="form-check-input" type="radio" name="reason-deactivate-account" />
                                                <label class="form-check-label" for="flexRadioDefault1">
                                                    Too hard to use.
                                                </label>
                                            </div>
                                            <div class="form-check mb-2">
                                                <input class="form-check-input" type="radio" name="reason-deactivate-account" />
                                                <label class="form-check-label" for="flexRadioDefault1">
                                                    Just didn’t need it.
                                                </label>
                                            </div>
                                            <div class="form-check mb-2">
                                                <input class="form-check-input" type="radio" name="reason-deactivate-account" />
                                                <label class="form-check-label" for="flexRadioDefault1">
                                                    Poor quality videos.
                                                </label>
                                            </div>
                                            <div class="form-check mb-2">
                                                <input class="form-check-input" type="radio" name="reason-deactivate-account" />
                                                <label class="form-check-label" for="flexRadioDefault1">
                                                    Other
                                                </label>
                                            </div>
                                            <div className="other-wrapper w-50 mw-100 ms-5 mb-5">
                                                <textarea class="form-control border-dark rounded-lg" rows="6" style={{ borderRadius: '15px' }}></textarea>
                                            </div>
                                            <div className="btn-wrapper w-50 mw-100 mx-auto mb-5 d-grid">
                                                <button class="btn btn-hvr text-decoration-none theme-pink-bg-color text-white text-uppercase br-radius-40 font-ave-heavy fs-4 w-75 mw-100 mx-auto px-4 py-2" type="button">WAIT! DON’T DEACTIVATE!</button>
                                                <button class="btn mt-5 fs-4" type="button">Deactivate Now</button>
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

export default DisableAccount;
