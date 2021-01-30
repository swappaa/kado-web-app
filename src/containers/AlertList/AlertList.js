import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../App.css';
import './AlertList.css';
import prof1 from '../../assets/images/banner-surprise-message.png';
import prof2 from '../../assets/images/banner-send-personalized-images.jpg';
import prof3 from '../../assets/images/highlighted-kados.png';

class alertList extends Component {

    render() {
        return (
            <div className="alerts-list">
                <section className="pb-5">
                    <div className="container-fluid px-5">
                        <div className="customs-wrapper w-100 mx-auto">
                            <h2 className="text-uppercase theme-pink-color display-5 mx-3 mb-3">Alerts</h2>
                            <ul className="d-flex flex-column">
                                <li>
                                    <div className="d-flex align-items-center position-relative p-3 py-5 p-sm-5">
                                        <img src={prof1}
                                            className="flex-shrink-0 me-4 profile-image rounded-pill" alt="fan-profile" />
                                        <div className="notification-message flex-grow-1 text-truncate">
                                            <h5 className="mt-0 fs-2">Erfan</h5>
                                            <p className=" text-truncate d-block font-ave-book w-100 fs-5" style={{ maxWidth: '820px' }}>
                                                Cras sit
                                                amet nibh
                                                libero, in gravida nulla.
                                                Nulla vel metus
                                                scelerisque ante
                                                sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                                                Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in
                                    faucibus.</p>
                                            <Link className="stretched-link" to="/alert-messages"></Link>
                                        </div>
                                        <div className="align-self-start notif-date-wrapper white-space-nowrap">
                                            <span className="font-ave-book me-2 fs-5">Today 3:05pm</span>
                                            <svg width="23px" height="28px" viewBox="0 0 23 28" version="1.1"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <g id="#58585aff">
                                                    <path fill="#58585a" opacity="1.00"
                                                        d=" M 0.00 0.00 L 2.55 0.00 C 9.43 4.35 16.19 8.90 23.00 13.37 L 23.00 14.57 C 16.26 19.15 9.42 23.58 2.57 28.00 L 0.00 28.00 L 0.00 26.06 C 5.75 21.92 11.69 18.06 17.49 14.00 C 11.69 9.94 5.75 6.07 0.00 1.94 L 0.00 0.00 Z" />
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex align-items-center position-relative p-3 py-5 p-sm-5">
                                        <img src={prof2}
                                            className="flex-shrink-0 me-4 profile-image rounded-pill" alt="fan-profile" />
                                        <div className="notification-message flex-grow-1 text-truncate">
                                            <h5 className="mt-0 fs-2">Erfan</h5>
                                            <p className=" text-truncate d-block font-ave-book w-100 fs-5" style={{ maxWidth: '820px' }}>
                                                Cras sit
                                                amet nibh
                                                libero, in gravida nulla.
                                                Nulla vel metus
                                                scelerisque ante
                                                sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                                                Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in
                                    faucibus.</p>
                                            <Link className="stretched-link" to="/alert-messages"></Link>
                                        </div>
                                        <div className="align-self-start notif-date-wrapper white-space-nowrap">
                                            <span className="font-ave-book me-2 fs-5">Yesterday 8:22am</span>
                                            <svg width="23px" height="28px" viewBox="0 0 23 28" version="1.1"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <g id="#58585aff">
                                                    <path fill="#58585a" opacity="1.00"
                                                        d=" M 0.00 0.00 L 2.55 0.00 C 9.43 4.35 16.19 8.90 23.00 13.37 L 23.00 14.57 C 16.26 19.15 9.42 23.58 2.57 28.00 L 0.00 28.00 L 0.00 26.06 C 5.75 21.92 11.69 18.06 17.49 14.00 C 11.69 9.94 5.75 6.07 0.00 1.94 L 0.00 0.00 Z" />
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex align-items-center position-relative p-3 py-5 p-sm-5">
                                        <img src={prof3}
                                            className="flex-shrink-0 me-4 profile-image rounded-pill" alt="fan-profile" />
                                        <div className="notification-message flex-grow-1 text-truncate">
                                            <h5 className="mt-0 fs-2">Erfan</h5>
                                            <p className=" text-truncate d-block font-ave-book w-100 fs-5" style={{ maxWidth: '820px' }}>
                                                Cras sit
                                                amet nibh
                                                libero, in gravida nulla.
                                                Nulla vel metus
                                                scelerisque ante
                                                sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                                                Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in
                                    faucibus.</p>
                                            <Link className="stretched-link" to="/alert-messages"></Link>
                                        </div>
                                        <div className="align-self-start notif-date-wrapper white-space-nowrap">
                                            <span className="font-ave-book me-2 fs-5">Today 3:05pm</span>
                                            <svg width="23px" height="28px" viewBox="0 0 23 28" version="1.1"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <g id="#58585aff">
                                                    <path fill="#58585a" opacity="1.00"
                                                        d=" M 0.00 0.00 L 2.55 0.00 C 9.43 4.35 16.19 8.90 23.00 13.37 L 23.00 14.57 C 16.26 19.15 9.42 23.58 2.57 28.00 L 0.00 28.00 L 0.00 26.06 C 5.75 21.92 11.69 18.06 17.49 14.00 C 11.69 9.94 5.75 6.07 0.00 1.94 L 0.00 0.00 Z" />
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex align-items-center position-relative p-3 py-5 p-sm-5">
                                        <img src={prof1}
                                            className="flex-shrink-0 me-4 profile-image rounded-pill" alt="fan-profile" />
                                        <div className="notification-message flex-grow-1 text-truncate">
                                            <h5 className="mt-0 fs-2">Erfan</h5>
                                            <p className=" text-truncate d-block font-ave-book w-100 fs-5" style={{ maxWidth: '820px' }}>
                                                Cras sit
                                                amet nibh
                                                libero, in gravida nulla.
                                                Nulla vel metus
                                                scelerisque ante
                                                sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                                                Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in
                                    faucibus.</p>
                                            <Link className="stretched-link" to="/alert-messages"></Link>
                                        </div>
                                        <div className="align-self-start notif-date-wrapper white-space-nowrap">
                                            <span className="font-ave-book me-2 fs-5">Yesterday 8:22am</span>
                                            <svg width="23px" height="28px" viewBox="0 0 23 28" version="1.1"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <g id="#58585aff">
                                                    <path fill="#58585a" opacity="1.00"
                                                        d=" M 0.00 0.00 L 2.55 0.00 C 9.43 4.35 16.19 8.90 23.00 13.37 L 23.00 14.57 C 16.26 19.15 9.42 23.58 2.57 28.00 L 0.00 28.00 L 0.00 26.06 C 5.75 21.92 11.69 18.06 17.49 14.00 C 11.69 9.94 5.75 6.07 0.00 1.94 L 0.00 0.00 Z" />
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default alertList;