import React, { Component } from 'react';

import '../../App.css';
import './Favorites.css';
import prof1 from '../../assets/images/banner-surprise-message.png';
import prof2 from '../../assets/images/banner-send-personalized-images.jpg';
import prof3 from '../../assets/images/highlighted-kados.png';

class Favorites extends Component {

    componentDidMount() {
        localStorage.setItem('path', window.location.pathname);
    }

    render() {
        return (
            <div className="favorites">
                <section className="pb-5">
                    <div className="container-fluid px-5">
                        <div className="customs-wrapper w-100 mx-auto">
                            <h2 className="text-uppercase theme-pink-color display-4 mx-3 mb-5">Favorites</h2>
                            <div className="favorites-wrapper">
                                <div className="row row-cols-4 row-cols-md-5 g-3 justify-content-center justify-content-sm-start">
                                    <div className="col-2 favorite-item-wrapper">
                                        <div className="border-0 text-center p-2 position-relative favorite-item">
                                            <img className="img-fluid w-100" src={prof1}
                                                alt="favorites profile picture" />
                                            <h5 className="mt-3 fs-4">KamyR</h5>
                                            <div className="py-1 pb-0">
                                                <small>Singer / Songwriter</small>
                                            </div>
                                            <a href="#" className="stretched-link"></a>
                                        </div>
                                    </div>
                                    <div className="col-2 favorite-item-wrapper">
                                        <div className="border-0 text-center p-2 position-relative favorite-item">
                                            <img className="img-fluid w-100" src={prof2}
                                                alt="favorites profile picture" />
                                            <h5 className="mt-3 fs-4">Bruno Mars</h5>
                                            <div className="py-1 pb-0">
                                                <small>Singer / Songwriter</small>
                                            </div>
                                            <a href="#" className="stretched-link"></a>
                                        </div>
                                    </div>
                                    <div className="col-2 favorite-item-wrapper">
                                        <div className="border-0 text-center p-2 position-relative favorite-item">
                                            <img className="img-fluid w-100" src={prof3}
                                                alt="favorites profile picture" />
                                            <h5 className="mt-3 fs-4">Donald Trump</h5>
                                            <div className="py-1 pb-0">
                                                <small>Singer / Songwriter</small>
                                            </div>
                                            <a href="#" className="stretched-link"></a>
                                        </div>
                                    </div>
                                    <div className="col-2 favorite-item-wrapper">
                                        <div className="border-0 text-center p-2 position-relative favorite-item">
                                            <img className="img-fluid w-100" src={prof1}
                                                alt="favorites profile picture" />
                                            <h5 className="mt-3 fs-4">Mickey Mouse</h5>
                                            <div className="py-1 pb-0">
                                                <small>Singer / Songwriter</small>
                                            </div>
                                            <a href="#" className="stretched-link"></a>
                                        </div>
                                    </div>
                                    <div className="col-2 favorite-item-wrapper">
                                        <div className="border-0 text-center p-2 position-relative favorite-item">
                                            <img className="img-fluid w-100" src={prof2}
                                                alt="favorites profile picture" />
                                            <h5 className="mt-3 fs-4">KamyR</h5>
                                            <div className="py-1 pb-0">
                                                <small>Singer / Songwriter</small>
                                            </div>
                                            <a href="#" className="stretched-link"></a>
                                        </div>
                                    </div>
                                    <div className="col-2 favorite-item-wrapper">
                                        <div className="border-0 text-center p-2 position-relative favorite-item">
                                            <img className="img-fluid w-100" src={prof3}
                                                alt="favorites profile picture" />
                                            <h5 className="mt-3 fs-4">KamyR</h5>
                                            <div className="py-1 pb-0">
                                                <small>Singer / Songwriter</small>
                                            </div>
                                            <a href="#" className="stretched-link"></a>
                                        </div>
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

export default Favorites;