import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import { FileDrop } from 'react-file-drop';
import { toast } from "react-toastify";
import { PayPalButton } from "react-paypal-button-v2";

import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';
import Tips from '../../components/Tips/Tips';
import Aux from '../../hoc/Auxi/Auxi';
import Modal from '../../components/UI/Modal/Modal';
import withAuthorization from '../../hoc/withAuthorization/withAuthorization';
import '../../App.css';
import './Booking.css';
import recepientMyself from '../../assets/images/svg/myself.svg';
import recepientFriend from '../../assets/images/svg/friend.svg';
import tips from '../../assets/images/svg/tips.svg';
import anniversary from '../../assets/images/svg/occasion/anniversary.svg';
import apology from '../../assets/images/svg/occasion/apology.svg';
import birthday from '../../assets/images/svg/occasion/bday.svg';
import celebration from '../../assets/images/svg/occasion/celebration.svg';
import christmas from '../../assets/images/svg/occasion/christmas.svg';
import condolences from '../../assets/images/svg/occasion/condolences.svg';
import congrats from '../../assets/images/svg/occasion/congrats.svg';
import easter from '../../assets/images/svg/occasion/easter.svg';
import friendship from '../../assets/images/svg/occasion/friendship.svg';
import getwell from '../../assets/images/svg/occasion/getwell.svg';
import hanukkah from '../../assets/images/svg/occasion/hanukkah.svg';
import love from '../../assets/images/svg/occasion/love.svg';
import missyou from '../../assets/images/svg/occasion/miss you.svg';
import motivate from '../../assets/images/svg/occasion/motivate.svg';
import newhome from '../../assets/images/svg/occasion/new home.svg';
import none from '../../assets/images/svg/occasion/none.svg';
import nowruz from '../../assets/images/svg/occasion/nowruz.svg';
import roast from '../../assets/images/svg/occasion/roast.svg';
import thankyou from '../../assets/images/svg/occasion/thank you.svg';
import wedding from '../../assets/images/svg/occasion/wedding.svg';

