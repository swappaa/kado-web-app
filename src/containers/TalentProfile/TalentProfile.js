import React, { Component } from 'react';

import talentProf from '../../assets/images/profile.png';
import highlightKado from '../../assets/images/highlighted-kados.png';
import charityLogo from '../../assets/images/charity logo.png';
import ratingStarFull from '../../assets/images/svg/Star-Pink-Full.svg';
import ratingStarHalf from '../../assets/images/svg/Star-Pink-Half.svg';


class talentProfile extends Component {
    render() {
        return (
            <div className="talent-profile">
                <section className="py-5">
                    <div className="container-fluid px-5">
                        <div className="profile-wrapper">
                            <div className="row px-5">
                                <div className="col-lg-4">
                                    <img className="img-fluid w-100" src="./assets/images/profile.png" alt="profile" />
                                </div>
                                <div className="col-lg-7">
                                    <div className="element-wrapper px-4">
                                        <div className="d-flex flex-wrap justify-content-between">
                                            <div className="profile-name theme-pink-color">
                                                <h2 className="display-4 lh-base">KamyR</h2>
                                                <span className="fs-1">Singer / Songwriter</span>
                                            </div>
                                            <div className="charity-wrapper">
                                                <div className="element-wrapper text-center p-4" style="border: 1px solid #a4a4a4">
                                                    <img src="./assets/images/charity logo.png" alt="charity-logo" />
                                                    <span className="theme-pink-color fs-3 w-100 d-block">25% to Charity</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="rating-star my-4">
                                            <div className="str-rating-icon mb-3">
                                                <img className="img-fluid" src="./assets/images/svg/Star-Pink-Full.svg"
                                                    alt="rating-star" />
                                                <img className="img-fluid" src="./assets/images/svg/Star-Pink-Full.svg"
                                                    alt="rating-star" />
                                                <img className="img-fluid" src="./assets/images/svg/Star-Pink-Full.svg"
                                                    alt="rating-star" />
                                                <img className="img-fluid" src="./assets/images/svg/Star-Pink-Full.svg"
                                                    alt="rating-star" />
                                                <img className="img-fluid" src="./assets/images/svg/Star-Pink-Half.svg"
                                                    alt="rating-star" />
                                            </div>
                                            <span className="fs-4">Replies in 8.5 hrs</span>
                                        </div>
                                        <div className="profile-details pe-5">
                                            <p className="fs-1 lh-sm mb-4">Born in Tehran, Iran, KamyR is a popular
                                            Persian vocalist and songwriter. KamyR
                                    was raised and educated in France.</p>
                                            <div className="btn-wrapper text-end pe-4">
                                                <a className="text-uppercase theme-pink-color fs-3" href="#">Read More {'>'}</a>
                                            </div>
                                        </div>
                                        <div className="book-now d-grid my-5">
                                            <button className="font-ave-heavy btn theme-pink-bg-color text-white br-radius-40 py-3">
                                                <span className="display-4 text-uppercase">BOOK NOW</span> <br />
                                                <span className="text-trans-unset fs-4 font-ave-reg">[ Personal Video $150.00 ]</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container-fluid px-5">
                        <div className="reviews-wrapper">
                            <div className="element-header d-flex justify-content-between align-items-center px-5 mb-2">
                                <h3 className="text-uppercase theme-pink-color fs-2">REVIEWS</h3> <a
                                    className="theme-pink-color text-uppercase fs-3" href="#">Read ALL 32 REVIEWS{'>'}</a>
                            </div>
                            <div className="row row-cols-1 g-3 px-5">
                                <div className="col">
                                    <div className="card border-0 rounded-0 p-3 py-4 d-reviews-wrapper">
                                        <div
                                            className="rating-star d-flex align-items-center justify-content-center align-self-start px-3">
                                            <div className="str-rating-icon d-flex align-items-center">
                                                <img className="img-fluid svg-icon me-1" src="./assets/images/svg/Star-Pink-Full.svg"
                                                    alt="rating-star" />
                                                <img className="img-fluid svg-icon me-1" src="./assets/images/svg/Star-Pink-Full.svg"
                                                    alt="rating-star" />
                                                <img className="img-fluid svg-icon me-1" src="./assets/images/svg/Star-Pink-Full.svg"
                                                    alt="rating-star" />
                                                <img className="img-fluid svg-icon me-1" src="./assets/images/svg/Star-Pink-Full.svg"
                                                    alt="rating-star" />
                                                <img className="img-fluid svg-icon me-1" src="./assets/images/svg/Star-Pink-Full.svg"
                                                    alt="rating-star" />
                                                <span className="font-ave-black fs-3 ms-4">5.0</span>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title font-ave-reg">Reviewed by <span>C*****</span> on <span>November
                                            30th,
                                        2020</span></h5>
                                            <p className="card-text fs-4 lh-sm">This was a perfect announcement for our staff awards
                                            online
                                            event.
                                            Everybody loved it!
                                            Lily also kindly did it in record time so we could screen it on the day, which was a
                                            massive relief for me.
                                </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card border-0 rounded-0 p-3 py-4 d-reviews-wrapper">
                                        <div
                                            className="rating-star d-flex align-items-center justify-content-center align-self-start px-3">
                                            <div className="str-rating-icon d-flex align-items-center">
                                                <img className="img-fluid svg-icon me-1" src="./assets/images/svg/Star-Pink-Full.svg"
                                                    alt="rating-star" />
                                                <img className="img-fluid svg-icon me-1" src="./assets/images/svg/Star-Pink-Full.svg"
                                                    alt="rating-star" />
                                                <img className="img-fluid svg-icon me-1" src="./assets/images/svg/Star-Pink-Full.svg"
                                                    alt="rating-star" />
                                                <img className="img-fluid svg-icon me-1" src="./assets/images/svg/Star-Pink-Full.svg"
                                                    alt="rating-star" />
                                                <img className="img-fluid svg-icon me-1" src="./assets/images/svg/Star-Pink-Full.svg"
                                                    alt="rating-star" />
                                                <span className="font-ave-black fs-3 ms-4">5.0</span>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title font-ave-reg">Reviewed by <span>C*****</span> on <span>November
                                            30th,
                                        2020</span></h5>
                                            <p className="card-text fs-4 lh-sm">This was a perfect announcement for our staff awards
                                            online
                                            event.
                                            Everybody loved it!
                                            Lily also kindly did it in record time so we could screen it on the day, which was a
                                            massive relief for me.
                                </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card border-0 rounded-0 p-3 py-4 d-reviews-wrapper">
                                        <div
                                            className="rating-star d-flex align-items-center justify-content-center align-self-start px-3">
                                            <div className="str-rating-icon d-flex align-items-center">
                                                <img className="img-fluid svg-icon me-1" src="./assets/images/svg/Star-Pink-Full.svg"
                                                    alt="rating-star" />
                                                <img className="img-fluid svg-icon me-1" src="./assets/images/svg/Star-Pink-Full.svg"
                                                    alt="rating-star" />
                                                <img className="img-fluid svg-icon me-1" src="./assets/images/svg/Star-Pink-Full.svg"
                                                    alt="rating-star" />
                                                <img className="img-fluid svg-icon me-1" src="./assets/images/svg/Star-Pink-Full.svg"
                                                    alt="rating-star" />
                                                <img className="img-fluid svg-icon me-1" src="./assets/images/svg/Star-Pink-Full.svg"
                                                    alt="rating-star" />
                                                <span className="font-ave-black fs-3 ms-4">5.0</span>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title font-ave-reg">Reviewed by <span>C*****</span> on <span>November
                                            30th,
                                        2020</span></h5>
                                            <p className="card-text fs-4 lh-sm">This was a perfect announcement for our staff awards
                                            online
                                            event.
                                            Everybody loved it!
                                            Lily also kindly did it in record time so we could screen it on the day, which was a
                                            massive relief for me.
                                </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-5">
                    <div className="container-fluid px-5">
                        <div className="highlighted-kados">
                            <div className="element-header px-5 my-4">
                                <h3 className="text-uppercase theme-pink-color fs-2">HIGHLIGHTED KâdOS</h3>
                            </div>
                            <div className="row row-cols-1 row-cols-md-4 g-5 px-5">
                                <div className="col">
                                    <div className="card border-0">
                                        <img className="br-radius img-fluid" src="./assets/images/highlighted-kados.png"
                                            className="card-img-top" alt="highlight-kados" />
                                        <div className="card-body">
                                        </div>
                                        <a href="#" className="stretched-link"></a>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card border-0">
                                        <img className="br-radius img-fluid" src="./assets/images/highlighted-kados.png"
                                            className="card-img-top" alt="highlight-kados" />
                                        <div className="card-body">
                                        </div>
                                        <a href="#" className="stretched-link"></a>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card border-0">
                                        <img className="br-radius img-fluid" src="./assets/images/highlighted-kados.png"
                                            className="card-img-top" alt="highlight-kados" />
                                        <div className="card-body">
                                        </div>
                                        <a href="#" className="stretched-link"></a>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card border-0">
                                        <img className="br-radius img-fluid" src="./assets/images/highlighted-kados.png"
                                            className="card-img-top" alt="highlight-kados" />
                                        <div className="card-body">
                                        </div>
                                        <a href="#" className="stretched-link"></a>
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

export default talentProfile;