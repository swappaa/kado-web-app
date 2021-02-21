import React, { Component } from 'react';
import Rating from 'react-rating';

class RateReview extends Component {
    render() {
        return (
            <div className="modal fade" id="rate-review-modal" tabIndex="-1" aria-labelledby="staticBackdropLabel"
                aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content rounded-0 border-0">
                        <div className="modal-header px-5 border-0">
                            <h5 className="modal-title text-uppercase theme-pink-color display-4">Rate & Review</h5>
                            <button type="button" className="btn-close rounded-circle border border-2 border-dark"
                                data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body px-5">
                            <div className="card mb-3 border-0 py-5">
                                <div className="row g-0">
                                    <div className="col-12">
                                        <div className="card-body fs-2 text-dark text-center font-ave-reg">
                                            <div className="rate-wrapper mb-5">
                                                <h3 className="fs-1 text-uppercase mb-3">rate</h3>
                                                <Rating
                                                    emptySymbol={
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="mx-1" style={{ fill: 'none', stroke: '#ee2f58', strokeMiterlimit: '10' }} width="90px" height="90px" viewBox="0 0 33.57 32.02"><g id="Layer_2" data-name="Layer 2"><g id="Review"><path class="cls-1" d="M33,12.25a.91.91,0,0,0-.72-.61L22.13,10.16,17.6,1a.88.88,0,0,0-.83-.47.58.58,0,0,0-.16,0s0,0,0,0h0a.9.9,0,0,0-.44.28l0,0C16.06.88,16,.9,16,1l-4.55,9.21L1.26,11.64a.94.94,0,0,0-.72.61.92.92,0,0,0,.23.92l7.36,7.17L6.39,30.47a.91.91,0,0,0,.36.88.9.9,0,0,0,.52.17.91.91,0,0,0,.42-.11l9.08-4.77v0l9.11,4.79a.88.88,0,0,0,.42.11.89.89,0,0,0,.87-1.05L25.44,20.34l7.36-7.17A.89.89,0,0,0,33,12.25Z" /></g></g></svg>
                                                    }
                                                    fullSymbol={
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="mx-1" style={{ fill: '#ee2f58', stroke: '#ee2f58', strokeMiterlimit: '10' }} width="90px" height="90px" viewBox="0 0 33.57 32.02"><g id="Layer_2" data-name="Layer 2"><g id="Review"><path class="cls-1" d="M33,12.26a.87.87,0,0,0-.72-.61L22.13,10.17,17.58,1A.93.93,0,0,0,16,1l-4.55,9.21L1.27,11.65a.89.89,0,0,0-.5,1.52l7.36,7.18L6.39,30.48a.88.88,0,0,0,.36.87.87.87,0,0,0,.94.06l9.09-4.78,9.1,4.78a.77.77,0,0,0,.41.11.9.9,0,0,0,.89-1L25.44,20.35l7.36-7.18A.88.88,0,0,0,33,12.26Z" /></g></g></svg>
                                                    }
                                                    fractions={2}
                                                />
                                            </div>
                                            <div className="review-wrapper w-50 mw-100 mx-auto mb-5">
                                                <h3 className="fs-1 text-uppercase mb-3">Review</h3>
                                                <textarea class="form-control border-dark rounded-lg" rows="6" style={{ borderRadius: '15px' }}></textarea>
                                            </div>
                                            <div className="btn-wrapper w-50 mw-100 mx-auto mb-5 d-grid">
                                                <button class="btn btn-hvr text-decoration-none theme-pink-bg-color text-white text-uppercase br-radius-40 font-ave-heavy fs-4 w-75 mw-100 mx-auto px-4 py-2" type="button">Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RateReview;