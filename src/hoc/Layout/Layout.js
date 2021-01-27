import React, { Component } from 'react';
import Aux from '../Auxi/Auxi';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Footer from '../../components/Footer/Footer';

class Layout extends Component {
    render() {
        return (
            <Aux>
                <Toolbar />
                <main className="py-5">
                    {this.props.children}
                </main>
                <Footer />
            </Aux>
        )
    }
}

export default Layout;
