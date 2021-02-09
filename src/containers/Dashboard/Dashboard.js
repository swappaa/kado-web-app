import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';
import { Link } from 'react-router-dom';

import '../../App.css';
import './Dashboard.css'

class Dashboard extends Component {
    render() {

        const state = {
            labels: ['LIFETIME RAISED FOR CHARITY $3,550', 'LIFETIME EARNINGS $35,500'],
            datasets: [
                {
                    backgroundColor: [
                        '#384099',
                        '#ee235a'
                    ],
                    hoverBackgroundColor: [
                        '#4952bd',
                        '#f13d6e'
                    ],
                    data: [20, 59]
                }
            ]
        }


        return (
            <div className="dashboard">
                <section className="pb-5">
                    <div className="container-fluid px-5">
                        <div className="customs-wrapper w-100 mx-auto">
                            <div className="dashboard-wrapper py-5">
                                <h2 className="text-uppercase theme-pink-color display-4 mb-3 mx-3">MY DASHBOARD</h2>
                                <div className="sec-wrapper-1 my-3 mb-5">
                                    <h5 class="card-header text-uppercase text-white rounded-0 fs-1 text-center py-3 mb-5">Requests</h5>
                                    <div className="card-group pb-3">
                                        <div className="card rounded-0 border-0 step-1">
                                            <div className="card-body text-center theme-pink-bg-color rounded-wrapper  d-flex flex-column align-items-center justify-content-center text-white font-ave-heavy">
                                                <h5 className="card-title fs-2">NEXT KÂDO DUE</h5>
                                                <p className="card-text display-4">3 DAYS</p>
                                            </div>
                                        </div>
                                        <div className="card rounded-0 border-0 step-2">
                                            <div className="d-flex align-items-center justify-content-center">
                                                <div className="rounded-circle text-center d-flex flex-column align-items-center justify-content-center">
                                                    <h5 className="card-title theme-pink-color display-1 lh-1">2</h5>
                                                    <p className="card-text text-uppercase theme-pink-color fs-5">New</p>
                                                </div>
                                                <div className="rounded-circle text-center d-flex flex-column align-items-center justify-content-center">
                                                    <h5 className="card-title theme-pink-color display-1 lh-1">1</h5>
                                                    <p className="card-text text-uppercase theme-pink-color fs-5">Open</p>
                                                </div>
                                                <div className="rounded-circle text-center d-flex flex-column align-items-center justify-content-center">
                                                    <h5 className="card-title theme-pink-color display-1 lh-1">8</h5>
                                                    <p className="card-text text-uppercase theme-pink-color fs-5">Accepted</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card rounded-0 border-0 step-3">
                                            <div className="d-flex align-items-center justify-content-end h-100">
                                                <div className="rounded-3 text-center d-flex flex-column align-items-center justify-content-center px-2 py-3">
                                                    <h5 className="card-title fs-1 lh-1">15</h5>
                                                    <p className="card-text text-uppercase  fs-5">Completed</p>
                                                </div>
                                                <div className="rounded-3 text-center d-flex flex-column align-items-center justify-content-center px-2 py-3">
                                                    <h5 className="card-title fs-1 lh-1">0</h5>
                                                    <p className="card-text text-uppercase fs-5">Declined</p>
                                                </div>
                                                <div className="rounded-3 text-center d-flex flex-column align-items-center justify-content-center px-2 py-3">
                                                    <h5 className="card-title fs-1 lh-1">0</h5>
                                                    <p className="card-text text-uppercase  fs-5">Timed out</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="sec-wrapper-2 my-3 mb-5">
                                    <h5 class="card-header text-uppercase text-white rounded-0 fs-1 text-center py-3 mb-5">Earnings</h5>
                                    <div className="card-group pb-3">
                                        <div className="card rounded-0 border-0 step-1">
                                            <div className="card-body py-4 text-center rounded-wrapper d-flex flex-column align-items-center justify-content-center font-ave-heavy">
                                                <h5 className="card-title fs-2">NEXT PAYMENT</h5>
                                                <p className="card-text display-4">11.06.20</p>
                                            </div>
                                        </div>
                                        <div className="card rounded-0 border-0 step-2">
                                            <div className="d-flex align-items-center justify-content-around h-100">
                                                <div className="text-center d-flex flex-column align-items-center justify-content-center">
                                                    <p className="card-text text-uppercase fs-5">Balance</p>
                                                    <h5 className="card-title fs-1 lh-3">$900</h5>
                                                </div>
                                                <div className="text-center d-flex flex-column align-items-center justify-content-center">
                                                    <p className="card-text text-uppercase fs-5">Pending</p>
                                                    <h5 className="card-title fs-1 lh-3">$600</h5>
                                                </div>
                                                <div className="text-center d-flex flex-column align-items-center justify-content-center">
                                                    <p className="card-text text-uppercase fs-5">In Queue</p>
                                                    <h5 className="card-title fs-1 lh-3">$1,100</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card rounded-0 border-0 step-3">
                                            <div class="chart-container" style={{ position: 'relative', width: '24vw' }}>
                                                <Pie
                                                    data={state}
                                                    options={{
                                                        responsive: true,
                                                        maintainAspectRatio: true,
                                                        legend: {
                                                            display: true,
                                                            position: 'right',
                                                            fullWidth: false
                                                        }
                                                    }}
                                                />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="sec-wrapper-3 my-3 mb-5">
                                    <h5 class="card-header text-uppercase text-white rounded-0 fs-1 text-center py-3 mb-5">Selected Charity</h5>
                                    <div className="card-group pb-3">
                                        <div className="card rounded-0 border-0 step-1">
                                            <div className="d-flex align-items-center justify-content-between h-100">
                                                <div className="text-center d-flex flex-row align-items-center justify-content-center">
                                                    <div className="img-wrapper me-3">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#58585a" width="48px" height="70px" viewBox="0 0 17.98 27.89"><title>pars equality center</title><g id="Layer_2" data-name="Layer 2"><g id="Talent_Dashboard-v1" data-name="Talent Dashboard-v1"><path class="cls-1" d="M10.09,14l3.29,3.68.57-.61c1.81-2,3.24-3.58,3.79-5.85A9.15,9.15,0,0,0,9.14,0,9,9,0,0,0,0,9.05c0,4.43,1.6,5.27,13.5,18.56a.82.82,0,0,0,.58.28h0a.82.82,0,0,0,.57-.24L17,25.33a.82.82,0,0,0,0-1.13C9.14,15.37,6,11.84,5.84,11.61a4,4,0,0,1-.68-4A4.13,4.13,0,0,1,9,4.91a4.14,4.14,0,0,1,4.09,4.14,4,4,0,0,1-.93,2.56c-.23.33-.86,1-2.06,2.39Z" /><path class="cls-1" d="M1,25.33,3.3,27.65a.83.83,0,0,0,.58.24h0a.81.81,0,0,0,.58-.28C5.71,26.24,6.85,25,7.89,23.84L4.56,20.17,1,24.2a.82.82,0,0,0,0,1.13Z" /></g></g></svg>
                                                    </div>
                                                    <h5 className="card-title fs-1 lh-3">PARS Equality Center</h5>
                                                </div>
                                                <div className="text-center d-flex flex-row align-items-center justify-content-center">
                                                    <div className="img-wrapper me-3">
                                                        <svg width="70px" height="71px" viewBox="0 0 70 71" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                            <g id="#58585aff">
                                                                <path fill="#58585a" opacity="1.00" d=" M 32.28 2.42 C 37.04 0.34 39.94 5.48 43.29 7.76 C 46.96 8.65 51.22 5.91 54.56 8.44 C 57.67 10.85 56.76 15.35 58.32 18.60 C 61.06 20.83 65.52 21.45 66.79 25.15 C 67.93 28.84 64.75 31.86 63.89 35.24 C 64.34 38.93 68.07 42.00 66.78 45.90 C 65.46 49.57 61.01 50.18 58.28 52.43 C 56.79 55.69 57.65 60.16 54.56 62.56 C 51.22 65.04 47.02 62.43 43.34 63.19 C 40.45 64.98 38.60 68.66 34.95 69.01 C 30.86 69.34 28.82 65.11 25.74 63.24 C 22.09 62.36 17.85 65.07 14.50 62.58 C 11.33 60.17 12.36 55.63 10.71 52.40 C 7.96 50.14 3.47 49.53 2.23 45.79 C 1.06 41.90 4.74 38.86 5.15 35.19 C 4.25 31.87 1.20 28.87 2.22 25.23 C 3.09 22.21 6.42 21.27 8.82 19.80 C 13.45 17.91 10.50 11.13 14.45 8.47 C 16.93 6.46 20.23 7.73 23.08 7.86 C 27.24 8.81 28.92 3.79 32.28 2.42 M 24.41 18.54 C 19.54 19.94 17.90 26.92 21.79 30.26 C 25.42 34.05 32.58 31.98 33.62 26.84 C 35.13 21.68 29.38 16.58 24.41 18.54 M 42.34 18.19 C 41.11 19.45 40.31 21.05 39.47 22.58 C 34.50 31.92 29.07 41.02 24.16 50.39 C 22.73 52.88 26.78 54.39 27.61 51.74 C 33.43 41.45 39.23 31.12 44.84 20.71 C 46.05 19.09 43.82 16.77 42.34 18.19 M 39.40 39.40 C 34.72 41.26 33.77 48.25 37.84 51.24 C 41.72 54.69 48.67 52.18 49.36 46.99 C 50.54 41.65 44.24 36.91 39.40 39.40 Z" />
                                                                <path fill="#58585a" opacity="1.00" d=" M 24.33 22.24 C 26.53 20.42 30.35 22.12 30.32 25.01 C 30.65 27.90 27.04 29.95 24.66 28.39 C 22.43 27.19 22.22 23.66 24.33 22.24 Z" />
                                                                <path fill="#58585a" opacity="1.00" d=" M 41.34 42.37 C 43.98 41.54 46.77 44.29 45.92 46.95 C 45.25 49.69 41.36 50.59 39.53 48.47 C 37.59 46.57 38.69 42.90 41.34 42.37 Z" />
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <p className="card-title fs-1 lh-3">Contribution Level <b>10%</b></p>
                                                </div>
                                                <div className="text-center d-flex flex-row align-items-center justify-content-center">
                                                    <p className="card-text theme-pink-color fs-3">
                                                        Donation Settings
                                                         <svg xmlns="http://www.w3.org/2000/svg" class="ms-2" fill="#ee2a59" width="20px" height="20px" viewBox="0 0 5.5 8.49"><title>arrow pink</title><g id="Layer_2" data-name="Layer 2"><g id="Talent_Dashboard-v1" data-name="Talent Dashboard-v1"><path class="cls-1" d="M0,1a.81.81,0,0,0,.33.5L3.29,4.24.35,7a.81.81,0,0,0-.33.5.82.82,0,0,0,.11.63.85.85,0,0,0,.71.39.9.9,0,0,0,.45-.13L5.15,4.92a.84.84,0,0,0,0-1.36L1.34.17l-.06,0A.76.76,0,0,0,.84,0,.84.84,0,0,0,.13.38.82.82,0,0,0,0,1Z" /></g></g></svg>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="sec-wrapper-3 my-3 mb-5">
                                    <h5 class="card-header text-uppercase text-white rounded-0 fs-1 text-center py-3 mb-5">Quick Settings</h5>
                                    <div className="card-group pb-3">
                                        <div className="card rounded-0 border-0 step-1">
                                            <div className="row g-3">
                                                <div class="col-2 quick-set-item rounded-circle d-flex flex-column align-items-center justify-content-center">
                                                    <div class="border-0 text-center p-2 position-relative">
                                                        <div className="img-wrapper">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="#58585a" width="80px" height="80px" viewBox="0 0 48.55 48.78"><title>record greeting</title><g id="Layer_2" data-name="Layer 2"><g id="Talent_Dashboard-v1" data-name="Talent Dashboard-v1"><path class="cls-1" d="M31.34,9v2.11h3.47V4.53a4.31,4.31,0,0,0-4.3-4.3v2a4.85,4.85,0,0,1-4.85,4.85H16a4.85,4.85,0,0,1-4.85-4.85v-2a4.31,4.31,0,0,0-4.3,4.3V21.37h2a4.73,4.73,0,0,1,1.8.35V9Z" /><path class="cls-1" d="M14,18.57c0,.45.28,3.84,1.58,4.63.08-.19.75-4.16,7.32-6.56,3.16-1.15,2.79,6.56,2.79,6.56,1-.46,1.38-2.7,1.52-4a10,10,0,0,1-2.6-6.1,7.82,7.82,0,0,0-4.23-1C16.19,12.26,13.78,14.55,14,18.57Z" /><path class="cls-1" d="M16,4h9.7a2,2,0,0,0,2-2V0H14V2a2,2,0,0,0,2,2Z" /><path class="cls-1" d="M34.52,22.5A9.87,9.87,0,0,1,31.34,22V38.22l-3.25-6.68A2.27,2.27,0,0,0,27,30.46l-2.9-1.62L23,27.52l-2.36,2.64-2.3-2.66L17,28.89l-2.8,1.58a2.24,2.24,0,0,0-.84.76,4.9,4.9,0,0,1,.36,1.84,4.85,4.85,0,0,1-2.48,4.23,5.22,5.22,0,0,1,.45.92,4.8,4.8,0,0,1,.32,1.7,4.85,4.85,0,0,1-4.85,4.85H6.83a4.31,4.31,0,0,0,4.29,4H30.51a4.31,4.31,0,0,0,4.3-4.3v-22Zm-10.24,22H17.42a1.42,1.42,0,0,1,0-2.84h6.86a1.42,1.42,0,1,1,0,2.84Z" /><path class="cls-1" d="M9.15,39.7a2,2,0,1,0-2,2A2,2,0,0,0,9.15,39.7Z" /><path class="cls-1" d="M4,21.14v-4H2a2,2,0,0,0,0,4Z" /><path class="cls-1" d="M8.86,28a2,2,0,0,0,0-4H3.72a2,2,0,1,0,0,4Z" /><path class="cls-1" d="M8.86,34.85a2,2,0,0,0,0-4H5.43a2,2,0,0,0,0,4Z" /><path class="cls-1" d="M47.13,22.59H43.89V18.37a4.66,4.66,0,0,0-4.67-4.66H27.55a7.16,7.16,0,0,0,7,5.72h1.71a1.42,1.42,0,0,1,1.42,1.42V41.7h1.53A4.67,4.67,0,0,0,43.89,37h3.24a1.42,1.42,0,0,0,1.42-1.43V24A1.41,1.41,0,0,0,47.13,22.59Z" /></g></g></svg>
                                                        </div>
                                                        <div class="py-1 pb-0 mt-2">
                                                            <p class="text-uppercase lh-1 theme-pink-color font-ave-heavy">Record <br />Greeting</p>
                                                        </div>
                                                        <Link href="#" class="stretched-link"></Link>
                                                    </div>
                                                </div>
                                                <div class="col-2 quick-set-item rounded-circle d-flex flex-column align-items-center justify-content-center">
                                                    <div class="border-0 text-center p-2 position-relative">
                                                        <div className="img-wrapper">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="#58585a" width="80px" height="80px" viewBox="0 0 49.58 49.52"><title>vacation mode</title><g id="Layer_2" data-name="Layer 2"><g id="Talent_Dashboard-v1" data-name="Talent Dashboard-v1"><path class="cls-1" d="M17.71,26.23l3.59-1.89-3.59-1.89L19.88,19l-4.06.16L16,15.12l-3.44,2.16-1.89-3.59L8.76,17.28,5.33,15.12l.15,4.06L1.43,19l2.16,3.43L0,24.34l3.59,1.89L1.43,29.67l4.05-.16-.15,4.06L8.76,31.4,10.65,35l1.89-3.59L16,33.57l-.16-4.06,4.06.16Zm-7.06,3.44A5.33,5.33,0,1,1,16,24.34,5.33,5.33,0,0,1,10.65,29.67Z" /><path class="cls-1" d="M44.61,45.42a5.16,5.16,0,0,1-6.59,0,8.08,8.08,0,0,0-9.94,0,5.16,5.16,0,0,1-6.59,0,7.79,7.79,0,0,0-5-1.71,7.79,7.79,0,0,0-5,1.71,4.89,4.89,0,0,1-3.3,1.19A4.88,4.88,0,0,1,5,45.42a7.82,7.82,0,0,0-5-1.71v2.9A4.89,4.89,0,0,1,3.3,47.8a7.76,7.76,0,0,0,5,1.72,7.79,7.79,0,0,0,5-1.72,4.88,4.88,0,0,1,3.29-1.19,4.89,4.89,0,0,1,3.3,1.19,8,8,0,0,0,9.93,0,5.17,5.17,0,0,1,6.6,0,8,8,0,0,0,9.93,0,4.89,4.89,0,0,1,3.3-1.19v-2.9A7.79,7.79,0,0,0,44.61,45.42Z" /><path class="cls-1" d="M48.08,10.58a15.84,15.84,0,0,0-7.68-7.7L41.09,1,38.36,0l-.69,1.88a16,16,0,0,0-19.09,10L18,13.47l1.68.32a24.58,24.58,0,0,1,7.74,2.82l.34.19h.54a15.34,15.34,0,0,1,3.77.48L25.3,35.87h-.51a40.05,40.05,0,0,0-13.1,2.18,39.64,39.64,0,0,0-7.58,3.54,12.87,12.87,0,0,1,2.53,1.46c.85.59.93.66,1.62.66s.78-.07,1.63-.66a10.64,10.64,0,0,1,6.63-2.25,10.65,10.65,0,0,1,6.64,2.25c.85.59.94.66,1.63.66s.77-.07,1.62-.66a10.92,10.92,0,0,1,13.28,0c.85.59.94.66,1.62.66s.78-.07,1.63-.66a12.58,12.58,0,0,1,2.53-1.46,39.92,39.92,0,0,0-7.58-3.54,39.47,39.47,0,0,0-9.55-2L34.8,18.27a14.79,14.79,0,0,1,3.31,2.15l.3.25.38.07a25.17,25.17,0,0,1,7.74,2.82l1.49.85.59-1.62A15.87,15.87,0,0,0,48.08,10.58Z" /></g></g></svg>
                                                        </div>
                                                        <div class="py-1 pb-0 mt-2">
                                                            <p class="text-uppercase lh-1 theme-pink-color font-ave-heavy">Vacation <br />Mode</p>
                                                        </div>
                                                        <Link href="#" class="stretched-link"></Link>
                                                    </div>
                                                </div>
                                                <div class="col-2 quick-set-item rounded-circle d-flex flex-column align-items-center justify-content-center">
                                                    <div class="border-0 text-center p-2 position-relative">
                                                        <div className="img-wrapper">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="#58585a" width="80px" height="80px" viewBox="0 0 57.4 38.65"><title>booking fees</title><g id="Layer_2" data-name="Layer 2"><g id="Talent_Dashboard-v1" data-name="Talent Dashboard-v1"><path class="cls-1" d="M29.55,29.42V29.2c-1.14,0-2.24-.08-3.29-.16a15,15,0,0,1-2.39,4.09,39.61,39.61,0,0,0,5.75.5Z" /><path class="cls-1" d="M24.52,21.2A12.46,12.46,0,0,0,16,11.87a12.63,12.63,0,0,0-3.66-.55,12.38,12.38,0,1,0,8.34,21.53,12.33,12.33,0,0,0,4.05-9.16A13.06,13.06,0,0,0,24.52,21.2ZM12.38,22a4.69,4.69,0,0,1,1.27,9.2v1.1a1.25,1.25,0,0,1-2.49,0V31.25a4.73,4.73,0,0,1-3.48-4.54,1.25,1.25,0,0,1,2.49,0,2.21,2.21,0,1,0,2.2-2.21,4.69,4.69,0,0,1-1.19-9.22v-.53a1.24,1.24,0,1,1,2.48,0v.56a4.69,4.69,0,0,1,3.42,4.52,1.25,1.25,0,0,1-2.49,0A2.21,2.21,0,1,0,12.38,22Z" /><path class="cls-1" d="M29.51,26.7l-.07-4.4c-.77,0-1.53,0-2.25-.09q.06.75.06,1.47A15.85,15.85,0,0,1,27,26.59C27.79,26.66,28.64,26.7,29.51,26.7Z" /><path class="cls-1" d="M43.12,6.14a14.63,14.63,0,0,1-2.7,1.08A37.2,37.2,0,0,1,30.13,8.53a36.85,36.85,0,0,1-9.85-1.21,14.26,14.26,0,0,1-2.68-1l.08,3.5A14.25,14.25,0,0,1,21.57,12a.29.29,0,0,1,.1,0,36.08,36.08,0,0,0,8.46.93,35.05,35.05,0,0,0,9.57-1.21C42.4,10.92,43,10.06,43,9.9a.72.72,0,0,1,.13-.51V6.14Z" /><path class="cls-1" d="M39.69,1.21A34.72,34.72,0,0,0,30.12,0a33.53,33.53,0,0,0-9.44,1.21C18.06,2,17.49,2.78,17.47,3c0,0,0,0,0,0,.06.27.8,1.12,3.47,1.89a34.22,34.22,0,0,0,9.16,1.11,35.14,35.14,0,0,0,9.56-1.19C42.37,4.06,43,3.21,43,3S42.38,2,39.69,1.21Z" /><path class="cls-1" d="M57.38,35.58V31.86a15.64,15.64,0,0,1-2.61,1,36.5,36.5,0,0,1-10.26,1.31,38.36,38.36,0,0,1-9.33-1.07A16.44,16.44,0,0,1,32.08,32l.07,3.6v0c0,.19.54,1,3.16,1.83a33.81,33.81,0,0,0,9.43,1.18,33.32,33.32,0,0,0,9.46-1.21c2.62-.82,3.19-1.68,3.19-1.86Z" /><path class="cls-1" d="M43.09,13.07a15.13,15.13,0,0,1-2.68,1.07,36.92,36.92,0,0,1-10.3,1.3,44,44,0,0,1-5.63-.36,14.67,14.67,0,0,1,2.22,4.63c1.07.07,2.23.12,3.42.12h.13c2-2.24,7.51-3.35,12.84-3.5V13.07Z" /><path class="cls-1" d="M54.68,26a37.16,37.16,0,0,1-10.15,1.27,36.45,36.45,0,0,1-9.85-1.21,14.85,14.85,0,0,1-2.71-1L32,27.92v1c1,1.21,5.61,2.76,12.49,2.76a34.42,34.42,0,0,0,9.53-1.19c2.68-.82,3.27-1.67,3.27-1.84s.07-.29.07-.41h0V25A14.18,14.18,0,0,1,54.68,26Z" /><path class="cls-1" d="M54.1,20a34.42,34.42,0,0,0-9.57-1.18h-.21a34,34,0,0,0-8.86,1.05c-2.57.72-3.45,1.54-3.56,1.88a.11.11,0,0,0,0,.05l0,.05c.07.26.81,1.1,3.48,1.89a35,35,0,0,0,9.16,1.1A34.43,34.43,0,0,0,54,23.69c2.76-.82,3.38-1.67,3.39-1.86h0C57.37,21.63,56.75,20.81,54.1,20Z" /></g></g></svg>
                                                        </div>
                                                        <div class="py-1 pb-0 mt-2">
                                                            <p class="text-uppercase lh-1 theme-pink-color font-ave-heavy">Booking <br />Fees</p>
                                                        </div>
                                                        <Link href="#" class="stretched-link"></Link>
                                                    </div>
                                                </div>
                                                <div class="col-2 quick-set-item rounded-circle d-flex flex-column align-items-center justify-content-center">
                                                    <div class="border-0 text-center p-2 position-relative">
                                                        <div className="img-wrapper">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="#58585a" width="80px" height="80px" viewBox="0 0 40.63 48.62"><title>get support</title><g id="Layer_2" data-name="Layer 2"><g id="Talent_Dashboard-v1" data-name="Talent Dashboard-v1"><path class="cls-1" d="M24.67,3.37V16.76a7.5,7.5,0,0,1-4.35,13.53,12.71,12.71,0,0,1-3.38,4.23,13.87,13.87,0,0,1-4.71,2.55,1.42,1.42,0,1,1-.75-2.74,11.62,11.62,0,0,0,3.73-2.08,9.8,9.8,0,0,0,2.18-2.52,7.49,7.49,0,0,1-1.64-13V4.16C7.63,7.07,3.15,13,4.29,23.31L1.35,28.25c-1,1.61-2.07,4.24-.67,5.51,1,.87,2.07.58,3,.87a21.08,21.08,0,0,0,2.82,7.65,4.47,4.47,0,0,0,4.42,2.19l2.8-.35.54,3.3a1.41,1.41,0,0,0,1.63,1.17l15,0a1.42,1.42,0,0,0,1.38-1.76c0-.06-1.24-5.53,2.45-13a36.71,36.71,0,0,1,2.6-4.33C39,27,40.62,24.3,40.63,21.33,40.65,12.27,33.45,4.76,24.67,3.37Z" /><path class="cls-1" d="M24.86,22.79a4.65,4.65,0,1,0-6.4,4.31,11.41,11.41,0,0,0,.33-2.79,1.43,1.43,0,1,1,2.85,0,13.94,13.94,0,0,1-.31,3A4.65,4.65,0,0,0,24.86,22.79Z" /><path class="cls-1" d="M18.6,1.43v14a7.49,7.49,0,0,1,3.23,0v-14A1.43,1.43,0,0,0,20.4,0H20A1.43,1.43,0,0,0,18.6,1.43Z" /></g></g></svg>
                                                        </div>
                                                        <div class="py-1 pb-0 mt-2">
                                                            <p class="text-uppercase lh-1 theme-pink-color font-ave-heavy">Get <br />Support</p>
                                                        </div>
                                                        <Link href="#" class="stretched-link"></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div >
        )
    }
}

export default Dashboard;