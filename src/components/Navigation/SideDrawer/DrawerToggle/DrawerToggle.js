import React from 'react';
import './DrawerToggle.css'

const drawerToggle = (props) => (

    <div className={`drawer-toggle d-flex d-lg-none position-relative ${props.show ? "show" : ""}`} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default drawerToggle;