import React, { Component } from 'react';
import ReactCodeInput from 'react-verification-code-input';

import '../../App.css';
import './VerificationCode.css';

const VerificationCode = props => {
    return (
        <div className="verification-wrapper">
            <section className="py-5">
                <div className="container-fluid px-5">
                    <div className="customs-wrapper w-100 mx-auto">
                        <h2 className="text-uppercase theme-pink-color display-5 mx-3 mb-3">Enter VERIFICATION CODE</h2>
                        <div className="verification-code">
                            <form className="row flex-column align-items-center py-5 text-center">
                                <ReactCodeInput />
                                <p className="my-5 fs-5" style={{ color: '#959595' }}>Please enter the 6-digit code we sent to your email.</p>
                                <div className="btn-wrapper w-50 mw-100 mx-auto">
                                    <button className="btn btn-hvr theme-pink-bg-color text-white br-radius-40 font-ave-heavy fs-4 px-4 py-2 text-uppercase w-50">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )

}

export default VerificationCode;