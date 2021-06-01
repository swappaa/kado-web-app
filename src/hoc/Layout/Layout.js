import React, { useState } from 'react';
import Aux from '../Auxi/Auxi';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Footer from '../../components/Footer/Footer';
import Auth from '../../containers/Auth/SignIn';
import SignUp from '../../containers/Auth/SignUp';
import ReferralCode from '../../containers/Auth/InviteCode'
import InviteFriends from '../../components/InviteFriends/InviteFriends';
import { connect } from 'react-redux';

const Layout = props => {
    const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showSignup, setShowSignup] = useState(false);
    const [showReferralCode, setShowReferralCode] = useState(false);

    const handleCloseLogin = () => setShowLogin(false);
    const handleShowLogin = () => setShowLogin(true);

    const handleCloseSignup = () => setShowSignup(false);
    const handleShowSignup = () => setShowSignup(true);

    const handleCloseReferralCode = () => setShowReferralCode(false);
    const handleShowReferralCode = () => setShowReferralCode(true);

    const sideDrawerClosedHandler = () => {
        setSideDrawerIsVisible(false);
    };

    const sideDrawerToggleHandler = () => {
        setSideDrawerIsVisible(!sideDrawerIsVisible);
    };

    let inviteFriends = null;
    if (props.isAuthenticated) {
        inviteFriends = <InviteFriends />
    }

    let formAuth = null;
    if (!props.isAuthenticated) {
        formAuth =
            <Aux>
                <Auth
                    show={showLogin}
                    closed={handleCloseLogin}
                    isSignup={handleShowSignup} />
                <SignUp show={showSignup}
                    closed={handleCloseSignup}
                    isSignin={handleShowLogin} />
            </Aux>
    }

    return (
        <Aux>
            <Toolbar
                isAuth={props.isAuthenticated}
                drawerToggleClicked={sideDrawerToggleHandler}
                open={sideDrawerIsVisible}
                isSignin={handleShowLogin}
                isSignup={handleShowSignup}
                isReferralCode={handleShowReferralCode} />
            <SideDrawer
                open={sideDrawerIsVisible}
                closed={sideDrawerClosedHandler}
                isAuth={props.isAuthenticated}
                isSignin={handleShowLogin}
                isSignup={handleShowSignup} />
            <main className="py-xl-5">
                {props.children}
            </main>
            {formAuth}
            {inviteFriends}
            <ReferralCode
                show={showReferralCode}
                closed={handleCloseReferralCode}
                isSignup={handleShowSignup}
                isReferralCode={handleShowReferralCode} />
            <Footer />
        </Aux>
    )
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
}
export default connect(mapStateToProps)(Layout);

