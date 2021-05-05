import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Switch from "react-switch";
import { toast } from "react-toastify";
import { FileDrop } from 'react-file-drop';

import Skeleton from 'react-loading-skeleton';
import * as actions from '../../store/actions/index';
import Aux from '../../hoc/Auxi/Auxi';
import withAuthorization from '../../hoc/withAuthorization/withAuthorization';
import DisableAccount from '../../components/DisableAccount/DisableAccount';
import '../../App.css';
import './Settings.css';

const Settings = props => {
    const acct = useSelector(state => {
        return state.accountDetails.account;
    });

    const [pushNotification, isPushNotification] = useState(acct.notifications_enabled);
    const [recieveEmails, isRecieveEmails] = useState(acct.emails_enabled);
    const fileInputRef = useRef(null);
    const [profilePicture, setProfilePicture] = useState('');
    const [showForm, setShowForm] = useState('');

    const dispatch = useDispatch();

    const privacy = useSelector(state => {
        return state.accountDetails.privacy;
    });

    const tos = useSelector(state => {
        return state.accountDetails.tos;
    });

    const accountType = useSelector(state => state.auth.accountType);
    const isAuthenticated = useSelector(state => state.auth.token !== null);
    const token = useSelector(state => state.auth.token);
    const username = useSelector(state => state.auth.username);
    const locale = useSelector(state => state.accountDetails.account.locale);
    const uploadingProfile = useSelector(state => state.accountDetails.uploadingProfile);

    const onGetAccountDetails = useCallback(
        () => dispatch(actions.getAccountDetails(token, username)),
        [dispatch]
    );

    const onSetNotifications = useCallback(
        (notification, isAllow) => dispatch(actions.setNotifications(token, username, notification, isAllow)),
        [dispatch]
    );

    const onUpdateProfile = useCallback(
        (profile_picture) => dispatch(actions.updateProfile(token, username, profile_picture)),
        [dispatch]
    );


    useEffect(() => {
        window.scroll({
            top: 0
        });

        onGetAccountDetails(token, username);

        if (profilePicture) {
            onUpdateProfile(profilePicture)
        }
    }, [onGetAccountDetails, profilePicture]);

    const handlePushNotif = (isAllow) => {
        onSetNotifications('notification', isAllow)
    }

    const handleReceiveEmail = (isAllow) => {
        onSetNotifications('email', isAllow)
    }

    const handleLogout = () => {
        props.history.push('/logout')
    }

    const onFileInputChange = (event) => {
        const { files } = event.target;
        let size = files[0].size;
        let type = files[0].name;

        if (!type.match(/\.(jpg|jpeg|png|gif)$/)) {
            toast.error("File does not support. You must use .png or .jpg");
            return false;
        }

        if (size > 15015936) {
            toast.error("Please upload a file smaller than 15 MB");
            return false;
        }

        setProfilePicture(files[0]);
    }

    const onTargetClick = () => {
        fileInputRef.current.click()
    }

    const isLoggedIn = isAuthenticated;
    let button;
    let button_kado;
    let button_payment;

    if (isLoggedIn && accountType === 'talent') {
        button = (
            <Aux>
                <button className="btn nav-link text-start text-dark fs-2  d-flex align-items-center rounded-0" id="v-pills-vacation-mode-tab" data-bs-toggle="pill" href="#v-pills-vacation-mode" role="tab" aria-controls="v-pills-vacation-mode" aria-selected="false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="29px" height="30px" className="me-3" viewBox="0 0 23.75 23.72"><title>vacation mode</title><g id="Layer_2" data-name="Layer 2"><g id="Talent_Settings" data-name="Talent Settings"><path className="cls-1" d="M8.48,12.56l1.72-.9-1.72-.91,1-1.64-1.94.07.07-1.94L6,8.28,5.1,6.56,4.2,8.28l-1.65-1,.08,1.94L.68,9.11l1,1.64L0,11.66l1.72.9-1,1.65,1.95-.08-.08,1.95L4.2,15l.9,1.72L6,15l1.64,1-.07-1.95,1.94.08ZM5.1,14.21a2.55,2.55,0,1,1,2.55-2.55A2.55,2.55,0,0,1,5.1,14.21Z" /><path className="cls-1" d="M21.37,21.76a2.47,2.47,0,0,1-3.16,0,3.86,3.86,0,0,0-4.76,0,2.47,2.47,0,0,1-3.16,0,3.7,3.7,0,0,0-2.38-.82,3.69,3.69,0,0,0-2.37.82A2.35,2.35,0,0,1,4,22.33a2.35,2.35,0,0,1-1.58-.57A3.7,3.7,0,0,0,0,20.94v1.39a2.39,2.39,0,0,1,1.58.56A3.7,3.7,0,0,0,4,23.72a3.7,3.7,0,0,0,2.38-.83,2.49,2.49,0,0,1,3.15,0,3.83,3.83,0,0,0,4.76,0,2.51,2.51,0,0,1,3.16,0,3.83,3.83,0,0,0,4.76,0,2.39,2.39,0,0,1,1.58-.56V20.94A3.7,3.7,0,0,0,21.37,21.76Z" /><path className="cls-1" d="M23,5.07a7.59,7.59,0,0,0-3.68-3.69l.33-.91L18.37,0l-.32.9A7.67,7.67,0,0,0,8.9,5.68l-.28.77.81.15A12.18,12.18,0,0,1,13.13,8l.17.1h.25a7.24,7.24,0,0,1,1.81.23l-3.24,8.91h-.25A19,19,0,0,0,2,19.92a5.79,5.79,0,0,1,1.21.7c.41.28.45.32.78.32s.37,0,.78-.32a5.21,5.21,0,0,1,6.35,0c.41.28.45.32.78.32s.37,0,.78-.32a5.22,5.22,0,0,1,6.36,0c.41.28.45.32.78.32s.37,0,.78-.32a5.79,5.79,0,0,1,1.21-.7,19,19,0,0,0-8.21-2.67l3.1-8.5a7.16,7.16,0,0,1,1.58,1l.15.12.18,0a12.05,12.05,0,0,1,3.71,1.34l.71.41.28-.77A7.61,7.61,0,0,0,23,5.07Z" /></g></g></svg>
                                            Vacation Mode
                    </button>
                <button className="btn nav-link text-start text-dark fs-2  d-flex align-items-center rounded-0" id="v-pills-record-greeting-tab" data-bs-toggle="pill" href="#v-pills-record-greeting" role="tab" aria-controls="v-pills-record-greeting" aria-selected="false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="29px" height="30px" className="me-3" viewBox="0 0 24.36 24.47"><title>record greeting</title><g id="Layer_2" data-name="Layer 2"><g id="Talent_Settings" data-name="Talent Settings"><path className="cls-1" d="M15.73,4.5V5.56h1.74V2.27A2.16,2.16,0,0,0,15.31.11v1a2.43,2.43,0,0,1-2.43,2.43H8A2.43,2.43,0,0,1,5.58,1.12v-1A2.16,2.16,0,0,0,3.42,2.27v8.45h1a2.26,2.26,0,0,1,.9.18V4.5Z" /><path className="cls-1" d="M7,9.32c0,.22.14,1.92.79,2.32,0-.1.38-2.09,3.68-3.29,1.58-.58,1.4,3.29,1.4,3.29.48-.23.69-1.35.76-2a5,5,0,0,1-1.31-3.06A3.92,3.92,0,0,0,10.2,6.1C8.12,6.15,6.91,7.3,7,9.32Z" /><path className="cls-1" d="M8,2h4.86a1,1,0,0,0,1-1V0H7V1A1,1,0,0,0,8,2Z" /><path className="cls-1" d="M17.32,11.29A4.91,4.91,0,0,1,15.73,11v8.16l-1.64-3.35a1.06,1.06,0,0,0-.53-.55l-1.45-.81-.6-.66-1.18,1.32L9.18,13.8l-.68.69-1.4.8a1,1,0,0,0-.42.38,2.51,2.51,0,0,1,.18.92,2.41,2.41,0,0,1-1.25,2.12,2,2,0,0,1,.23.47A2.38,2.38,0,0,1,6,20a2.43,2.43,0,0,1-2.43,2.43H3.43a2.15,2.15,0,0,0,2.15,2h9.73a2.16,2.16,0,0,0,2.16-2.16v-11ZM12.18,22.35H8.74a.72.72,0,0,1,0-1.43h3.44a.72.72,0,0,1,0,1.43Z" /><path className="cls-1" d="M4.59,19.92a1,1,0,1,0-1,1A1,1,0,0,0,4.59,19.92Z" /><path className="cls-1" d="M2,10.61v-2H1a1,1,0,0,0,0,2Z" /><path className="cls-1" d="M4.44,14a1,1,0,1,0,0-2H1.87a1,1,0,1,0,0,2Z" /><path className="cls-1" d="M4.44,17.48a1,1,0,1,0,0-2H2.72a1,1,0,0,0,0,2Z" /><path className="cls-1" d="M23.65,11.33H22V9.22a2.34,2.34,0,0,0-2.34-2.34H13.82a3.6,3.6,0,0,0,3.52,2.87h.86a.71.71,0,0,1,.71.71V20.92h.77A2.34,2.34,0,0,0,22,18.58h1.63a.71.71,0,0,0,.71-.71V12A.71.71,0,0,0,23.65,11.33Z" /></g></g></svg>
                                           Record Greeting
                    </button>
                <button className="btn nav-link text-start text-dark fs-2 d-flex align-items-center rounded-0" id="v-pills-booking-fees-tab" data-bs-toggle="pill" href="#v-pills-booking-fees" role="tab" aria-controls="v-pills-booking-fees" aria-selected="false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="29px" height="30px" className="me-3" viewBox="0 0 28.14 18.94"><title>Booking fees</title><g id="Layer_2" data-name="Layer 2"><g id="Talent_Settings" data-name="Talent Settings"><path className="cls-1" d="M14.48,14.42v-.11c-.56,0-1.09,0-1.61-.08a7.5,7.5,0,0,1-1.17,2,19.05,19.05,0,0,0,2.82.24Z" /><path className="cls-1" d="M12,10.39A6.09,6.09,0,0,0,7.86,5.82a6.06,6.06,0,1,0,4.28,5.79A6.31,6.31,0,0,0,12,10.39Zm-5.95.41a2.3,2.3,0,0,1,.62,4.51v.54a.61.61,0,0,1-.61.6.6.6,0,0,1-.61-.6v-.53a2.32,2.32,0,0,1-1.7-2.23.61.61,0,1,1,1.21,0A1.09,1.09,0,1,0,6.06,12a2.3,2.3,0,0,1-.58-4.52V7.23a.61.61,0,1,1,1.21,0V7.5A2.3,2.3,0,0,1,8.37,9.72a.61.61,0,0,1-.61.61.62.62,0,0,1-.61-.61A1.09,1.09,0,1,0,6.07,10.8Z" /><path className="cls-1" d="M14.47,13.09l0-2.16-1.1,0c0,.24,0,.48,0,.72A7.59,7.59,0,0,1,13.22,13C13.62,13.07,14,13.09,14.47,13.09Z" /><path className="cls-1" d="M21.13,3a7.58,7.58,0,0,1-1.32.53,18.33,18.33,0,0,1-5,.64,18.13,18.13,0,0,1-4.83-.59,6.43,6.43,0,0,1-1.32-.51L8.67,4.8a6.63,6.63,0,0,1,1.9,1.08h0a17.39,17.39,0,0,0,4.15.46,16.92,16.92,0,0,0,4.69-.6c1.32-.4,1.61-.82,1.61-.9a.4.4,0,0,1,.06-.25V3Z" /><path className="cls-1" d="M19.45.59A16.84,16.84,0,0,0,14.76,0a16.32,16.32,0,0,0-4.62.59c-1.29.39-1.57.78-1.57.9h0c0,.13.4.55,1.71.92A16.38,16.38,0,0,0,14.76,3a17.31,17.31,0,0,0,4.69-.58c1.32-.4,1.62-.82,1.62-.9S20.77,1,19.45.59Z" /><path className="cls-1" d="M28.12,17.44V15.61a6.86,6.86,0,0,1-1.28.52,17.73,17.73,0,0,1-5,.64,19,19,0,0,1-4.57-.52,8.05,8.05,0,0,1-1.51-.56l0,1.77h0c0,.09.26.5,1.55.9a16.65,16.65,0,0,0,4.62.57,16.39,16.39,0,0,0,4.63-.59c1.29-.4,1.57-.82,1.57-.91Z" /><path className="cls-1" d="M21.12,6.41a7.77,7.77,0,0,1-1.31.52,18,18,0,0,1-5,.64A21.09,21.09,0,0,1,12,7.39a7.22,7.22,0,0,1,1.09,2.27c.52,0,1.09.06,1.67.06h.06c1-1.1,3.69-1.65,6.3-1.72V6.41Z" /><path className="cls-1" d="M26.8,12.76a17.9,17.9,0,0,1-5,.62A17.73,17.73,0,0,1,17,12.79a6.52,6.52,0,0,1-1.33-.51l0,1.4v.51c.48.6,2.75,1.36,6.12,1.36A16.74,16.74,0,0,0,26.49,15c1.32-.4,1.6-.81,1.6-.9s0-.14,0-.2h0V12.25A7,7,0,0,1,26.8,12.76Z" /><path className="cls-1" d="M26.52,9.81a17,17,0,0,0-4.69-.58h-.11a16.33,16.33,0,0,0-4.34.52c-1.26.35-1.69.75-1.75.92v.05c0,.12.4.54,1.71.92a16.8,16.8,0,0,0,4.48.54,16.6,16.6,0,0,0,4.63-.57c1.35-.4,1.66-.82,1.66-.91h0C28.12,10.6,27.81,10.2,26.52,9.81Z" /></g></g></svg>
                                           Booking Fees
                    </button>
                <button className="btn nav-link text-start text-dark fs-2 d-flex align-items-center rounded-0" id="v-pills-donation-settings-tab" data-bs-toggle="pill" href="#v-pills-donation-settings" role="tab" aria-controls="v-pills-donation-settings" aria-selected="false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="29px" height="30px" className="me-3" viewBox="0 0 16 24.81"><title>donation settings</title><g id="Layer_2" data-name="Layer 2"><g id="Talent_Settings" data-name="Talent Settings"><path className="cls-1" d="M9,12.46l2.93,3.27.51-.55C14,13.42,15.29,12,15.78,10A8.14,8.14,0,0,0,8.13,0,8,8,0,0,0,0,8.05C0,12,1.43,12.74,12,24.56a.74.74,0,0,0,.52.25h0a.7.7,0,0,0,.51-.22l2.07-2.06a.73.73,0,0,0,0-1c-7-7.86-9.81-11-9.95-11.2a3.59,3.59,0,0,1-.6-3.56A3.69,3.69,0,0,1,8,4.36a3.68,3.68,0,0,1,3.63,3.69,3.64,3.64,0,0,1-.82,2.28c-.2.29-.76.92-1.84,2.13Z" /><path className="cls-1" d="M.87,22.53l2.06,2.06a.74.74,0,0,0,.52.22h0A.74.74,0,0,0,4,24.56c1.09-1.22,2.1-2.33,3-3.35-1-1.08-2-2.25-3-3.27L.85,21.53a.74.74,0,0,0,0,1Z" /></g></g></svg>
                                         Donation Settings
                                        </button>
                <button className="btn nav-link text-start text-dark fs-2 d-flex align-items-center rounded-0" id="v-pills-payout-settings-tab" data-bs-toggle="pill" href="#v-pills-payout-settings" role="tab" aria-controls="v-pills-payout-settings" aria-selected="false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="29px" height="30px" className="me-3" viewBox="0 0 22.86 15.71"><title>Payout Settings</title><g id="Layer_2" data-name="Layer 2"><g id="FAN_Settings" data-name="FAN Settings"><path className="cls-1" d="M22.86,3.71V2.5A2.5,2.5,0,0,0,20.36,0H2.5A2.5,2.5,0,0,0,0,2.5V3.71a.22.22,0,0,0,.22.22H22.63A.22.22,0,0,0,22.86,3.71Z" /><path className="cls-1" d="M0,5.58v7.63a2.5,2.5,0,0,0,2.5,2.5H20.36a2.5,2.5,0,0,0,2.5-2.5V5.58a.22.22,0,0,0-.23-.22H.22A.22.22,0,0,0,0,5.58Zm5.71,5.85a.71.71,0,0,1-.71.71H4.29a.71.71,0,0,1-.72-.71v-.72A.71.71,0,0,1,4.29,10H5a.71.71,0,0,1,.71.71Z" /></g></g></svg>
                                         Payout Settings
                    </button>
            </Aux>
        );
        button_kado = (
            <button className="btn nav-link text-start text-dark fs-2 d-flex align-items-center rounded-0" id="v-pills-get-support-tab" data-bs-toggle="pill" href="#v-pills-get-support" role="tab" aria-controls="v-pills-get-support" aria-selected="false">
                <svg xmlns="http://www.w3.org/2000/svg" width="29px" height="30px" className="me-3" viewBox="0 0 22.7 21.58"><title> Get Support</title><g id="Layer_2" data-name="Layer 2"><g id="FAN_Settings" data-name="FAN Settings"><path className="cls-1" d="M4.33,21.58l7-3.69,7,3.69L17,13.77,22.7,8.24,14.86,7.1,11.35,0,7.84,7.1,0,8.24l5.67,5.53ZM9.42,9.39l1.93-3.9,1.93,3.9,4.3.63-3.11,3,.73,4.29-3.85-2-3.85,2,.73-4.29L5.12,10Z" /></g></g></svg>
                                            Get Support
            </button>
        )
    } else {
        button_kado = (
            <Aux>
                <button className="btn nav-link text-start text-dark fs-2 d-flex align-items-center rounded-0" id="v-pills-become-talent-tab" data-bs-toggle="pill" href="#v-pills-become-talent" role="tab" aria-controls="v-pills-become-talent" aria-selected="false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="29px" height="30px" className="me-3" viewBox="0 0 22.7 21.58"><title>Become Talent</title><g id="Layer_2" data-name="Layer 2"><g id="FAN_Settings" data-name="FAN Settings"><path className="cls-1" d="M4.33,21.58l7-3.69,7,3.69L17,13.77,22.7,8.24,14.86,7.1,11.35,0,7.84,7.1,0,8.24l5.67,5.53ZM9.42,9.39l1.93-3.9,1.93,3.9,4.3.63-3.11,3,.73,4.29-3.85-2-3.85,2,.73-4.29L5.12,10Z" /></g></g></svg>
                                            Become Talent
                    </button>
            </Aux>
        );

        button_payment = (
            <button className="btn nav-link text-start text-dark fs-2 d-flex align-items-center rounded-0" id="v-pills-payment-credits-tab" data-bs-toggle="pill" href="#v-pills-payment-credits" role="tab" aria-controls="v-pills-payment-credits" aria-selected="false">
                <svg xmlns="http://www.w3.org/2000/svg" width="29px" height="30px" className="me-3" viewBox="0 0 22.86 15.71"><title>Payments</title><g id="Layer_2" data-name="Layer 2"><g id="FAN_Settings" data-name="FAN Settings"><path className="cls-1" d="M22.86,3.71V2.5A2.5,2.5,0,0,0,20.36,0H2.5A2.5,2.5,0,0,0,0,2.5V3.71a.22.22,0,0,0,.22.22H22.63A.22.22,0,0,0,22.86,3.71Z" /><path className="cls-1" d="M0,5.58v7.63a2.5,2.5,0,0,0,2.5,2.5H20.36a2.5,2.5,0,0,0,2.5-2.5V5.58a.22.22,0,0,0-.23-.22H.22A.22.22,0,0,0,0,5.58Zm5.71,5.85a.71.71,0,0,1-.71.71H4.29a.71.71,0,0,1-.72-.71v-.72A.71.71,0,0,1,4.29,10H5a.71.71,0,0,1,.71.71Z" /></g></g></svg>
                                            Payments & Credits
            </button>
        )
    }


    let loadingOnPhoto = null;
    if (uploadingProfile) {
        loadingOnPhoto = <div className="spinner-border theme-pink-color" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    }

    return (
        <Aux>
            <div className="settings">
                <section className="pb-5">
                    <div className="container-fluid px-5">
                        <div className="customs-wrapper w-100 mx-auto">
                            <div className="setting-wrapper">
                                <div className="d-flex align-items-start">
                                    <div className="nav flex-column nav-pills me-3 position-relative" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                        <h2 className="text-uppercase theme-pink-color display-4 mx-3 mb-3">Settings</h2>
                                        <button className="btn nav-link active text-start text-dark fs-2  d-flex align-items-center rounded-0" id="v-pills-personal-info-tab" data-bs-toggle="pill" href="#v-pills-personal-info" role="tab" aria-controls="v-pills-personal-info" aria-selected="true">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="29px" height="30px" className="me-3" viewBox="0 0 16.6 18.54"><g id="Layer_2" data-name="Layer 2"><g id="FAN_Settings" data-name="FAN Settings"><path className="cls-1" d="M8.3,0a4.82,4.82,0,1,0,4.82,4.82A4.83,4.83,0,0,0,8.3,0Z" /><path className="cls-1" d="M16.57,13.48a4.8,4.8,0,0,0-.49-.89A6,6,0,0,0,11.94,10a.93.93,0,0,0-.61.14,5.13,5.13,0,0,1-6.06,0A.81.81,0,0,0,4.66,10a5.94,5.94,0,0,0-4.14,2.6,4.81,4.81,0,0,0-.48.89.47.47,0,0,0,0,.4,8.81,8.81,0,0,0,.57.84,7.72,7.72,0,0,0,1,1.09,11.24,11.24,0,0,0,1,.84,9.6,9.6,0,0,0,11.44,0,8.59,8.59,0,0,0,1-.84,9.23,9.23,0,0,0,1-1.09,6.54,6.54,0,0,0,.57-.84A.36.36,0,0,0,16.57,13.48Z" /></g></g></svg>
                                            Personal Info
                                        </button>
                                        <button className="btn nav-link text-start text-dark fs-2  d-flex align-items-center rounded-0" id="v-pills-password-tab" data-bs-toggle="pill" href="#v-pills-password" role="tab" aria-controls="v-pills-password" aria-selected="false">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="29px" height="30px" className="me-3" viewBox="0 0 14.11 18.82"><title>password</title><g id="Layer_2" data-name="Layer 2"><g id="FAN_Settings" data-name="FAN Settings"><path className="cls-1" d="M13.72,7.06H12.55V5.49a5.49,5.49,0,0,0-11,0V7.06H.39A.39.39,0,0,0,0,7.45v9.8a1.57,1.57,0,0,0,1.57,1.57h11a1.56,1.56,0,0,0,1.56-1.57V7.45A.38.38,0,0,0,13.72,7.06ZM8.23,15.25a.37.37,0,0,1-.1.3.39.39,0,0,1-.29.13H6.27A.39.39,0,0,1,6,15.55a.41.41,0,0,1-.1-.3L6.13,13a1.54,1.54,0,0,1-.64-1.26,1.57,1.57,0,1,1,3.13,0A1.52,1.52,0,0,1,8,13Zm2-8.19H3.92V5.49a3.14,3.14,0,1,1,6.27,0Z" /></g></g></svg>
                                            Password
                                        </button>
                                        <button className="btn nav-link text-start text-dark fs-2  d-flex align-items-center rounded-0" id="v-pills-notifications-tab" data-bs-toggle="pill" href="#v-pills-notifications" role="tab" aria-controls="v-pills-notifications" aria-selected="false">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="29px" height="30px" className="me-3" viewBox="0 0 17.8 19.59"><title>notification</title><g id="Layer_2" data-name="Layer 2"><g id="FAN_Settings" data-name="FAN Settings"><path className="cls-1" d="M8.9,19.59a3.34,3.34,0,0,0,3.27-2.68H5.63A3.34,3.34,0,0,0,8.9,19.59Z" /><path className="cls-1" d="M17.8,14.4v-.11a.13.13,0,0,1,0-.06v0s0,0,0-.06a.09.09,0,0,1,0-.05l0-.05a.43.43,0,0,0,0,0l0-.05a.14.14,0,0,1,0-.06l0,0,0-.07v0a.43.43,0,0,0,0-.07v0l0-.07v0l-.05-.07v0l-.06-.06,0,0s0,0,0,0l-.09-.09,0,0a6,6,0,0,1-1.36-1.69,1.17,1.17,0,0,0-.05-.11l-.08-.15a6.25,6.25,0,0,1-.57-2.38h0c0-.06,0-.12,0-.19V7.83h0V6.23a6.23,6.23,0,0,0-4.53-6h0c-.24-.06-.49-.11-.74-.15l-.13,0A5.32,5.32,0,0,0,8.9,0a5.52,5.52,0,0,0-.81.06L8,.08c-.25,0-.49.09-.73.15h0a6.23,6.23,0,0,0-4.54,6v1.6h0V8.9h0a6.07,6.07,0,0,1-.57,2.38L2,11.43,2,11.54A6,6,0,0,1,.6,13.23l0,0-.09.09s0,0,0,0l0,0-.05.06v0l-.06.07v0l0,.07s0,0,0,0a.16.16,0,0,0,0,.07l0,0,0,.07v0l0,.06s0,0,0,.05,0,0,0,0,0,0,0,.05a.09.09,0,0,0,0,.05.13.13,0,0,0,0,.06.06.06,0,0,0,0,0,.13.13,0,0,0,0,.06.09.09,0,0,1,0,.05v.33s0,0,0,.06v0H0v0s0,0,0,.07a0,0,0,0,1,0,0l0,0,0,.11h0a1.66,1.66,0,0,0,1.54,1H16.15a1.66,1.66,0,0,0,1.54-1h0s0-.08,0-.11v-.07a.64.64,0,0,0,0-.07v0h0v0a.13.13,0,0,0,0-.06v-.16s0,0,0-.06Z" /></g></g></svg>
                                            Notifications
                                        </button>
                                        {button_payment}
                                        {button}
                                        <button className="btn nav-link text-start text-dark fs-2 d-flex align-items-center rounded-0" id="v-pills-security-privacy-tab" data-bs-toggle="pill" href="#v-pills-security-privacy" role="tab" aria-controls="v-pills-security-privacy" aria-selected="false">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="29px" height="30px" className="me-3" viewBox="0 0 17.19 19.46"><title>security-privacy</title><g id="Layer_2" data-name="Layer 2"><g id="FAN_Settings" data-name="FAN Settings"><path className="cls-1" d="M3.48,6.32a17.37,17.37,0,0,0,.65,3.5A9.5,9.5,0,0,0,8.6,15.77a9.52,9.52,0,0,0,4.46-5.95,17.37,17.37,0,0,0,.65-3.5L8.6,3.76Z" /><path className="cls-1" d="M17.18,4.55a.56.56,0,0,0-.31-.48l-8-4a.57.57,0,0,0-.51,0l-8,4A.56.56,0,0,0,0,4.55a20,20,0,0,0,.81,6.12,14.86,14.86,0,0,0,2.45,5,11.67,11.67,0,0,0,5.12,3.8.76.76,0,0,0,.21,0l.2,0a11.67,11.67,0,0,0,5.12-3.8,14.86,14.86,0,0,0,2.45-5A20,20,0,0,0,17.18,4.55ZM8.85,16.92A.57.57,0,0,1,8.6,17a.58.58,0,0,1-.26-.06A10.5,10.5,0,0,1,3,10.15,18.33,18.33,0,0,1,2.32,6a.54.54,0,0,1,.31-.54L8.34,2.61a.57.57,0,0,1,.51,0l5.71,2.86a.54.54,0,0,1,.31.54,18.33,18.33,0,0,1-.72,4.14,10.5,10.5,0,0,1-5.3,6.77Z" /></g></g></svg>
                                            Security & Privacy
                                        </button>
                                        <button className="btn nav-link text-start text-dark fs-2 d-flex align-items-center rounded-0" id="v-pills-tos-tab" data-bs-toggle="pill" href="#v-pills-tos" role="tab" aria-controls="v-pills-tos" aria-selected="false">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="29px" height="30px" className="me-3" viewBox="0 0 22.35 23.32"><title>tos</title><g id="Layer_2" data-name="Layer 2"><g id="FAN_Settings" data-name="FAN Settings"><path className="cls-1" d="M16.67,10.65h.13a4.73,4.73,0,0,1,.65,0V2.75A2.76,2.76,0,0,0,14.69,0H2.75A2.75,2.75,0,0,0,0,2.75V18.58a2.75,2.75,0,0,0,2.75,2.75h8a7,7,0,0,1,6-10.68ZM9.87,4.49H14a.69.69,0,0,1,0,1.37H9.87a.69.69,0,0,1,0-1.37Zm0,2.74H14a.68.68,0,0,1,0,1.36H9.87a.68.68,0,0,1,0-1.36ZM7.58,16.84H3.5a.69.69,0,1,1,0-1.37H7.58a.69.69,0,0,1,0,1.37Zm0-2.78H3.5a.69.69,0,1,1,0-1.37H7.58a.69.69,0,0,1,0,1.37Zm0-2.73H3.5A.69.69,0,1,1,3.5,10H7.58a.69.69,0,0,1,0,1.37Zm0-2.74H3.5a.68.68,0,1,1,0-1.36H7.58a.68.68,0,0,1,0,1.36Zm0-2.73H3.5a.69.69,0,1,1,0-1.37H7.58a.69.69,0,0,1,0,1.37Zm1.61,4.78A.68.68,0,0,1,9.87,10h2a.69.69,0,1,1,0,1.37h-2A.68.68,0,0,1,9.19,10.64Z" /><path className="cls-1" d="M20.72,13.66A5.64,5.64,0,0,0,16.77,12h-.1A5.67,5.67,0,0,0,11,17.65a5.67,5.67,0,0,0,5.67,5.67,5.68,5.68,0,0,0,4-9.66ZM19.1,16.72l-2.17,2.7a.68.68,0,0,1-.53.26.66.66,0,0,1-.4-.13l-1.62-1.17a.68.68,0,0,1-.15-1,.68.68,0,0,1,.95-.15l1.09.79L18,15.87a.68.68,0,0,1,1.07.85Z" /></g></g></svg>
                                            Terms of Service
                                        </button>
                                        {button_kado}
                                        <button onClick={handleLogout} className="btn nav-link text-start text-dark fs-2 d-flex align-items-center rounded-0" id="v-pills-signout-tab" data-bs-toggle="pill" href="#v-pills-signout" role="tab" aria-controls="v-pills-signout" aria-selected="false">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="29px" height="30px" className="me-3" viewBox="0 0 22.18 25.18"><title>signout</title><g id="Layer_2" data-name="Layer 2"><g id="FAN_Settings" data-name="FAN Settings"><path className="cls-1" d="M8.4,2.13A3.57,3.57,0,0,0,4.11,4.79.44.44,0,1,0,5,5,2.7,2.7,0,0,1,8.2,3a.44.44,0,1,0,.2-.85Z" /><path className="cls-1" d="M2.45,4.85A.44.44,0,0,0,3,4.52,4.73,4.73,0,0,1,8.67,1,.43.43,0,0,0,9.19.68.43.43,0,0,0,8.87.15,5.61,5.61,0,0,0,2.13,4.33.43.43,0,0,0,2.45,4.85Z" /><path className="cls-1" d="M19.08,7.41a.43.43,0,0,0-.61,0,.44.44,0,0,0,0,.62,2.7,2.7,0,0,1,0,3.82.43.43,0,0,0,.62.61A3.56,3.56,0,0,0,19.08,7.41Z" /><path className="cls-1" d="M20.51,6a.43.43,0,1,0-.61.62A4.73,4.73,0,0,1,20,13.27a.44.44,0,0,0,0,.62.42.42,0,0,0,.61,0A5.6,5.6,0,0,0,20.51,6Z" /><path className="cls-1" d="M16.3,11.27l-.21-.09a1.88,1.88,0,0,0-.55-.15,2.08,2.08,0,0,0-.62-2.69,1.37,1.37,0,0,0-.2-.13A2,2,0,0,0,13.86,8a2.1,2.1,0,0,0-.8-2.24,1.48,1.48,0,0,0-.21-.13,2.12,2.12,0,0,0-1.58-.17,2,2,0,0,0-.95.59,2.18,2.18,0,0,0-.46-.45l-.21-.13A2.16,2.16,0,0,0,8,5.24a2.13,2.13,0,0,0-1.27,1L4,11.21a2,2,0,0,0-1-1.21,2,2,0,0,0-1.57-.17A2.06,2.06,0,0,0,.06,12.3L1,18.64l-.43.95a1.53,1.53,0,0,0,.66,2L7.51,25a1.52,1.52,0,0,0,.72.19,1.54,1.54,0,0,0,1.23-.62l.76-1A10.15,10.15,0,0,0,13,21a26.24,26.24,0,0,0,2.42-3.77l1.71-3.12a2.13,2.13,0,0,0,.19-1.58A2,2,0,0,0,16.3,11.27ZM16,12.88a.73.73,0,0,1-.07.56l-1.71,3.12c-1.7,3.1-3.27,5-4.8,5.84a.63.63,0,0,0-.2.2l-.83,1.16a.19.19,0,0,1-.23.06L1.87,20.39a.18.18,0,0,1-.07-.23l.57-1.28,0-.05L1.38,12a.75.75,0,0,1,.06-.55.77.77,0,0,1,.44-.35.64.64,0,0,1,.2,0,.73.73,0,0,1,.35.09.77.77,0,0,1,.35.44l.49,1.51a.63.63,0,0,0,.29.38.68.68,0,0,0,.91-.28L8,6.87a.8.8,0,0,1,1-.28l.07,0a.75.75,0,0,1,.2,1L6.85,12a.7.7,0,0,0,.28,1,.73.73,0,0,0,1-.28L11.18,7a.77.77,0,0,1,1-.28l.08,0a.76.76,0,0,1,.2,1L9.4,13.38a.72.72,0,0,0,.28,1,.73.73,0,0,0,1-.28l2.41-4.4a.77.77,0,0,1,1-.29l.08,0a.77.77,0,0,1,.21,1L12,14.77a.66.66,0,0,0-.06.55.72.72,0,0,0,.35.44.7.7,0,0,0,.93-.27l1.48-2.71a.77.77,0,0,1,.94-.35l.05,0A.7.7,0,0,1,16,12.88Z" /></g></g></svg>
                                            Sign Out
                                        </button>

                                    </div>
                                    <div className="tab-content w-50 mx-auto" id="v-pills-tabContent">
                                        <div className="tab-pane fade show active" id="v-pills-personal-info" role="tabpanel" aria-labelledby="v-pills-personal-info-tab">
                                            <div className="element-header">
                                                <h2 className="font-ave-heavy text-uppercase fs-1">Personal Info</h2>
                                            </div>
                                            <div className="element-body">
                                                <div className="table-responsive">
                                                    <table className="table table-borderless">
                                                        <tbody>
                                                            <tr>
                                                                <th>
                                                                    Photo
                                                                </th>
                                                                <td className="position-relative">
                                                                    <div className="talent-profile-wrapper overflow-hidden">
                                                                        <FileDrop
                                                                            onTargetClick={onTargetClick}>
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" fill="currentColor" className="bi bi-plus-circle position-absolute top-0 start-100 translate-middle" viewBox="0 0 16 16">
                                                                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                                                            </svg>
                                                                        </FileDrop>

                                                                        <input
                                                                            onChange={onFileInputChange}
                                                                            ref={fileInputRef}
                                                                            type="file"
                                                                            className="hidden invisible d-none"
                                                                        />
                                                                        <div className="position-relative">
                                                                            <div className="position-absolute top-50 start-50 translate-middle">
                                                                                {loadingOnPhoto}
                                                                            </div>
                                                                            <img src={acct.profile_picture ? acct.profile_picture || <Skeleton circle={true} height={100} width={100} /> : null}
                                                                                className="profile-image rounded-pill" alt={acct.name} />
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>

                                                                </td>
                                                            </tr>
                                                            <tr style={(showForm === 'name') ? { backgroundColor: '#f7f8f8' } : null}>
                                                                <th>
                                                                    Name
                                                                </th>
                                                                <td className="font-ave-heavy fs-2">
                                                                    {showForm === 'name' ?
                                                                        <form>
                                                                            <div class="mb-2">
                                                                                <label class="form-label fs-5">Full Name</label>
                                                                                <input type="text" class="form-control" value={acct.name} />
                                                                            </div>
                                                                            <button type="submit" class="btn font-ave-heavy btn theme-pink-bg-color text-white br-radius-40 text-uppercase px-5">Submit</button>
                                                                            <button type="button" class="btn font-ave-heavy btn theme-pink-bg-color text-white br-radius-40 text-uppercase px-4 ms-3" onClick={() => {
                                                                                setShowForm('')
                                                                            }}>Cancel</button>
                                                                        </form>
                                                                        : acct.name}
                                                                </td>
                                                                <td >
                                                                    {showForm === 'name' ?
                                                                        null : <button className="btn theme-pink-color fs-3" onClick={() => {
                                                                            setShowForm('name')
                                                                        }}>Edit</button>}

                                                                </td>

                                                            </tr>
                                                            <tr>
                                                                <th>
                                                                    Email
                                                                </th>
                                                                <td className="font-ave-heavy fs-2">
                                                                    {acct.email}
                                                                </td>
                                                                <td>
                                                                    <button className="btn theme-pink-color fs-3">Edit</button>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th>
                                                                    Username
                                                                </th>
                                                                <td className="font-ave-heavy fs-2">
                                                                    {acct.username || <Skeleton />}
                                                                </td>
                                                                <td >

                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="v-pills-password" role="tabpanel" aria-labelledby="v-pills-password-tab">...</div>
                                        <div className="tab-pane fade" id="v-pills-notifications" role="tabpanel" aria-labelledby="v-pills-notifications-tab">
                                            <div className="element-header mb-5">
                                                <h2 className="font-ave-heavy text-uppercase fs-1">NOTIFICATIONS</h2>
                                            </div>
                                            <div className="element-body">
                                                <div className="table-responsive">
                                                    <table className="table table-borderless">
                                                        <tbody>
                                                            <tr>
                                                                <th>
                                                                    <h3 className="font-ave-roman fs-2" style={{ color: '#404041' }}>Push Notifications</h3>
                                                                    <span className="fs-4 font-ave-reg lh-sm d-block mb-5">Allow kâdo to send you notifications</span>
                                                                </th>
                                                                <td>
                                                                    <div className="me-3">
                                                                        <Switch
                                                                            checked={pushNotification}
                                                                            onChange={e => { isPushNotification(e); handlePushNotif(!pushNotification) }}
                                                                            onColor="#ee2a59"
                                                                            onHandleColor="#231f20"
                                                                            handleDiameter={30}
                                                                            uncheckedIcon={false}
                                                                            checkedIcon={false}
                                                                            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                                                                            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                                                                            height={33}
                                                                            width={68}
                                                                            className="react-switch"
                                                                            id="material-switch"
                                                                        />
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th>
                                                                    <h3 className="font-ave-roman fs-2 text-uppercase" style={{ color: '#404041' }}>Emails</h3>
                                                                    <span className="fs-4 font-ave-reg lh-sm d-block">Receive occasional emails about kâdo
                                                                    events such as New Talent announcements, special promotions, and feature upgrades.</span>
                                                                </th>
                                                                <td>
                                                                    <div className="me-3">
                                                                        <Switch
                                                                            checked={recieveEmails}
                                                                            onChange={e => { isRecieveEmails(e); handleReceiveEmail(!recieveEmails) }}
                                                                            onColor="#ee2a59"
                                                                            onHandleColor="#231f20"
                                                                            handleDiameter={30}
                                                                            uncheckedIcon={false}
                                                                            checkedIcon={false}
                                                                            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                                                                            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                                                                            height={33}
                                                                            width={68}
                                                                            className="react-switch"
                                                                            id="material-switch"
                                                                        />
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div className="btn-wrapper text-end mt-5">
                                                    <button className="btn fs-5" data-bs-toggle="modal" data-bs-target="#disable-account-modal">Disable my account</button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="tab-pane fade" id="v-pills-vacation-mode" role="tabpanel" aria-labelledby="v-pills-vacation-mode-tab">...</div>
                                        <div className="tab-pane fade" id="v-pills-record-greeting" role="tabpanel" aria-labelledby="v-pills-record-greeting-tab">...</div>
                                        <div className="tab-pane fade" id="v-pills-booking-fees" role="tabpanel" aria-labelledby="v-pills-booking-fees-tab">...</div>
                                        <div className="tab-pane fade" id="v-pills-donation-settings" role="tabpanel" aria-labelledby="v-pills-donation-settings-tab">...</div>
                                        <div className="tab-pane fade" id="v-pills-payout-settings" role="tabpanel" aria-labelledby="v-pills-payout-settings-tab">...</div>

                                        <div className="tab-pane fade" id="v-pills-payment-credits" role="tabpanel" aria-labelledby="v-pills-payment-credits-tab">
                                            <div className="element-header">
                                                <h2 className="font-ave-heavy text-uppercase fs-1">PAYMENT & CREDITS</h2>
                                            </div>
                                            <div className="available-cred-wrapper my-5 px-5 py-4" style={{ backgroundColor: '#f7f8f8' }}>
                                                <h3 className="font-ave-heavy text-uppercase fs-2 theme-pink-color d-flex align-items-center">available CREDITS <span className="text-dark mx-auto">$25</span></h3>
                                            </div>
                                            <div className="element-body">
                                                <h3 className="font-ave-heavy text-uppercase fs-2 theme-pink-color mb-4">Payment Method</h3>
                                                <div className="table-responsive">
                                                    <table className="table table-borderless">
                                                        <tbody>
                                                            <tr>
                                                                <th>
                                                                    Card Number
                                                                </th>
                                                                <td>
                                                                    <span className="fs-3"> xxxx-xxxx-xxxx-1234</span>
                                                                </td>
                                                                <td>
                                                                    <button className="btn theme-pink-color fs-3">Edit</button>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th>
                                                                    Security Code
                                                                </th>
                                                                <td className="font-ave-heavy fs-2">
                                                                    ***
                                                                </td>
                                                                <td>
                                                                    <button className="btn theme-pink-color fs-3">Edit</button>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th>
                                                                    Expires
                                                                </th>
                                                                <td className="font-ave-heavy fs-2">
                                                                    **/**
                                                                </td>
                                                                <td >
                                                                    <button className="btn theme-pink-color fs-3">Edit</button>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th>
                                                                    Name
                                                                </th>
                                                                <td className="font-ave-heavy fs-2">
                                                                    John Doe
                                                                </td>
                                                                <td >
                                                                    <button className="btn theme-pink-color fs-3">Edit</button>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="v-pills-security-privacy" role="tabpanel" aria-labelledby="v-pills-security-privacy-tab">
                                            <div className="element-header mb-5">
                                                <h2 className="font-ave-heavy text-uppercase fs-1">Security & Privacy</h2>
                                            </div>
                                            <div className="element-body">
                                                <div className="table-responsive">
                                                    <table className="table table-borderless">
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <h3 className="font-ave-roman fs-2 theme-pink-color d-none">SECTION TITLE</h3>
                                                                    <div dangerouslySetInnerHTML={{ __html: privacy && privacy.body ? privacy.body : null }} >
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="v-pills-tos" role="tabpanel" aria-labelledby="v-pills-tos-tab">
                                            <div className="element-header mb-5">
                                                <h2 className="font-ave-heavy text-uppercase fs-1">TERMS OF SERVICE</h2>
                                            </div>
                                            <div className="element-body">
                                                <div className="table-responsive">
                                                    <table className="table table-borderless">
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <h3 className="font-ave-roman fs-2 theme-pink-color d-none">SECTION TITLE</h3>
                                                                    <div dangerouslySetInnerHTML={{ __html: tos && tos.body ? tos.body : null }} >
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="tab-pane fade" id="v-pills-get-support" role="tabpanel" aria-labelledby="v-pills-get-support-tab">...</div>

                                        <div className="tab-pane fade" id="v-pills-become-talent" role="tabpanel" aria-labelledby="v-pills-become-talent-tab">...</div>
                                        <div className="tab-pane fade" id="v-pills-signout" role="tabpanel" aria-labelledby="v-pills-signout-tab">...</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <DisableAccount accessToken={token} userName={username} />
        </Aux>
    )
}


export default withAuthorization(withRouter(Settings));