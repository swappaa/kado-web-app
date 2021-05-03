import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Spring } from 'react-spring/renderprops'

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import util from "../../shared/utility";
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
    const [fullname, setFullname] = useState('');
    const [username, setUsername] = useState('');
    const [stage_name, setStage_name] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [instagram, setInstagram] = useState('');
    const [facebook, setFacebook] = useState('');
    const [twitter, setTwitter] = useState('');
    const [tiktok, setTiktok] = useState('');
    const [youtube, setYoutube] = useState('');
    const [website, setWebsite] = useState('');
    const [notes, setNotes] = useState('');

    // useEffect(() => {
    //     localStorage.setItem('path', window.location.pathname);
    // });

    const submitSignUpHandler = (event) => {
        event.preventDefault();
        onSubmitApplication(fullname, username, stage_name, email, password, phone, instagram, facebook, twitter, tiktok, youtube, website, notes);
    }

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
                                        I make
                                        <Spring
                                            from={{ number: 0 }}
                                            to={{ number: 630 }}>
                                            {props => <span>{util.formatCurrency(props.number)}</span>}
                                        </Spring>
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
                                    <div className="input-group mb-4">
                                        <span
                                            className="input-group-text border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded-0 bg-transparent px-0">
                                            <svg width="25px" height="25px" viewBox="0 0 30 26" version="1.1"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <g id="#000000">
                                                    <path fill="#000000" opacity="1.00"
                                                        d=" M 26.68 0.00 L 29.51 0.00 C 29.63 0.07 29.88 0.22 30.00 0.29 L 30.00 2.82 C 29.15 5.22 28.13 7.55 27.18 9.92 C 25.72 9.37 24.24 8.88 22.83 8.21 C 23.71 5.32 24.60 2.28 26.68 0.00 Z" />
                                                    <path fill="#000000" opacity="1.00"
                                                        d=" M 19.61 9.28 C 20.17 6.26 21.47 3.33 23.02 0.68 L 24.90 0.78 C 23.65 3.80 23.13 7.33 20.94 9.84 L 19.61 9.28 Z" />
                                                    <path fill="#000000" opacity="1.00"
                                                        d=" M 0.00 16.51 C 0.66 12.63 2.21 7.21 6.98 7.03 C 10.26 7.06 11.12 10.75 11.30 13.37 C 8.08 13.65 8.27 7.01 5.25 10.00 C 2.68 12.61 2.15 16.66 2.72 20.15 C 5.05 19.05 7.41 17.92 10.02 17.64 C 9.94 18.60 9.86 19.56 9.78 20.52 C 12.00 21.16 17.78 22.06 16.09 24.99 C 13.49 24.15 10.85 23.41 8.11 23.17 C 7.76 22.65 7.08 21.61 6.74 21.10 C 4.26 22.37 0.64 22.45 0.00 19.07 L 0.00 16.51 Z" />
                                                    <path fill="#000000" opacity="1.00"
                                                        d=" M 21.93 9.88 C 23.46 10.39 24.99 10.90 26.52 11.42 C 24.32 16.53 22.97 22.40 18.36 26.00 L 17.75 26.00 C 17.03 20.21 19.84 15.06 21.93 9.88 Z" />
                                                </g>
                                            </svg>
                                        </span>
                                        <input type="text"
                                            onChange={e => setFullname(e.target.value)}
                                            className="form-control form-control-lg py-3 border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded-0"
                                            placeholder="FULL NAME*" required />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="input-group mb-4">
                                        <span
                                            className="input-group-text border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded-0 bg-transparent px-0">
                                            <svg width="25px" height="25px" viewBox="0 0 25 25" version="1.1"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <g id="#000000">
                                                    <path fill="#000000" opacity="1.00"
                                                        d=" M 11.32 0.00 L 13.54 0.00 C 17.49 0.45 20.99 4.52 19.41 8.52 C 17.35 14.42 7.74 14.45 5.61 8.59 C 4.00 4.62 7.41 0.56 11.32 0.00 Z" />
                                                    <path fill="#000000" opacity="1.00"
                                                        d=" M 0.01 17.91 C 1.66 15.39 4.19 13.92 7.09 13.30 C 10.44 15.38 14.57 15.36 17.92 13.30 C 20.79 13.94 23.39 15.38 25.00 17.91 L 25.00 18.67 C 22.48 22.25 18.45 24.45 14.14 25.00 L 11.00 25.00 C 6.65 24.54 2.58 22.34 0.00 18.78 L 0.00 16.62 L 0.01 17.91 Z" />
                                                </g>
                                            </svg>
                                        </span>
                                        <input type="text"
                                            onChange={e => setUsername(e.target.value)}
                                            className="form-control form-control-lg py-3 border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded-0"
                                            placeholder="USER NAME*" required />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="input-group mb-4">
                                        <span
                                            className="input-group-text border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded-0 bg-transparent px-0">
                                            <svg width="30px" height="25px" viewBox="0 -36 511.99929 511" xmlns="http://www.w3.org/2000/svg">
                                                <path d="m505.429688 29.078125c-1.699219-1.167969-42.835938-28.578125-143.597657-28.578125-100.765625 0-141.90625 27.410156-143.609375 28.578125-4.109375 2.820313-6.566406 7.484375-6.566406 12.46875v30.035156c-22.988281 4.554688-53.660156 13.675781-91.703125 31.523438-91.222656 42.800781-116.824219 85.089843-117.871094 86.867187-2.523437 4.300782-2.769531 9.566406-.652343 14.082032l61.449218 130.96875c30.203125 64.375 94.492188 103.574218 162.914063 103.574218 15.15625 0 30.519531-1.921875 45.753906-5.921875.046875-.011719.09375-.023437.140625-.039062h.003906c1.726563-.472657 3.359375-1.246094 4.8125-2.285157 26.785156-19.148437 46.929688-44.507812 59.625-72.902343 7.433594 2.40625 15.097656 4.355469 22.960938 5.800781.453125.085938.90625.148438 1.367187.1875h.003907c.453124.042969.910156.0625 1.367187.0625.917969 0 1.832031-.082031 2.734375-.25 85.433594-15.71875 147.4375-90.171875 147.4375-177.035156v-144.667969c0-4.984375-2.457031-9.648437-6.570312-12.46875zm-415.179688 293.101563-57.59375-122.757813c10.039062-11.902344 38.195312-39.878906 100.136719-68.941406 61.953125-29.0625 101.457031-32.832031 117.023437-32.941407l57.59375 122.757813c30.300782 64.585937 10.820313 141.417969-46.238281 183.816406-69.078125 16.777344-140.621094-17.347656-170.921875-81.933593zm391.511719-135.964844c0 71.34375-50.269531 132.625-119.933594 146.769531-5.355469-1.085937-10.597656-2.457031-15.710937-4.085937 7.265624-28.152344 7.738281-58.0625.726562-87.113282 18.746094-5.199218 39.695312-.457031 54.402344 14.25 2.953125 2.953125 6.824218 4.429688 10.691406 4.429688s7.738281-1.476563 10.691406-4.429688c5.902344-5.902344 5.902344-15.472656 0-21.378906-23.0625-23.058594-56.070312-30.257812-85.34375-21.59375-.804687-1.875-1.628906-3.746094-2.503906-5.609375l-24.515625-52.257813c12.210937-.101562 23.679687-4.894531 32.324219-13.542968 5.902344-5.902344 5.902344-15.476563 0-21.378906-5.902344-5.902344-15.476563-5.902344-21.378906 0-3.027344 3.027343-7.050782 4.695312-11.332032 4.695312-4.277344 0-8.300781-1.667969-11.328125-4.695312-1.867187-1.863282-4.097656-3.136719-6.460937-3.824219l-18.753906-39.964844c-2.117188-4.515625-6.320313-7.691406-11.238282-8.5-.734375-.121094-7.539062-1.148437-20.207031-.417969v-16.976562c14.023437-6.472656 51.332031-19.855469 119.941406-19.855469 68.421875 0 105.789063 13.371094 119.929688 19.882813zm0 0" /><path d="m420.21875 155.203125c12.359375 0 23.976562-4.808594 32.714844-13.546875 5.902344-5.90625 5.902344-15.476562 0-21.382812-5.90625-5.902344-15.476563-5.902344-21.382813 0-3.027343 3.027343-7.050781 4.695312-11.328125 4.695312-4.28125 0-8.304687-1.667969-11.332031-4.695312-5.902344-5.902344-15.476563-5.902344-21.382813 0-5.902343 5.90625-5.902343 15.476562 0 21.382812 8.738282 8.738281 20.355469 13.546875 32.710938 13.546875zm0 0" /><path d="m167.078125 248.847656c2.839844-7.851562-1.226563-16.519531-9.078125-19.355468-11.625-4.199219-24.183594-3.621094-35.371094 1.628906s-19.660156 14.539062-23.859375 26.160156c-2.835937 7.851562 1.230469 16.519531 9.082031 19.355469 1.695313.613281 3.429688.902343 5.136719.902343 6.1875 0 11.996094-3.828124 14.21875-9.984374 1.453125-4.023438 4.390625-7.242188 8.265625-9.0625 3.875-1.816407 8.226563-2.015626 12.25-.5625 7.851563 2.835937 16.519532-1.226563 19.355469-9.082032zm0 0" />
                                                <path d="m207.742188 229.773438c1.699218.609374 3.429687.902343 5.136718.902343 6.1875 0 11.996094-3.828125 14.21875-9.984375 1.457032-4.027344 4.390625-7.246094 8.265625-9.0625 3.875-1.820312 8.226563-2.019531 12.25-.5625 7.855469 2.835938 16.519531-1.230468 19.359375-9.082031 2.835938-7.855469-1.230468-16.519531-9.082031-19.355469-23.992187-8.667968-50.5625 3.796875-59.230469 27.785156-2.835937 7.855469 1.230469 16.519532 9.082032 19.359376zm0 0" />
                                                <path d="m274.355469 289.0625c2.835937-7.851562-1.230469-16.515625-9.082031-19.355469-7.851563-2.839843-16.519532 1.226563-19.355469 9.082031-10.449219 28.910157-42.472657 43.929688-71.378907 33.488282-7.855468-2.839844-16.519531 1.226562-19.355468 9.078125-2.839844 7.855469 1.226562 16.519531 9.078125 19.359375 9.617187 3.472656 19.453125 5.121094 29.136719 5.121094 35.207031 0 68.320312-21.800782 80.957031-56.773438zm0 0" />
                                            </svg>
                                        </span>
                                        <input type="text"
                                            onChange={e => setStage_name(e.target.value)}
                                            className="form-control form-control-lg py-3 border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded-0"
                                            placeholder="STAGE NAME" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="input-group mb-4">
                                        <span
                                            className="input-group-text border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded-0 bg-transparent px-0">
                                            <svg width="25px" height="25px" viewBox="0 0 32 21" version="1.1"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <g id="#000000">
                                                    <path fill="#000000" opacity="1.00"
                                                        d=" M 2.94 0.00 L 29.11 0.00 C 29.69 1.27 30.94 2.01 32.00 2.85 L 32.00 18.20 C 30.93 19.01 29.66 19.73 29.07 21.00 L 2.89 21.00 C 2.31 19.73 1.06 18.99 0.00 18.15 L 0.00 2.78 C 1.07 1.98 2.36 1.27 2.94 0.00 M 4.83 2.38 C 8.55 4.97 12.28 7.54 16.00 10.12 C 19.72 7.54 23.45 4.97 27.16 2.37 C 19.72 2.38 12.27 2.37 4.83 2.38 M 2.63 3.94 C 2.71 8.59 2.46 13.25 2.74 17.89 L 3.34 18.49 C 10.92 18.82 18.52 18.51 26.11 18.64 C 27.24 18.55 29.63 18.99 29.33 17.08 C 29.45 12.70 29.33 8.32 29.37 3.94 C 24.89 6.96 20.54 10.16 16.00 13.08 C 11.46 10.15 7.10 6.96 2.63 3.94 Z" />
                                                </g>
                                            </svg>
                                        </span>
                                        <input type="email"
                                            onChange={e => setEmail(e.target.value)}
                                            className="form-control form-control-lg py-3 border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded-0"
                                            placeholder="EMAIL*" required />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="input-group mb-4">
                                        <span
                                            className="input-group-text border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded-0 bg-transparent px-0">
                                            <svg width="25px" height="25px" viewBox="0 0 21 25" version="1.1"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <g id="#000000">
                                                    <path fill="#000000" opacity="1.00"
                                                        d=" M 9.31 0.00 L 11.48 0.00 C 16.22 0.37 19.28 4.75 18.88 9.32 C 19.41 9.36 20.47 9.44 21.00 9.47 L 21.00 24.58 C 20.89 24.68 20.67 24.89 20.56 25.00 L 0.48 25.00 C 0.36 24.89 0.12 24.68 0.00 24.57 L 0.00 9.45 C 0.53 9.42 1.59 9.36 2.13 9.34 C 1.73 4.83 4.67 0.53 9.31 0.00 M 5.75 9.37 C 8.92 9.38 12.09 9.38 15.26 9.37 C 15.55 6.54 14.12 3.25 10.90 3.18 C 7.41 2.73 5.27 6.22 5.75 9.37 M 7.93 15.78 C 8.24 16.23 8.87 17.14 9.18 17.59 C 9.08 18.39 8.89 20.00 8.80 20.80 C 9.65 20.80 11.35 20.80 12.21 20.80 C 12.11 20.00 11.92 18.40 11.82 17.61 C 12.13 17.15 12.75 16.24 13.06 15.78 C 12.35 12.99 8.66 13.00 7.93 15.78 Z" />
                                                </g>
                                            </svg>
                                        </span>
                                        <input type="password"
                                            onChange={e => setPassword(e.target.value)}
                                            className="form-control form-control-lg py-3 border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded-0"
                                            placeholder="PASSWORD*" required />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="input-group mb-4">
                                        <span
                                            className="input-group-text border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded-0 bg-transparent px-0">
                                            <svg width="25px" height="25px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 31.685 31.685" >
                                                <g>
                                                    <path d="M22.507,0H9.175C7.9,0,6.87,1.034,6.87,2.309v27.07c0,1.271,1.03,2.306,2.305,2.306h13.332
		c1.273,0,2.307-1.034,2.307-2.306V2.309C24.813,1.034,23.78,0,22.507,0z M23.085,25.672H8.599V3.895h14.486V25.672z M18.932,2.343
		h-6.181V1.669h6.182L18.932,2.343L18.932,2.343z M21.577,2.035c0,0.326-0.266,0.59-0.591,0.59c-0.326,0-0.591-0.265-0.591-0.59
		s0.265-0.59,0.591-0.59C21.312,1.444,21.577,1.709,21.577,2.035z M18.655,29.225h-5.629v-1.732h5.629V29.225z"/>
                                                </g>
                                            </svg>

                                        </span>
                                        <input type="text"
                                            onChange={e => setPhone(e.target.value)}
                                            className="form-control form-control-lg py-3 border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded-0"
                                            placeholder="PHONE" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="input-group mb-4">
                                        <span
                                            className="input-group-text border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded-0 bg-transparent px-0">
                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                                                width="30px" height="25px" viewBox="0 0 48.219 48.221">
                                                <g>
                                                    <g>
                                                        <path fill="#000000" d="M24.109,0c-6.547,0-7.368,0.027-9.94,0.146c-2.565,0.116-4.321,0.521-5.854,1.118
			c-1.585,0.619-2.928,1.44-4.27,2.782c-1.34,1.342-2.163,2.686-2.779,4.27c-0.597,1.532-1.005,3.29-1.121,5.855
			C0.027,16.738,0,17.562,0,24.108c0,6.551,0.027,7.37,0.146,9.942c0.116,2.567,0.524,4.316,1.121,5.849
			c0.615,1.588,1.439,2.933,2.779,4.276c1.34,1.336,2.685,2.158,4.27,2.778c1.534,0.595,3.288,1.001,5.854,1.119
			c2.572,0.114,3.392,0.147,9.94,0.147s7.369-0.031,9.939-0.147c2.566-0.118,4.32-0.524,5.855-1.119
			c1.583-0.62,2.928-1.442,4.267-2.778c1.342-1.344,2.163-2.688,2.782-4.276c0.594-1.532,1.004-3.281,1.12-5.849
			c0.117-2.572,0.146-3.392,0.146-9.942c0-6.546-0.027-7.37-0.146-9.936c-0.116-2.566-0.526-4.323-1.12-5.855
			c-0.619-1.585-1.44-2.93-2.782-4.27c-1.339-1.343-2.684-2.164-4.267-2.783c-1.535-0.596-3.289-1.002-5.855-1.119
			C31.479,0.027,30.658,0,24.109,0L24.109,0L24.109,0z M24.109,4.344c6.437,0,7.2,0.025,9.743,0.143
			c2.349,0.105,3.628,0.5,4.476,0.826c1.126,0.44,1.931,0.963,2.771,1.807c0.847,0.844,1.365,1.646,1.805,2.771
			c0.331,0.85,0.724,2.126,0.832,4.475c0.114,2.547,0.139,3.309,0.139,9.743c0,6.438-0.024,7.198-0.139,9.746
			c-0.108,2.351-0.501,3.625-0.832,4.472c-0.439,1.129-0.958,1.933-1.805,2.775c-0.841,0.845-1.645,1.363-2.771,1.807
			c-0.851,0.326-2.127,0.722-4.476,0.827c-2.543,0.115-3.305,0.138-9.743,0.138c-6.437,0-7.198-0.022-9.742-0.138
			c-2.351-0.105-3.627-0.501-4.477-0.827c-1.124-0.443-1.93-0.962-2.772-1.807c-0.842-0.843-1.364-1.646-1.804-2.775
			c-0.327-0.847-0.722-2.121-0.828-4.472c-0.118-2.548-0.143-3.309-0.143-9.746c0-6.435,0.024-7.196,0.143-9.743
			c0.107-2.349,0.501-3.625,0.828-4.475c0.438-1.125,0.962-1.928,1.804-2.771c0.845-0.844,1.649-1.366,2.772-1.807
			c0.85-0.327,2.126-0.721,4.477-0.826C16.911,4.37,17.674,4.344,24.109,4.344"/>
                                                        <path fill="#000000" d="M24.109,32.147c-4.438,0-8.037-3.6-8.037-8.039c0-4.434,3.6-8.036,8.037-8.036
			c4.439,0,8.036,3.602,8.036,8.036C32.146,28.548,28.549,32.147,24.109,32.147L24.109,32.147z M24.109,11.729
			c-6.839,0-12.382,5.544-12.382,12.379c0,6.839,5.543,12.381,12.382,12.381c6.837,0,12.379-5.542,12.379-12.381
			C36.488,17.273,30.946,11.729,24.109,11.729L24.109,11.729z"/>
                                                        <path fill="#000000" d="M39.872,11.24c0,1.596-1.293,2.891-2.895,2.891c-1.597,0-2.893-1.294-2.893-2.891
			c0-1.598,1.296-2.896,2.893-2.896C38.579,8.345,39.872,9.643,39.872,11.24L39.872,11.24z"/>
                                                    </g>
                                                </g>
                                            </svg>
                                        </span>
                                        <input type="text"
                                            onChange={e => setInstagram(e.target.value)}
                                            className="form-control form-control-lg py-3 border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded-0"
                                            placeholder="INSTAGRAM" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="input-group mb-4">
                                        <span
                                            className="input-group-text border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded-0 bg-transparent px-0">
                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                                                width="30px" height="25px" viewBox="0 0 47.931 47.635">
                                                <g>
                                                    <g>
                                                        <path fill="#000000" d="M47.931,23.966C47.931,10.729,37.2,0,23.966,0S0,10.729,0,23.966c0,11.962,8.763,21.873,20.221,23.669
			v-16.74h-6.085v-6.929h6.085v-5.282c0-6.004,3.577-9.323,9.054-9.323c2.62,0,5.362,0.469,5.362,0.469v5.897h-3.023
			c-2.976,0-3.905,1.848-3.905,3.744v4.495h6.649l-1.065,6.929h-5.584v16.74C39.167,45.839,47.931,35.925,47.931,23.966
			L47.931,23.966z"/>
                                                    </g>
                                                </g>
                                            </svg>
                                        </span>
                                        <input type="text"
                                            onChange={e => setFacebook(e.target.value)}
                                            className="form-control form-control-lg py-3 border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded-0"
                                            placeholder="FACEBOOK" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="input-group mb-4">
                                        <span
                                            className="input-group-text border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded-0 bg-transparent px-0">
                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                                                width="25px" height="25px" viewBox="0 0 48.733 39.605">
                                                <path fill="#000000" d="M48.733,4.69c-1.793,0.798-3.719,1.333-5.742,1.574c2.065-1.233,3.653-3.2,4.396-5.529
	c-1.933,1.145-4.071,1.975-6.349,2.428C39.217,1.211,36.615,0,33.738,0c-5.517,0-9.997,4.479-9.997,10.001
	c0,0.781,0.088,1.539,0.261,2.277C15.69,11.861,8.325,7.884,3.396,1.83C2.533,3.31,2.041,5.023,2.041,6.857
	c0,3.468,1.764,6.527,4.445,8.325c-1.637-0.056-3.179-0.501-4.523-1.251c-0.004,0.04-0.004,0.085-0.004,0.125
	c0,4.847,3.447,8.885,8.02,9.799c-0.84,0.23-1.722,0.353-2.636,0.353c-0.642,0-1.269-0.062-1.88-0.179
	c1.274,3.976,4.963,6.866,9.342,6.946c-3.422,2.683-7.732,4.28-12.422,4.28c-0.803,0-1.602-0.053-2.383-0.143
	c4.426,2.837,9.678,4.492,15.325,4.492c18.391,0,28.448-15.241,28.448-28.448c0-0.435-0.01-0.868-0.032-1.299
	C45.702,8.459,47.394,6.695,48.733,4.69z"/>
                                            </svg>
                                        </span>
                                        <input type="text"
                                            onChange={e => setTwitter(e.target.value)}
                                            className="form-control form-control-lg py-3 border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded-0"
                                            placeholder="TWITTER" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="input-group mb-4">
                                        <span
                                            className="input-group-text border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded-0 bg-transparent px-0">
                                            <svg width="25px" height="25px" viewBox="0 0 25 25" version="1.1"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <g id="#000000">
                                                    <path fill="#000000" opacity="1.00"
                                                        d=" M 11.32 0.00 L 13.54 0.00 C 17.49 0.45 20.99 4.52 19.41 8.52 C 17.35 14.42 7.74 14.45 5.61 8.59 C 4.00 4.62 7.41 0.56 11.32 0.00 Z" />
                                                    <path fill="#000000" opacity="1.00"
                                                        d=" M 0.01 17.91 C 1.66 15.39 4.19 13.92 7.09 13.30 C 10.44 15.38 14.57 15.36 17.92 13.30 C 20.79 13.94 23.39 15.38 25.00 17.91 L 25.00 18.67 C 22.48 22.25 18.45 24.45 14.14 25.00 L 11.00 25.00 C 6.65 24.54 2.58 22.34 0.00 18.78 L 0.00 16.62 L 0.01 17.91 Z" />
                                                </g>
                                            </svg>
                                        </span>
                                        <input type="text"
                                            onChange={e => setTiktok(e.target.value)}
                                            className="form-control form-control-lg py-3 border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded-0"
                                            placeholder="TIKTOK" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="input-group mb-4">
                                        <span
                                            className="input-group-text border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded-0 bg-transparent px-0">
                                            <svg width="25px" height="25px" viewBox="0 0 25 25" version="1.1"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <g id="#000000">
                                                    <path fill="#000000" opacity="1.00"
                                                        d=" M 11.32 0.00 L 13.54 0.00 C 17.49 0.45 20.99 4.52 19.41 8.52 C 17.35 14.42 7.74 14.45 5.61 8.59 C 4.00 4.62 7.41 0.56 11.32 0.00 Z" />
                                                    <path fill="#000000" opacity="1.00"
                                                        d=" M 0.01 17.91 C 1.66 15.39 4.19 13.92 7.09 13.30 C 10.44 15.38 14.57 15.36 17.92 13.30 C 20.79 13.94 23.39 15.38 25.00 17.91 L 25.00 18.67 C 22.48 22.25 18.45 24.45 14.14 25.00 L 11.00 25.00 C 6.65 24.54 2.58 22.34 0.00 18.78 L 0.00 16.62 L 0.01 17.91 Z" />
                                                </g>
                                            </svg>
                                        </span>
                                        <input type="text"
                                            onChange={e => setYoutube(e.target.value)}
                                            className="form-control form-control-lg py-3 border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded-0"
                                            placeholder="YOUTUBE" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="input-group mb-4">
                                        <span
                                            className="input-group-text border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded-0 bg-transparent px-0">
                                            <svg width="30px" height="25px" id="Capa_1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                                <g id="XMLID_235_">
                                                    <g id="XMLID_164_">
                                                        <path id="XMLID_196_" d="m463.955 106.685c5.056-6.935 8.05-15.465 8.05-24.685 0-23.159-18.841-42-42-42-9.22 0-17.75 2.994-24.685 8.05-43.669-31.456-95.116-48.05-149.32-48.05-53.173 0-104.162 16.152-147.457 46.709-4.512 3.185-5.588 9.424-2.403 13.937 3.185 4.512 9.425 5.588 13.937 2.403 28.92-20.412 61.573-33.843 96.018-39.694-4.009 5.094-8.037 11.225-12.012 18.609-12.132 22.539-22.144 53.578-29.123 90.158-18.36 1.32-33.485 14.484-37.751 31.878h-98.602c5.812-13.719 12.944-26.926 21.362-39.453 3.08-4.584 1.86-10.797-2.724-13.877-4.584-3.081-10.797-1.861-13.877 2.723-28.372 42.224-43.368 91.537-43.368 142.607 0 54.185 16.595 105.645 48.047 149.319-5.054 6.934-8.047 15.463-8.047 24.681 0 23.159 18.841 42 42 42 9.219 0 17.748-2.993 24.682-8.048 43.672 31.454 95.128 48.048 149.318 48.048 68.38 0 132.667-26.629 181.02-74.981 48.351-48.351 74.98-112.639 74.98-181.019 0-54.198-16.592-105.645-48.045-149.315zm16.799 221.315h-106.637c-3.425-13.965-13.849-25.201-27.328-29.775.789-13.892 1.211-28.047 1.211-42.225 0-24.726-1.198-48.92-3.507-71.999h136.385c7.347 22.995 11.122 47.184 11.122 71.999 0 25.1-3.954 49.291-11.246 72zm-224.754 164c-16.755 0-34.884-24.379-48.496-65.214-7.629-22.889-13.531-49.627-17.514-78.785h102.551c3.202 13.054 12.516 23.73 24.729 28.803-15.213 79.485-41.445 115.196-61.27 115.196zm-174-104c-6.687 0-13.01 1.579-18.627 4.371-9.944-13.999-18.239-28.853-24.823-44.371h131.276c4.156 31.467 10.463 60.387 18.704 85.11 7.924 23.774 17.152 42.371 27.431 55.531-34.639-5.875-67.324-19.407-96.332-40.013 2.792-5.618 4.371-11.941 4.371-18.628 0-23.159-18.841-42-42-42zm102-132c0-13.645.4-27.26 1.15-40.622 16.475-2.841 29.691-15.303 33.633-31.378h105.614c2.371 22.992 3.603 47.199 3.603 72 0 13.6-.398 27.174-1.144 40.5-16.792 2.609-30.318 15.203-34.315 31.5h-104.939c-2.369-22.991-3.602-47.198-3.602-72zm149.329 104c-12.131 0-22-9.869-22-22s9.869-22 22-22 22 9.869 22 22-9.869 22-22 22zm-9.859-281.11c-7.925-23.775-17.153-42.373-27.433-55.533 34.645 5.875 67.33 19.405 96.339 40.015-2.792 5.618-4.371 11.941-4.371 18.628 0 23.159 18.841 42 42 42 6.687 0 13.009-1.579 18.627-4.37 9.945 13.998 18.237 28.854 24.82 44.371h-131.278c-4.156-31.468-10.464-60.388-18.704-85.111zm128.535 3.11c0 12.131-9.869 22-22 22s-22-9.869-22-22 9.869-22 22-22 22 9.869 22 22zm-196.005-62c16.755 0 34.884 24.379 48.496 65.214 7.629 22.889 13.531 49.628 17.514 78.786h-103.226c-3.147-12.831-12.2-23.362-24.105-28.536 15.2-79.668 41.457-115.464 61.321-115.464zm-78.004 132.001c12.131 0 22 9.869 22 22s-9.869 22-22 22-22-9.869-22-22 9.869-22 22-22zm-40.787 32c3.481 14.193 14.189 25.573 27.989 29.999-.78 13.818-1.198 27.896-1.198 42 0 24.727 1.198 48.921 3.507 72h-136.38c-7.349-22.999-11.127-47.189-11.127-72 0-24.684 3.805-48.918 11.187-71.999zm-77.209 245.999c0-12.131 9.869-22 22-22s22 9.869 22 22-9.869 22-22 22-22-9.869-22-22zm235.937 58.604c3.974-5.055 7.967-11.128 11.908-18.432 12.169-22.557 22.213-53.668 29.207-90.346 18.051-1.594 32.853-14.649 37.065-31.826h99.209c-30.915 72.752-97.337 126.901-177.389 140.604z" />
                                                        <path id="XMLID_1702_" d="m80.06 94.06c2.641 0 5.21-1.06 7.08-2.93 1.86-1.86 2.92-4.44 2.92-7.07s-1.06-5.2-2.92-7.07c-1.87-1.86-4.439-2.93-7.08-2.93-2.63 0-5.21 1.07-7.069 2.93-1.86 1.87-2.931 4.44-2.931 7.07s1.07 5.21 2.931 7.07c1.859 1.87 4.439 2.93 7.069 2.93z" /></g></g>
                                            </svg>
                                        </span>
                                        <input type="text"
                                            onChange={e => setWebsite(e.target.value)}
                                            className="form-control form-control-lg py-3 border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded-0"
                                            placeholder="WEBSITE" />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <input type="text"
                                        onChange={e => setNotes(e.target.value)}
                                        className="form-control form-control-lg py-3 border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded-0"
                                        placeholder="NOTE" />
                                </div>
                                <div className="col-lg-12 d-grid text-center mt-5 w-100">
                                    <button className="btn btn-lg text-upperase py-3 fs-1 text-uppercase theme-pink-bg-color text-white btn-hvr rounded-pill"
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
        onSubmitApplication: (fullname, username, stage_name, email, password, phone, instagram, facebook, twitter, tiktok, youtube, website, notes) => dispatch(actions.SubmitApplication(fullname, username, stage_name, email, password, phone, instagram, facebook, twitter, tiktok, youtube, website, notes)),
    };
};

export default connect(
    null,
    mapDispatchToProps
)(withErrorHandler(SignupTalent, axios));
