import React from 'react';
import { Link } from 'react-router-dom';

import '../../App.css';
import './Footer.css';

import appStore from '../../assets/images/svg/app-store.svg';
import googlePlay from '../../assets/images/svg/google-play.svg';

const footer = () => (
    <footer className="theme-pink-bg-color py-5 mt-auto">
        <div className="container-fluid px-5">
            <div className="row">
                <div className="col-lg-6">
                    <div className="element-logo-wrapper mb-2 mb-sm-5 text-center text-sm-start">
                        <svg width="226px" height="73px" viewBox="0 0 307 99" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <g id="#ffffffff">
                                <path fill="#ffffff" opacity="1.00" d=" M 15.57 0.00 L 50.63 0.00 C 50.66 6.54 50.54 13.08 50.70 19.63 C 45.50 14.03 35.77 13.90 30.69 19.72 C 25.69 24.77 25.99 33.27 30.49 38.55 C 20.33 38.44 10.16 38.53 0.00 38.50 L 0.00 15.74 C 0.70 7.66 7.50 0.79 15.57 0.00 Z" />
                                <path fill="#ffffff" opacity="1.00" d=" M 59.18 0.00 L 93.23 0.00 C 101.40 0.71 108.46 7.77 108.87 16.01 C 109.05 23.51 108.89 31.01 108.93 38.51 C 99.08 38.53 89.22 38.44 79.36 38.56 C 83.81 33.29 84.17 24.89 79.24 19.82 C 74.17 13.94 64.35 13.97 59.12 19.65 C 59.26 13.10 59.15 6.55 59.18 0.00 Z" />
                                <path fill="#ffffff" opacity="1.00" d=" M 138.56 18.75 C 140.06 18.75 141.56 18.75 143.06 18.75 C 143.06 29.68 143.06 40.60 143.06 51.53 C 151.18 45.42 159.14 39.09 167.33 33.08 C 169.58 32.62 171.93 32.97 174.22 32.88 C 168.69 37.15 163.15 41.39 157.62 45.64 C 164.56 52.39 171.53 59.12 178.47 65.87 C 176.30 65.88 174.13 65.88 171.97 65.90 C 165.93 60.11 159.96 54.25 153.95 48.44 C 150.32 51.25 146.69 54.05 143.06 56.86 C 143.06 59.86 143.06 62.87 143.06 65.88 C 141.56 65.88 140.06 65.88 138.57 65.88 C 138.55 50.17 138.56 34.46 138.56 18.75 Z" />
                                <path fill="#ffffff" opacity="1.00" d=" M 256.25 18.76 C 257.72 18.75 259.19 18.74 260.67 18.74 C 260.71 34.45 260.68 50.16 260.69 65.87 C 259.20 65.88 257.72 65.88 256.24 65.88 C 256.24 64.25 256.26 62.63 256.28 61.01 C 248.90 68.59 235.70 68.44 227.49 62.30 C 220.27 56.82 219.33 45.10 225.37 38.42 C 233.14 30.15 248.66 29.19 256.33 38.03 C 256.15 31.60 256.29 25.18 256.25 18.76 M 235.49 36.72 C 227.90 38.85 224.20 48.21 227.64 55.14 C 230.73 61.87 239.18 63.94 245.91 62.55 C 250.30 61.72 254.66 58.74 255.66 54.17 C 256.70 49.38 256.66 43.60 253.06 39.84 C 248.41 35.61 241.34 34.65 235.49 36.72 Z" />
                                <path fill="#ffffff" opacity="1.00" d=" M 197.17 20.36 C 198.46 20.36 199.74 20.37 201.03 20.36 C 203.37 23.30 205.66 26.28 207.96 29.26 C 207.05 29.25 205.23 29.23 204.32 29.22 C 202.59 27.34 200.83 25.49 199.07 23.64 C 197.25 25.47 195.45 27.31 193.71 29.20 C 192.76 29.22 190.85 29.25 189.89 29.27 C 192.30 26.28 194.71 23.30 197.17 20.36 Z" />
                                <path fill="#ffffff" opacity="1.00" d=" M 35.61 25.49 C 37.63 22.39 42.74 21.87 45.09 24.84 C 47.38 28.11 48.55 31.98 49.89 35.70 C 45.95 35.65 41.93 35.78 38.10 34.69 C 34.54 33.43 33.38 28.42 35.61 25.49 Z" />
                                <path fill="#ffffff" opacity="1.00" d=" M 65.82 23.82 C 70.38 20.58 77.05 25.71 75.11 30.96 C 72.93 37.06 64.99 35.21 59.96 35.71 C 61.55 31.63 62.53 26.90 65.82 23.82 Z" />
                                <path fill="#ffffff" opacity="1.00" d=" M 188.96 33.01 C 195.18 31.40 201.87 31.64 208.09 33.13 C 211.79 33.94 215.03 36.82 215.52 40.70 C 216.20 47.12 215.30 53.61 215.99 60.03 C 216.43 62.47 219.31 62.35 221.19 62.57 C 221.19 63.39 221.19 65.04 221.18 65.87 C 218.91 65.91 216.52 66.42 214.33 65.60 C 212.48 64.90 212.19 62.77 211.63 61.14 C 205.05 66.30 196.11 67.64 188.05 66.05 C 183.66 65.25 179.91 61.47 179.63 56.94 C 179.07 52.34 182.09 47.64 186.56 46.37 C 194.69 43.95 203.29 44.46 211.66 44.23 C 211.81 41.47 210.82 38.35 207.93 37.42 C 202.39 35.49 196.22 35.69 190.53 36.81 C 187.49 37.40 185.50 39.96 184.52 42.74 C 182.97 42.67 181.43 42.60 179.88 42.53 C 180.92 37.98 184.39 34.16 188.96 33.01 M 190.36 49.60 C 187.37 50.35 184.30 52.71 184.37 56.06 C 184.19 59.24 187.10 61.53 189.97 62.09 C 196.19 63.46 203.19 62.37 208.39 58.58 C 211.72 56.17 211.76 51.71 211.73 48.00 C 204.60 48.15 197.33 47.81 190.36 49.60 Z" />
                                <path fill="#ffffff" opacity="1.00" d=" M 268.32 40.33 C 271.45 35.36 277.22 32.68 282.91 32.04 C 289.06 31.31 295.83 32.17 300.77 36.19 C 304.45 39.09 306.56 43.61 307.00 48.22 L 307.00 51.22 C 306.38 58.11 300.93 63.72 294.44 65.60 C 286.75 67.86 277.53 67.19 271.25 61.81 C 265.17 56.65 264.02 46.95 268.32 40.33 M 281.18 36.18 C 272.69 37.90 268.20 48.22 272.22 55.75 C 276.49 63.69 287.74 64.68 295.18 60.98 C 302.24 57.63 304.11 47.66 299.65 41.52 C 295.54 35.88 287.62 34.42 281.18 36.18 Z" />
                                <path fill="#ffffff" opacity="1.00" d=" M 0.00 47.12 C 15.11 47.12 30.22 47.12 45.33 47.13 C 40.90 51.60 36.41 56.02 32.02 60.53 C 33.82 60.28 35.61 60.04 37.41 59.80 C 37.36 61.81 37.30 63.83 37.24 65.85 C 41.74 61.41 46.12 56.85 50.62 52.42 C 50.64 62.61 50.62 72.80 50.63 82.99 C 48.54 83.00 46.45 83.01 44.36 83.03 C 37.48 88.38 30.63 93.76 23.67 99.00 L 22.22 99.00 C 20.42 93.97 21.92 88.31 21.44 83.03 C 16.77 83.16 11.77 83.00 7.82 80.18 C 3.43 77.38 0.66 72.52 0.00 67.40 L 0.00 47.12 Z" />
                                <path fill="#ffffff" opacity="1.00" d=" M 64.54 47.12 C 79.34 47.12 94.14 47.12 108.94 47.12 C 108.89 53.77 109.05 60.42 108.87 67.06 C 108.40 75.64 100.62 83.03 92.01 82.98 C 81.07 83.03 70.12 82.99 59.18 82.99 C 59.19 72.78 59.18 62.57 59.19 52.36 C 63.68 56.79 68.06 61.34 72.56 65.77 C 72.37 63.87 72.18 61.96 72.00 60.06 C 73.94 60.20 75.88 60.34 77.81 60.48 C 73.39 56.03 68.99 51.55 64.54 47.12 Z" />
                            </g>
                        </svg>
                    </div>
                </div>
                <div className="col-lg-6 align-self-end">
                    <div className="download-app d-flex justify-content-center justify-content-lg-end my-5 px-5">
                        <img className="img-fluid me-3" src={appStore} alt="app-store" />
                        <img className="img-fluid" src={googlePlay} alt="app-store" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 align-self-end order-2 order-lg-1 text-center text-lg-start mt-5 mt-lg-0">
                    <div className="footer-link-wrapper mw-100 mb-5 mb-lg-0">
                        <ul className="text-uppercase fs-3 d-flex flex-wrap justify-content-center justify-content-lg-start">
                            <li><Link className="text-white" to="/about">About us</Link></li>
                            <li><Link className="text-white" to="/faq">faq</Link></li>
                            <li><Link className="text-white" to="/press">News</Link></li>
                            <li><Link className="text-white" to="/support">support</Link></li>
                            <li><Link className="text-white" to="/careers">Blog</Link></li>
                        </ul>
                    </div>
                    <div className="footer-copyright-wrapper align-self-end text-white fs-4 mt-5">
                        <p className="mb-0">© <span>2021</span> Kado Enterprises, Inc. All rights reserved.
                            <Link className="text-white" to="/terms-service"> Terms of
                        Service.</Link>
                            <Link className="text-white" to="/privacy-policy"> Privacy Policy.</Link></p>
                    </div>

                </div>
                <div className="col-lg-6 align-self-end order-1 order-lg-2">
                    <div className="element-signup-talent float-lg-end">
                        <Link to="/signup-talent">
                            <button className="d-flex align-items-center justify-content-center lh-1 btn font-ave-heavy text-white fs-1 border border-white p-3 py-4 px-sm-5 px-3 mx-auto">
                                <svg fill="#fff" version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                    width="78px" height="78px" viewBox="0 0 22.697 21.58" enableBackground="new 0 0 22.697 21.58" >
                                    <path d="M4.334,21.58l7.014-3.688l7.014,3.688l-1.338-7.811l5.673-5.531L14.855,7.1L11.349,0L7.841,7.1L0,8.238l5.673,5.531
	L4.334,21.58z M9.421,9.393l1.928-3.9l1.928,3.9l4.306,0.627l-3.116,3.037l0.736,4.291l-3.854-2.027l-3.851,2.027l0.734-4.291
	L5.115,10.02L9.421,9.393z"/>
                                </svg>
                                <p className="mx-2 m-0 text-start">SIGN UP AS TALENT    <span className="fs-4 font-ave-reg d-block text-start mt-2">Earn and connect with fans.</span></p>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </footer >
);

export default footer;