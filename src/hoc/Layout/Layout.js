import React, { Component } from 'react';
import Aux from '../Auxi/Auxi';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Footer from '../../components/Footer/Footer';
import Auth from '../../containers/Auth/Auth';
import { connect } from 'react-redux';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    SideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    drawerToggleClicked = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer }
        });
    }

    render() {
        return (
            <Aux>
                <Toolbar
                    isAuth={this.props.isAuthenticated} />
                {/* <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.SideDrawerClosedHandler} /> */}
                <main className="py-5">
                    {this.props.children}
                </main>
                <Auth />
                <Footer />
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
}
export default connect(mapStateToProps)(Layout);
