import React, { Component } from 'react';

import bt from '../../assets/bootstrap/dist/css/kado.module.css';
import cst from '../.././App.module.css';
import style from './SignupTalent.module.css';
import cx from 'classnames';
import bannerSurpriseMessage from '../../assets/images/banner-surprise-message.png';
import earn from '../../assets/images/earn.png';
import uplift from '../../assets/images/uplift.png';
import enjoy from '../../assets/images/enjoy.png';


class signupTalent extends Component {
    render() {
        return (
            <div className="talent-signup">
                <section>
                    <div className={cx(bt['container-fluid'], bt['px-5'])}>
                        <div className={cx(style['banner-wrapper'], bt['p-5'], bt['text-white'], cst['theme-pink-bg-color'])}>
                            <div className={cx(bt['row'], bt['px-5'])}>
                                <div className={cx(bt['col-lg-7'])}>
                                    <h2 className={cx(bt['display-5'], bt['mb-5'])}>Surprise your fans with a personalized
                            video message… a kâdo.</h2>
                                    <p className={cx(bt['fs-3'])}>Connect with fans by sending personal messages that&apos;ll
                            thrill and entertain. Make people smile and get paid.</p>
                                </div>
                                <div className={cx(bt['col-lg-5'], bt['position-relative'])}>
                                    <img className={cx(bt['img-fluid'], bt['float-end'])} src={bannerSurpriseMessage}
                                        alt="suprise-message" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={cx(bt['py-5'])}>
                    <div className={cx(bt['container-fluid'], bt['px-5'])}>
                        <div className={cx(style['why-join-kado'], bt['text-center'])}>
                            <h2 className={cx(bt['mb-5'], bt['display-3'], cst['theme-pink-color'])}>Why Join kâdo as Talent</h2>
                            <div className={cx(bt['row'], bt['row-cols-1'], bt['row-cols-md-3'], bt['g-4'], bt['px-5'])}>
                                <div className={cx(bt['col'])}>
                                    <div className={cx(bt['card'], bt['rounded-0'], bt['text-center'], bt['py-5'], bt['px-3'], bt['h-100'], style['card-bg-color'])}>
                                        <img className={cx(bt['img-fluid'], bt['mx-auto'])} src={earn} alt="earn" />
                                        <div className={cx(bt['card-body'], bt['text-white'], bt['pb-0'])}>
                                            <h5 className={cx(bt['card-title'], bt['text-uppercase'], bt['display-4'])}>EARN</h5>
                                            <p className={cx(bt['card-text'], bt['fs-5'])}>Connecting with fans directly is rewarding by itself, but
                                            you
                                            also earn money! kâdo talent can make hundreds of dollars in minutes. Set your
                                    own price! Change your price at anytime. You keep 70% of your earnings.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx(bt['col'])}>
                                    <div className={cx(bt['card'], bt['rounded-0'], bt['text-center'], bt['py-5'], bt['px-3'], bt['h-100'], style['card-bg-color'])}>
                                        <img className={cx(bt['img-fluid'], bt['mx-auto'])} src={uplift} alt="uplift" />
                                        <div className={cx(bt['card-body'], bt['text-white'], bt['pb-0'])}>
                                            <h5 className={cx(bt['card-title'], bt['text-uppercase'], bt['display-4'])}>UPLIFT</h5>
                                            <p className={cx(bt['card-text'], bt['fs-5'])}>A part of the proceeds (you decide how much) goes to
                                            deserving organizations that are improving the planet and people’s lives across
                                    the globe.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx(bt['col'])}>
                                    <div className={cx(bt['card'], bt['rounded-0'], bt['text-center'], bt['py-5'], bt['px-3'], bt['h-100'], style['card-bg-color'])}>
                                        <img className={cx(bt['img-fluid'], bt['mx-auto'])} src={enjoy} alt="enjoy" />
                                        <div className={cx(bt['card-body'], bt['text-white'], bt['pb-0'])}>
                                            <h5 className={cx(bt['card-title'], bt['text-uppercase'], bt['display-4'])}>ENJOY</h5>
                                            <p className={cx(bt['card-text'], bt['fs-5'])}>Everything is done right in the app. It’s easy, fast, and
                                            fun! Receive and complete kâdo requests from home, in the studio, or on the
                                    road. Anytime, anywhere.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={cx(bt['pb-5'], bt['px-2'])}>
                    <div className={cx(bt['container-fluid'], bt['px-5'])}>
                        <div className={cx(bt['counter-earning'], bt['px-5'], bt['text-white'])}>
                            <div className={cx(bt['row'], bt['row-cols-lg-auto'], bt['g-3'], bt['align-items-center'], bt['px-5'], bt['py-4'], cst['theme-pink-bg-color'])}>
                                <div className={cx(bt['col-lg-3'])}>
                                    <h3 className={cx(bt['display-5'], bt['text-center'])}>HOW MUCH
                            WILL I EARN?</h3>
                                </div>
                                <div className={cx(bt['col-lg-6'])}>
                                    <div className={cx(bt['row'], bt['g-3'])}>
                                        <div className={cx(bt['col'])}>
                                            <div className={cx(bt['mb-3'])}>
                                                <label className className={cx(bt['form-label'])}>If my fee per video
                                        is</label>
                                                <input type="text" className={cx(bt['form-control'], bt['text-center'], cst['theme-pink-color'], bt['fw-bold'])} />
                                            </div>
                                        </div>
                                        <div className={cx(bt['col'])}>
                                            <div className={cx(bt['mb-3'])}>
                                                <label className className={cx(bt['form-label'])}>I make this many
                                        videos</label>
                                                <input type="text" className={cx(bt['form-control'], bt['text-center'], cst['theme-pink-color'], bt['fw-bold'])} />
                                            </div>
                                        </div>
                                        <div className={cx(bt['col'])}>
                                            <div className={cx(bt['mb-3'])}>
                                                <label className className={cx(bt['form-label'])}>add donate % to
                                        charity</label>
                                                <input type="text" className={cx(bt['form-control'], bt['text-center'], cst['theme-pink-color'], bt['fw-bold'])} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx(bt['col-lg-3'])}>
                                    <div className={cx(bt['element-wrapper'], bt['px-5'])}>
                                        <h5 className={cx(bt['fs-2'])}>
                                            I make $ <span>630.00</span>
                                        </h5>
                                        <p className={cx(bt['fs-5'])}>Charities recieve $ <span>70.00</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={cx(bt['pt-5'])}>
                    <div className={cx(bt['container-fluid'], bt['px-5'])}>
                        <div className={cx(style['sign-up-wrapper'])}>
                            <div className={cx(style['element-wrapper'], bt['text-center'])}>
                                <h2 className={cx(bt['mb-3'], bt['display-3'], cst['theme-pink-color'])}>SIGN UP NOW</h2>
                                <p className={cx(bt['fs-3'])}>Complete this form to contact us. We will be in touch within 48 hours to
                                complete
                                the
                                process.
                    </p>
                            </div>
                            <form className={cx(bt['p-5'], bt['w-75'], bt['mw-100'], bt['mx-auto'])}>
                                <div className={cx(bt['row-cols-1'], bt['row-cols-md-2'], bt['row'], bt['gx-5'], bt['gy-4'], bt['w-75'], bt['mw-100'], bt['px-5'], bt['mx-auto'], bt['mb-5'])}>
                                    <div className={cx(bt['col'])}>
                                        <label className={cx(bt['form-label'], bt['text-uppercase'], bt['fs-4'])}>First name *</label>
                                        <input type="text" className={cx(bt['form-control'], bt['form-control-lg'], bt['py-3'], bt['rounded-0'], bt['border'], bt['border-dark'])} />
                                    </div>
                                    <div className={cx(bt['col'])}>
                                        <label className={cx(bt['form-label'], bt['text-uppercase'], bt['fs-4'])}>Last name *</label>
                                        <input type="text" className={cx(bt['form-control'], bt['form-control-lg'], bt['py-3'], bt['rounded-0'], bt['border'], bt['border-dark'])} />
                                    </div>
                                    <div className={cx(bt['col'])}>
                                        <label className={cx(bt['form-label'], bt['text-uppercase'], bt['fs-4'])}>Email Address *</label>
                                        <input type="email" className={cx(bt['form-control'], bt['form-control-lg'], bt['py-3'], bt['rounded-0'], bt['border'], bt['border-dark'])} />
                                    </div>
                                    <div className={cx(bt['col'])}>
                                        <label className={cx(bt['form-label'], bt['text-uppercase'], bt['fs-4'])}>Phone number</label>
                                        <input type="text" className={cx(bt['form-control'], bt['form-control-lg'], bt['py-3'], bt['rounded-0'], bt['border'], bt['border-dark'])} />
                                    </div>
                                    <div className={cx(bt['col-lg-12'])}>
                                        <label className={cx(bt['form-label'], bt['text-uppercase'], bt['fs-4'])}>Note</label>
                                        <textarea className={cx(bt['form-control'], bt['form-control-lg'], bt['py-3'], bt['rounded-0'], bt['border'], bt['border-dark'])}
                                            style={{ height: '100px' }}></textarea>
                                    </div>
                                </div>
                                <div className={cx(bt['d-grid'], bt['text-center'])}>
                                    <button className={cx(bt['btn'], bt['btn-lg'], bt['text-upperase'], bt['py-3'], bt['fs-1'], bt['text-uppercase'], cst['theme-pink-bg-color'], bt['text-white'])}
                                        type="submit">Submit
                            Application</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default signupTalent;