import React from 'react';

import './Tips.css';


const tips = () => {

    return (
        <div className="modal fade" id="tips-modal" tabIndex="-1" aria-labelledby="staticBackdropLabel"
            aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-xl">
                <div className="modal-content rounded-0 border-0">
                    <div className="modal-header px-5 border-0">
                        <h5 className="modal-title text-uppercase theme-pink-color display-4">TIPS FOR GREAT KÂDOS!</h5>
                        <button type="button" className="btn-close rounded-circle border border-2 border-dark"
                            data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body px-5">
                        <div className="card mb-3 border-0 py-5">
                            <div className="row g-0">
                                <div className="col-12">
                                    <div className="card-body fs-3 text-dark font-ave-reg text-center">
                                        <div className="d-flex align-items-center justify-content-center mb-2 position-relative">
                                            <svg className="me-3" xmlns="http://www.w3.org/2000/svg" width="100px" heigth="100px" viewBox="0 0 21.59 22.5"><title>Asset 1</title><g id="Layer_2" data-name="Layer 2"><g id="Book-1a"><path className="cls-1" d="M13.36,19.66v.66a1,1,0,0,1-.88,1l-.17.6a.73.73,0,0,1-.71.55H10A.75.75,0,0,1,9.27,22l-.15-.6a1,1,0,0,1-.89-1v-.65A.64.64,0,0,1,8.86,19h3.87A.64.64,0,0,1,13.36,19.66Zm3-8.86a5.49,5.49,0,0,1-1.56,3.85,5.12,5.12,0,0,0-1.36,2.76.92.92,0,0,1-.91.77H9.07a.9.9,0,0,1-.9-.77A5.17,5.17,0,0,0,6.8,14.64a5.54,5.54,0,1,1,9.54-3.84ZM11.42,7.44a.62.62,0,0,0-.62-.62,4,4,0,0,0-4,4,.62.62,0,0,0,.62.62.63.63,0,0,0,.63-.62A2.75,2.75,0,0,1,10.8,8.07.63.63,0,0,0,11.42,7.44Zm-.62-4a.62.62,0,0,0,.62-.62V.63a.63.63,0,1,0-1.25,0V2.82A.63.63,0,0,0,10.8,3.44ZM3.44,10.79a.63.63,0,0,0-.63-.62H.63a.63.63,0,1,0,0,1.25H2.81A.63.63,0,0,0,3.44,10.79ZM21,10.17H18.78a.63.63,0,1,0,0,1.25H21a.63.63,0,0,0,0-1.25ZM4.71,16,3.16,17.55a.64.64,0,0,0,0,.89.63.63,0,0,0,.88,0l1.55-1.56A.62.62,0,1,0,4.71,16ZM16.44,5.78a.62.62,0,0,0,.44-.18l1.55-1.55a.63.63,0,1,0-.88-.89L16,4.71a.63.63,0,0,0,.44,1.07ZM4.71,5.59a.64.64,0,0,0,.44.18.62.62,0,0,0,.44-.18.61.61,0,0,0,0-.88L4,3.16A.62.62,0,0,0,3.16,4ZM16.88,16a.62.62,0,1,0-.88.88l1.55,1.56a.62.62,0,0,0,.44.18.63.63,0,0,0,.44-1.07Z" /></g></g></svg>
                                            <h6 className="fs-1" style={{ color: '#000000' }}>To get the best kâdo, give the best info!</h6>
                                            <button className="btn stretched-link" data-bs-toggle="modal" data-bs-target="#tips-modal" ></button>
                                        </div>
                                        <div className="text-wrapper mb-5">
                                            <h6 className="fs-1 theme-pink-color">Provide all key information</h6>
                                            <p className="card-text">Why are you sending the kâdo? <br />
                                            What is your relationship to the recipient?<br />
                                            What does the recipient mean to you?<br />
                                            Why did you choose to book this Talent?<br />
                                            Anything else the Talent should know about?
                                            </p>
                                        </div>
                                        <div className="text-wrapper mb-5">
                                            <h6 className="fs-1 theme-pink-color">Include Pronunciations</h6>
                                            <p className="card-text">Spell out how the name(s) of recipients(s) should be pronounced.</p>
                                        </div>
                                        <div className="text-wrapper mb-5">
                                            <h6 className="fs-1 theme-pink-color">Add Recipient photo</h6>
                                            <p className="card-text">It's always nice for the Talent to put a face to a name.</p>
                                        </div>
                                        <div className="text-wrapper mb-5 w-75 mw-100 mx-auto">
                                            <h6 className="fs-1 theme-pink-color">Include a deadline (if any)</h6>
                                            <p className="card-text">Talent has up to 7 days to reply to requests,
                                            but if you’re in a rush, let them know
and they’ll do their best to accommodate you.</p>
                                        </div>
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

export default tips;
