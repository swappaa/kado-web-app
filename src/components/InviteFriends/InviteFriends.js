import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import './InviteFriends.css';


const InviteFriends = () => {

    const [copied, setCopied] = useState(false);
    const [code] = useState('549321');

    return (
        <div className="modal fade" id="invite-friends-modal" tabIndex="-1" aria-labelledby="staticBackdropLabel"
            aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-xl">
                <div className="modal-content rounded-0 border-0">
                    <div className="modal-header px-5 border-0">
                        <h5 className="modal-title text-uppercase theme-pink-color display-4">INVITE FRIENDS</h5>
                        <button type="button" className="btn-close rounded-circle border border-2 border-dark"
                            data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body px-5">
                        <div className="card mb-3 border-0 py-5">
                            <div className="row g-0">
                                <div className="col-12">
                                    <div className="card-body fs-3 text-dark font-ave-reg w-75 mw-100 mx-auto text-center">
                                        <p className="card-text">When your friends sign up with the code below,and successfully complete their first kâdo order,
you will receive a <span className="theme-pink-color">$10</span> credit for <span className="fst-italic">your</span> next order.</p>
                                        <div className="code-wrapper mt-5 mb-4">
                                            <h5 className="text-uppercase fs-3 mb-3">YOUR UNIQUE <br />INVITE CODE IS</h5>
                                            <p className="font-ave-heavy theme-pink-color display-3">{code}</p>
                                        </div>
                                        <CopyToClipboard text={code}
                                            onCopy={() => setCopied(true)}>
                                            <div className="btn-wrapper w-50 mw-100 mx-auto">
                                                <button class="btn btn-hvr text-decoration-none theme-pink-bg-color text-white text-uppercase br-radius-40 font-ave-heavy fs-4 px-4 py-2 w-100">Copy Code</button>
                                            </div>
                                        </CopyToClipboard>

                                        {copied ? <span style={{ color: 'black' }}>Copied.</span> : null}

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

export default InviteFriends;
