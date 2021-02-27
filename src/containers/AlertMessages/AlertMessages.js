import React, { Component } from 'react';

import '../../App.css';
import './AlertMessages.css';
import prof1 from '../../assets/images/banner-surprise-message.png';

class alertMessages extends Component {

    componentDidMount() {
        localStorage.setItem('path', window.location.pathname);
    }

    render() {
        return (
            <div className="alerts-messages">
                <section className="py-5">
                    <div className="container-fluid px-5">
                        <div className="customs-wrapper w-100 mx-auto">
                            <h2 className="text-uppercase theme-pink-color display-5 mx-3 mb-3">Messages</h2>
                            <div className="profile-wrapper w-75 mw-100 mx-auto text-center position-relative mb-4">
                                <img src={prof1}
                                    className="flex-shrink-0 me-4 profile-image rounded-circle" alt="fan-profile" />
                                <div className="profile-name mt-3">
                                    <h5 className="mt-0 fs-1 theme-pink-color">Nazanin Boniadi</h5>
                                </div>
                            </div>
                            <ul className="d-flex flex-column mt-5 mt-md-0">
                                <li>
                                    <div className="d-flex align-items-center position-relative p-3 p-sm-5 text-truncate">
                                        <svg width="44px" height="54px" viewBox="0 0 44 54" version="1.1"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g id="#ffffffff">
                                                <path fill="#ffffff" opacity="1.00"
                                                    d=" M 0.00 0.00 L 0.04 0.00 C 14.71 8.95 29.35 17.96 43.99 26.96 L 44.00 25.99 L 44.00 27.87 L 43.99 27.05 C 29.41 36.06 14.73 44.93 0.19 54.00 L 0.00 54.00 L 0.00 0.00 M 3.84 6.66 C 3.66 20.20 3.76 33.75 3.79 47.30 C 15.00 40.73 26.04 33.86 37.04 26.95 C 25.97 20.19 14.98 13.29 3.84 6.66 Z" />
                                            </g>
                                            <g id="#ee2a59ff">
                                                <path fill="#ee2a59" opacity="1.00"
                                                    d=" M 3.84 6.66 C 14.98 13.29 25.97 20.19 37.04 26.95 C 26.04 33.86 15.00 40.73 3.79 47.30 C 3.76 33.75 3.66 20.20 3.84 6.66 Z" />
                                            </g>
                                        </svg>
                                        <div className="message-item-wrapper flex-grow-1 ms-4 text-truncate">
                                            <p className="text-truncate d-block font-ave-book w-100 fs-5 mb-0"
                                                style={{ maxWidth: '820px' }}>
                                                Cras sit
                                                amet nibh
                                                libero, in gravida nulla.
                                                Nulla vel metus
                                                scelerisque ante
                                                sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                                                Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in
                                    faucibus.</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex align-items-center position-relative p-3 p-sm-5 text-truncate response-item">
                                        <div className="message-item-wrapper flex-grow-1 ms-4 text-truncate me-4">
                                            <p className="text-truncate d-block font-ave-book w-100 fs-5 mb-0"
                                                style={{ maxWidth: '820px' }}>
                                                Cras sit
                                                amet nibh
                                                libero, in gravida nulla.
                                                Nulla vel metus
                                                scelerisque ante
                                                sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                                                Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in
                                    faucibus.</p>
                                        </div>
                                        <svg width="44px" height="54px" viewBox="0 0 44 54" version="1.1"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g id="#ffffffff">
                                                <path fill="#ffffff" opacity="1.00"
                                                    d=" M 43.92 0.00 L 44.00 0.00 L 44.00 54.00 L 43.95 54.00 C 39.88 51.60 35.93 49.01 31.84 46.66 L 31.95 46.31 C 31.61 46.22 30.93 46.03 30.59 45.94 C 21.18 39.69 11.14 34.39 1.90 27.89 C 1.43 27.91 0.48 27.94 0.00 27.96 L 0.00 27.30 C 9.72 20.55 20.11 14.76 30.15 8.50 L 30.14 8.30 C 31.80 7.42 33.45 6.51 35.09 5.60 L 34.77 5.49 C 37.87 3.74 40.88 1.84 43.92 0.00 M 6.88 27.00 C 17.99 33.84 29.10 40.67 40.23 47.46 C 40.25 33.83 40.26 20.20 40.23 6.57 C 29.08 13.32 17.99 20.17 6.88 27.00 Z" />
                                            </g>
                                            <g id="#ee2a59ff">
                                                <path fill="#ee2a59" opacity="1.00"
                                                    d=" M 6.88 27.00 C 17.99 20.17 29.08 13.32 40.23 6.57 C 40.26 20.20 40.25 33.83 40.23 47.46 C 29.10 40.67 17.99 33.84 6.88 27.00 Z" />
                                            </g>
                                        </svg>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex align-items-center position-relative p-3 p-sm-5 text-truncate">
                                        <svg width="44px" height="54px" viewBox="0 0 44 54" version="1.1"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g id="#ffffffff">
                                                <path fill="#ffffff" opacity="1.00"
                                                    d=" M 0.00 0.00 L 0.04 0.00 C 14.71 8.95 29.35 17.96 43.99 26.96 L 44.00 25.99 L 44.00 27.87 L 43.99 27.05 C 29.41 36.06 14.73 44.93 0.19 54.00 L 0.00 54.00 L 0.00 0.00 M 3.84 6.66 C 3.66 20.20 3.76 33.75 3.79 47.30 C 15.00 40.73 26.04 33.86 37.04 26.95 C 25.97 20.19 14.98 13.29 3.84 6.66 Z" />
                                            </g>
                                            <g id="#ee2a59ff">
                                                <path fill="#ee2a59" opacity="1.00"
                                                    d=" M 3.84 6.66 C 14.98 13.29 25.97 20.19 37.04 26.95 C 26.04 33.86 15.00 40.73 3.79 47.30 C 3.76 33.75 3.66 20.20 3.84 6.66 Z" />
                                            </g>
                                        </svg>
                                        <div className="message-item-wrapper flex-grow-1 ms-4 text-truncate">
                                            <p className="text-truncate d-block font-ave-book w-100 fs-5 mb-0"
                                                style={{ maxWidth: '820px' }}>
                                                Cras sit
                                                amet nibh
                                                libero, in gravida nulla.
                                                Nulla vel metus
                                                scelerisque ante
                                                sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                                                Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in
                                    faucibus.</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex align-items-center position-relative p-3 p-sm-5 text-truncate response-item">
                                        <div className="message-item-wrapper flex-grow-1 ms-4 text-truncate me-4">
                                            <p className="text-truncate d-block font-ave-book w-100 fs-5 mb-0"
                                                style={{ maxWidth: '820px' }}>
                                                Cras sit
                                                amet nibh
                                                libero, in gravida nulla.
                                                Nulla vel metus
                                                scelerisque ante
                                                sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                                                Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in
                                    faucibus.</p>
                                        </div>
                                        <svg width="44px" height="54px" viewBox="0 0 44 54" version="1.1"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g id="#ffffffff">
                                                <path fill="#ffffff" opacity="1.00"
                                                    d=" M 43.92 0.00 L 44.00 0.00 L 44.00 54.00 L 43.95 54.00 C 39.88 51.60 35.93 49.01 31.84 46.66 L 31.95 46.31 C 31.61 46.22 30.93 46.03 30.59 45.94 C 21.18 39.69 11.14 34.39 1.90 27.89 C 1.43 27.91 0.48 27.94 0.00 27.96 L 0.00 27.30 C 9.72 20.55 20.11 14.76 30.15 8.50 L 30.14 8.30 C 31.80 7.42 33.45 6.51 35.09 5.60 L 34.77 5.49 C 37.87 3.74 40.88 1.84 43.92 0.00 M 6.88 27.00 C 17.99 33.84 29.10 40.67 40.23 47.46 C 40.25 33.83 40.26 20.20 40.23 6.57 C 29.08 13.32 17.99 20.17 6.88 27.00 Z" />
                                            </g>
                                            <g id="#ee2a59ff">
                                                <path fill="#ee2a59" opacity="1.00"
                                                    d=" M 6.88 27.00 C 17.99 20.17 29.08 13.32 40.23 6.57 C 40.26 20.20 40.25 33.83 40.23 47.46 C 29.10 40.67 17.99 33.84 6.88 27.00 Z" />
                                            </g>
                                        </svg>
                                    </div>
                                </li>
                            </ul>
                            <div className="input-message-wrapper px-0 p-5 px-sm-5  w-75 mw-100 mx-auto">
                                <div className="mb-3">
                                    <textarea className="form-control border-dark rounded-0" rows="10"></textarea>
                                    <div className="py-3 d-flex justify-content-between">
                                        <label className="form-label font-ave-book fs-4">You may only reply once per
                                        Talent
                                message.</label>
                                        <span className="count-text float-end theme-pink-color fs-3 font-ave-heavy ms-2">250</span>
                                    </div>
                                </div>
                                <div className="btn-wrapper text-end">
                                    <button
                                        className="btn theme-pink-bg-color text-uppercase rounded-pill text-white py-3 px-5 font-ave-heavy w-50 mw-100 fs-4">send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default alertMessages;