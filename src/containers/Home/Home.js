import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../../components/UI/Spinner/Spinner';

import bt from '../../assets/bootstrap/dist/css/kado.module.css';
import cst from '../.././App.module.css';
import style from './Home.module.css';
import cx from 'classnames';
import banner from '../../assets/images/banner-send-personalized-images.jpg';
import searchIcon from '../../assets/images/svg/Search-icon.svg';
import delSearchIcon from '../../assets/images/delete-search.png';
import talentProfile from '../../assets/images/talent/1.png';
import subscribeIcon from '../../assets/images/subscribe-icon.png';


class Home extends Component {
    render() {
        return (
            <div className="talent-home">
                <section>
                    <div className={cx(bt['container-fluid'], bt['px-5'])}>
                        <div className={cx(bt['text-white'], cst['theme-pink-bg-color'], cst['banner-wrapper'], ['banner-wrapper'])}>
                            <div className={bt['row']}>
                                <div className={bt['col-lg-5']}>
                                    <img className={cx(bt['img-fluid'], bt['w-100'])} src={banner} alt="personalized-message" />
                                </div>
                                <div className={cx(bt['col-lg-7'], bt['p-5'], bt['d-flex'], bt['flex-column'], bt['justify-content-center'], bt['w-50'])}>
                                    <h2 className={cx(bt['display-4'], bt['lh-base'])}>Send personalized messages to your family and friends from the stars they love!</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={cx(bt['py-5'])}>
                    <div className={cx(bt['container-fluid'], bt['px-5'])}>
                        <div className={cx(bt['row'], bt['align-items-center'])}>
                            <div className={cx(bt['col'])}>
                                <div className={style['filter-category']}>
                                    <ul className={cx(bt['d-flex'], bt['flex-wrap'])}>
                                        <li><a className={cx(bt['text-uppercase'], bt['border'], bt['border-dark'], bt['rounded-circle'], bt['ms-0'])} href="#">Actors</a>
                                        </li>
                                        <li><a className={cx(bt['text-uppercase'], bt['border'], bt['border-dark'], bt['rounded-circle'])} href="#">Singers</a>
                                        </li>
                                        <li><a className={cx(bt['text-uppercase'], bt['border'], bt['border-dark'], bt['rounded-circle'])} href="#">Comedians</a></li>
                                        <li><a className={cx(bt['text-uppercase'], bt['border'], bt['border-dark'], bt['rounded-circle'])} href="#">Television</a></li>
                                        <li><a className={cx(bt['text-uppercase'], bt['border'], bt['border-dark'], bt['rounded-circle'])} href="#">radio</a></li>
                                        <li><a className={cx(bt['text-uppercase'], bt['border'], bt['border-dark'], bt['rounded-circle'])} href="#">Authors</a></li>
                                        <li><a className={cx(bt['text-uppercase'], bt['border'], bt['border-dark'], bt['rounded-circle'])} href="#">Athletes</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className={cx(bt['col-4'])}>
                                <div className={style['searchbox-wrapper']}>
                                    <div className={cx(bt['input-group'], bt['mb-3'])}>
                                        <input type="text"
                                            className={cx(bt['form-control'], bt['form-control-lg'], bt['px-4'], bt['py-3'], cst['br-radius'], bt['fs-6'], bt['border-end-0'])}
                                            placeholder="SEARCH" aria-label="SEARCH" />
                                        <span className={cx(bt['input-group-text'], bt['bg-transparent'], bt['del-search'], bt['border-start-0'])}><a href="#">
                                            <img src={delSearchIcon} alt="delete-search" /></a></span>
                                        <span className={cx(bt['input-group-text'], bt['bg-transparent'], cst['br-radius'], bt['px-3'])}><a href="#">
                                            <img className={cx(bt['img-fluid'], cst['svg-icon'])} src={searchIcon}
                                                alt="search-icon" /></a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={bt['row']}>
                            <div className={bt['col-12']}>
                                <div className={cx(style['element-header'], bt['py-4'], bt['d-flex'], bt['align-items-center'], bt['justify-content-between'])}>
                                    <h2 className={cx(bt['text-uppercase'], cst['theme-pink-color'], bt['display-5'])}>FEATURED SINGERS</h2>
                                    <a className={cx(bt['text-uppercase'], bt['fs-3'], cst['theme-pink-color'], cst['font-ave-heavy'])} href="#">SEE ALL SINGERS {">"}</a>
                                </div>
                            </div>
                            <div className={bt['col-12']}>
                                <div className={cx(bt['d-flex'], bt['flex-wrap'], bt['justify-content-between'])}>
                                    <div className={cx(bt['col-lg-2'], style['element-featured-wrapper'], bt['mb-4'])}>
                                        <div className={cx(style['featured-wrapper'], bt['text-center'], bt['position-relative'])}>
                                            <div className={style['image-wrapper']}>
                                                <img className={cx(bt['img-fluid'], bt['w-100'])} src={talentProfile} alt="talent-img" />
                                            </div>
                                            <div className={cx(style['featured-talent'], bt['my-2'])}>
                                                <h5 className={cx(bt['fs-4'])}>Sepideh</h5>
                                            </div>
                                            <Link to="/talent-profile" className={cx(bt['stretched-link'])}></Link>
                                        </div>
                                    </div>
                                    <div className={cx(bt['col-lg-2'], style['element-featured-wrapper'], bt['mb-4'])}>
                                        <div className={cx(style['featured-wrapper'], bt['text-center'], bt['position-relative'])}>
                                            <div className={style['image-wrapper']}>
                                                <img className={cx(bt['img-fluid'], bt['w-100'])} src={talentProfile} alt="talent-img" />
                                            </div>
                                            <div className={cx(style['featured-talent'], bt['my-2'])}>
                                                <h5 className={cx(bt['fs-4'])}>Yamscel Rubite</h5>
                                            </div>
                                            <Link to="/talent-profile" className={cx(bt['stretched-link'])}></Link>
                                        </div>
                                    </div>
                                    <div className={cx(bt['col-lg-2'], style['element-featured-wrapper'], bt['mb-4'])}>
                                        <div className={cx(style['featured-wrapper'], bt['text-center'], bt['position-relative'])}>
                                            <div className={style['image-wrapper']}>
                                                <img className={cx(bt['img-fluid'], bt['w-100'])} src={talentProfile} alt="talent-img" />
                                            </div>
                                            <div className={cx(style['featured-talent'], bt['my-2'])}>
                                                <h5 className={cx(bt['fs-4'])}>Clarissa</h5>
                                            </div>
                                            <Link to="/talent-profile" className={cx(bt['stretched-link'])}></Link>
                                        </div>
                                    </div>
                                    <div className={cx(bt['col-lg-2'], style['element-featured-wrapper'], bt['mb-4'])}>
                                        <div className={cx(style['featured-wrapper'], bt['text-center'], bt['position-relative'])}>
                                            <div className={style['image-wrapper']}>
                                                <img className={cx(bt['img-fluid'], bt['w-100'])} src={talentProfile} alt="talent-img" />
                                            </div>
                                            <div className={cx(style['featured-talent'], bt['my-2'])}>
                                                <h5 className={cx(bt['fs-4'])}>KamyR</h5>
                                            </div>
                                            <Link to="/talent-profile" className={cx(bt['stretched-link'])}></Link>
                                        </div>
                                    </div>
                                    <div className={cx(bt['col-lg-2'], style['element-featured-wrapper'], bt['mb-4'])}>
                                        <div className={cx(style['featured-wrapper'], bt['text-center'], bt['position-relative'])}>
                                            <div className={style['image-wrapper']}>
                                                <img className={cx(bt['img-fluid'], bt['w-100'])} src={talentProfile} alt="talent-img" />
                                            </div>
                                            <div className={cx(style['featured-talent'], bt['my-2'])}>
                                                <h5 className={cx(bt['fs-4'])}>Azam Ali</h5>
                                            </div>
                                            <Link to="/talent-profile" className={cx(bt['stretched-link'])}></Link>
                                        </div>
                                    </div>
                                    <div className={cx(bt['col-lg-2'], style['element-featured-wrapper'], bt['mb-4'])}>
                                        <div className={cx(style['featured-wrapper'], bt['text-center'], bt['position-relative'])}>
                                            <div className={style['image-wrapper']}>
                                                <img className={cx(bt['img-fluid'], bt['w-100'])} src={talentProfile} alt="talent-img" />
                                            </div>
                                            <div className={cx(style['featured-talent'], bt['my-2'])}>
                                                <h5 className={cx(bt['fs-4'])}>Morvarid</h5>
                                            </div>
                                            <Link to="/talent-profile" className={cx(bt['stretched-link'])}></Link>
                                        </div>
                                    </div>
                                    <div className={cx(bt['col-lg-2'], style['element-featured-wrapper'], bt['mb-4'])}>
                                        <div className={cx(style['featured-wrapper'], bt['text-center'], bt['position-relative'])}>
                                            <div className={style['image-wrapper']}>
                                                <img className={cx(bt['img-fluid'], bt['w-100'])} src={talentProfile} alt="talent-img" />
                                            </div>
                                            <div className={cx(style['featured-talent'], bt['my-2'])}>
                                                <h5 className={cx(bt['fs-4'])}>Andy</h5>
                                            </div>
                                            <Link to="/talent-profile" className={cx(bt['stretched-link'])}></Link>
                                        </div>
                                    </div>
                                    <div className={cx(bt['col-lg-2'], style['element-featured-wrapper'], bt['mb-4'])}>
                                        <div className={cx(style['featured-wrapper'], bt['text-center'], bt['position-relative'])}>
                                            <div className={style['image-wrapper']}>
                                                <img className={cx(bt['img-fluid'], bt['w-100'])} src={talentProfile} alt="talent-img" />
                                            </div>
                                            <div className={cx(style['featured-talent'], bt['my-2'])}>
                                                <h5 className={cx(bt['fs-4'])}>Navid Firoozi</h5>
                                            </div>
                                            <Link to="/talent-profile" className={cx(bt['stretched-link'])}></Link>
                                        </div>
                                    </div>
                                    <div className={cx(bt['col-lg-2'], style['element-featured-wrapper'], bt['mb-4'])}>
                                        <div className={cx(style['featured-wrapper'], bt['text-center'], bt['position-relative'])}>
                                            <div className={style['image-wrapper']}>
                                                <img className={cx(bt['img-fluid'], bt['w-100'])} src={talentProfile} alt="talent-img" />
                                            </div>
                                            <div className={cx(style['featured-talent'], bt['my-2'])}>
                                                <h5 className={cx(bt['fs-4'])}>Googoosh</h5>
                                            </div>
                                            <Link to="/talent-profile" className={cx(bt['stretched-link'])}></Link>
                                        </div>
                                    </div>
                                    <div className={cx(bt['col-lg-2'], style['element-featured-wrapper'], bt['mb-4'])}>
                                        <div className={cx(style['featured-wrapper'], bt['text-center'], bt['position-relative'])}>
                                            <div className={style['image-wrapper']}>
                                                <img className={cx(bt['img-fluid'], bt['w-100'])} src={talentProfile} alt="talent-img" />
                                            </div>
                                            <div className={cx(style['featured-talent'], bt['my-2'])}>
                                                <h5 className={cx(bt['fs-4'])}>Ebi</h5>
                                            </div>
                                            <Link to="/talent-profile" className={cx(bt['stretched-link'])}></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className={cx(bt['container-fluid'], bt['px-5'])}>
                        <div className={style['download-app-wrapper']}>
                            <div className={cx(bt['d-flex'], bt['flex-row'], bt['align-items-center'])}>
                                <button
                                    className={cx(bt['btn'], cst['theme-pink-bg-color'], cst['br-radius'], cst['font-ave-heavy'], bt['text-white'], bt['fs-1'], bt['w-75'], bt['mw-100'], bt['text-uppercase'], bt['py-3'])}>DOWNLOAD
                                    THE
                        APP</button>
                                <a className={cx(cst['theme-pink-color'], cst['font-ave-heavy'], bt['fs-3'], bt['ms-5'])} href="#">Why get the app?</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={cx(bt['py-5'])}>
                    <div className={cx(bt['container-fluid'], bt['px-5'])}>
                        <div className={cx(style['how-it-works'], bt['text-white'], cst['theme-dark-bg-color'])}>
                            <div className={cx(bt['row'], bt['row-cols-lg-auto'], bt['g-3'], bt['align-items-center'], bt['p-5'])}>
                                <div className={cx(bt['col-lg-2'])}>
                                    <p className={cx(bt['display-5'], bt['text-center'], bt['text-uppercase'], bt['lh-1'])}>How it
                            works</p>
                                </div>
                                <div className={cx(bt['col-lg-10'])}>
                                    <div className={cx(bt['d-flex'], bt['flex-wrap'])}>
                                        <div className={cx(style['col-step-work'], bt['me-5'])}>
                                            <div className={cx(bt['d-flex'], bt['justify-content-start'], bt['align-items-center'], bt['display-6'])}>
                                                <span className={cx(bt['bg-white'], bt['rounded-circle'], cst['theme-pink-color'], cst['font-ave-black'], bt['me-3'])}>1</span>
                                    Pick a Star
                                </div>
                                        </div>
                                        <div className={cx(style['col-step-work'], bt['me-5'])}>
                                            <div className={cx(bt['d-flex'], bt['justify-content-start'], bt['align-items-center'], bt['display-6'])}>
                                                <span className={cx(bt['bg-white'], bt['rounded-circle'], cst['theme-pink-color'], cst['font-ave-black'], bt['me-3'])}>2</span>
                                    Send a Request
                                </div>
                                        </div>
                                        <div className={cx(style['col-step-work'])}>
                                            <div className={cx(bt['d-flex'], bt['justify-content-start'], bt['align-items-center'], bt['display-6'])}>
                                                <span className={cx(bt['bg-white'], bt['rounded-circle'], cst['theme-pink-color'], cst['font-ave-black'], bt['me-3'])}>3</span>
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
                    <div className={cx(bt['container-fluid'], bt['px-5'])}>
                        <div className={cx(style['join-our-list'])}>
                            <div className={cx(bt['row'], bt['row-cols-lg-auto'], bt['g-3'], bt['align-items-center'], bt['p-5'], bt['py-3'])}>
                                <div className={cx(bt['col-lg-6'])}>
                                    <div className={cx(bt['input-group'], bt['mb-3'], bt['px-5'])}>
                                        <input type="text" className={cx(bt['form-control'], bt['form-control-lg'], bt['py-4'], bt['px-5'], cst['br-radius'], bt['border-end-0'])}
                                            placeholder="EMAIL ADDRESS" />
                                        <span className={cx(bt['input-group-text'], cst['br-radius'], bt['bg-transparent'], bt['px-4'], bt['border-start-0'])}>
                                            <a href="#"><img
                                                src={subscribeIcon} alt="subscribe-icon" /></a></span>
                                    </div>
                                </div>
                                <div className={cx(bt['col-lg-6'])}>
                                    <h3 className={cx(bt['display-5'], bt['text-uppercase'], bt['lh-1'])}>JOIN OUR LIST</h3>
                                    <p className={cx(bt['fs-3'], cst['font-ave-reg'])}>to get inside info on new celebs, deals,
                            and other kâdo news.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Home;