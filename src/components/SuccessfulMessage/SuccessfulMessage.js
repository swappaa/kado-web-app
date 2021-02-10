import React from 'react';

import './SuccessfulMessage.css';

const sucessfulBooking = () => (
    <div className="modal fade" id="success-modal" tabIndex="-1" aria-labelledby="staticBackdropLabel"
        aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-xl">
            <div className="modal-content rounded-0 border-0">
                <div className="modal-header px-5 border-0">
                    <h5 className="modal-title text-uppercase theme-pink-color display-4">Thank you</h5>
                    <button type="button" className="btn-close rounded-circle border border-2 border-dark"
                        data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body px-5">
                    <div class="card mb-3 border-0 py-5">
                        <div class="row g-0">
                            <div class="col-4">
                                <svg xmlns="http://www.w3.org/2000/svg" class="img-fluid" width="258px" height="258px" viewBox="0 0 512 512"><title>submit thank you</title><g id="Layer_2" data-name="Layer 2"><g id="Capa_1" data-name="Capa 1"><path d="M492.25,285.42a10,10,0,0,0-4.14-13.52,156.8,156.8,0,0,0-172.94,17.27L299,273l26.39-26.39a10,10,0,0,0-14.14-14.14l-26.39,26.39-64.38-64.39A139.8,139.8,0,0,0,231.84,45.31a10,10,0,1,0-17.66,9.38,119.08,119.08,0,0,1-8,125.48l-42.42-42.43a24.55,24.55,0,0,0-40.4,8.91L1.53,479a24.59,24.59,0,0,0,22.94,33A24.82,24.82,0,0,0,33,510.47L365.35,388.65a24.55,24.55,0,0,0,8.91-40.4L329.4,303.39a136.82,136.82,0,0,1,149.33-13.83,10,10,0,0,0,13.52-4.14Zm-333,157.47L69.12,352.73l25-68.15L227.43,417.91ZM110.41,460.8,51.2,401.59l10.33-28.17,77.05,77.05ZM26.14,491.69a4.54,4.54,0,0,1-5.83-5.82l23.3-63.58,46.1,46.1Zm335.2-125.11a4.41,4.41,0,0,1-2.87,3.29L297,392.4l-56.88-56.87A10,10,0,0,0,226,349.67L276.29,400l-28.17,10.33L101.68,263.88,112,235.71,162.33,286a10,10,0,1,0,14.14-14.14L119.6,215l22.53-61.48a4.43,4.43,0,0,1,3.29-2.87,4.84,4.84,0,0,1,1-.11,4.35,4.35,0,0,1,3.16,1.34L360.12,362.4a4.41,4.41,0,0,1,1.22,4.18Z" /><path d="M301.6,79.8a10,10,0,0,0,10-10,15.2,15.2,0,0,1,15.19-15.18A35.23,35.23,0,0,0,362,19.43a10,10,0,0,0-20,0,15.21,15.21,0,0,1-15.18,15.19A35.22,35.22,0,0,0,291.6,69.8,10,10,0,0,0,301.6,79.8Z" /><path d="M390.32,174.19a36.38,36.38,0,0,0,36.34-36.34A16.36,16.36,0,0,1,443,121.51a10,10,0,0,0,0-20,36.38,36.38,0,0,0-36.34,36.34,16.36,16.36,0,0,1-16.34,16.34,10,10,0,0,0,0,20Z" /><path d="M448,193.48a32,32,0,1,0,32-32A32,32,0,0,0,448,193.48Zm32-12a12,12,0,1,1-12,12A12,12,0,0,1,480,181.48Z" /><path d="M315.11,169.85a32,32,0,1,0-32-32A32,32,0,0,0,315.11,169.85Zm0-44a12,12,0,1,1-12,12A12,12,0,0,1,315.11,125.85Z" /><path d="M128,64A32,32,0,1,0,96,32,32,32,0,0,0,128,64Zm0-44a12,12,0,1,1-12,12A12,12,0,0,1,128,20Z" /><path d="M452.5,351.06a10,10,0,0,0-14.14,14.14l9.43,9.43a10,10,0,0,0,14.14-14.15Z" /><path d="M499.64,398.2a10,10,0,0,0-14.14,14.14l9.43,9.43a10,10,0,0,0,14.14-14.14Z" /><path d="M494.93,351.06l-9.43,9.43a10,10,0,1,0,14.14,14.14l9.43-9.43a10,10,0,0,0-14.14-14.14Z" /><path d="M447.79,398.2l-9.43,9.43a10,10,0,1,0,14.14,14.14l9.43-9.43a10,10,0,0,0-14.14-14.14Z" /><path d="M492.57,29.43a10,10,0,0,0,7.07-2.93l9.43-9.43A10,10,0,0,0,494.93,2.93l-9.43,9.43a10,10,0,0,0,7.07,17.07Z" /><path d="M445.43,76.57a10,10,0,0,0,7.07-2.93l9.43-9.43a10,10,0,0,0-14.14-14.14l-9.43,9.43a10,10,0,0,0,7.07,17.07Z" /><path d="M499.64,50.07A10,10,0,0,0,485.5,64.21l9.43,9.43A10,10,0,0,0,509.07,59.5Z" /><path d="M447.79,26.5a10,10,0,0,0,14.14-14.14L452.5,2.93a10,10,0,1,0-14.14,14.14Z" /><path d="M201.22,300.78a10,10,0,1,0,7.07,2.93A10.08,10.08,0,0,0,201.22,300.78Z" /><path d="M347.12,196.62l-7.25,7.25A10,10,0,1,0,354,218l7.25-7.25a10,10,0,0,0-14.14-14.14Z" /></g></g></svg>
                            </div>
                            <div class="col-8">
                                <div class="card-body fs-2 text-dark font-ave-reg">
                                    <p class="card-text">Thanks for submitting a kâdo request.</p>
                                    <p class="card-text">Please give the Talent up to 7 days to review and reply</p>
                                    <p class="card-text"> View your request <a href="" className="theme-pink-color">here</a>.</p>
                                </div>
                                {/* <div class="card-body fs-2 text-dark font-ave-reg">
                                    <p class="card-text">Thanks for applying to be kâdo Talent.</p>
                                    <p class="card-text">Our Talent Aquisition and Onboarding team will contact you in 3-5 days</p>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default sucessfulBooking;