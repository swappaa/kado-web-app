import React, { Component } from 'react';
import SuccessfulBooking from '../../components/SuccessfulMessage/SuccessfulMessage';
import Tips from '../../components/Tips/Tips';
import Aux from '../../hoc/Auxi/Auxi';

import withAuthorization from '../../hoc/withAuthorization/withAuthorization';
import '../../App.css';
import './Booking.css';
import prof1 from '../../assets/images/banner-send-personalized-images.jpg';
import recepientMyself from '../../assets/images/svg/myself.svg';
import recepientFriend from '../../assets/images/svg/friend.svg';
import tips from '../../assets/images/svg/tips.svg';
import anniversary from '../../assets/images/svg/occasion/anniversary.svg';
import apology from '../../assets/images/svg/occasion/apology.svg';
import birthday from '../../assets/images/svg/occasion/bday.svg';
import celebration from '../../assets/images/svg/occasion/celebration.svg';
import christmas from '../../assets/images/svg/occasion/christmas.svg';
import condolences from '../../assets/images/svg/occasion/condolences.svg';
import congrats from '../../assets/images/svg/occasion/congrats.svg';
import easter from '../../assets/images/svg/occasion/easter.svg';
import friendship from '../../assets/images/svg/occasion/friendship.svg';
import getwell from '../../assets/images/svg/occasion/getwell.svg';
import hanukkah from '../../assets/images/svg/occasion/hanukkah.svg';
import love from '../../assets/images/svg/occasion/love.svg';
import missyou from '../../assets/images/svg/occasion/miss you.svg';
import motivate from '../../assets/images/svg/occasion/motivate.svg';
import newhome from '../../assets/images/svg/occasion/new home.svg';
import none from '../../assets/images/svg/occasion/none.svg';
import nowruz from '../../assets/images/svg/occasion/nowruz.svg';
import roast from '../../assets/images/svg/occasion/roast.svg';
import thankyou from '../../assets/images/svg/occasion/thank you.svg';
import wedding from '../../assets/images/svg/occasion/wedding.svg';

class Booking extends Component {

    componentDidMount() {
        window.scroll({
            top: 0
        });
        localStorage.setItem('path', window.location.pathname);
    }

