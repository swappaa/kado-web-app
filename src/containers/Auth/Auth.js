// import React, { useState } from 'react'

// export default () => {
//     const [fName, setfName] = useState('');
//     const [lName, setlName] = useState('');
//     const [phone, setPhone] = useState('');
//     const [email, setEmail] = useState('');

//     const submitValue = () => {
//         const frmdetails = {
//             'First Name': fName,
//             'Last Name': lName,
//             'Phone': phone,
//             'Email': email
//         }
//         console.log(frmdetails);
//     }

//     return (
//         <>
//             <hr />
//             <input type="text" placeholder="First Name" onChange={e => setfName(e.target.value)} />
//             <input type="text" placeholder="Last Name" onChange={e => setlName(e.target.value)} />
//             <input type="text" placeholder="Phone" onChange={e => setPhone(e.target.value)} />
//             <input type="text" placeholder="Email" onChange={e => setEmail(e.target.value)} />
//             <button onClick={submitValue}>Submit</button>
//         </>
//     )
// }

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Aux from '../../hoc/Auxi/Auxi';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../../store/actions/index';
import FacebookLogin from 'react-facebook-login';
import $ from 'jquery';
import { store } from 'react-notifications-component';

import ButtonSpinner from '../../components/UI/ButtonSpinner/ButtonSpinner';
import DatePicker from '../../components/UI/DatePicker/DatePicker';


import '../../App.css';
import './Auth.css';

class Auth extends Component {

    state = {
        isAcceptTerms: false,
        isLoginFB: false
    }

    componentDidMount() {
        if (this.props.authRedirectPath !== '/') {
            this.props.onSetAuthRedirectPath();
        }
    }

    componentDidUpdate() {
        if (this.props.error !== null) {
            console.log(this.props.error);
            store.addNotification({
                message: 'Error! ' + this.props.error,
                type: "danger",
                insert: "top",
                container: "top-right",
                animationIn: ["animate__animated", "animate__fadeIn"],
                animationOut: ["animate__animated", "animate__fadeOut"],
                dismiss: {
                    duration: 5000,
                    onScreen: false,
                    showIcon: true
                }
            });
        }
    }

    termsConditionToggleClicked = () => {
        this.setState((prevState) => {
            return { isAcceptTerms: !prevState.isAcceptTerms }
        });
    }

    submitLoginHandler = (event) => {
        event.preventDefault();
        this.props.onAuth(event.target.username.value, event.target.password.value, this.props.switchAuthMode);
    }

    submitSignUpHandler = (event) => {
        event.preventDefault();
        this.props.onSignUp(event.target.name.value, event.target.username.value, event.target.email.value, event.target.password.value, event.target.date_picker.value, this.props.switchAuthMode);
    }

    responseFacebook = (response) => {
        console.log(response);
        if (this.props.switchAuthMode) {
            if (response.accessToken) {
                this.setState({ isLoginFB: true })
                this.props.onFBSignUp(response.name, response.email, response.email, response.picture.data.url, this.props.switchAuthMode);
            } else {
                this.setState({ isLoginFB: false })
            }
        } else {
            if (response.accessToken) {
                this.setState({ isLoginFB: true })
                this.props.onFBAuth(response.accessToken, response.expiresIn, response.userID);
            } else {
                this.setState({ isLoginFB: false })
            }
        }

    }

