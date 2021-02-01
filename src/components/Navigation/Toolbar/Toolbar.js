import React from 'react';
import { Link } from 'react-router-dom';
import NavigationItems from '../NavigationItems/NavigationItems.js';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import Logo from '../../Logo/Logo';

import '../../../App.css';
import './Toolbar.css';

const toolbar = (props) => (
    <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-white py-5 py-lg-0">
            <div className="container-fluid px-5">
                <Link className="navbar-brand py-0" to="/">
                    <Logo />
                </Link>
                <DrawerToggle className="navbar-toggler" clicked={props.drawerToggleClicked} />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                    <div className="mx-auto text-center text-white">
                        <div className={"special-offer-header px-5 py-3 " + (props.isAuth ? 'd-none' : '')}>
                            <h1 className="display-4 mt-2">NOWRUZ SPECIAL</h1>
                            <span className="fs-3">$25 OFF EVERY KÂDO TILL 4/1/21</span>
                        </div>
                    </div>
                    <div className="text-uppercase py-5">
                        <NavigationItems
                            isAuthenticated={props.isAuth}
                            AuthSignUpMode={props.isSignup}
                            AuthSignInMode={props.isSignin}
                        />
                    </div>
                </div>
            </div>
        </nav>
    </header>
);

export default toolbar;