import React, { Component } from 'react';

import '../../App.css';
import './KadosDetails.css';
import prof1 from '../../assets/images/banner-surprise-message.png';
import prof2 from '../../assets/images/banner-send-personalized-images.jpg';

class kadosDetails extends Component {

    render() {
        return (
            <div className="kados-details">
                <section className="pb-5">
                    <div className="container-fluid px-5">
                        <div className="customs-wrapper w-100 mx-auto">
                            <h2 className="text-uppercase theme-pink-color display-4 mx-3 mb-3">KÂdo Details</h2>
                            <div className="list-requested-wrapper">
                                <div className="header-text text-center p-3 theme-dark-header-color">
                                    <h3 className="text-uppercase text-white display-5">REQUESTED</h3>
                                </div>
                                <div className="card-group requested-list text-center">
                                    <div className="card py-5 rounded-0 border-0">
                                        <img className="img-fluid" src={prof2}
                                            className="profile-image rounded-pill card-img-top mx-auto" alt="talent-profile" />
                                        <div className="card-body">
                                            <h5 className="card-title fs-2 font-ave-roman color-set">You</h5>
                                            <p className="card-text text-uppercase theme-pink-color font-ave-heavy fs-2 mb-0">Requested
                                            </p>
                                            <p className="card-text date-wrapper"><small className="fs-1 text-uppercase color-set">Sept 18, 2020</small>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="card py-5 rounded-0 border-0">
                                        <img className="img-fluid" src={prof1}
                                            className="profile-image rounded-pill card-img-top mx-auto" alt="talent-profile" />
                                        <div className="card-body">
                                            <h5 className="card-title fs-2 font-ave-roman color-set">Nazanin Boniadi</h5>
                                            <p className="card-text text-uppercase theme-pink-color font-ave-heavy fs-2 mb-0">Accepted
                                            </p>
                                            <p className="card-text date-wrapper"><small className="fs-1 text-uppercase color-set">Sept 19, 2020</small>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="card py-5 rounded-0 border-0">
                                        <img className="img-fluid" src={prof2}
                                            className="profile-image rounded-pill card-img-top mx-auto" alt="talent-profile" />
                                        <div className="card-body">
                                            <h5 className="card-title fs-2 font-ave-roman color-set">Navid Firoozi</h5>
                                            <p className="card-text text-uppercase theme-pink-color font-ave-heavy fs-2 mb-0">Pending
                                            </p>
                                            <p className="card-text date-wrapper"><small className="fs-1 text-uppercase color-set">-</small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="footer-text text-center p-3 py-5 color-set">
                                    <div className="f-header-text mb-5">
                                        <h3 className="text-uppercase display-5">OCCASION</h3>
                                        <p className="font-ave-roman fs-1">Birthday</p>
                                    </div>
                                    <div className="f-header-text mb-5 w-75 mw-100 mx-auto">
                                        <h3 className="text-uppercase display-5">INSTRUCTIONS</h3>
                                        <p className="font-ave-roman fs-1">Tell Navid I wish him a great birthday and if
                                        he ever stops being my friend I will stalk him
                                        and bang pots in front of his window
                                late at night to keep him awake!</p>
                                    </div>
                                    <div className="f-header-text mb-5">
                                        <h3 className="text-uppercase display-5">LANGUAGE REQUEST</h3>
                                        <p className="font-ave-roman fs-1">English / Spanish - Mix is OK</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default kadosDetails;