
import React from 'react'
import { Switch, Route } from 'react-router-dom'


import Booking from './containers/Booking/Booking';
import Category from './containers/Category/Category';
import SignupTalent from './containers/SignupTalent/SignupTalent';
import Support from './containers/Support/Support';
import About from './containers/About/About';
import PrivacyPolicy from './containers/PrivacyPolicy/PrivacyPolicy';
import TermsService from './containers/TermsService/TermsService';
import Account from './containers/Auth/ContinueSignIn/ContinueSignIn';
import VerificationCode from './containers/VerificationCode/VerificationCode';
import Logout from './containers/Auth/Logout/Logout';

const TalentProfile = React.lazy(() => import('./containers/TalentProfile/TalentProfile'));

const Home = React.lazy(() => import('./containers/Home/Home'));
const AlertList = React.lazy(() => import('./containers/AlertList/AlertList'));
const AlertMessages = React.lazy(() => import('./containers/AlertMessages/AlertMessages'));
const KadosList = React.lazy(() => import('./containers/KadosList/KadosList'));
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
        <Route path="/kados-list">
            <KadosList />
        </Route>
        <Route path="/kados-details">
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
        <Route path="/talent-profile/:talentUsername">
            <TalentProfile />
        </Route>
        <Route path="/booking">
            <Booking />
        </Route>
        <Route path="/category">
            <Category />
        </Route>
        <Route path="/signup-talent">
            <SignupTalent />
        </Route>
        <Route path="/support">
            <Support />
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
        <Route path="/verification-code">
            <VerificationCode />
        </Route>
        <Route path="/logout">
            <Logout />
        </Route>
        <Route path="/">
            <Home />
        </Route>
    </Switch>

export default Routes




