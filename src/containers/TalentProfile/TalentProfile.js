import React, { Component } from 'react';

import bt from '../../assets/bootstrap/dist/css/kado.module.css';
import cst from '../.././App.module.css';
import style from './TalentProfile.module.css';
import cx from 'classnames';
import talentProf from '../../assets/images/profile.png';
import highlightKado from '../../assets/images/highlighted-kados.png';
import charityLogo from '../../assets/images/charity logo.png';
import ratingStarFull from '../../assets/images/svg/Star-Pink-Full.svg';
import ratingStarHalf from '../../assets/images/svg/Star-Pink-Half.svg';


class talentProfile extends Component {
    render() {
        return (
            <div className="talent-profile">
                <section className={cx(bt['py-5'])}>
                    <div className={cx(bt['container-fluid'], bt['px-5'])}>
                        <div className={cx(style['profile-wrapper'])}>
                            <div className={cx(bt['row'], bt['px-5'])}>
                                <div className={cx(bt['col-lg-4'])}>
                                    <img className={cx(bt['img-fluid'], bt['w-100'])} src={talentProf} alt="profile" />
                                </div>
                                <div className={cx(bt['col-lg-7'])}>
                                    <div className={cx(style['element-wrapper'], bt['px-4'])}>
                                        <div className={cx(bt['d-flex'], bt['flex-wrap'], bt['justify-content-between'])}>
                                            <div className={cx(style['profile-name'], cst['theme-pink-color'])}>
                                                <h2 className={cx(bt['display-4'], bt['lh-base'])}>KamyR</h2>
                                                <span className={cx(bt['fs-1'])}>Singer / Songwriter</span>
                                            </div>
                                            <div className={cx(style['charity-wrapper'])}>
                                                <div className={cx(style['element-wrapper'], bt['text-center'], bt['p-4'])} style={{ border: '1px solid #a4a4a4' }}>
                                                    <img className={cx(bt['img-fluid'])} src={charityLogo} alt="charity-logo" />
                                                    <span className={cx(cst['theme-pink-color'], bt['fs-3'], bt['w-100'], bt['d-block'])}>25% to Charity</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx(style['rating-star'], bt['my-4'])}>
                                            <div className={cx(style['str-rating-icon'], bt['mb-3'])}>
                                                <img className={cx(bt['img-fluid'], bt['me-1'])} src={ratingStarFull}
                                                    alt="rating-star" />
                                                <img className={cx(bt['img-fluid'], bt['me-1'])} src={ratingStarFull}
                                                    alt="rating-star" />
                                                <img className={cx(bt['img-fluid'], bt['me-1'])} src={ratingStarFull}
                                                    alt="rating-star" />
                                                <img className={cx(bt['img-fluid'], bt['me-1'])} src={ratingStarFull}
                                                    alt="rating-star" />
                                                <img className={cx(bt['img-fluid'], bt['me-1'])} src={ratingStarHalf}
                                                    alt="rating-star" />
                                            </div>
                                            <span className={cx(bt['fs-4'])}>Replies in 8.5 hrs</span>
                                        </div>
                                        <div className={cx(style['profile-details'], bt['pe-5'])}>
                                            <p className={cx(bt['fs-1'], bt['lh-sm'], bt['mb-4'])}>Born in Tehran, Iran, KamyR is a popular
                                            Persian vocalist and songwriter. KamyR
                                    was raised and educated in France.</p>
                                            <div className={cx(style['btn-wrapper'], bt['text-end'], bt['pe-4'])}>
                                                <a className={cx(bt['text-uppercase'], cst['theme-pink-color'], bt['fs-3'])} href="#">Read More {'>'}</a>
                                            </div>
                                        </div>
                                        <div className={cx(style['book-now'], bt['d-grid'], bt['my-5'])}>
                                            <button className={cx(cst['font-ave-heavy'], bt['btn'], cst['theme-pink-bg-color'], bt['text-white'], cst['br-radius-40'], bt['py-3'])}>
                                                <span className={cx(bt['display-4'], bt['text-uppercase'])}>BOOK NOW</span> <br />
                                                <span className={cx(style['text-trans-unset'], bt['fs-4'], cst['font-ave-reg'])}>[ Personal Video $150.00 ]</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div class={cx(bt['container-fluid'], bt['px-5'])}>
                        <div class={cx(style['reviews-wrapper'])}>
                            <div class={cx(bt['element-header'], bt['d-flex'], bt['justify-content-between'], bt['align-items-center'], bt['px-5'], bt['mb-2'])}>
                                <h3 class={cx(bt['text-uppercase'], cst['theme-pink-color'], bt['fs-2'])}>REVIEWS</h3> <a
                                    class={cx(cst['theme-pink-color'], bt['text-uppercase'], bt['fs-3'])} href="#">Read ALL 32 REVIEWS {'>'}</a>
                            </div>
                            <div class={cx(bt['row'], bt['row-cols-1'], bt['g-3'], bt['px-5'])}>
                                <div class={cx(bt['col'])}>
                                    <div class={cx(bt['card'], bt['border-0'], bt['rounded-0'], bt['p-3'], bt['py-4'], style['d-reviews-wrapper'])}>
                                        <div
                                            class={cx(style['rating-star'], bt['d-flex'], bt['align-items-center'], bt['justify-content-center'], bt['align-self-start'], bt['px-3'])}>
                                            <div class={cx(style['str-rating-icon'], bt['d-flex'], bt['align-items-center'])}>
                                                <img class={cx(bt['img-fluid'], cst['svg-icon'], bt['me-1'])} src={ratingStarFull}
                                                    alt="rating-star" />
                                                <img class={cx(bt['img-fluid'], cst['svg-icon'], bt['me-1'])} src={ratingStarFull}
                                                    alt="rating-star" />
                                                <img class={cx(bt['img-fluid'], cst['svg-icon'], bt['me-1'])} src={ratingStarFull}
                                                    alt="rating-star" />
                                                <img class={cx(bt['img-fluid'], cst['svg-icon'], bt['me-1'])} src={ratingStarFull}
                                                    alt="rating-star" />
                                                <img class={cx(bt['img-fluid'], cst['svg-icon'], bt['me-1'])} src={ratingStarFull}
                                                    alt="rating-star" />
                                                <span class={cx(cst['font-ave-black'], bt['fs-3'], bt['ms-4'])}>5.0</span>
                                            </div>
                                        </div>
                                        <div class={cx(bt['card-body'])}>
                                            <h5 class={cx(bt['card-title'], cst['font-ave-reg'])}>Reviewed by <span>C*****</span> on <span>November
                                            30th,
                                        2020</span></h5>
                                            <p class={cx(bt['card-text'], bt['fs-4'], bt['lh-sm'])}>This was a perfect announcement for our staff awards
                                            online
                                            event.
                                            Everybody loved it!
                                            Lily also kindly did it in record time so we could screen it on the day, which was a
                                            massive relief for me.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class={cx(bt['col'])}>
                                    <div class={cx(bt['card'], bt['border-0'], bt['rounded-0'], bt['p-3'], bt['py-4'], style['d-reviews-wrapper'])}>
                                        <div
                                            class={cx(style['rating-star'], bt['d-flex'], bt['align-items-center'], bt['justify-content-center'], bt['align-self-start'], bt['px-3'])}>
                                            <div class={cx(style['str-rating-icon'], bt['d-flex'], bt['align-items-center'])}>
                                                <img class={cx(bt['img-fluid'], cst['svg-icon'], bt['me-1'])} src={ratingStarFull}
                                                    alt="rating-star" />
                                                <img class={cx(bt['img-fluid'], cst['svg-icon'], bt['me-1'])} src={ratingStarFull}
                                                    alt="rating-star" />
                                                <img class={cx(bt['img-fluid'], cst['svg-icon'], bt['me-1'])} src={ratingStarFull}
                                                    alt="rating-star" />
                                                <img class={cx(bt['img-fluid'], cst['svg-icon'], bt['me-1'])} src={ratingStarFull}
                                                    alt="rating-star" />
                                                <img class={cx(bt['img-fluid'], cst['svg-icon'], bt['me-1'])} src={ratingStarFull}
                                                    alt="rating-star" />
                                                <span class={cx(cst['font-ave-black'], bt['fs-3'], bt['ms-4'])}>5.0</span>
                                            </div>
                                        </div>
                                        <div class={cx(bt['card-body'])}>
                                            <h5 class="card-title font-ave-reg">Reviewed by <span>C*****</span> on <span>November
                                            30th,
                                        2020</span></h5>
                                            <p class={cx(bt['card-text'], bt['fs-4'], bt['lh-sm'])}>
                                                This was a perfect announcement for our staff awards
                                                online
                                                event.
                                                Everybody loved it!
                                                Lily also kindly did it in record time so we could screen it on the day, which was a
                                                massive relief for me.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class={cx(bt['col'])}>
                                    <div class={cx(bt['card'], bt['border-0'], bt['rounded-0'], bt['p-3'], bt['py-4'], style['d-reviews-wrapper'])}>
                                        <div
                                            class={cx(style['rating-star'], bt['d-flex'], bt['align-items-center'], bt['justify-content-center'], bt['align-self-start'], bt['px-3'])}>
                                            <div class={cx(style['str-rating-icon'], bt['d-flex'], bt['align-items-center'])}>
                                                <img class={cx(bt['img-fluid'], cst['svg-icon'], bt['me-1'])} src={ratingStarFull}
                                                    alt="rating-star" />
                                                <img class={cx(bt['img-fluid'], cst['svg-icon'], bt['me-1'])} src={ratingStarFull}
                                                    alt="rating-star" />
                                                <img class={cx(bt['img-fluid'], cst['svg-icon'], bt['me-1'])} src={ratingStarFull}
                                                    alt="rating-star" />
                                                <img class={cx(bt['img-fluid'], cst['svg-icon'], bt['me-1'])} src={ratingStarFull}
                                                    alt="rating-star" />
                                                <img class={cx(bt['img-fluid'], cst['svg-icon'], bt['me-1'])} src={ratingStarFull}
                                                    alt="rating-star" />
                                                <span class={cx(cst['font-ave-black'], bt['fs-3'], bt['ms-4'])}>5.0</span>
                                            </div>
                                        </div>
                                        <div class={cx(bt['card-body'])}>
                                            <h5 class="card-title font-ave-reg">Reviewed by <span>C*****</span> on <span>November
                                            30th,
                                        2020</span></h5>
                                            <p class={cx(bt['card-text'], bt['fs-4'], bt['lh-sm'])}>
                                                This was a perfect announcement for our staff awards
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
                <section class={cx(bt['py-5'])}>
                    <div class={cx(bt['container-fluid'], bt['px-5'])}>
                        <div class={cx(style['highlighted-kados'])}>
                            <div class={cx(style['element-header'], bt['px-5'], bt['my-4'])}>
                                <h3 class={cx(bt['text-uppercase'], cst['theme-pink-color'], bt['fs-2'])}>HIGHLIGHTED KâdOS</h3>
                            </div>
                            <div class={cx(bt['row'], bt['row-cols-1'], bt['row-cols-md-4'], bt['g-5'], bt['px-5'])}>
                                <div class={cx(bt['col'])}>
                                    <div class={cx(bt['card'], bt['border-0'])}>
                                        <img class={cx(bt['br-radius'], bt['img-fluid'])} src={highlightKado}
                                            alt="highlight-kados" />
                                        <a href="#" class={cx(bt['stretched-link'])}></a>
                                    </div>
                                </div>
                                <div class={cx(bt['col'])}>
                                    <div class={cx(bt['card'], bt['border-0'])}>
                                        <img class={cx(bt['br-radius'], bt['img-fluid'])} src={highlightKado}
                                            alt="highlight-kados" />
                                        <a href="#" class={cx(bt['stretched-link'])}></a>
                                    </div>
                                </div>
                                <div class={cx(bt['col'])}>
                                    <div class={cx(bt['card'], bt['border-0'])}>
                                        <img class={cx(bt['br-radius'], bt['img-fluid'])} src={highlightKado}
                                            alt="highlight-kados" />
                                        <a href="#" class={cx(bt['stretched-link'])}></a>
                                    </div>
                                </div>
                                <div class={cx(bt['col'])}>
                                    <div class={cx(bt['card'], bt['border-0'])}>
                                        <img class={cx(bt['br-radius'], bt['img-fluid'])} src={highlightKado}
                                            alt="highlight-kados" />
                                        <a href="#" class={cx(bt['stretched-link'])}></a>
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