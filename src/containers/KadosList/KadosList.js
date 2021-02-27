import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../App.css';
import './KadosList.css';
import prof1 from '../../assets/images/banner-surprise-message.png';
import prof2 from '../../assets/images/banner-send-personalized-images.jpg';

class kadosList extends Component {

    componentDidMount() {
        localStorage.setItem('path', window.location.pathname);
    }

    render() {
        return (
            <div className="kados-list">
                <section className="py-5">
                    <div className="container-fluid px-5">
                        <div className="customs-wrapper w-100 mx-auto">
                            <h2 className="text-uppercase theme-pink-color display-5 mx-3 mb-3">KÂdos I Sent</h2>
                            <div className="table-responsive">
                                <table className="table table-striped table-borderless table-hover">
                                    <thead className="text-white fs-2 text-uppercase ">
                                        <tr>
                                            <th width="200">sent</th>
                                            <th width="250">talent</th>
                                            <th width="250">to</th>
                                            <th width="300">status</th>
                                            <th width="100"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td width="200">
                                                <div className="fs-2 text-center w-50 mx-auto sent-wrapper">
                                                    SEPT
                                                    <span className="display-2 day-sent">18</span>
                                                    2020
                                                </div>
                                            </td>
                                            <td width="250">
                                                <div className="talent-profile-wrapper">
                                                    <img src={prof1}
                                                        className="profile-image rounded-pill" alt="talent-profile" />
                                                </div>
                                            </td>
                                            <td width="250">
                                                <div className="talent-profile-wrapper">
                                                    <img src={prof2}
                                                        className="profile-image rounded-pill" alt="talent-profile" />
                                                </div>
                                            </td>
                                            <td width="300">
                                                <span className="display-6 text-uppercase status-wrapper">
                                                    <svg width="64px" height="64px" viewBox="0 0 64 64" version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <g id="#ee2a59ff">
                                                            <path fill="#ee2a59" opacity="1.00"
                                                                d=" M 30.29 0.00 L 33.69 0.00 C 41.55 0.58 49.29 5.09 52.65 12.39 C 56.43 19.99 52.38 29.05 56.41 36.58 C 58.08 40.34 61.75 42.56 64.00 45.91 L 64.00 48.45 C 62.93 51.32 59.93 52.64 57.02 52.39 C 40.01 52.34 22.99 52.43 5.98 52.34 C 3.38 52.51 1.21 50.90 0.00 48.71 L 0.00 45.95 C 2.21 42.56 5.92 40.35 7.59 36.58 C 11.62 29.05 7.57 20.00 11.35 12.40 C 14.70 5.10 22.44 0.59 30.29 0.00 Z" />
                                                            <path fill="#ee2a59" opacity="1.00"
                                                                d=" M 19.93 55.34 C 27.99 55.19 36.05 55.20 44.11 55.33 C 42.44 59.92 38.46 63.40 33.55 64.00 L 30.67 64.00 C 25.68 63.50 21.60 59.99 19.93 55.34 Z" />
                                                        </g>
                                                    </svg>
                                                </span>
                                            </td>
                                            <td>
                                                <Link to="/kados-details">
                                                    <svg width="32px" height="42px" viewBox="0 0 23 28" version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <g id="#58585aff">
                                                            <path fill="#231f20" opacity="1.00"
                                                                d=" M 0.00 0.00 L 2.55 0.00 C 9.43 4.35 16.19 8.90 23.00 13.37 L 23.00 14.57 C 16.26 19.15 9.42 23.58 2.57 28.00 L 0.00 28.00 L 0.00 26.06 C 5.75 21.92 11.69 18.06 17.49 14.00 C 11.69 9.94 5.75 6.07 0.00 1.94 L 0.00 0.00 Z" />
                                                        </g>
                                                    </svg>
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td width="200">
                                                <div className="fs-2 text-center w-50 mx-auto sent-wrapper">
                                                    SEPT
                                                    <span className="display-2 day-sent">18</span>
                                                    2020
                                                </div>
                                            </td>
                                            <td width="250">
                                                <div className="talent-profile-wrapper">
                                                    <img src={prof1}
                                                        className="profile-image rounded-pill" alt="talent-profile" />
                                                </div>
                                            </td>
                                            <td width="250">
                                                <div className="talent-profile-wrapper">
                                                    <img src={prof2}
                                                        className="profile-image rounded-pill" alt="talent-profile" />
                                                </div>
                                            </td>
                                            <td width="300">
                                                <span className="display-6 text-uppercase status-wrapper">
                                                    status
                                                </span>
                                            </td>
                                            <td>
                                                <Link to="/kados-details">
                                                    <svg width="32px" height="42px" viewBox="0 0 23 28" version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <g id="#58585aff">
                                                            <path fill="#231f20" opacity="1.00"
                                                                d=" M 0.00 0.00 L 2.55 0.00 C 9.43 4.35 16.19 8.90 23.00 13.37 L 23.00 14.57 C 16.26 19.15 9.42 23.58 2.57 28.00 L 0.00 28.00 L 0.00 26.06 C 5.75 21.92 11.69 18.06 17.49 14.00 C 11.69 9.94 5.75 6.07 0.00 1.94 L 0.00 0.00 Z" />
                                                        </g>
                                                    </svg>
                                                </Link>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default kadosList;