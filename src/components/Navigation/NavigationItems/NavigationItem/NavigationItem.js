import React from 'react';
import { NavLink } from 'react-router-dom';
import bt from '../../../../assets/bootstrap/dist/css/kado.module.css';
import cx from 'classnames';
import cst from './NavigationItem.css';

const navigationItem = (props) => (
    <li>
        <NavLink
            to={props.link}
            exact={props.exact}
            className={cx(bt['d-flex'], bt['align-items-center'], bt['text-decoration-none'])}
            activeClassName={cst.active}>{props.children}</NavLink>
    </li >
);

export default navigationItem;