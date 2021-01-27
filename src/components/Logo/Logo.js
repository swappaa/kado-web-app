import React from 'react';
import Aux from '../../hoc/Auxi/Auxi';

import kadoLogo from '../../assets/images/svg/kado-logo.svg';
import classes from '../../assets/bootstrap/dist/css/kado.module.css';
import cx from 'classnames';


const logo = () => (
    <Aux>
        <img src={kadoLogo} className={cx(classes['img-fluid'], classes['w-100'])} alt="kado-logo" />
    </Aux>
);

export default logo;