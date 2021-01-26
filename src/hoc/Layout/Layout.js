import React, { Component } from 'react';
import Aux from '../Auxi/Auxi';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Footer from '../../components/Footer/Footer';

import bt from '../../assets/bootstrap/dist/css/kado.module.css';


class Layout extends Component {
    state = {
        showSignupBtn: false
    }

    render() {
        return (
            <Aux>
                <Toolbar />
                <main className={bt['py-5']}>
                    {this.props.children}
                </main>
                <Footer open={this.state.showSignupBtn} />
            </Aux>
        )
    }
}

export default Layout;
