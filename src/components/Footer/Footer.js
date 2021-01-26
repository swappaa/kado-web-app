import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/images/Logo-footer.png';
import starSvg from '../../assets/images/svg/Become-Talent-Star-White.svg';
import bt from '../../assets/bootstrap/dist/css/kado.module.css';
import cst from '../../App.module.css';
import style from './Footer.module.css'
import cx from 'classnames';

const footer = () => (
    <footer className={cx(cst['theme-pink-bg-color'], bt['py-5'])}>
        <div className={cx(bt['container-fluid'], bt['px-5'])}>
            <div className={cx(bt['row'])}>
                <div className={cx(bt['col-lg-4'])}>
                    <div className={cx(style['element-logo-wrapper'], bt['mb-5'])}>
                        <img className={cx(bt['img-fluid'])} src={Logo} alt="footer-logo" />
                    </div>
                </div>
                <div className={cx(bt['col-lg-8'], bt['align-self-end'])}>
                    <div className={cx(style['element-signup-talent'], bt['mb-5'], bt['text-end'])}>
                        <Link to="/signup-talent"
                            className={cx(bt['btn'], cst['font-ave-heavy'], bt['text-white'], bt['fs-1'], bt['border'], bt['border-white'], bt['p-3'], bt['px-5'], bt['mb-3'])}>
                            <img className={cx(bt['img-fluid'])} src={starSvg} alt="Become Talent" style={{ width: '78px' }} />
                            <span className={cx(bt['mx-3'])}>SIGN UP AS TALENT</span>
                            <span className={cx(bt['fs-4'], cst['font-ave-reg'])}>Earn and connect with fans.</span>
                        </Link>
                        <br />
                        <a className={cx(cst['font-ave-heavy'], bt['text-white'], bt['fs-4'], bt['mt-2'], bt['me-5'])} href="#">LEARN MORE {">"}</a>
                    </div>
                </div>
            </div>
            <div className={cx(bt['row'])}>
                <div className={cx(bt['col-lg-4'])}>
                    <div className={cx(style['footer-link-wrapper'], bt['w-75'], bt['mw-100'])}>
                        <ul className={cx(bt['text-uppercase'], bt['fs-3'], bt['d-flex'], bt['flex-wrap'])}>
                            <li><a className={cx(bt['text-white'])} href="#">HOME</a></li>
                            <li><a className={cx(bt['text-white'])} href="#">faq</a></li>
                            <li><a className={cx(bt['text-white'])} href="#">press</a></li>
                            <li><a className={cx(bt['text-white'])} href="#">help</a></li>
                            <li><a className={cx(bt['text-white'])} href="#">careers</a></li>
                            <li><a className={cx(bt['text-white'])} href="#">about</a></li>
                        </ul>
                    </div>
                </div>
                <div className={cx(bt['col-lg-8'], bt['align-self-end'], bt['text-white'], bt['fs-4'], bt['text-end'])}>
                    <p className={cx(bt['mb-0'])}>© <span>2021</span> Kado Enterprises, Inc. All rights reserved. <a className={cx(bt['text-white'])}
                        href="#">Terms of
                        Service.</a> <a className={cx(bt['text-white'])} href="#">Privacy Policy.</a></p>
                </div>
            </div>
        </div>
    </footer>
);

export default footer;