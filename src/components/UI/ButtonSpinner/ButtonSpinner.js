import React from 'react';

const buttonSpinner = () => (
    <button className="my-3 btn br-radius-40 font-ave-heavy fs-3 text-uppercase theme-pink-bg-color text-white px-5 py-3 w-75 mw-100 d-flex align-items-center justify-content-center mx-auto" type="submit" disabled>
        <span className="spinner-border spinner-border-lg" role="status" aria-hidden="true"></span>
        <span className="">Loading...</span>
    </button>
)

export default buttonSpinner;