    render() {

        let btnSubmit = (this.props.switchAuthMode ?
            <button
                className="my-3 btn br-radius-40 font-ave-heavy fs-3 text-uppercase theme-pink-bg-color text-white px-5 py-3 w-75 mw-100 btn-hvr"
                type="submit" disabled={this.state.isAcceptTerms ? false : true}>SIGN
                                            UP</button> :
            <button
                className="my-3 btn br-radius-40 font-ave-heavy fs-3 text-uppercase theme-pink-bg-color text-white px-5 py-3 w-75 mw-100 btn-hvr"
                type="submit">SIGN in</button>
        );

        if (this.props.loading) {
            btnSubmit = <ButtonSpinner />
        }

        let authRedirect = null;
        if (this.props.isAuthenticated) {
            authRedirect = <Redirect to={this.props.authRedirectPath} />
        }

        if (!this.props.isModalOpen) {
            $('.modal-backdrop.fade.show').remove();
        }

        return (
            <Aux>
                <div className="modal fade signapp-modal" id="signapp-modal" tabIndex="-1" aria-labelledby="staticBackdropLabel"
                    aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-xl">
                        <div className="modal-content rounded-0 border-0">
                            <div className="modal-header px-5 border-0">
                                <h5 className="modal-title text-uppercase theme-pink-color display-4">sign up</h5>
                                <button type="button" className="btn-close rounded-circle border border-2 border-dark"
                                    data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body px-5">
                                <div className="accordion px-lg-5 py-3" id="accordionExample">
                                    <p className="fs-2 text-dark">Sign up with...</p>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="facebook">
                                            <button className="accordion-button collapsed border-0 px-0 fs-1" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#fb-signup" aria-expanded="false"
                                                aria-controls="fb-signup">
                                                <svg width="97pt" height="97pt" viewBox="0 0 97 97" version="1.1"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <g id="#010000ff">
                                                        <path fill="#010000" opacity="1.00"
                                                            d=" M 44.56 0.00 L 51.95 0.00 C 65.54 1.16 78.60 7.97 86.86 18.88 C 92.53 25.97 95.57 34.76 97.00 43.63 L 97.00 52.85 C 95.48 66.87 88.12 80.32 76.43 88.37 C 70.43 92.77 63.29 95.14 56.16 97.00 L 50.54 97.00 C 52.43 96.88 54.32 96.68 56.21 96.51 C 56.16 85.25 56.25 73.99 56.18 62.73 C 59.92 62.72 63.67 62.70 67.41 62.72 C 68.26 58.04 68.91 53.33 69.73 48.64 C 65.21 48.61 60.69 48.64 56.17 48.61 C 56.75 43.83 54.78 38.19 58.06 34.12 C 61.20 30.49 66.65 33.54 70.23 31.48 C 70.38 27.61 70.20 23.74 70.26 19.87 C 61.94 18.69 51.58 17.44 45.37 24.45 C 39.42 31.01 40.97 40.49 40.86 48.61 C 36.74 48.63 32.63 48.63 28.52 48.63 C 28.56 53.32 28.54 58.01 28.53 62.70 C 32.64 62.69 36.74 62.69 40.85 62.71 C 40.73 74.00 40.86 85.28 40.77 96.57 C 25.44 94.30 11.63 83.98 4.95 70.02 C 2.33 64.87 1.05 59.20 0.00 53.57 L 0.00 41.48 L 0.14 44.02 C 1.23 34.09 5.17 24.42 11.77 16.88 C 19.93 7.18 32.03 1.32 44.56 0.00 Z" />
                                                    </g>
                                                    <g id="#fefeffff">
                                                        <path fill="#fefeff" opacity="1.00"
                                                            d=" M 45.37 24.45 C 51.58 17.44 61.94 18.69 70.26 19.87 C 70.20 23.74 70.38 27.61 70.23 31.48 C 66.65 33.54 61.20 30.49 58.06 34.12 C 54.78 38.19 56.75 43.83 56.17 48.61 C 60.69 48.64 65.21 48.61 69.73 48.64 C 68.91 53.33 68.26 58.04 67.41 62.72 C 63.67 62.70 59.92 62.72 56.18 62.73 C 56.25 73.99 56.16 85.25 56.21 96.51 C 54.32 96.68 52.43 96.88 50.54 97.00 L 46.51 97.00 C 44.60 96.91 42.68 96.75 40.77 96.57 C 40.86 85.28 40.73 74.00 40.85 62.71 C 36.74 62.69 32.64 62.69 28.53 62.70 C 28.54 58.01 28.56 53.32 28.52 48.63 C 32.63 48.63 36.74 48.63 40.86 48.61 C 40.97 40.49 39.42 31.01 45.37 24.45 Z" />
                                                    </g>
                                                </svg>
                                                <span className="font-ave-roman ms-4 text-dark">Facebook</span>
                                            </button>
                                        </h2>
                                        <div id="fb-signup" className="accordion-collapse collapse border-0" aria-labelledby="facebook"
                                            data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <div className="fb-btn-wrapper text-center">
                                                    <FacebookLogin
                                                        appId="3024473317658669"
                                                        autoLoad={false}
                                                        fields="name,email,picture"
                                                        scope="public_profile,user_friends,user_birthday"
                                                        callback={this.responseFacebook}
                                                        icon="fa-facebook me-3"
                                                        cssClass="my-facebook-button-className my-3 btn br-radius-40 font-ave-heavy fs-4 text-uppercase text-white px-5 py-3 w-50 mw-100"
                                                        textButton="SIGNUP WITH FACEBOOK"
                                                        render={renderProps => (
                                                            <button onClick={renderProps.onClick}></button>
                                                        )}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="email">
                                            <button className="accordion-button border-0 px-0 fs-1" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#email-signup" aria-expanded="true" aria-controls="email-signup">
                                                <svg width="97pt" height="97pt" viewBox="0 0 97 97" version="1.1"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <g id="#010101ff">
                                                        <path fill="#010101" opacity="1.00"
                                                            d=" M 41.59 0.00 L 55.23 0.00 C 68.58 2.31 81.19 9.71 88.69 21.14 C 92.41 26.72 95.10 33.05 96.16 39.70 C 96.29 40.22 96.30 40.91 97.00 41.06 L 97.00 53.05 C 95.19 68.20 86.52 82.51 73.23 90.22 C 67.70 93.77 61.24 95.21 55.04 97.00 L 43.34 97.00 C 30.37 95.10 17.95 88.59 10.02 77.98 C 4.09 70.39 0.82 60.98 0.00 51.43 L 0.00 44.94 C 0.91 35.82 3.96 26.83 9.51 19.48 C 17.01 8.94 29.02 2.34 41.59 0.00 M 39.48 6.88 C 29.82 8.75 20.96 14.26 14.84 21.94 C 7.05 31.56 3.82 44.71 6.42 56.81 C 8.65 68.39 16.13 78.74 26.22 84.77 C 35.02 90.08 45.82 91.97 55.90 89.95 C 66.37 87.91 76.00 81.72 82.14 72.99 C 88.35 64.41 91.11 53.41 89.66 42.92 C 88.15 29.88 79.94 17.93 68.54 11.51 C 59.84 6.49 49.30 4.91 39.48 6.88 Z" />
                                                        <path fill="#010101" opacity="1.00"
                                                            d=" M 25.08 28.97 C 26.61 28.30 28.36 28.69 29.97 28.57 C 42.64 28.59 55.31 28.55 67.99 28.58 C 72.03 28.29 75.73 32.07 75.59 36.09 C 75.60 44.75 75.60 53.41 75.59 62.07 C 75.75 66.09 72.14 69.89 68.06 69.64 C 54.70 69.65 41.33 69.63 27.96 69.65 C 23.80 70.06 19.75 66.19 20.18 61.99 C 20.17 53.30 20.15 44.61 20.18 35.92 C 19.96 32.81 22.24 29.97 25.08 28.97 M 31.08 34.26 L 31.22 34.93 C 36.86 39.10 42.34 43.49 47.91 47.75 C 53.48 43.10 59.44 38.94 65.02 34.30 C 53.71 34.22 42.39 34.29 31.08 34.26 M 25.70 37.79 C 25.81 46.20 25.50 54.64 25.86 63.04 C 26.15 63.25 26.75 63.66 27.04 63.87 C 40.99 63.91 54.95 63.97 68.90 63.84 C 69.12 63.58 69.55 63.06 69.76 62.81 C 69.73 54.53 70.12 46.18 69.57 37.94 C 62.43 43.46 55.55 49.42 48.00 54.35 C 47.47 54.11 46.41 53.64 45.88 53.40 C 39.16 48.18 32.46 42.95 25.70 37.79 Z" />
                                                    </g>
                                                    <g id="#ffffffff">
                                                        <path fill="#ffffff" opacity="1.00"
                                                            d=" M 39.48 6.88 C 49.30 4.91 59.84 6.49 68.54 11.51 C 79.94 17.93 88.15 29.88 89.66 42.92 C 91.11 53.41 88.35 64.41 82.14 72.99 C 76.00 81.72 66.37 87.91 55.90 89.95 C 45.82 91.97 35.02 90.08 26.22 84.77 C 16.13 78.74 8.65 68.39 6.42 56.81 C 3.82 44.71 7.05 31.56 14.84 21.94 C 20.96 14.26 29.82 8.75 39.48 6.88 M 25.08 28.97 C 22.24 29.97 19.96 32.81 20.18 35.92 C 20.15 44.61 20.17 53.30 20.18 61.99 C 19.75 66.19 23.80 70.06 27.96 69.65 C 41.33 69.63 54.70 69.65 68.06 69.64 C 72.14 69.89 75.75 66.09 75.59 62.07 C 75.60 53.41 75.60 44.75 75.59 36.09 C 75.73 32.07 72.03 28.29 67.99 28.58 C 55.31 28.55 42.64 28.59 29.97 28.57 C 28.36 28.69 26.61 28.30 25.08 28.97 Z" />
                                                        <path fill="#ffffff" opacity="1.00"
                                                            d=" M 31.08 34.26 C 42.39 34.29 53.71 34.22 65.02 34.30 C 59.44 38.94 53.48 43.10 47.91 47.75 C 42.34 43.49 36.86 39.10 31.22 34.93 L 31.08 34.26 Z" />
                                                        <path fill="#ffffff" opacity="1.00"
                                                            d=" M 25.70 37.79 C 32.46 42.95 39.16 48.18 45.88 53.40 C 46.41 53.64 47.47 54.11 48.00 54.35 C 55.55 49.42 62.43 43.46 69.57 37.94 C 70.12 46.18 69.73 54.53 69.76 62.81 C 69.55 63.06 69.12 63.58 68.90 63.84 C 54.95 63.97 40.99 63.91 27.04 63.87 C 26.75 63.66 26.15 63.25 25.86 63.04 C 25.50 54.64 25.81 46.20 25.70 37.79 Z" />
                                                    </g>
                                                </svg>
                                                <span className="font-ave-roman ms-4 text-dark">Email</span>
                                            </button>
                                        </h2>
                                        <div id="email-signup" className="accordion-collapse collapse show border-0" aria-labelledby="email"
                                            data-bs-parent="#accordionExample">
                                            <div className="accordion-body w-75 mw-100 mx-auto px-0">
                                                {authRedirect}
                                                <form onSubmit={this.submitSignUpHandler}>
                                                    <div className="input-group mb-4">
                                                        <span
                                                            className="input-group-text border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded-0 bg-transparent px-0">
                                                            <svg width="25px" height="25px" viewBox="0 0 30 26" version="1.1"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <g id="#000000">
                                                                    <path fill="#000000" opacity="1.00"
                                                                        d=" M 26.68 0.00 L 29.51 0.00 C 29.63 0.07 29.88 0.22 30.00 0.29 L 30.00 2.82 C 29.15 5.22 28.13 7.55 27.18 9.92 C 25.72 9.37 24.24 8.88 22.83 8.21 C 23.71 5.32 24.60 2.28 26.68 0.00 Z" />
                                                                    <path fill="#000000" opacity="1.00"
                                                                        d=" M 19.61 9.28 C 20.17 6.26 21.47 3.33 23.02 0.68 L 24.90 0.78 C 23.65 3.80 23.13 7.33 20.94 9.84 L 19.61 9.28 Z" />
                                                                    <path fill="#000000" opacity="1.00"
                                                                        d=" M 0.00 16.51 C 0.66 12.63 2.21 7.21 6.98 7.03 C 10.26 7.06 11.12 10.75 11.30 13.37 C 8.08 13.65 8.27 7.01 5.25 10.00 C 2.68 12.61 2.15 16.66 2.72 20.15 C 5.05 19.05 7.41 17.92 10.02 17.64 C 9.94 18.60 9.86 19.56 9.78 20.52 C 12.00 21.16 17.78 22.06 16.09 24.99 C 13.49 24.15 10.85 23.41 8.11 23.17 C 7.76 22.65 7.08 21.61 6.74 21.10 C 4.26 22.37 0.64 22.45 0.00 19.07 L 0.00 16.51 Z" />
                                                                    <path fill="#000000" opacity="1.00"
                                                                        d=" M 21.93 9.88 C 23.46 10.39 24.99 10.90 26.52 11.42 C 24.32 16.53 22.97 22.40 18.36 26.00 L 17.75 26.00 C 17.03 20.21 19.84 15.06 21.93 9.88 Z" />
                                                                </g>
                                                            </svg>
                                                        </span>
                                                        <input type="text"
                                                            className="form-control form-control-lg border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded-0 fs-4"
                                                            placeholder="Full Name" aria-label="Fullname" name="name" />
                                                    </div>
                                                    <div className="input-group mb-4">
                                                        <span
                                                            className="input-group-text border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded-0 bg-transparent px-0">
                                                            <svg width="25px" height="25px" viewBox="0 0 25 25" version="1.1"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <g id="#000000">
                                                                    <path fill="#000000" opacity="1.00"
                                                                        d=" M 11.32 0.00 L 13.54 0.00 C 17.49 0.45 20.99 4.52 19.41 8.52 C 17.35 14.42 7.74 14.45 5.61 8.59 C 4.00 4.62 7.41 0.56 11.32 0.00 Z" />
                                                                    <path fill="#000000" opacity="1.00"
                                                                        d=" M 0.01 17.91 C 1.66 15.39 4.19 13.92 7.09 13.30 C 10.44 15.38 14.57 15.36 17.92 13.30 C 20.79 13.94 23.39 15.38 25.00 17.91 L 25.00 18.67 C 22.48 22.25 18.45 24.45 14.14 25.00 L 11.00 25.00 C 6.65 24.54 2.58 22.34 0.00 18.78 L 0.00 16.62 L 0.01 17.91 Z" />
                                                                </g>
                                                            </svg>
                                                        </span>
                                                        <input type="text"
                                                            className="form-control form-control-lg border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded-0 fs-4"
                                                            placeholder="Username" aria-label="Username" name="username" required />
                                                    </div>
                                                    <div className="input-group mb-4">
                                                        <span
                                                            className="input-group-text border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded-0 bg-transparent px-0">
                                                            <svg width="25px" height="25px" viewBox="0 0 32 21" version="1.1"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <g id="#000000">
                                                                    <path fill="#000000" opacity="1.00"
                                                                        d=" M 2.94 0.00 L 29.11 0.00 C 29.69 1.27 30.94 2.01 32.00 2.85 L 32.00 18.20 C 30.93 19.01 29.66 19.73 29.07 21.00 L 2.89 21.00 C 2.31 19.73 1.06 18.99 0.00 18.15 L 0.00 2.78 C 1.07 1.98 2.36 1.27 2.94 0.00 M 4.83 2.38 C 8.55 4.97 12.28 7.54 16.00 10.12 C 19.72 7.54 23.45 4.97 27.16 2.37 C 19.72 2.38 12.27 2.37 4.83 2.38 M 2.63 3.94 C 2.71 8.59 2.46 13.25 2.74 17.89 L 3.34 18.49 C 10.92 18.82 18.52 18.51 26.11 18.64 C 27.24 18.55 29.63 18.99 29.33 17.08 C 29.45 12.70 29.33 8.32 29.37 3.94 C 24.89 6.96 20.54 10.16 16.00 13.08 C 11.46 10.15 7.10 6.96 2.63 3.94 Z" />
                                                                </g>
                                                            </svg>
                                                        </span>
                                                        <input type="text"
                                                            className="form-control form-control-lg border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded-0 fs-4"
                                                            placeholder="Email" aria-label="Email" name="email" required />
                                                    </div>
                                                    <div className="input-group mb-4">
                                                        <span
                                                            className="input-group-text border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded-0 bg-transparent px-0">
                                                            <svg width="25px" height="25px" viewBox="0 0 21 25" version="1.1"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <g id="#000000">
                                                                    <path fill="#000000" opacity="1.00"
                                                                        d=" M 9.31 0.00 L 11.48 0.00 C 16.22 0.37 19.28 4.75 18.88 9.32 C 19.41 9.36 20.47 9.44 21.00 9.47 L 21.00 24.58 C 20.89 24.68 20.67 24.89 20.56 25.00 L 0.48 25.00 C 0.36 24.89 0.12 24.68 0.00 24.57 L 0.00 9.45 C 0.53 9.42 1.59 9.36 2.13 9.34 C 1.73 4.83 4.67 0.53 9.31 0.00 M 5.75 9.37 C 8.92 9.38 12.09 9.38 15.26 9.37 C 15.55 6.54 14.12 3.25 10.90 3.18 C 7.41 2.73 5.27 6.22 5.75 9.37 M 7.93 15.78 C 8.24 16.23 8.87 17.14 9.18 17.59 C 9.08 18.39 8.89 20.00 8.80 20.80 C 9.65 20.80 11.35 20.80 12.21 20.80 C 12.11 20.00 11.92 18.40 11.82 17.61 C 12.13 17.15 12.75 16.24 13.06 15.78 C 12.35 12.99 8.66 13.00 7.93 15.78 Z" />
                                                                </g>
                                                            </svg>
                                                        </span>
                                                        <input type="password"
                                                            className="form-control form-control-lg border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded-0 fs-4"
                                                            placeholder="Password" aria-label="Password" name="password" required />
                                                    </div>
                                                    <div className="input-group mb-4 border border-2 border-dark border-top-0 border-end-0 border-start-0">
                                                        <span
                                                            className="input-group-text border border-2 border-dark border-top-0 border-bottom-0 border-end-0 border-start-0 rounded-0 bg-transparent px-0">
                                                            <svg width="25px" height="25px" viewBox="0 0 24 28" version="1.1"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <g id="#000000">
                                                                    <path fill="#000000" opacity="1.00"
                                                                        d=" M 11.04 0.00 L 12.04 0.00 C 12.94 1.64 14.21 3.12 14.74 4.94 C 14.90 7.43 11.59 8.54 9.97 6.89 C 8.00 4.52 10.97 2.15 11.94 0.10 L 11.04 0.00 Z" />
                                                                    <path fill="#000000" opacity="1.00"
                                                                        d=" M 10.59 11.44 C 10.61 10.80 10.64 9.52 10.66 8.88 C 11.33 8.88 12.68 8.88 13.35 8.88 C 13.37 9.52 13.40 10.79 13.41 11.43 C 16.99 11.83 22.11 9.97 24.00 14.18 L 24.00 18.10 C 21.92 21.76 18.45 18.38 16.72 16.37 C 15.29 17.37 14.35 19.14 12.63 19.66 C 10.20 20.16 8.99 17.56 7.30 16.37 C 5.51 18.36 2.27 21.69 0.00 18.23 L 0.00 14.25 C 1.74 9.92 7.07 11.86 10.59 11.44 Z" />
                                                                    <path fill="#000000" opacity="1.00"
                                                                        d=" M 0.00 20.93 C 2.65 22.54 5.52 21.03 7.33 18.95 C 9.53 22.29 14.42 22.30 16.64 18.97 C 18.48 21.01 21.33 22.54 24.00 20.94 L 24.00 28.00 L 0.00 28.00 L 0.00 20.93 Z" />
                                                                </g>
                                                            </svg>
                                                        </span>
                                                        <DatePicker />
                                                        <span className="underline"></span>
                                                    </div>
                                                    <div className="form-check form-switch">
                                                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked"
                                                            onChange={this.termsConditionToggleClicked} checked={this.state.isAcceptTerms} />
                                                        <label className="text-dark form-check-label font-ave-book"
                                                        >I
                                                            accept kâdo’s
                                            <Link className="text-decoration-underline" >Terms of Service</Link> & <Link
                                                                className="text-decoration-underline">Privacy Policy</Link>.</label>
                                                    </div>
                                                    <div className="py-5 text-center">
                                                        <h6 className="fs-5 text-dark">Already have an account? <Link data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#signin-modal"
                                                            className="theme-pink-color link-danger text-decoration-underline"
                                                        >Sign in</Link>
                                                        </h6>
                                                        {btnSubmit}
                                                        <label className="text-dark form-check-label font-ave-book"
                                                        >By
                                            signing in you agree to kâdo’s <br />
                                                            <Link className="text-decoration-underline" >Terms of Service</Link> & <Link
                                                                className="text-decoration-underline" >Privacy Policy</Link>.</label>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`modal fade signapp-modal ${this.props.isModalOpen ? 'show' : ''}`} style={{ display: this.props.isModalOpen ? 'block !important' : 'none' }} id="signin-modal" tabIndex="-1" aria-labelledby="staticBackdropLabel"
                    aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-xl">

                        <div className="modal-content rounded-0 border-0">
                            <div className="modal-header px-5 border-0">
                                <h5 className="modal-title text-uppercase theme-pink-color display-4">sign in</h5>
                                <button type="button" className="btn-close rounded-circle border border-2 border-dark"
                                    data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body px-5">
                                <div className="accordion px-lg-5 py-3" id="accordionExample">
                                    <p className="fs-2 text-dark">Sign in with...</p>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="facebook">
                                            <button className="accordion-button collapsed border-0 px-0 fs-1" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#fb-signup" aria-expanded="false"
                                                aria-controls="fb-signup">
                                                <svg width="97pt" height="97pt" viewBox="0 0 97 97" version="1.1"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <g id="#010000ff">
                                                        <path fill="#010000" opacity="1.00"
                                                            d=" M 44.56 0.00 L 51.95 0.00 C 65.54 1.16 78.60 7.97 86.86 18.88 C 92.53 25.97 95.57 34.76 97.00 43.63 L 97.00 52.85 C 95.48 66.87 88.12 80.32 76.43 88.37 C 70.43 92.77 63.29 95.14 56.16 97.00 L 50.54 97.00 C 52.43 96.88 54.32 96.68 56.21 96.51 C 56.16 85.25 56.25 73.99 56.18 62.73 C 59.92 62.72 63.67 62.70 67.41 62.72 C 68.26 58.04 68.91 53.33 69.73 48.64 C 65.21 48.61 60.69 48.64 56.17 48.61 C 56.75 43.83 54.78 38.19 58.06 34.12 C 61.20 30.49 66.65 33.54 70.23 31.48 C 70.38 27.61 70.20 23.74 70.26 19.87 C 61.94 18.69 51.58 17.44 45.37 24.45 C 39.42 31.01 40.97 40.49 40.86 48.61 C 36.74 48.63 32.63 48.63 28.52 48.63 C 28.56 53.32 28.54 58.01 28.53 62.70 C 32.64 62.69 36.74 62.69 40.85 62.71 C 40.73 74.00 40.86 85.28 40.77 96.57 C 25.44 94.30 11.63 83.98 4.95 70.02 C 2.33 64.87 1.05 59.20 0.00 53.57 L 0.00 41.48 L 0.14 44.02 C 1.23 34.09 5.17 24.42 11.77 16.88 C 19.93 7.18 32.03 1.32 44.56 0.00 Z" />
                                                    </g>
                                                    <g id="#fefeffff">
                                                        <path fill="#fefeff" opacity="1.00"
                                                            d=" M 45.37 24.45 C 51.58 17.44 61.94 18.69 70.26 19.87 C 70.20 23.74 70.38 27.61 70.23 31.48 C 66.65 33.54 61.20 30.49 58.06 34.12 C 54.78 38.19 56.75 43.83 56.17 48.61 C 60.69 48.64 65.21 48.61 69.73 48.64 C 68.91 53.33 68.26 58.04 67.41 62.72 C 63.67 62.70 59.92 62.72 56.18 62.73 C 56.25 73.99 56.16 85.25 56.21 96.51 C 54.32 96.68 52.43 96.88 50.54 97.00 L 46.51 97.00 C 44.60 96.91 42.68 96.75 40.77 96.57 C 40.86 85.28 40.73 74.00 40.85 62.71 C 36.74 62.69 32.64 62.69 28.53 62.70 C 28.54 58.01 28.56 53.32 28.52 48.63 C 32.63 48.63 36.74 48.63 40.86 48.61 C 40.97 40.49 39.42 31.01 45.37 24.45 Z" />
                                                    </g>
                                                </svg>
                                                <span className="font-ave-roman ms-4 text-dark">Facebook</span>
                                            </button>
                                        </h2>
                                        <div id="fb-signup" className="accordion-collapse collapse border-0" aria-labelledby="facebook"
                                            data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <div className="fb-btn-wrapper text-center">
                                                    <FacebookLogin
                                                        appId="3024473317658669"
                                                        autoLoad={false}
                                                        fields="name,email,picture"
                                                        scope="public_profile,user_friends"
                                                        callback={this.responseFacebook}
                                                        icon="fa-facebook me-3"
                                                        cssClass="my-facebook-button-className my-3 btn br-radius-40 font-ave-heavy fs-4 text-uppercase text-white px-5 py-3 w-50 mw-100"
                                                        render={renderProps => (
                                                            <button onClick={renderProps.onClick}> LOGIN WITH FACEBOOK</button>
                                                        )}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="email">
                                            <button className="accordion-button border-0 px-0 fs-1" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#email-signup" aria-expanded="true" aria-controls="email-signup">
                                                <svg width="97pt" height="97pt" viewBox="0 0 97 97" version="1.1"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <g id="#010101ff">
                                                        <path fill="#010101" opacity="1.00"
                                                            d=" M 41.59 0.00 L 55.23 0.00 C 68.58 2.31 81.19 9.71 88.69 21.14 C 92.41 26.72 95.10 33.05 96.16 39.70 C 96.29 40.22 96.30 40.91 97.00 41.06 L 97.00 53.05 C 95.19 68.20 86.52 82.51 73.23 90.22 C 67.70 93.77 61.24 95.21 55.04 97.00 L 43.34 97.00 C 30.37 95.10 17.95 88.59 10.02 77.98 C 4.09 70.39 0.82 60.98 0.00 51.43 L 0.00 44.94 C 0.91 35.82 3.96 26.83 9.51 19.48 C 17.01 8.94 29.02 2.34 41.59 0.00 M 39.48 6.88 C 29.82 8.75 20.96 14.26 14.84 21.94 C 7.05 31.56 3.82 44.71 6.42 56.81 C 8.65 68.39 16.13 78.74 26.22 84.77 C 35.02 90.08 45.82 91.97 55.90 89.95 C 66.37 87.91 76.00 81.72 82.14 72.99 C 88.35 64.41 91.11 53.41 89.66 42.92 C 88.15 29.88 79.94 17.93 68.54 11.51 C 59.84 6.49 49.30 4.91 39.48 6.88 Z" />
                                                        <path fill="#010101" opacity="1.00"
                                                            d=" M 25.08 28.97 C 26.61 28.30 28.36 28.69 29.97 28.57 C 42.64 28.59 55.31 28.55 67.99 28.58 C 72.03 28.29 75.73 32.07 75.59 36.09 C 75.60 44.75 75.60 53.41 75.59 62.07 C 75.75 66.09 72.14 69.89 68.06 69.64 C 54.70 69.65 41.33 69.63 27.96 69.65 C 23.80 70.06 19.75 66.19 20.18 61.99 C 20.17 53.30 20.15 44.61 20.18 35.92 C 19.96 32.81 22.24 29.97 25.08 28.97 M 31.08 34.26 L 31.22 34.93 C 36.86 39.10 42.34 43.49 47.91 47.75 C 53.48 43.10 59.44 38.94 65.02 34.30 C 53.71 34.22 42.39 34.29 31.08 34.26 M 25.70 37.79 C 25.81 46.20 25.50 54.64 25.86 63.04 C 26.15 63.25 26.75 63.66 27.04 63.87 C 40.99 63.91 54.95 63.97 68.90 63.84 C 69.12 63.58 69.55 63.06 69.76 62.81 C 69.73 54.53 70.12 46.18 69.57 37.94 C 62.43 43.46 55.55 49.42 48.00 54.35 C 47.47 54.11 46.41 53.64 45.88 53.40 C 39.16 48.18 32.46 42.95 25.70 37.79 Z" />
                                                    </g>
                                                    <g id="#ffffffff">
                                                        <path fill="#ffffff" opacity="1.00"
                                                            d=" M 39.48 6.88 C 49.30 4.91 59.84 6.49 68.54 11.51 C 79.94 17.93 88.15 29.88 89.66 42.92 C 91.11 53.41 88.35 64.41 82.14 72.99 C 76.00 81.72 66.37 87.91 55.90 89.95 C 45.82 91.97 35.02 90.08 26.22 84.77 C 16.13 78.74 8.65 68.39 6.42 56.81 C 3.82 44.71 7.05 31.56 14.84 21.94 C 20.96 14.26 29.82 8.75 39.48 6.88 M 25.08 28.97 C 22.24 29.97 19.96 32.81 20.18 35.92 C 20.15 44.61 20.17 53.30 20.18 61.99 C 19.75 66.19 23.80 70.06 27.96 69.65 C 41.33 69.63 54.70 69.65 68.06 69.64 C 72.14 69.89 75.75 66.09 75.59 62.07 C 75.60 53.41 75.60 44.75 75.59 36.09 C 75.73 32.07 72.03 28.29 67.99 28.58 C 55.31 28.55 42.64 28.59 29.97 28.57 C 28.36 28.69 26.61 28.30 25.08 28.97 Z" />
                                                        <path fill="#ffffff" opacity="1.00"
                                                            d=" M 31.08 34.26 C 42.39 34.29 53.71 34.22 65.02 34.30 C 59.44 38.94 53.48 43.10 47.91 47.75 C 42.34 43.49 36.86 39.10 31.22 34.93 L 31.08 34.26 Z" />
                                                        <path fill="#ffffff" opacity="1.00"
                                                            d=" M 25.70 37.79 C 32.46 42.95 39.16 48.18 45.88 53.40 C 46.41 53.64 47.47 54.11 48.00 54.35 C 55.55 49.42 62.43 43.46 69.57 37.94 C 70.12 46.18 69.73 54.53 69.76 62.81 C 69.55 63.06 69.12 63.58 68.90 63.84 C 54.95 63.97 40.99 63.91 27.04 63.87 C 26.75 63.66 26.15 63.25 25.86 63.04 C 25.50 54.64 25.81 46.20 25.70 37.79 Z" />
                                                    </g>
                                                </svg>
                                                <span className="font-ave-roman ms-4 text-dark">Email</span>
                                            </button>
                                        </h2>
                                        <div id="email-signup" className="accordion-collapse collapse show border-0" aria-labelledby="email"
                                            data-bs-parent="#accordionExample">
                                            <div className="accordion-body w-75 mw-100 mx-auto px-0">
                                                {authRedirect}
                                                <form onSubmit={this.submitLoginHandler}>
                                                    <div className="input-group mb-5">
                                                        <span
                                                            className="input-group-text border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded-0 bg-transparent px-0">
                                                            <svg width="25px" height="25px" viewBox="0 0 25 25" version="1.1"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <g id="#000000">
                                                                    <path fill="#000000" opacity="1.00"
                                                                        d=" M 11.32 0.00 L 13.54 0.00 C 17.49 0.45 20.99 4.52 19.41 8.52 C 17.35 14.42 7.74 14.45 5.61 8.59 C 4.00 4.62 7.41 0.56 11.32 0.00 Z" />
                                                                    <path fill="#000000" opacity="1.00"
                                                                        d=" M 0.01 17.91 C 1.66 15.39 4.19 13.92 7.09 13.30 C 10.44 15.38 14.57 15.36 17.92 13.30 C 20.79 13.94 23.39 15.38 25.00 17.91 L 25.00 18.67 C 22.48 22.25 18.45 24.45 14.14 25.00 L 11.00 25.00 C 6.65 24.54 2.58 22.34 0.00 18.78 L 0.00 16.62 L 0.01 17.91 Z" />
                                                                </g>
                                                            </svg>
                                                        </span>
                                                        <input type="text" name="username"
                                                            className="form-control form-control-lg border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded-0 fs-4"
                                                            placeholder="Username" aria-label="Username" />
                                                    </div>
                                                    <div className="input-group mb-2">
                                                        <span
                                                            className="input-group-text border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded-0 bg-transparent px-0">
                                                            <svg width="25px" height="25px" viewBox="0 0 21 25" version="1.1"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <g id="#000000">
                                                                    <path fill="#000000" opacity="1.00"
                                                                        d=" M 9.31 0.00 L 11.48 0.00 C 16.22 0.37 19.28 4.75 18.88 9.32 C 19.41 9.36 20.47 9.44 21.00 9.47 L 21.00 24.58 C 20.89 24.68 20.67 24.89 20.56 25.00 L 0.48 25.00 C 0.36 24.89 0.12 24.68 0.00 24.57 L 0.00 9.45 C 0.53 9.42 1.59 9.36 2.13 9.34 C 1.73 4.83 4.67 0.53 9.31 0.00 M 5.75 9.37 C 8.92 9.38 12.09 9.38 15.26 9.37 C 15.55 6.54 14.12 3.25 10.90 3.18 C 7.41 2.73 5.27 6.22 5.75 9.37 M 7.93 15.78 C 8.24 16.23 8.87 17.14 9.18 17.59 C 9.08 18.39 8.89 20.00 8.80 20.80 C 9.65 20.80 11.35 20.80 12.21 20.80 C 12.11 20.00 11.92 18.40 11.82 17.61 C 12.13 17.15 12.75 16.24 13.06 15.78 C 12.35 12.99 8.66 13.00 7.93 15.78 Z" />
                                                                </g>
                                                            </svg>
                                                        </span>
                                                        <input type="password" name="password"
                                                            className="form-control form-control-lg border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded-0 fs-4"
                                                            placeholder="Password" aria-label="Password" />
                                                    </div>
                                                    <div className="text-end">
                                                        <p><Link className="fs-5 text-dark font-ave-book">Forgot password?</Link></p>
                                                    </div>
                                                    <div className="py-5 text-center">
                                                        <h6 className="fs-5 text-dark">Don't have an account? <Link data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#signapp-modal"
                                                            className="theme-pink-color link-danger text-decoration-underline"
                                                        >Sign up</Link>
                                                        </h6>
                                                        {btnSubmit}
                                                        <label className="text-dark form-check-label font-ave-book"
                                                        >By
                                            signing in you agree to kâdo’s <br />
                                                            <Link className="text-decoration-underline" >Terms of Service</Link> & <Link
                                                                className="text-decoration-underline" >Privacy Policy</Link>.</label>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        )
    }
}


const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        authRedirectPath: state.auth.authRedirectPath,
        isModalOpen: state.auth.isModalOpen
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup)),
        onSignUp: (name, username, email, password, date_picker) => dispatch(actions.signUp(name, username, email, password, date_picker)),
        onFBAuth: (accessToken, expiresIn, userID) => dispatch(actions.authFB(accessToken, expiresIn, userID)),
        onFBSignUp: (name, username, email, profile_picture) => dispatch(actions.FBSignUp(name, username, email, profile_picture)),
        onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
