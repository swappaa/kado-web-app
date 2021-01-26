import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import bt from '../../../assets/bootstrap/dist/css/kado.module.css';
import cx from 'classnames';
import loginIcon from '../../../assets/images/Login icon.png';

const navigationItems = () => (
    <ul className={bt['text-uppercase']}>
        <NavigationItem link="/login">
            <span className={cx(bt['me-3'], bt['fs-5'])}>Login</span>
            <img className={bt['img-fluid']} src={loginIcon} alt="Login" />
        </NavigationItem>
    </ul>
);

export default navigationItems;