import React from 'react';
import './ButtonSpinner.css';

const buttonSpinner = () => (
    <button className="btn-spinner my-3 btn br-radius-40 font-ave-heavy fs-3 text-uppercase theme-pink-bg-color text-white px-5 py-3 w-75 mw-100 d-flex align-items-center justify-content-center mx-auto" type="submit" disabled>
        <span className="spinner-border spinner-border-lg d-none d-lg-block" role="status" aria-hidden="true"></span>
        <span className="spinner-border spinner-border-sm d-block d-lg-none" role="status" aria-hidden="true"></span>
        <span className="">Loading...</span>
    </button>
)

export default buttonSpinner;