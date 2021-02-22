import React from 'react';

import '../../App.css';
import './About.css';
import banner from '../../assets/images/banner-about.jpg';

const about = () => (
    <div className="about">
        <section>
            <div className="container-fluid px-5">
                <div className="banner-wrapper text-white theme-pink-bg-color">
                    <div className="row">
                        <div className="col-md-3">
                            <img className="img-fluid w-100 h-100" src={banner}
                                alt="personalized-message" />
                        </div>
                        <div className="col-md-9 px-5 py-4 px-lg-5 d-flex flex-column justify-content-center cust-wrap-rightt">
                            <h2 className="display-6 lh-base pe-xl-5">Send personalized messages to your family and friends from the stars they love!</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="py-5">
            <div className="container-fluid px-5">
                <div className="about-wrapper">
                    <div className="element-header mb-5">
                        <h3 className="theme-pink-color display-4 text-uppercase">ABOUT Kâdo</h3>
                    </div>
                    <div className="element-body">
                        <div className="element-item mb-5">
                            <h4 className="theme-pink-color fs-2 font-ave-reg text-uppercase">SECTION TITLE</h4>
                            <p className="fs-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate consequat justo in lacinia. Vestibulum dapibus justo urna. Ut varius porttitor venenatis. Praesent elementum nunc quis justo suscipit, id ullamcorper diam efficitur. Maecenas sodales arcu felis, euismod pharetra magna pulvinar sit amet. Nunc augue urna, pretium vitae blandit eu, luctus a leo. Duis sit amet neque vitae quam vulputate vulputate vel vel tellus. Donec vitae eros fermentum, effic tur est a, finibus odio. Vestibulum eu ipsu</p>
                        </div>
                        <div className="element-item mb-5">
                            <h4 className="theme-pink-color fs-2 font-ave-reg text-uppercase">SECTION TITLE</h4>
                            <p className="fs-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate consequat justo in lacinia. Vestibulum dapibus justo urna. Ut varius porttitor venenatis. Praesent elementum nunc quis justo suscipit, id ullamcorper diam efficitur. Maecenas sodales arcu felis, euismod pharetra magna pulvinar sit amet. Nunc augue urna, pretium vitae blandit eu, luctus a leo. Duis sit amet neque vitae quam vulputate vulputate vel vel tellus. Donec vitae eros fermentum, effic tur est a, finibus odio. Vestibulum eu ipsu</p>
                        </div>
                        <div className="element-item mb-5">
                            <h4 className="theme-pink-color fs-2 font-ave-reg text-uppercase">SECTION TITLE</h4>
                            <p className="fs-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate consequat justo in lacinia. Vestibulum dapibus justo urna. Ut varius porttitor venenatis. Praesent elementum nunc quis justo suscipit, id ullamcorper diam efficitur. Maecenas sodales arcu felis, euismod pharetra magna pulvinar sit amet. Nunc augue urna, pretium vitae blandit eu, luctus a leo. Duis sit amet neque vitae quam vulputate vulputate vel vel tellus. Donec vitae eros fermentum, effic tur est a, finibus odio. Vestibulum eu ipsu</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    </div >
);

export default about;