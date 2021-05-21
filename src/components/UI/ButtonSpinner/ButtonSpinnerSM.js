import React from 'react';

const buttonSpinner = () => (
    <button className="btn font-ave-heavy btn theme-pink-bg-color text-white br-radius-40 px-5 d-flex align-items-center" type="button" disabled>
        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            Loading...
    </button>
)

export default buttonSpinner;