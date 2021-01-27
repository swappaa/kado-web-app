import React from 'react';
import { NavLink } from 'react-router-dom';
import Aux from '../../../../hoc/Auxi/Auxi';


const navigationItem = (props) => (
    <Aux>
        <li>
            <NavLink
                to={props.link}
                exact={props.exact}
                className={props.classes}
                activeClassName="">{props.children}</NavLink>
        </li>
    </Aux >
);

export default navigationItem;