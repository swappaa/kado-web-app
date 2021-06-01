import React from 'react';
import { Link } from 'react-router-dom';
import NavigationItems from '../NavigationItems/NavigationItems.js';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import Logo from '../../Logo/Logo';

import '../../../App.css';
import cx from 'classnames';
import bt from '../../../assets/bootstrap/dist/css/kado.module.css';
import classes from './Toolbar.module.css';

const toolbar = (props) => (
    <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-white py-5 py-lg-0">
            <div className="container-fluid px-5">
                <Link className={cx(bt['navbar-brand'], bt['py-0'])} to="/">
                    <Logo />
                </Link>
                <DrawerToggle className="navbar-toggler" clicked={props.drawerToggleClicked} show={props.open} />
                <div className="collapse navbar-collapse">
                    <div className="mx-auto text-center text-white">
                        <div className={props.isAuth ? cx(bt['px-5'], bt['py-3'], bt['d-none'], classes['special-offer-header']) : cx(bt['px-5'], bt['py-3'], classes['special-offer-header'])}>
                            <h1 className="display-4 mt-2">NOWRUZ SPECIAL</h1>
                            <span className="fs-3">$25 OFF EVERY KÂDO TILL 4/1/21</span>
                        </div>
                    </div>
                    <div className="text-uppercase py-5">
                        <NavigationItems
                            isAuthenticated={props.isAuth}
                            AuthSignUpMode={props.isSignup}
                            AuthSignInMode={props.isSignin}
                            AuthReferralCode={props.isReferralCode}
                        />
                    </div>
                </div>
            </div>
        </nav>
    </header>
);

export default toolbar;