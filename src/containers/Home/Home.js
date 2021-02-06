import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../App.css';
import './Home.css';
import banner from '../../assets/images/banner-send-personalized-images.jpg';
import talentProfile from '../../assets/images/talent/1.png';

class Home extends Component {
    render() {
        return (
            <div className="talent-home">
                <section>
                    <div className="container-fluid px-5">
                        <div className="banner-wrapper text-white theme-pink-bg-color">
                            <div className="row">
                                <div className="col-lg-5">
                                    <img className="img-fluid w-100" src={banner}
                                        alt="personalized-message" />
                                </div>
                                <div className="col-lg-7 p-5 p-lg-3 p-xxl-4 d-flex flex-column justify-content-center w-50 cust-wrap-right">
                                    <h2 className="display-4 lh-base">Send personalized messages
                                    to your family and friends
                            from the stars they love!</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-5">
                    <div className="container-fluid px-5">
                        <div className="row align-items-center">
                            <div className="col-lg-8 order-2 order-lg-1">
                                <div className="filter-category">
                                    <ul className="d-flex flex-wrap">
                                        <li><a className="text-uppercase border border-dark rounded-circle ms-0" href="#">Actors</a>
                                        </li>
                                        <li><a className="text-uppercase border border-dark rounded-circle active" href="#">Singers</a>
                                        </li>
                                        <li><a className="text-uppercase border border-dark rounded-circle" href="#">Comedians</a></li>
                                        <li><a className="text-uppercase border border-dark rounded-circle" href="#">Television</a></li>
                                        <li><a className="text-uppercase border border-dark rounded-circle" href="#">radio</a></li>
                                        <li><a className="text-uppercase border border-dark rounded-circle" href="#">Authors</a></li>
                                        <li><a className="text-uppercase border border-dark rounded-circle" href="#">Athletes</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 order-1 order-lg-2 mb-4 mb-lg-0">
                                <div className="searchbox-wrapper ">
                                    <div className="input-group flex-nowrap">
                                        <input type="text"
                                            className="form-control form-control-lg px-4 py-3 br-radius fs-6 border-end-0"
                                            placeholder="SEARCH" aria-label="SEARCH" aria-describedby="basic-addon2" />
                                        <span className="input-group-text bg-transparent del-search border-start-0 border-end-0">
                                            <a href="#">
                                                <svg width="22px" height="20px" viewBox="0 0 22 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                    <g id="#0a09094d">
                                                        <path fill="#0a0909" opacity="0.30" d=" M 0.00 0.00 L 2.20 0.00 C 5.18 2.59 7.97 5.38 11.00 7.90 C 14.03 5.38 16.82 2.61 19.75 0.00 L 22.00 0.00 L 22.00 1.86 C 19.24 4.71 16.13 7.19 13.33 10.00 C 16.13 12.80 19.21 15.30 22.00 18.10 L 22.00 20.00 L 19.79 20.00 C 16.82 17.41 14.03 14.62 11.00 12.10 C 7.97 14.62 5.18 17.39 2.24 20.00 L 0.00 20.00 L 0.00 18.00 C 2.85 15.30 5.89 12.78 8.67 10.00 C 5.89 7.22 2.87 4.70 0.00 2.02 L 0.00 0.00 Z" />
                                                    </g>
                                                </svg>
                                            </a>
                                        </span>
                                        <span
                                            className="input-group-text bg-transparent br-radius px-3 border-start-0 search-wrapper position-relative">
                                            <a
                                                href="#">
                                                <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                                    width="24px" height="24px" viewBox="0 0 10.812 10.771" enableBackground="new 0 0 10.812 10.771" >
                                                    <path fill="#ABADB0" d="M10.592,9.491L8.73,7.628c0.571-0.792,0.916-1.756,0.916-2.805C9.646,2.164,7.483,0,4.823,0
	C2.164,0,0,2.164,0,4.823c0,2.659,2.164,4.822,4.823,4.822c1.07,0,2.05-0.361,2.851-0.953l1.858,1.859
	c0.146,0.146,0.338,0.22,0.53,0.22s0.384-0.073,0.53-0.22C10.885,10.259,10.885,9.784,10.592,9.491z M1.5,4.823
	C1.5,2.991,2.991,1.5,4.823,1.5s3.323,1.491,3.323,3.323c0,1.832-1.491,3.322-3.323,3.322S1.5,6.655,1.5,4.823z"/>
                                                </svg>
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="element-header py-4 d-flex flex-wrap align-items-center justify-content-between">
                                    <h2 className="text-uppercase theme-pink-color display-5">FEATURED SINGERS</h2>
                                    <a className="text-uppercase fs-3 theme-pink-color font-ave-heavy" href="#">SEE ALL SINGERS {'>'}</a>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="d-flex flex-wrap justify-content-around">
                                    <div className="col-lg-2 col-md-4 element-featured-wrapper mb-4">
                                        <div className="featured-wrapper text-center position-relative">
                                            <div className="image-wrapper">
                                                <img className="img-fluid w-100" src={talentProfile} alt="talent-img" />
                                            </div>
                                            <div className="featured-talent my-2">
                                                <h5 className="fs-4">Sepideh</h5>
                                            </div>
                                            <Link className="stretched-link" to="/talent-profile"></Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 element-featured-wrapper mb-4">
                                        <div className="featured-wrapper text-center position-relative">
                                            <div className="image-wrapper">
                                                <img className="img-fluid w-100" src={talentProfile} alt="talent-img" />
                                            </div>
                                            <div className="featured-talent my-2">
                                                <h5 className="fs-4">Erfan</h5>
                                            </div>
                                            <Link className="stretched-link" to="/talent-profile"></Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 element-featured-wrapper mb-4">
                                        <div className="featured-wrapper text-center position-relative">
                                            <div className="image-wrapper">
                                                <img className="img-fluid w-100" src={talentProfile} alt="talent-img" />
                                            </div>
                                            <div className="featured-talent my-2">
                                                <h5 className="fs-4">Sogand</h5>
                                            </div>
                                            <Link className="stretched-link" to="/talent-profile"></Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 element-featured-wrapper mb-4">
                                        <div className="featured-wrapper text-center position-relative">
                                            <div className="image-wrapper">
                                                <img className="img-fluid w-100" src={talentProfile} alt="talent-img" />
                                            </div>
                                            <div className="featured-talent my-2">
                                                <h5 className="fs-4">KamyR</h5>
                                            </div>
                                            <Link className="stretched-link" to="/talent-profile"></Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 element-featured-wrapper mb-4">
                                        <div className="featured-wrapper text-center position-relative">
                                            <div className="image-wrapper">
                                                <img className="img-fluid w-100" src={talentProfile} alt="talent-img" />
                                            </div>
                                            <div className="featured-talent my-2">
                                                <h5 className="fs-4">Azam Ali</h5>
                                            </div>
                                            <Link className="stretched-link" to="/talent-profile"></Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 element-featured-wrapper mb-4">
                                        <div className="featured-wrapper text-center position-relative">
                                            <div className="image-wrapper">
                                                <img className="img-fluid w-100" src={talentProfile} alt="talent-img" />
                                            </div>
                                            <div className="featured-talent my-2">
                                                <h5 className="fs-4">Morvarid</h5>
                                            </div>
                                            <Link className="stretched-link" to="/talent-profile"></Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 element-featured-wrapper mb-4">
                                        <div className="featured-wrapper text-center position-relative">
                                            <div className="image-wrapper">
                                                <img className="img-fluid w-100" src={talentProfile} alt="talent-img" />
                                            </div>
                                            <div className="featured-talent my-2">
                                                <h5 className="fs-4">Andy</h5>
                                            </div>
                                            <Link className="stretched-link" to="/talent-profile"></Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 element-featured-wrapper mb-4">
                                        <div className="featured-wrapper text-center position-relative">
                                            <div className="image-wrapper">
                                                <img className="img-fluid w-100" src={talentProfile} alt="talent-img" />
                                            </div>
                                            <div className="featured-talent my-2">
                                                <h5 className="fs-4">Navid Firoozi</h5>
                                            </div>
                                            <Link className="stretched-link" to="/talent-profile"></Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 element-featured-wrapper mb-4">
                                        <div className="featured-wrapper text-center position-relative">
                                            <div className="image-wrapper">
                                                <img className="img-fluid w-100" src={talentProfile} alt="talent-img" />
                                            </div>
                                            <div className="featured-talent my-2">
                                                <h5 className="fs-4">Googoosh</h5>
                                            </div>
                                            <Link className="stretched-link" to="/talent-profile"></Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 element-featured-wrapper mb-4">
                                        <div className="featured-wrapper text-center position-relative">
                                            <div className="image-wrapper">
                                                <img className="img-fluid w-100" src={talentProfile} alt="talent-img" />
                                            </div>
                                            <div className="featured-talent my-2">
                                                <h5 className="fs-4">Ebi</h5>
                                            </div>
                                            <Link className="stretched-link" to="/talent-profile"></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container-fluid px-5">
                        <div className="download-app-wrapper">
                            <div className="d-flex flex-wrap flex-md-nowrap flex-row align-items-center justify-content-md-start justify-content-center">
                                <button
                                    className="btn theme-pink-bg-color br-radius font-ave-heavy text-white fs-1 w-75 mw-100 text-uppercase py-3 btn-hvr">DOWNLOAD
                                    THE
                        APP</button>
                                <a className="theme-pink-color font-ave-heavy fs-3 ms-0 ms-md-3 mt-4 mt-md-0" href="#">Why get the app?</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-5">
                    <div className="container-fluid px-5">
                        <div className="how-it-works text-white theme-dark-bg-color">
                            <div className="row row-cols-lg-auto g-3 align-items-center p-4 p-sm-5">
                                <div className="col-xxl-2 col-lg-3">
                                    <p className="display-5 text-center text-uppercase lh-1">How it
                            works</p>
                                </div>
                                <div className="col-lg-9">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="col-step-work me-2 me-xl-5 my-2">
                                            <div className="d-flex justify-content-start align-items-center display-6">
                                                <span className="bg-white rounded-circle theme-pink-color font-ave-black me-3">1</span>
                                    Pick a Star
                                </div>
                                        </div>
                                        <div className="col-step-work me-2 me-xl-5 my-2">
                                            <div className="d-flex justify-content-start align-items-center display-6">
                                                <span className="bg-white rounded-circle theme-pink-color font-ave-black me-3">2</span>
                                    Send a Request
                                </div>
                                        </div>
                                        <div className="col-step-work my-2">
                                            <div className="d-flex justify-content-start align-items-center display-6">
                                                <span className="bg-white rounded-circle theme-pink-color font-ave-black me-3">3</span>
                                    Get a Video
                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container-fluid px-5">
                        <div className="join-our-list">
                            <div className="row row-cols-lg-auto g-3 align-items-center p-3 p-sm-5 py-3">
                                <div className="col-lg-6 order-2 order-lg-1">
                                    <div className="input-group mb-3 px-0 px-xl-5">
                                        <input type="text" className="form-control form-control-lg py-4 px-5 br-radius border-end-0"
                                            placeholder="EMAIL ADDRESS" />
                                        <span className="input-group-text br-radius bg-transparent px-4 border-start-0"><a href="#">
                                            <svg width="47px" height="41px" viewBox="0 0 47 41" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                <g id="#aaaaaaff">
                                                    <path fill="#aaaaaa" opacity="1.00" d=" M 27.37 0.00 L 29.74 0.00 C 33.44 1.90 35.80 5.45 38.80 8.19 C 41.87 11.57 46.20 14.40 47.00 19.23 L 47.00 21.91 C 46.11 26.67 41.86 29.46 38.81 32.81 C 35.88 35.57 33.44 38.92 29.93 41.00 L 27.62 41.00 C 24.78 40.20 22.86 37.00 24.15 34.18 C 26.32 30.82 29.59 28.38 32.26 25.44 C 23.15 25.37 14.04 25.56 4.94 25.37 C 2.56 25.56 0.89 23.73 0.00 21.74 L 0.00 19.42 C 0.75 17.26 2.55 15.41 5.01 15.63 C 14.08 15.44 23.17 15.64 32.25 15.56 C 29.57 12.59 26.26 10.16 24.11 6.75 C 22.90 3.98 24.77 1.05 27.37 0.00 Z" />
                                                </g>
                                            </svg>
                                        </a></span>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2">
                                    <h3 className="display-5 text-uppercase lh-1">JOIN OUR LIST</h3>
                                    <p className="fs-3 font-ave-reg">to get inside info on new celebs, deals,
                            and other kâdo news.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div >
        )
    }
}

export default Home;