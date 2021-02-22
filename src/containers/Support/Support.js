import React from 'react';

import '../../App.css';
import './Support.css';
import banner from '../../assets/images/banner-support.jpg';

const support = () => (
    <div className="support">
        <section>
            <div className="container-fluid px-5">
                <div className="banner-wrapper text-white theme-pink-bg-color">
                    <div className="row">
                        <div className="col-md-3">
                            <img className="img-fluid w-100 h-100" src={banner}
                                alt="personalized-message" />
                        </div>
                        <div className="col-md-9 px-5 py-4 px-lg-5 d-flex flex-column justify-content-center cust-wrap-rightt">
                            <h2 className="display-6 lh-base pe-xl-5">We’re here to help</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="py-5">
            <div className="container-fluid px-5">
                <div className="support-wrapper">
                    <div className="element-header mb-5">
                        <h3 className="theme-pink-color display-4 text-uppercase">FREQUENTLY ASKED QUESTIONS</h3>
                    </div>
                    <div className="element-body">
                        <div className="question-item mb-5">
                            <h4 className="theme-pink-color fs-1 font-ave-reg text-uppercase">How do I get the Talent to date me?</h4>
                            <p className="fs-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at feugiat felis. Sed vehicula dictum aliquam. Cras pretium euismod tellus et convallis. In tristique, nibh at iaculis vulputate, dolor ex maximus dolor, sed.</p>
                        </div>
                        <div className="question-item mb-5">
                            <h4 className="theme-pink-color fs-1 font-ave-reg text-uppercase">How do I get the Talent to date me?</h4>
                            <p className="fs-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at feugiat felis. Sed vehicula dictum aliquam. Cras pretium euismod tellus et convallis. In tristique, nibh at iaculis vulputate, dolor ex maximus dolor, sed.</p>
                        </div>
                        <div className="question-item mb-5">
                            <h4 className="theme-pink-color fs-1 font-ave-reg text-uppercase">How do I get the Talent to date me?</h4>
                            <p className="fs-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at feugiat felis. Sed vehicula dictum aliquam. Cras pretium euismod tellus et convallis. In tristique, nibh at iaculis vulputate, dolor ex maximus dolor, sed.</p>
                        </div>
                        <div className="question-item mb-5">
                            <h4 className="theme-pink-color fs-1 font-ave-reg text-uppercase">How do I get the Talent to date me?</h4>
                            <p className="fs-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at feugiat felis. Sed vehicula dictum aliquam. Cras pretium euismod tellus et convallis. In tristique, nibh at iaculis vulputate, dolor ex maximus dolor, sed.</p>
                        </div>
                    </div>
                </div>
                <div className="contact-wrapper">
                    <div className="element-header mb-3">
                        <h3 className="theme-pink-color display-4 text-uppercase">Contact</h3>
                    </div>
                    <div className="element-body">
                        <form className="w-50 mw-100 ps-5">
                            <div class="col mb-5">
                                <input type="text" class="form-control form-control-lg py-3 px-0 border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded-0" placeholder="Name" />
                            </div>
                            <div class="col mb-5">
                                <input type="text" class="form-control form-control-lg py-3 px-0 border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded-0" placeholder="Email Address" />
                            </div>
                            <div class="col mb-5">
                                <label class="form-label fs-5" style={{ color: '#6c757d' }}>Message</label>
                                <textarea class="form-control border border-1 border-dark" rows="5" style={{ borderRadius: ' 15px' }}></textarea>
                            </div>
                            <div className="btn-wrapper w-50 mw-100 float-end">
                                <button class="btn btn-hvr theme-pink-bg-color text-white br-radius-40 font-ave-heavy fs-4 px-4 py-2 text-uppercase w-100">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div >
);

export default support;