const Booking = props => {
    const { onFetchTalentByUsername, loading, service, coupon, isModalSuccess } = props;
    const { status } = coupon;
    const { talentLink } = useParams();
    const [talent] = useState(service.talent_link_url);
    const [recipient, setRecipient] = useState('Friend');
    const [recipientName, setRecipientName] = useState('');
    const [recipientPhoto, setRecipientPhoto] = useState('');
    const [pronoun, setPronoun] = useState('');
    const [occasion, setOccasion] = useState('None');
    const [instructions, setInstructions] = useState('');
    const [chars_instruct_left, setCharsInstructLeft] = useState(0);
    const [language, setLanguage] = useState('English');
    const fileInputRef = useRef(null);
    const [couponCode, setCouponCode] = useState('');
    const [modalCreateKadoNewSuccess, SetModalCreateKadoNewSuccess] = useState(false);


    useEffect(() => {
        document.title = `Kado - Book a Kado from ${service.stage_name}`;
        if (isModalSuccess) {
            SetModalCreateKadoNewSuccess(true)
        }

        if (status === 'live') {
            setCouponCode(' ');
        }

        onFetchTalentByUsername(talentLink);
    }, [talentLink, onFetchTalentByUsername, isModalSuccess, status]);

    const onRecipientValueChange = (event) => {
        setRecipient(event.target.value);
    }

    const onInstructionsValueChange = (event) => {
        setInstructions(event.target.value);
        setCharsInstructLeft(event.target.value.length)
    }

    const onFileInputChange = (event) => {
        const { files } = event.target;
        let size = files[0].size;
        let type = files[0].name;

        console.log(files)


        if (!type.match(/\.(jpg|jpeg|png|gif)$/)) {
            toast.error("File does not support. You must use .png or .jpg");
            return false;
        }

        if (size > 15015936) {
            toast.error("Please upload a file smaller than 15 MB");
            return false;
        }

        setRecipientPhoto(files);
    }

    const onTargetClick = () => {
        fileInputRef.current.click()
    }

    const onDropFile = (file) => {
        let size = file[0].size;
        let type = file[0].name;
        console.log(file)

        if (!type.match(/\.(jpg|jpeg|png|gif)$/)) {
            toast.error("File does not support. You must use .png or .jpg");
            return false;
        }

        if (size > 15015936) {
            toast.error("Please upload a file smaller than 15 MB");
            // window.alert("Please upload a file smaller than 10 MB");
            return false;
        }
        setRecipientPhoto(file);
    }

    const submitCreateKadoHandler = (event) => {
        event.preventDefault();
        props.onCreateNewKado(props.token, props.username, talent, recipientName, occasion, language, instructions, pronoun, recipientPhoto, couponCode);
    }

    const modalSuccessCloseHandler = () => {
        SetModalCreateKadoNewSuccess(false);
    };

    const promoCode = (event) => {
        event.preventDefault();
        if (couponCode) {
            props.onValidateCoupon(couponCode);
        }
    }

    if (status == 'live') {
        console.log('yehey');
    }

    let btnCoupon = <a className="text-white" onClick={promoCode} style={{ cursor: 'pointer' }}>Apply</a>;

    if (props.loading) {
        btnCoupon = <a className="text-white" onClick={promoCode} style={{ cursor: 'pointer' }}>
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </a>
    }

    let couponMessage = null;
    if (props.coupon.message != 'ok') {
        couponMessage = <div className="invalid-feedback d-block">
            {props.coupon.message}
        </div>
    }

    return (
        <Aux>
            <div className="booking">
                <section className="pb-5">
                    <div className="container-fluid px-5">
                        <div className="customs-wrapper w-100 mx-auto">
                            <h2 className="text-uppercase theme-pink-color display-4 mb-4">BOOKING A KÂDO</h2>
                        </div>
                    </div>
                    <div className="booking-wrapper-proc">
                        <form onSubmit={submitCreateKadoHandler}>
                            <div className="row row-cols-1 g-0">
                                <div className="col request step">
                                    <div className="container-fluid px-5">
                                        <div className="customs-wrapper w-100 mx-auto">
                                            <div className="card border-0  bg-transparent py-4">
                                                <div className="row g-0 align-items-center">
                                                    <div className="col-lg-4">
                                                        <p className="font-ave-heavy fs-1 text-uppercase theme-pink-color booking-title-step"><span
                                                            className="rounded-circle p-3 px-4 theme-pink-bg-color text-white text-center proc-book font-ave-black fs-1 me-4">1</span>
                                            Request</p>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <div className="card-body d-flex align-items-center justify-content-center justify-content-lg-start">
                                                            <img src={service.profile_picture || <Skeleton />}
                                                                className="profile-image rounded-pill card-img-top me-4 border-0"
                                                                alt={service.stage_name} />
                                                            <h5 className="card-title fs-1">{service.stage_name}</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col recipient step">
                                    <div className="container-fluid px-5">
                                        <div className="customs-wrapper w-100 mx-auto">
                                            <div className="card border-0  bg-transparent py-4">
                                                <div className="row g-0 align-items-center">
                                                    <div className="col-lg-4">
                                                        <p className="font-ave-heavy fs-1 text-uppercase theme-pink-color booking-title-step"><span
                                                            className="rounded-circle p-3 px-4 theme-pink-bg-color text-white text-center proc-book font-ave-black fs-1 me-4">2</span>
                                            Recipient</p>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <div className="card-body d-flex align-items-center">
                                                            <div className="recepient-wrapper d-flex flex-wrap justify-content-center justify-content-lg-start w-50">
                                                                <div className="choose-recipient text-center me-lg-5 mx-auto mx-lg-0 mb-3 mb-sm-0">
                                                                    <img className="img-fluid svg-icon" src={recepientMyself}
                                                                        alt="myself" />
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="radio" value="Myself" name="recipient"
                                                                            checked={recipient === "Myself" ? true : false}
                                                                            onChange={onRecipientValueChange} />
                                                                        <label className="form-check-label fs-5">
                                                                            Myself
                                                                </label>
                                                                    </div>
                                                                </div>
                                                                <div className="choose-recipient text-center me-lg-5 mx-auto mx-lg-0">
                                                                    <img className="img-fluid svg-icon" src={recepientFriend}
                                                                        alt="friend" />
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="radio" value="Friend" name="recipient"
                                                                            checked={recipient === "Friend" ? true : false}
                                                                            onChange={onRecipientValueChange}
                                                                        />
                                                                        <label className="form-check-label fs-5">
                                                                            Friend
                                                                </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {recipient === "Friend" ?
                                                                <div className="Recipient-pic-wrapper w-50 mx-auto">
                                                                    <div className="input-group mb-4">
                                                                        <span
                                                                            className="input-group-text border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded-0 bg-transparent px-0">

                                                                        </span>
                                                                        <input type="text"
                                                                            className="form-control form-control-lg border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded-0 fs-4 px-0"
                                                                            placeholder="Recipient Name" aria-label="Recipient Name" onChange={(e) => setRecipientName(e.target.value)} required />
                                                                    </div>
                                                                    <div className="input-group mb-4">
                                                                        <span
                                                                            className="input-group-text border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded-0 bg-transparent px-0">

                                                                        </span>
                                                                        <input type="text"
                                                                            className="form-control form-control-lg border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded-0 fs-4 px-0"
                                                                            placeholder="Pronoun" aria-label="Pronoun" onChange={(e) => setPronoun(e.target.value)} required />
                                                                    </div>
                                                                    <div className="d-flex flex-wrap align-items-center mb-3">
                                                                        <span className="fs-4 text-muted">Recipient Pic (Optional)</span>
                                                                        <FileDrop
                                                                            onTargetClick={onTargetClick}
                                                                            onDrop={(files, event) => onDropFile(files)}>
                                                                            Drag it here
                                                                </FileDrop>

                                                                        <input
                                                                            onChange={onFileInputChange}
                                                                            ref={fileInputRef}
                                                                            type="file"
                                                                            className="hidden invisible"
                                                                        />
                                                                    </div>
                                                                </div> : null}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col occasion step">
                                    <div className="container-fluid px-5">
                                        <div className="customs-wrapper w-100 mx-auto">
                                            <div className="card border-0  bg-transparent py-5">
                                                <div className="row g-0 align-items-center">
                                                    <div className="col-lg-4">
                                                        <p className="font-ave-heavy fs-1 text-uppercase theme-pink-color booking-title-step"><span
                                                            className="rounded-circle p-3 px-4 theme-pink-bg-color text-white text-center proc-book font-ave-black fs-1 me-4">3</span>
                                            OCCASION</p>
                                                    </div>
                                                    <div className="col-lg-8 py-4 p-0 p-sm-4 p-lg-0">
                                                        <div className="row g-3 justify-content-center justify-content-lg-start">
                                                            <div className="col-2 occasion-item">
                                                                <div className="border-0 text-center p-2 position-relative" data-on={occasion === 'B-Day' ? "active" : null}>
                                                                    <img src={birthday}
                                                                        className="img-fluid occasion-icon mx-auto" alt="birthday" />
                                                                    <div className="py-1 pb-0">
                                                                        <small className="text-uppercase">B-Day</small>
                                                                    </div>
                                                                    <a className="stretched-link"
                                                                        onClick={() => {
                                                                            setOccasion('B-Day')
                                                                        }}></a>
                                                                </div>
                                                            </div>
                                                            <div className="col-2 occasion-item">
                                                                <div className="border-0 text-center p-2 position-relative" data-on={occasion === 'Wedding' ? "active" : null}>
                                                                    <img src={wedding}
                                                                        className="img-fluid occasion-icon mx-auto" alt="Wedding" />
                                                                    <div className="py-1 pb-0">
                                                                        <small className="text-uppercase">Wedding</small>
                                                                    </div>
                                                                    <a className="stretched-link"
                                                                        onClick={() => {
                                                                            setOccasion('Wedding')
                                                                        }}></a>
                                                                </div>
                                                            </div>
                                                            <div className="col-2 occasion-item">
                                                                <div className="border-0 text-center p-2 position-relative" data-on={occasion === 'Anniversary' ? "active" : null}>
                                                                    <img src={anniversary}
                                                                        className="img-fluid occasion-icon mx-auto" alt="Anniversary" />
                                                                    <div className="py-1 pb-0">
                                                                        <small className="text-uppercase">Anniversary</small>
                                                                    </div>
                                                                    <a className="stretched-link"
                                                                        onClick={() => {
                                                                            setOccasion('Anniversary')
                                                                        }}></a>
                                                                </div>
                                                            </div>
                                                            <div className="col-2 occasion-item">
                                                                <div className="border-0 text-center p-2 position-relative" data-on={occasion === 'Friendship' ? "active" : null}>
                                                                    <img src={friendship}
                                                                        className="img-fluid occasion-icon mx-auto" alt="Friendship" />
                                                                    <div className="py-1 pb-0">
                                                                        <small className="text-uppercase">Friendship</small>
                                                                    </div>
                                                                    <a className="stretched-link" onClick={() => {
                                                                        setOccasion('Friendship')
                                                                    }}></a>
                                                                </div>
                                                            </div>
                                                            <div className="col-2 occasion-item">
                                                                <div className="border-0 text-center p-2 position-relative" data-on={occasion === 'Love' ? "active" : null}>
                                                                    <img src={love}
                                                                        className="img-fluid occasion-icon mx-auto" alt="Love" />
                                                                    <div className="py-1 pb-0">
                                                                        <small className="text-uppercase">Love</small>
                                                                    </div>
                                                                    <a className="stretched-link" onClick={() => {
                                                                        setOccasion('Love')
                                                                    }}></a>
                                                                </div>
                                                            </div>
                                                            <div className="col-2 occasion-item">
                                                                <div className="border-0 text-center p-2 position-relative" data-on={occasion === 'Condolences' ? "active" : null}>
                                                                    <img src={condolences}
                                                                        className="img-fluid occasion-icon mx-auto" alt="Condolences" />
                                                                    <div className="py-1 pb-0">
                                                                        <small className="text-uppercase">Condolences</small>
                                                                    </div>
                                                                    <a className="stretched-link" onClick={() => {
                                                                        setOccasion('Condolences')
                                                                    }}></a>
                                                                </div>
                                                            </div>
                                                            <div className="col-2 occasion-item">
                                                                <div className="border-0 text-center p-2 position-relative" data-on={occasion === 'Apology' ? "active" : null}>
                                                                    <img src={apology}
                                                                        className="img-fluid occasion-icon mx-auto" alt="Apology" />
                                                                    <div className="py-1 pb-0">
                                                                        <small className="text-uppercase">Apology</small>
                                                                    </div>
                                                                    <a className="stretched-link" onClick={() => {
                                                                        setOccasion('Apology')
                                                                    }}></a>
                                                                </div>
                                                            </div>
                                                            <div className="col-2 occasion-item">
                                                                <div className="border-0 text-center p-2 position-relative" data-on={occasion === 'Thank You' ? "active" : null}>
                                                                    <img src={thankyou}
                                                                        className="img-fluid occasion-icon mx-auto" alt="Thank You" />
                                                                    <div className="py-1 pb-0">
                                                                        <small className="text-uppercase">Thank You</small>
                                                                    </div>
                                                                    <a className="stretched-link" onClick={() => {
                                                                        setOccasion('Thank You')
                                                                    }}></a>
                                                                </div>
                                                            </div>
                                                            <div className="col-2 occasion-item">
                                                                <div className="border-0 text-center p-2 position-relative" data-on={occasion === 'Christmas' ? "active" : null}>
                                                                    <img src={christmas}
                                                                        className="img-fluid occasion-icon mx-auto" alt="Christmas" />
                                                                    <div className="py-1 pb-0">
                                                                        <small className="text-uppercase">Christmas</small>
                                                                    </div>
                                                                    <a className="stretched-link" onClick={() => {
                                                                        setOccasion('Christmas')
                                                                    }}></a>
                                                                </div>
                                                            </div>
                                                            <div className="col-2 occasion-item">
                                                                <div className="border-0 text-center p-2 position-relative" data-on={occasion === 'Nowruz' ? "active" : null}>
                                                                    <img src={nowruz}
                                                                        className="img-fluid occasion-icon mx-auto" alt="nowruz" />
                                                                    <div className="py-1 pb-0">
                                                                        <small className="text-uppercase">Nowruz</small>
                                                                    </div>
                                                                    <a className="stretched-link" onClick={() => {
                                                                        setOccasion('Nowruz')
                                                                    }}></a>
                                                                </div>
                                                            </div>
                                                            <div className="col-2 occasion-item">
                                                                <div className="border-0 text-center p-2 position-relative" data-on={occasion === 'Get Well' ? "active" : null}>
                                                                    <img src={getwell}
                                                                        className="img-fluid occasion-icon mx-auto" alt="get well" />
                                                                    <div className="py-1 pb-0">
                                                                        <small className="text-uppercase">Get Well</small>
                                                                    </div>
                                                                    <a className="stretched-link" onClick={() => {
                                                                        setOccasion('Get Well')
                                                                    }}></a>
                                                                </div>
                                                            </div>
                                                            <div className="col-2 occasion-item">
                                                                <div className="border-0 text-center p-2 position-relative" data-on={occasion === 'New Home' ? "active" : null}>
                                                                    <img src={newhome}
                                                                        className="img-fluid occasion-icon mx-auto" alt="new home" />
                                                                    <div className="py-1 pb-0">
                                                                        <small className="text-uppercase">New Home</small>
                                                                    </div>
                                                                    <a className="stretched-link" onClick={() => {
                                                                        setOccasion('New Home')
                                                                    }}></a>
                                                                </div>
                                                            </div>
                                                            <div className="col-2 occasion-item">
                                                                <div className="border-0 text-center p-2 position-relative" data-on={occasion === 'Congrats' ? "active" : null}>
                                                                    <img src={congrats}
                                                                        className="img-fluid occasion-icon mx-auto" alt="congrats" />
                                                                    <div className="py-1 pb-0">
                                                                        <small className="text-uppercase">Congrats</small>
                                                                    </div>
                                                                    <a className="stretched-link" onClick={() => {
                                                                        setOccasion('Congrats')
                                                                    }}></a>
                                                                </div>
                                                            </div>
                                                            <div className="col-2 occasion-item">
                                                                <div className="border-0 text-center p-2 position-relative" data-on={occasion === 'Motivate' ? "active" : null}>
                                                                    <img src={motivate}
                                                                        className="img-fluid occasion-icon mx-auto" alt="motivate" />
                                                                    <div className="py-1 pb-0">
                                                                        <small className="text-uppercase">Motivate</small>
                                                                    </div>
                                                                    <a className="stretched-link" onClick={() => {
                                                                        setOccasion('Motivate')
                                                                    }}></a>
                                                                </div>
                                                            </div>
                                                            <div className="col-2 occasion-item">
                                                                <div className="border-0 text-center p-2 position-relative" data-on={occasion === 'Celebration' ? "active" : null}>
                                                                    <img src={celebration}
                                                                        className="img-fluid occasion-icon mx-auto" alt="celebration" />
                                                                    <div className="py-1 pb-0">
                                                                        <small className="text-uppercase">Celebration</small>
                                                                    </div>
                                                                    <a className="stretched-link" onClick={() => {
                                                                        setOccasion('Celebration')
                                                                    }}></a>
                                                                </div>
                                                            </div>
                                                            <div className="col-2 occasion-item">
                                                                <div className="border-0 text-center p-2 position-relative" data-on={occasion === 'Miss You' ? "active" : null}>
                                                                    <img src={missyou}
                                                                        className="img-fluid occasion-icon mx-auto" alt="miss you" />
                                                                    <div className="py-1 pb-0">
                                                                        <small className="text-uppercase">Miss You</small>
                                                                    </div>
                                                                    <a className="stretched-link" onClick={() => {
                                                                        setOccasion('Miss You')
                                                                    }}></a>
                                                                </div>
                                                            </div>
                                                            <div className="col-2 occasion-item">
                                                                <div className="border-0 text-center p-2 position-relative" data-on={occasion === 'Roast' ? "active" : null}>
                                                                    <img src={roast}
                                                                        className="img-fluid occasion-icon mx-auto" alt="roast" />
                                                                    <div className="py-1 pb-0">
                                                                        <small className="text-uppercase">Roast</small>
                                                                    </div>
                                                                    <a className="stretched-link" onClick={() => {
                                                                        setOccasion('Roast')
                                                                    }}></a>
                                                                </div>
                                                            </div>
                                                            <div className="col-2 occasion-item">
                                                                <div className="border-0 text-center p-2 position-relative" data-on={occasion === 'None' ? "active" : null}>
                                                                    <img src={none}
                                                                        className="img-fluid occasion-icon mx-auto" alt="none" />
                                                                    <div className="py-1 pb-0">
                                                                        <small className="text-uppercase">None</small>
                                                                    </div>
                                                                    <a className="stretched-link" onClick={() => {
                                                                        setOccasion('None')
                                                                    }}></a>
                                                                </div>
                                                            </div>
                                                            <div className="col-2 occasion-item">
                                                                <div className="border-0 text-center p-2 position-relative" data-on={occasion === 'Hanukkah' ? "active" : null}>
                                                                    <img src={hanukkah}
                                                                        className="img-fluid occasion-icon mx-auto" alt="hanukkah" />
                                                                    <div className="py-1 pb-0">
                                                                        <small className="text-uppercase">Hanukkah</small>
                                                                    </div>
                                                                    <a className="stretched-link" onClick={() => {
                                                                        setOccasion('Hanukkah')
                                                                    }}></a>
                                                                </div>
                                                            </div>
                                                            <div className="col-2 occasion-item">
                                                                <div className="border-0 text-center p-2 position-relative" data-on={occasion === 'Easter' ? "active" : null}>
                                                                    <img src={easter}
                                                                        className="img-fluid occasion-icon mx-auto" alt="easter" />
                                                                    <div className="py-1 pb-0">
                                                                        <small className="text-uppercase">Easter</small>
                                                                    </div>
                                                                    <a className="stretched-link" onClick={() => {
                                                                        setOccasion('Easter')
                                                                    }}></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="input-group mt-4 w-50 mw-100">
                                                            <span
                                                                className="input-group-text border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded-0 bg-transparent px-0">
                                                            </span>
                                                            <input type="text"
                                                                className="form-control form-control-lg border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded-0 fs-4 px-0 bg-transparent"
                                                                placeholder="Other" aria-label="Other" onChange={e => setOccasion(e.target.value)} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col instructions step">
                                    <div className="container-fluid px-5">
                                        <div className="customs-wrapper w-100 mx-auto">
                                            <div className="card border-0  bg-transparent py-4">
                                                <div className="row g-0 align-items-center">
                                                    <div className="col-lg-4">
                                                        <p className="font-ave-heavy fs-1 text-uppercase theme-pink-color booking-title-step"><span
                                                            className="rounded-circle p-3 px-4 theme-pink-bg-color text-white text-center proc-book font-ave-black fs-1 me-4">4</span>
                                            INSTRUCTIONS</p>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <div className="card-body px-0 w-75 mw-100">
                                                            <div className="mb-3">
                                                                <div className="d-flex align-items-center mb-2 position-relative">
                                                                    <img className="svg-icon-50 img-fluid me-3"
                                                                        src={tips} alt="tips" />
                                                                    <label className="form-label font-ave-book fs-4 m-0">

                                                                        Tips for great
                                                        kâdos!</label>
                                                                    <button className="btn stretched-link" data-bs-toggle="modal" data-bs-target="#tips-modal" ></button>
                                                                </div>
                                                                <textarea maxLength={400} className="form-control border-dark rounded-0"
                                                                    rows="6" onChange={onInstructionsValueChange} required></textarea>
                                                                <div className="py-3">
                                                                    <span
                                                                        className="count-text float-end theme-pink-color fs-3 font-ave-heavy">{chars_instruct_left}/400</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col language step">
                                    <div className="container-fluid px-5">
                                        <div className="customs-wrapper w-100 mx-auto">
                                            <div className="card border-0  bg-transparent py-4">
                                                <div className="row g-0 align-items-center">
                                                    <div className="col-lg-4">
                                                        <p className="font-ave-heavy fs-1 text-uppercase theme-pink-color booking-title-step"><span
                                                            className="rounded-circle p-3 px-4 theme-pink-bg-color text-white text-center proc-book font-ave-black fs-1 me-4">5</span>
                                            LANGUAGE</p>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <div className="card-body px-0 w-75 mw-100">
                                                            <div className="row row-cols-2 g-4 w-75 mw-100 btn-wrapper">
                                                                <div className="col text-center">
                                                                    <button className="btn text-uppercase bg-white fs-4 py-2"
                                                                        type="button" onClick={() => {
                                                                            setLanguage('English')
                                                                        }} data-on={language === 'English' ? "active" : null}>English</button>
                                                                </div>
                                                                <div className="col text-center">
                                                                    <button className="btn text-uppercase bg-white fs-4 py-2"
                                                                        type="button" onClick={() => {
                                                                            setLanguage('Mix')
                                                                        }} data-on={language === 'Mix' ? "active" : null}>Mix
                                                                        is
                                                        ok</button>
                                                                </div>
                                                                <div className="col text-center">
                                                                    <button className="btn text-uppercase bg-white fs-4 py-2"
                                                                        type="button" onClick={() => {
                                                                            setLanguage('Persian')
                                                                        }} data-on={language === 'Persian' ? "active" : null}>Persian
                                                        (farsi)</button>
                                                                </div>
                                                                <div className="col text-center">
                                                                    <button className="btn text-uppercase bg-white fs-4 py-2"
                                                                        type="button" onClick={() => {
                                                                            setLanguage('No Reference')
                                                                        }} data-on={language === 'No Reference' ? "active" : null}>No
                                                        Reference</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col payment step">
                                    <div className="container-fluid px-5">
                                        <div className="customs-wrapper w-100 mx-auto">
                                            <div className="card border-0 bg-transparent pt-5">
                                                <div className="row g-0">
                                                    <div className="col-lg-4">
                                                        <p className="font-ave-heavy fs-1 text-uppercase theme-pink-color booking-title-step"><span
                                                            className="rounded-circle p-3 px-4 theme-pink-bg-color text-white text-center proc-book font-ave-black fs-1 me-4">6</span>
                                            PAYMENT</p>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <div className="card-body px-0 w-50 mw-100 p-0">
                                                            <h2 className="font-ave-heavy">DO YOU HAVE A PROMO CODE?</h2>
                                                            <div className="input-group mb-3">
                                                                <input type="text" className="form-control rounded-0 border border-2 py-3" onChange={(e) => setCouponCode(e.target.value)} value={couponCode} />
                                                                <span className="input-group-text fs-5 px-4 rounded-0">
                                                                    {btnCoupon}
                                                                </span>
                                                            </div>
                                                            {couponMessage}
                                                            <ul className="list-group pe-5 bg-transparent">
                                                                <li className="d-flex justify-content-between align-items-center font-ave-reg fs-4 bg-transparent px-4 py-2 text-muted">
                                                                    Video  Message
                                                                <span className="badge bg-transparent rounded-pill text-muted fs-4">$155.00</span>
                                                                </li>
                                                                <li className="d-flex justify-content-between align-items-center font-ave-reg fs-4 bg-transparent px-4 py-2 text-muted">
                                                                    Credits
                                                                <span className="badge bg-transparent rounded-pill text-muted fs-4">- $25.00</span>
                                                                </li>
                                                                <li className="d-flex justify-content-between align-items-center font-ave-reg fs-4 bg-transparent px-4 py-2 text-muted">
                                                                    Promo Code
                                                                <span className="badge bg-transparent rounded-pill text-muted fs-4">- $20.00</span>
                                                                </li>
                                                                <li className="d-flex justify-content-between align-items-center font-ave-heavy fs-2 bg-transparent px-4 py-2 text-muted">
                                                                    Total
                                                                <span className="badge bg-transparent rounded-pill text-muted fs-2">$110.00</span>
                                                                </li>
                                                            </ul>
                                                            <div className="payment-method">
                                                                <PayPalButton
                                                                    createOrder={(data, actions) => {
                                                                        return actions.order.create({
                                                                            purchase_units: [{
                                                                                amount: {
                                                                                    currency_code: "USD",
                                                                                    value: "0.01"
                                                                                }
                                                                            }],
                                                                            // application_context: {
                                                                            //   shipping_preference: "NO_SHIPPING" // default is "GET_FROM_FILE"
                                                                            // }
                                                                        });
                                                                    }}
                                                                    onApprove={(data, actions) => {
                                                                        // Capture the funds from the transaction
                                                                        return actions.order.capture().then(function (details) {
                                                                            // Show a success message to your buyer
                                                                            alert("Transaction completed by " + details.payer.name.given_name);

                                                                            // OPTIONAL: Call your server to save the transaction
                                                                            return fetch("/paypal-transaction-complete", {
                                                                                method: "post",
                                                                                body: JSON.stringify({
                                                                                    orderID: data.orderID
                                                                                })
                                                                            });
                                                                        });
                                                                    }}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 booknow">
                                    <div className="container-fluid px-5">
                                        <div className="customs-wrapper w-100 mx-auto">
                                            <div className="card border-0  bg-transparent p-0">
                                                <div className="row g-0 align-items-center  justify-content-center  justify-content-lg-start">
                                                    <div className="col-lg-4 order-2 order-lg-1">
                                                        <div className="text-end fs-5 text-muted font-ave-book pe-4">
                                                            <p>Clicking Book does not guarantee the Talent will accept
                                                            your request. All kâdo requests are filled at the Talent’s
                                                            discretion. Requests must comply with our &nbsp;
                                                            <a className="text-decoration-underline me-2" href="#">Terms of Service</a>
                                                                and   <a className="text-decoration-underline ms-2" href="#">Privacy Policies</a>.
                                                                </p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-8 order-1 order-lg-2">
                                                        <div className="card-body px-0 w-75 mw-100">
                                                            <div className="book-now d-grid my-3">

                                                                <button type="submit" className="font-ave-heavy btn theme-pink-bg-color text-white br-radius-40 py-4 btn-hvr">
                                                                    <span className="display-4 text-uppercase">BOOK NOW</span>
                                                                </button>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
            <Tips />
            <Modal show={modalCreateKadoNewSuccess} hide={modalSuccessCloseHandler}>
                <div id="success-modal">
                    <div className="modal-content rounded-0 border-0">
                        <div className="modal-header px-5 border-0">
                            <h5 className="modal-title text-uppercase theme-pink-color display-4">Thank you</h5>
                            <button type="button" className="btn-close rounded-circle border border-2 border-dark"
                                data-bs-dismiss="modal" aria-label="Close" onClick={modalSuccessCloseHandler}></button>
                        </div>
                        <div className="modal-body px-5">
                            <div className="card mb-3 border-0 py-5">
                                <div className="row g-0">
                                    <div className="col-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="img-fluid" width="258px" height="258px" viewBox="0 0 512 512"><title>submit thank you</title><g id="Layer_2" data-name="Layer 2"><g id="Capa_1" data-name="Capa 1"><path d="M492.25,285.42a10,10,0,0,0-4.14-13.52,156.8,156.8,0,0,0-172.94,17.27L299,273l26.39-26.39a10,10,0,0,0-14.14-14.14l-26.39,26.39-64.38-64.39A139.8,139.8,0,0,0,231.84,45.31a10,10,0,1,0-17.66,9.38,119.08,119.08,0,0,1-8,125.48l-42.42-42.43a24.55,24.55,0,0,0-40.4,8.91L1.53,479a24.59,24.59,0,0,0,22.94,33A24.82,24.82,0,0,0,33,510.47L365.35,388.65a24.55,24.55,0,0,0,8.91-40.4L329.4,303.39a136.82,136.82,0,0,1,149.33-13.83,10,10,0,0,0,13.52-4.14Zm-333,157.47L69.12,352.73l25-68.15L227.43,417.91ZM110.41,460.8,51.2,401.59l10.33-28.17,77.05,77.05ZM26.14,491.69a4.54,4.54,0,0,1-5.83-5.82l23.3-63.58,46.1,46.1Zm335.2-125.11a4.41,4.41,0,0,1-2.87,3.29L297,392.4l-56.88-56.87A10,10,0,0,0,226,349.67L276.29,400l-28.17,10.33L101.68,263.88,112,235.71,162.33,286a10,10,0,1,0,14.14-14.14L119.6,215l22.53-61.48a4.43,4.43,0,0,1,3.29-2.87,4.84,4.84,0,0,1,1-.11,4.35,4.35,0,0,1,3.16,1.34L360.12,362.4a4.41,4.41,0,0,1,1.22,4.18Z" /><path d="M301.6,79.8a10,10,0,0,0,10-10,15.2,15.2,0,0,1,15.19-15.18A35.23,35.23,0,0,0,362,19.43a10,10,0,0,0-20,0,15.21,15.21,0,0,1-15.18,15.19A35.22,35.22,0,0,0,291.6,69.8,10,10,0,0,0,301.6,79.8Z" /><path d="M390.32,174.19a36.38,36.38,0,0,0,36.34-36.34A16.36,16.36,0,0,1,443,121.51a10,10,0,0,0,0-20,36.38,36.38,0,0,0-36.34,36.34,16.36,16.36,0,0,1-16.34,16.34,10,10,0,0,0,0,20Z" /><path d="M448,193.48a32,32,0,1,0,32-32A32,32,0,0,0,448,193.48Zm32-12a12,12,0,1,1-12,12A12,12,0,0,1,480,181.48Z" /><path d="M315.11,169.85a32,32,0,1,0-32-32A32,32,0,0,0,315.11,169.85Zm0-44a12,12,0,1,1-12,12A12,12,0,0,1,315.11,125.85Z" /><path d="M128,64A32,32,0,1,0,96,32,32,32,0,0,0,128,64Zm0-44a12,12,0,1,1-12,12A12,12,0,0,1,128,20Z" /><path d="M452.5,351.06a10,10,0,0,0-14.14,14.14l9.43,9.43a10,10,0,0,0,14.14-14.15Z" /><path d="M499.64,398.2a10,10,0,0,0-14.14,14.14l9.43,9.43a10,10,0,0,0,14.14-14.14Z" /><path d="M494.93,351.06l-9.43,9.43a10,10,0,1,0,14.14,14.14l9.43-9.43a10,10,0,0,0-14.14-14.14Z" /><path d="M447.79,398.2l-9.43,9.43a10,10,0,1,0,14.14,14.14l9.43-9.43a10,10,0,0,0-14.14-14.14Z" /><path d="M492.57,29.43a10,10,0,0,0,7.07-2.93l9.43-9.43A10,10,0,0,0,494.93,2.93l-9.43,9.43a10,10,0,0,0,7.07,17.07Z" /><path d="M445.43,76.57a10,10,0,0,0,7.07-2.93l9.43-9.43a10,10,0,0,0-14.14-14.14l-9.43,9.43a10,10,0,0,0,7.07,17.07Z" /><path d="M499.64,50.07A10,10,0,0,0,485.5,64.21l9.43,9.43A10,10,0,0,0,509.07,59.5Z" /><path d="M447.79,26.5a10,10,0,0,0,14.14-14.14L452.5,2.93a10,10,0,1,0-14.14,14.14Z" /><path d="M201.22,300.78a10,10,0,1,0,7.07,2.93A10.08,10.08,0,0,0,201.22,300.78Z" /><path d="M347.12,196.62l-7.25,7.25A10,10,0,1,0,354,218l7.25-7.25a10,10,0,0,0-14.14-14.14Z" /></g></g></svg>
                                    </div>
                                    <div className="col-8">
                                        <div className="card-body fs-2 text-dark font-ave-reg">
                                            <p className="card-text">Thanks for submitting a kâdo request.</p>
                                            <p className="card-text">Please give the Talent up to 7 days to review and reply</p>
                                            <p className="card-text"> View your request <a href="" className="theme-pink-color">here</a>.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </Aux>
    )
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null,
        service: state.ServiceTalent.talent,
        token: state.auth.token,
        username: state.auth.username,
        coupon: state.kado.coupon,
        isModalSuccess: state.kado.isModalSuccess,
        loading: state.kado.loading,
        error: state.kado.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchTalentByUsername: (talentId) =>
            dispatch(actions.fetchTalent(talentId)),
        onCreateNewKado: (token, username, talent, recipientName, occasion, language, instructions, pronoun, recipient_photo, couponCode) =>
            dispatch(actions.createNewKado(token, username, talent, recipientName, occasion, language, instructions, pronoun, recipient_photo, couponCode)),
        onValidateCoupon: (couponCode) =>
            dispatch(actions.validateCoupon(couponCode)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withAuthorization(Booking));