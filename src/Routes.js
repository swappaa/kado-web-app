
import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './404.css';

import Booking from './containers/Booking/Booking';
import Spotlight from './containers/Category/Spotlight';
import Browse from './containers/Browse/Browse';
import SignupTalent from './containers/SignupTalent/SignupTalent';
import Support from './containers/Support/Support';
import About from './containers/About/About';
import PrivacyPolicy from './containers/PrivacyPolicy/PrivacyPolicy';
import TermsService from './containers/TermsService/TermsService';
import Account from './containers/Auth/ContinueSignIn/ContinueSignIn';
import Logout from './containers/Auth/Logout/Logout';

const TalentProfile = React.lazy(() => import('./containers/TalentProfile/TalentProfile'));

const Home = React.lazy(() => import('./containers/Home/Home'));
const AlertList = React.lazy(() => import('./containers/AlertList/AlertList'));
const AlertMessages = React.lazy(() => import('./containers/AlertMessages/AlertMessages'));
const KadosRequests = React.lazy(() => import('./containers/KadosRequest/KadosRequest'));
const KadosDetails = React.lazy(() => import('./containers/KadosDetails/KadosDetails'));
const Dashboard = React.lazy(() => import('./containers/Dashboard/Dashboard'));
const Favorites = React.lazy(() => import('./containers/Favorites/Favorites'));
const Settings = React.lazy(() => import('./containers/Settings/Settings'));
const Payment = React.lazy(() => import('./containers/Payment/Payment'));


const Routes = () =>
    <Switch>
        <Route path="/alert-list">
            <AlertList />
        </Route>
        <Route path="/alert-messages">
            <AlertMessages />
        </Route>
        <Route path="/kados">
            <KadosRequests />
        </Route>
        <Route path="/kado/:kadoLink">
            <KadosDetails />
        </Route>
        <Route path="/dashboard">
            <Dashboard />
        </Route>
        <Route path="/favorites">
            <Favorites />
        </Route>
        <Route path="/settings">
            <Settings />
        </Route>
        <Route path="/payment">
            <Payment />
        </Route>
        <Route path="/talent/:talentLink">
            <TalentProfile />
        </Route>
        <Route path="/:talentLink/book">
            <Booking />
        </Route>
        <Route path="/browse/:talentCategory">
            <Spotlight />
        </Route>
        <Route path="/browse">
            <Browse />
        </Route>
        <Route path="/signup-talent">
            <SignupTalent />
        </Route>
        <Route path="/support">
            <Support />
        </Route>
        <Route path="/about">
            <About />
        </Route>
        <Route path="/privacy-policy">
            <PrivacyPolicy />
        </Route>
        <Route path="/terms-service">
            <TermsService />
        </Route>
        <Route path="/account">
            <Account />
        </Route>
        <Route path="/logout">
            <Logout />
        </Route>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="*">
            <NoMatch />
        </Route>
    </Switch>
export default Routes


function NoMatch() {
    return (
        <div id="notfound">
            <div className="notfound">
                <div className="notfound-404">
                    <h1>Oops!</h1>
                    <h2>404 - The Page can't be found</h2>
                </div>
                <Link className="btn btn-hvr  theme-pink-bg-color text-white br-radius-40 font-ave-heavy fs-5 text-uppercase" to="/">Go To Homepage</Link>
            </div>
        </div>
    );
}