    render() {
        return (
            <Aux>
                <div className="booking">
                    <section className="pb-5">
                        <div className="container-fluid px-5">
                            <div className="customs-wrapper w-100 mx-auto">
                                <h2 className="text-uppercase theme-pink-color display-4 mb-4">BOOKING A KÂDO</h2>
                            </div>
                        </div>
                        <div className="booking-wrapper-proc">
                            <div className="row row-cols-1 g-0">
                                <div className="col request step">
                                    <div className="container-fluid px-5">
                                        <div className="customs-wrapper w-100 mx-auto">
                                            <div className="card border-0  bg-transparent py-4">
                                                <div className="row g-0 align-items-center">
                                                    <div className="col-lg-4">
                                                        <p className="font-ave-heavy fs-1 text-uppercase theme-pink-color booking-title-step"><span
                                                            className="rounded-circle p-3 px-4 theme-pink-bg-color text-white text-center proc-book font-ave-black fs-1 me-4">1</span>
                                            Request</p>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <div className="card-body d-flex align-items-center justify-content-center justify-content-lg-start">
                                                            <img src={prof1}
                                                                className="profile-image rounded-pill card-img-top me-4 border-0"
                                                                alt="request-profile" />
                                                            <h5 className="card-title fs-1">KamyR</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col recipient step">
                                    <div className="container-fluid px-5">
                                        <div className="customs-wrapper w-100 mx-auto">
                                            <div className="card border-0  bg-transparent py-4">
                                                <div className="row g-0 align-items-center">
                                                    <div className="col-lg-4">
                                                        <p className="font-ave-heavy fs-1 text-uppercase theme-pink-color booking-title-step"><span
                                                            className="rounded-circle p-3 px-4 theme-pink-bg-color text-white text-center proc-book font-ave-black fs-1 me-4">2</span>
                                            Recipient</p>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <div className="card-body d-flex align-items-center">
                                                            <div className="recepient-wrapper d-flex flex-wrap justify-content-center justify-content-lg-start w-50">
                                                                <div className="choose-recipient text-center me-lg-5 mx-auto mx-lg-0 mb-3 mb-sm-0">
                                                                    <img className="img-fluid svg-icon" src={recepientMyself}
                                                                        alt="myself" />
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="checkbox" value="" />
                                                                        <label className="form-check-label fs-5">
                                                                            Myself
                                                                </label>
                                                                    </div>
                                                                </div>
                                                                <div className="choose-recipient text-center me-lg-5 mx-auto mx-lg-0">
                                                                    <img className="img-fluid svg-icon" src={recepientFriend}
                                                                        alt="friend" />
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="checkbox" value="" />
                                                                        <label className="form-check-label fs-5">
                                                                            Friend
                                                                </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="Recipient-pic-wrapper w-50 mx-auto">
                                                                <div className="input-group mb-4">
                                                                    <span
                                                                        className="input-group-text border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded-0 bg-transparent px-0">

                                                                    </span>
                                                                    <input type="text"
                                                                        className="form-control form-control-lg border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded-0 fs-4 px-0"
                                                                        placeholder="Recipient Name" aria-label="Recipient Name" />
                                                                </div>
                                                                <div className="input-group mb-4">
                                                                    <span
                                                                        className="input-group-text border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded-0 bg-transparent px-0">

                                                                    </span>
                                                                    <input type="text"
                                                                        className="form-control form-control-lg border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded-0 fs-4 px-0"
                                                                        placeholder="Pronoun" aria-label="Pronoun" />
                                                                </div>
                                                                <div className="d-flex flex-wrap align-items-center mb-3">
                                                                    <span className="fs-4 text-muted">Recipient Pic (Optional)</span>
                                                                    <button
                                                                        className="my-3 btn br-radius-40 fs-5 text-dark py-2 px-5 border border-dark mx-auto">
                                                                        Upload
                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col occasion step">
                                    <div className="container-fluid px-5">
                                        <div className="customs-wrapper w-100 mx-auto">
                                            <div className="card border-0  bg-transparent py-5">
                                                <div className="row g-0 align-items-center">
                                                    <div className="col-lg-4">
                                                        <p className="font-ave-heavy fs-1 text-uppercase theme-pink-color booking-title-step"><span
                                                            className="rounded-circle p-3 px-4 theme-pink-bg-color text-white text-center proc-book font-ave-black fs-1 me-4">3</span>
                                            OCCASION</p>
                                                    </div>
                                                    <div className="col-lg-8 py-4 p-0 p-sm-4 p-lg-0">
                                                        <div className="row g-3 justify-content-center justify-content-lg-start">
                                                            <div className="col-2 occasion-item">
                                                                <div className="border-0 text-center p-2 position-relative">
                                                                    <img src={birthday}
                                                                        className="img-fluid occasion-icon mx-auto" alt="birthday" />
                                                                    <div className="py-1 pb-0">
                                                                        <small className="text-uppercase">B-Day</small>
                                                                    </div>
                                                                    <a href="#" className="stretched-link"></a>
                                                                </div>
                                                            </div>
                                                            <div className="col-2 occasion-item">
                                                                <div className="border-0 text-center p-2 position-relative">
                                                                    <img src={wedding}
                                                                        className="img-fluid occasion-icon mx-auto" alt="Wedding" />
                                                                    <div className="py-1 pb-0">
                                                                        <small className="text-uppercase">Wedding</small>
                                                                    </div>
                                                                    <a href="#" className="stretched-link"></a>
                                                                </div>
                                                            </div>
                                                            <div className="col-2 occasion-item">
                                                                <div className="border-0 text-center p-2 position-relative">
                                                                    <img src={anniversary}
                                                                        className="img-fluid occasion-icon mx-auto" alt="Anniversary" />
                                                                    <div className="py-1 pb-0">
                                                                        <small className="text-uppercase">Anniversary</small>
                                                                    </div>
                                                                    <a href="#" className="stretched-link"></a>
                                                                </div>
                                                            </div>
                                                            <div className="col-2 occasion-item">
                                                                <div className="border-0 text-center p-2 position-relative">
                                                                    <img src={friendship}
                                                                        className="img-fluid occasion-icon mx-auto" alt="Friendship" />
                                                                    <div className="py-1 pb-0">
                                                                        <small className="text-uppercase">Friendship</small>
                                                                    </div>
                                                                    <a href="#" className="stretched-link"></a>
                                                                </div>
                                                            </div>
                                                            <div className="col-2 occasion-item">
                                                                <div className="border-0 text-center p-2 position-relative">
                                                                    <img src={love}
                                                                        className="img-fluid occasion-icon mx-auto" alt="Love" />
                                                                    <div className="py-1 pb-0">
                                                                        <small className="text-uppercase">Love</small>
                                                                    </div>
                                                                    <a href="#" className="stretched-link"></a>
                                                                </div>
                                                            </div>
                                                            <div className="col-2 occasion-item">
                                                                <div className="border-0 text-center p-2 position-relative">
                                                                    <img src={condolences}
                                                                        className="img-fluid occasion-icon mx-auto" alt="Condolences" />
                                                                    <div className="py-1 pb-0">
                                                                        <small className="text-uppercase">Condolences</small>
                                                                    </div>
                                                                    <a href="#" className="stretched-link"></a>
                                                                </div>
                                                            </div>
                                                            <div className="col-2 occasion-item">
                                                                <div className="border-0 text-center p-2 position-relative">
                                                                    <img src={apology}
                                                                        className="img-fluid occasion-icon mx-auto" alt="Apology" />
                                                                    <div className="py-1 pb-0">
                                                                        <small className="text-uppercase">Apology</small>
                                                                    </div>
                                                                    <a href="#" className="stretched-link"></a>
                                                                </div>
                                                            </div>
                                                            <div className="col-2 occasion-item">
                                                                <div className="border-0 text-center p-2 position-relative">
                                                                    <img src={thankyou}
                                                                        className="img-fluid occasion-icon mx-auto" alt="Thank You" />
                                                                    <div className="py-1 pb-0">
                                                                        <small className="text-uppercase">Thank You</small>
                                                                    </div>
                                                                    <a href="#" className="stretched-link"></a>
                                                                </div>
                                                            </div>
                                                            <div className="col-2 occasion-item">
                                                                <div className="border-0 text-center p-2 position-relative">
                                                                    <img src={christmas}
                                                                        className="img-fluid occasion-icon mx-auto" alt="Christmas" />
                                                                    <div className="py-1 pb-0">
                                                                        <small className="text-uppercase">Christmas</small>
                                                                    </div>
                                                                    <a href="#" className="stretched-link"></a>
                                                                </div>
                                                            </div>
                                                            <div className="col-2 occasion-item">
                                                                <div className="border-0 text-center p-2 position-relative">
                                                                    <img src={nowruz}
                                                                        className="img-fluid occasion-icon mx-auto" alt="nowruz" />
                                                                    <div className="py-1 pb-0">
                                                                        <small className="text-uppercase">nowruz</small>
                                                                    </div>
                                                                    <a href="#" className="stretched-link"></a>
                                                                </div>
                                                            </div>
                                                            <div className="col-2 occasion-item">
                                                                <div className="border-0 text-center p-2 position-relative">
                                                                    <img src={getwell}
                                                                        className="img-fluid occasion-icon mx-auto" alt="get well" />
                                                                    <div className="py-1 pb-0">
                                                                        <small className="text-uppercase">get well</small>
                                                                    </div>
                                                                    <a href="#" className="stretched-link"></a>
                                                                </div>
                                                            </div>
                                                            <div className="col-2 occasion-item">
                                                                <div className="border-0 text-center p-2 position-relative">
                                                                    <img src={newhome}
                                                                        className="img-fluid occasion-icon mx-auto" alt="new home" />
                                                                    <div className="py-1 pb-0">
                                                                        <small className="text-uppercase">new home</small>
                                                                    </div>
                                                                    <a href="#" className="stretched-link"></a>
                                                                </div>
                                                            </div>
                                                            <div className="col-2 occasion-item">
                                                                <div className="border-0 text-center p-2 position-relative">
                                                                    <img src={congrats}
                                                                        className="img-fluid occasion-icon mx-auto" alt="congrats" />
                                                                    <div className="py-1 pb-0">
                                                                        <small className="text-uppercase">congrats</small>
                                                                    </div>
                                                                    <a href="#" className="stretched-link"></a>
                                                                </div>
                                                            </div>
                                                            <div className="col-2 occasion-item">
                                                                <div className="border-0 text-center p-2 position-relative">
                                                                    <img src={motivate}
                                                                        className="img-fluid occasion-icon mx-auto" alt="motivate" />
                                                                    <div className="py-1 pb-0">
                                                                        <small className="text-uppercase">motivate</small>
                                                                    </div>
                                                                    <a href="#" className="stretched-link"></a>
                                                                </div>
                                                            </div>
                                                            <div className="col-2 occasion-item">
                                                                <div className="border-0 text-center p-2 position-relative">
                                                                    <img src={celebration}
                                                                        className="img-fluid occasion-icon mx-auto" alt="celebration" />
                                                                    <div className="py-1 pb-0">
                                                                        <small className="text-uppercase">celebration</small>
                                                                    </div>
                                                                    <a href="#" className="stretched-link"></a>
                                                                </div>
                                                            </div>
                                                            <div className="col-2 occasion-item">
                                                                <div className="border-0 text-center p-2 position-relative">
                                                                    <img src={missyou}
                                                                        className="img-fluid occasion-icon mx-auto" alt="miss you" />
                                                                    <div className="py-1 pb-0">
                                                                        <small className="text-uppercase">miss you</small>
                                                                    </div>
                                                                    <a href="#" className="stretched-link"></a>
                                                                </div>
                                                            </div>
                                                            <div className="col-2 occasion-item">
                                                                <div className="border-0 text-center p-2 position-relative">
                                                                    <img src={roast}
                                                                        className="img-fluid occasion-icon mx-auto" alt="roast" />
                                                                    <div className="py-1 pb-0">
                                                                        <small className="text-uppercase">roast</small>
                                                                    </div>
                                                                    <a href="#" className="stretched-link"></a>
                                                                </div>
                                                            </div>
                                                            <div className="col-2 occasion-item">
                                                                <div className="border-0 text-center p-2 position-relative">
                                                                    <img src={none}
                                                                        className="img-fluid occasion-icon mx-auto" alt="none" />
                                                                    <div className="py-1 pb-0">
                                                                        <small className="text-uppercase">none</small>
                                                                    </div>
                                                                    <a href="#" className="stretched-link"></a>
                                                                </div>
                                                            </div>
                                                            <div className="col-2 occasion-item">
                                                                <div className="border-0 text-center p-2 position-relative">
                                                                    <img src={hanukkah}
                                                                        className="img-fluid occasion-icon mx-auto" alt="hanukkah" />
                                                                    <div className="py-1 pb-0">
                                                                        <small className="text-uppercase">hanukkah</small>
                                                                    </div>
                                                                    <a href="#" className="stretched-link"></a>
                                                                </div>
                                                            </div>
                                                            <div className="col-2 occasion-item">
                                                                <div className="border-0 text-center p-2 position-relative">
                                                                    <img src={easter}
                                                                        className="img-fluid occasion-icon mx-auto" alt="easter" />
                                                                    <div className="py-1 pb-0">
                                                                        <small className="text-uppercase">easter</small>
                                                                    </div>
                                                                    <a href="#" className="stretched-link"></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="input-group mt-4 w-50 mw-100">
                                                            <span
                                                                className="input-group-text border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded-0 bg-transparent px-0">
                                                            </span>
                                                            <input type="text"
                                                                className="form-control form-control-lg border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded-0 fs-4 px-0 bg-transparent"
                                                                placeholder="Other" aria-label="Other" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col instructions step">
                                    <div className="container-fluid px-5">
                                        <div className="customs-wrapper w-100 mx-auto">
                                            <div className="card border-0  bg-transparent py-4">
                                                <div className="row g-0 align-items-center">
                                                    <div className="col-lg-4">
                                                        <p className="font-ave-heavy fs-1 text-uppercase theme-pink-color booking-title-step"><span
                                                            className="rounded-circle p-3 px-4 theme-pink-bg-color text-white text-center proc-book font-ave-black fs-1 me-4">4</span>
                                            INSTRUCTIONS</p>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <div className="card-body px-0 w-75 mw-100">
                                                            <div className="mb-3">
                                                                <div className="d-flex align-items-center mb-2 position-relative">
                                                                    <img className="svg-icon-50 img-fluid me-3"
                                                                        src={tips} alt="tips" />
                                                                    <label className="form-label font-ave-book fs-4 m-0">

                                                                        Tips for great
                                                        kâdos!</label>
                                                                    <button className="btn stretched-link" data-bs-toggle="modal" data-bs-target="#tips-modal" ></button>
                                                                </div>
                                                                <textarea className="form-control border-dark rounded-0"
                                                                    rows="6"></textarea>
                                                                <div className="py-3">
                                                                    <span
                                                                        className="count-text float-end theme-pink-color fs-3 font-ave-heavy">400</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col language step">
                                    <div className="container-fluid px-5">
                                        <div className="customs-wrapper w-100 mx-auto">
                                            <div className="card border-0  bg-transparent py-4">
                                                <div className="row g-0 align-items-center">
                                                    <div className="col-lg-4">
                                                        <p className="font-ave-heavy fs-1 text-uppercase theme-pink-color booking-title-step"><span
                                                            className="rounded-circle p-3 px-4 theme-pink-bg-color text-white text-center proc-book font-ave-black fs-1 me-4">5</span>
                                            LANGUAGE</p>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <div className="card-body px-0 w-75 mw-100">
                                                            <div className="row row-cols-2 g-4 w-75 mw-100 btn-wrapper">
                                                                <div className="col text-center">
                                                                    <button className="btn text-uppercase bg-white fs-4 py-2"
                                                                        type="button">English</button>
                                                                </div>
                                                                <div className="col text-center">
                                                                    <button className="btn text-uppercase bg-white fs-4 py-2"
                                                                        type="button">Mix
                                                                        is
                                                        ok</button>
                                                                </div>
                                                                <div className="col text-center">
                                                                    <button className="btn text-uppercase bg-white fs-4 py-2"
                                                                        type="button">Persian
                                                        (farsi)</button>
                                                                </div>
                                                                <div className="col text-center">
                                                                    <button className="btn text-uppercase bg-white fs-4 py-2"
                                                                        type="button">No
                                                        Reference</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col payment step">
                                    <div className="container-fluid px-5">
                                        <div className="customs-wrapper w-100 mx-auto">
                                            <div className="card border-0 bg-transparent pt-5">
                                                <div className="row g-0">
                                                    <div className="col-lg-4">
                                                        <p className="font-ave-heavy fs-1 text-uppercase theme-pink-color booking-title-step"><span
                                                            className="rounded-circle p-3 px-4 theme-pink-bg-color text-white text-center proc-book font-ave-black fs-1 me-4">6</span>
                                            PAYMENT</p>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <div className="card-body px-0 w-50 mw-100 p-0">
                                                            <h2 className="font-ave-heavy">DO YOU HAVE A PROMO CODE?</h2>
                                                            <div className="input-group mb-3">
                                                                <input type="text" className="form-control rounded-0 border border-2 py-3" />
                                                                <span className="input-group-text fs-5 px-4 rounded-0"><a className="text-white" href="#">Apply</a></span>
                                                            </div>
                                                            <ul className="list-group pe-5 bg-transparent">
                                                                <li className="d-flex justify-content-between align-items-center font-ave-reg fs-4 bg-transparent px-4 py-2 text-muted">
                                                                    Video  Message
                                                                <span className="badge bg-transparent rounded-pill text-muted fs-4">$155.00</span>
                                                                </li>
                                                                <li className="d-flex justify-content-between align-items-center font-ave-reg fs-4 bg-transparent px-4 py-2 text-muted">
                                                                    Credits
                                                                <span className="badge bg-transparent rounded-pill text-muted fs-4">- $25.00</span>
                                                                </li>
                                                                <li className="d-flex justify-content-between align-items-center font-ave-reg fs-4 bg-transparent px-4 py-2 text-muted">
                                                                    Promo Code
                                                                <span className="badge bg-transparent rounded-pill text-muted fs-4">- $20.00</span>
                                                                </li>
                                                                <li className="d-flex justify-content-between align-items-center font-ave-heavy fs-2 bg-transparent px-4 py-2 text-muted">
                                                                    Total
                                                                <span className="badge bg-transparent rounded-pill text-muted fs-2">$110.00</span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 booknow">
                                    <div className="container-fluid px-5">
                                        <div className="customs-wrapper w-100 mx-auto">
                                            <div className="card border-0  bg-transparent p-0">
                                                <div className="row g-0 align-items-center  justify-content-center  justify-content-lg-start">
                                                    <div className="col-lg-4 order-2 order-lg-1">
                                                        <div className="text-end fs-5 text-muted font-ave-book pe-4">
                                                            <p>Clicking Book does not guarantee the Talent will accept
                                                            your request. All kâdo requests are filled at the Talent’s
                                                            discretion. Requests must comply with our
                                                                 <a className="text-decoration-underline me-2" href="#">Terms of Service</a>
                                                                and   <a className="text-decoration-underline ms-2" href="#">Privacy Policies</a>.
                                                                </p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-8 order-1 order-lg-2">
                                                        <div className="card-body px-0 w-75 mw-100">
                                                            <div className="book-now d-grid my-3">

                                                                <button data-bs-toggle="modal" data-bs-target="#success-modal" className="font-ave-heavy btn theme-pink-bg-color text-white br-radius-40 py-4 btn-hvr">
                                                                    <span className="display-4 text-uppercase">BOOK NOW</span>
                                                                </button>
                                                            </div>
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
                </div>
                <SuccessfulBooking />
                <Tips />
            </Aux>
        )
    }
}

export default withAuthorization(Booking);