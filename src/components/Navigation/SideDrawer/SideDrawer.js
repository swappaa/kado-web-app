import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxi/Auxi';

import classes from './SideDrawer.module.css';

const sideDrawer = (props) => {
    let attachedClasses = [classes['side-drawer'], classes.close];
    if (props.open) {
        attachedClasses = [classes['side-drawer'], classes.open];
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={`d-block d-lg-none ${attachedClasses.join(' ')}`} onClick={props.closed}>
                <div className={classes['side-logo']}>
                    <Logo />
                </div>
                <nav className={`d-flex align-items-center h-100 ${classes['sidebar-nav']}`}>
                    <NavigationItems
                        isAuthenticated={props.isAuth}
                        AuthSignUpMode={props.isSignup}
                        AuthSignInMode={props.isSignin} />
                </nav>
            </div>
        </Aux>
    );
}

export default sideDrawer;