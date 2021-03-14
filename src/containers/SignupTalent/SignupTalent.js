import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-kado';
import * as actions from '../../store/actions/index';
import '../../App.css';
import './SignupTalent.css';
import bannerSurpriseMessage from '../../assets/images/banner-surprise-message.png';
import earn from '../../assets/images/earn.png';
import uplift from '../../assets/images/uplift.png';
import enjoy from '../../assets/images/enjoy.png';

const SignupTalent = props => {
    const { onSubmitApplication } = props;

    useEffect(() => {
        window.scroll({
            top: 0
        });
        localStorage.setItem('path', window.location.pathname);
    });

    const submitSignUpHandler = event => {
        event.preventDefault();
        onSubmitApplication(event.target.first_name.value, event.target.last_name.value, event.target.email.value, event.target.phone.value);
    };

    return (
        <div className="talent-signup">
            <section className="pt-5">
                <div className="container-fluid px-5">
                    <div className="banner-wrapper p-3 p-xl-3 text-white theme-pink-bg-color">
                        <div className="row px-5 position-relative">
                            <div className="col-lg-7">
                                <h2 className="display-5 mb-5">Surprise your fans with a personalized
                            video message… a kâdo.</h2>
                                <p className="fs-3">Connect with fans by sending personal messages that’ll
                            thrill and entertain. Make people smile and get paid.</p>
                            </div>
                            <div className="col-lg-5 position-relative text-center text-md-left">
                                <img className="img-fluid float-none float-lg-end" src={bannerSurpriseMessage}
                                    alt="suprise-message" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5">
                <div className="container-fluid px-5">
                    <div className="why-join-kado text-center">
                        <h2 className="mb-5 display-3 theme-pink-color">Why Join kâdo as Talent</h2>
                        <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3 g-4 px-5">
                            <div className="col">
                                <div className="card rounded-0 text-center py-5 px-3 h-100">
                                    <img className="img-fluid mx-auto" src={earn} alt="earn" />
                                    <div className="card-body text-white pb-0">
                                        <h5 className="card-title text-uppercase display-4">EARN</h5>
                                        <p className="card-text fs-5 font-ave-reg">Connecting with fans directly is rewarding by
                                        itself, but
                                        you
                                        also earn money! kâdo talent can make hundreds of dollars in minutes. Set your
                                    own price! Change your price at anytime. You keep 70% of your earnings.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card rounded-0 text-center py-5 px-3 h-100">
                                    <img className="img-fluid mx-auto" src={uplift} alt="uplift" />
                                    <div className="card-body text-white pb-0">
                                        <h5 className="card-title text-uppercase display-4">UPLIFT</h5>
                                        <p className="card-text fs-5 font-ave-reg">A part of the proceeds (you decide how much) goes
                                        to
                                        deserving organizations that are improving the planet and people’s lives across
                                    the globe.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card rounded-0 text-center py-5 px-3 h-100">
                                    <img className="img-fluid mx-auto" src={enjoy} alt="enjoy" />
                                    <div className="card-body text-white pb-0">
                                        <h5 className="card-title text-uppercase display-4">ENJOY</h5>
                                        <p className="card-text fs-5 font-ave-reg">Everything is done right in the app. It’s easy,
                                        fast, and
                                        fun! Receive and complete kâdo requests from home, in the studio, or on the
                                    road. Anytime, anywhere.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row row-cols-1 px-5 mt-4">
                            <div className="col">
                                <div className="py-3 py-sm-5 px-3 px-sm-5 d-flex flex-wrap flex-sm-nowrap align-items-center pe-3 pe-sm-5 purpose-wrapper text-start">
                                    <div className="charity-logo-wrapper me-sm-3 mx-auto">
                                        <svg width="74px" height="112px" viewBox="0 0 74 112" version="1.1"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g id="#231f20ff">
                                                <path fill="#231f20" opacity="1.00"
                                                    d=" M 33.83 0.00 L 40.30 0.00 C 48.59 0.93 56.65 4.40 62.61 10.31 C 69.07 16.46 73.03 24.97 74.00 33.81 L 74.00 39.78 C 73.02 52.68 63.52 62.25 55.07 71.07 C 50.52 66.15 45.99 61.20 41.47 56.24 C 46.00 50.62 52.76 45.81 53.67 38.13 C 54.91 29.00 47.15 20.11 38.02 19.78 C 28.93 18.99 20.27 26.86 20.24 35.99 C 20.07 40.44 22.13 44.68 25.13 47.87 C 39.96 64.37 55.07 80.61 69.95 97.06 C 71.32 98.32 71.30 100.64 69.86 101.84 C 66.40 105.29 62.97 108.79 59.28 112.00 L 56.87 112.00 C 55.43 110.79 54.09 109.46 52.84 108.06 C 40.01 93.93 26.75 80.20 14.10 65.91 C 7.56 58.33 0.37 50.03 0.00 39.49 L 0.00 33.27 C 0.90 25.07 4.42 17.14 10.25 11.25 C 16.42 4.80 24.99 0.94 33.83 0.00 Z" />
                                                <path fill="#231f20" opacity="1.00"
                                                    d=" M 4.10 96.99 C 8.92 91.59 13.88 86.31 18.76 80.95 C 23.37 85.86 27.94 90.80 32.50 95.75 C 27.40 101.15 22.58 106.84 17.23 112.00 L 14.81 112.00 C 11.01 108.87 7.61 105.27 4.11 101.81 C 2.66 100.59 2.72 98.24 4.10 96.99 Z" />
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text fs-3 font-ave-reg text-dark">kâdo is a purpose-driven platform,
                                        leveraging
                                        the collective
                                        influence of our talent
                                        in support of impactful organizations on a mission to make our world a better place.
                                    A portion of all proceeds are donated to the deserving NGOs. <a
                                                className="theme-pink-color fw-bold white-space" href="#"> Learn More
                                         {' >'}</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pb-5 px-2">
                <div className="container-fluid px-5">
                    <div className="counter-earning px-3 px-sm-5 text-white">
                        <div className="row row-cols-lg-auto g-3 align-items-center px-5 py-4 theme-pink-bg-color">
                            <div className="col-xl-3 col-lg-12">
                                <h3 className="display-5 text-center">HOW MUCH
                            WILL I EARN?</h3>
                            </div>
                            <div className="col-xl-6 col-lg-12">
                                <div className="row g-3">
                                    <div className="col">
                                        <div className="mb-3">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">If my fee per video
                                        is</label>
                                            <input type="text" className="form-control text-center theme-pink-color fw-bold" />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="mb-3">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">I make this many
                                        videos</label>
                                            <input type="text" className="form-control text-center theme-pink-color fw-bold" />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="mb-3">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">add donate % to
                                        charity</label>
                                            <input type="text" className="form-control text-center theme-pink-color fw-bold" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-12">
                                <div className="element-wrapper px-5 text-center text-xl-start">
                                    <h5 className="fs-2">
                                        I make $ <span>630.00</span>
                                    </h5>
                                    <p className="fs-5">Charities recieve $ <span>70.00</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-5">
                <div className="container-fluid px-5">
                    <div className="sign-up-wrapper">
                        <div className="element-wrapper text-center">
                            <h2 className="mb-3 display-3 theme-pink-color">SIGN UP NOW</h2>
                            <p className="fs-3  ">Complete this form to contact us. We will be in touch within 48 hours to
                            complete
                            the
                            process.
                    </p>
                        </div>
                        <form className="px-3 p-xl-5 w-75 mw-100 mx-auto" onSubmit={submitSignUpHandler}>
                            <div className="row-cols-1 row-cols-md-2 row gx-5 gy-4 w-75 mw-100 mx-auto mb-5 custom-wrapper-contact">
                                <div className="col">
                                    <input type="text"
                                        name="first_name"
                                        className="form-control form-control-lg py-3 border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded-0"
                                        placeholder="FIRST NAME*" required />
                                </div>
                                <div className="col">
                                    <input type="text"
                                        name="last_name"
                                        className="form-control form-control-lg py-3 border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded-0"
                                        placeholder="LAST NAME*" />
                                </div>
                                <div className="col">
                                    <input type="email"
                                        name="email"
                                        className="form-control form-control-lg py-3 border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded-0"
                                        placeholder="EMAIL ADDRESS*" required />
                                </div>
                                <div className="col">
                                    <input type="text"
                                        name="phone"
                                        className="form-control form-control-lg py-3 border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded-0"
                                        placeholder="PHONE NUMBER" />
                                </div>
                                <div className="col-lg-12">
                                    <input type="text"
                                        className="form-control form-control-lg py-3 border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded-0"
                                        placeholder="NOTE" />
                                </div>
                                <div className="col-lg-12 d-grid text-center mt-5 w-100">
                                    <button className="btn btn-lg text-upperase py-3 fs-1 text-uppercase theme-pink-bg-color text-white btn-hvr"
                                        type="submit">Submit
                            Application</button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};


const mapDispatchToProps = dispatch => {
    return {
        onSubmitApplication: (first_name, last_name, email, phone) => dispatch(actions.SubmitApplication(first_name, last_name, email, phone)),
    };
};

export default connect(
    null,
    mapDispatchToProps
)(withErrorHandler(SignupTalent, axios));
