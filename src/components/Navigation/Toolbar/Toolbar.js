import React from 'react';
import { Link } from 'react-router-dom';
import NavigationItems from '../NavigationItems/NavigationItems.js';

import Logo from '../../Logo/Logo';
import bt from '../../../assets/bootstrap/dist/css/kado.module.css';
import cst from './Toolbar.module.css'
import cx from 'classnames';



const toolbar = (props) => (
    <header>
        <nav className={cx(bt.navbar, bt['navbar-expand-lg'], bt['navbar-light'], bt['bg-white'], bt['py-0'])}>
            <div className={cx(bt['container-fluid'], bt['px-5'])}>
                <Link className={cx(bt['navbar-brand'], bt['py-0'])} to="/">
                    <Logo />
                </Link>
                <div className={cx(bt.collapse, bt['navbar-collapse'])}>
                    <div className={cx(bt['mx-auto'], bt['text-center'], cst['special-offer-header'], bt['text-white'], bt['px-5'], bt['py-3'])}>
                        <h1 className={cx(bt['display-4'], bt['mt-2'])}>NOWRUZ SPECIAL</h1>
                        <span className={bt['fs-3']}>$25 OFF EVERY KÂDO TILL 4/1/21</span>
                    </div>
                    <NavigationItems />
                </div>
            </div>
        </nav>
    </header >
);

export default toolbar;