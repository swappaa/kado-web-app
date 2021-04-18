import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, Link, Redirect } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import ReadMoreAndLess from 'react-read-more-less';

import Aux from '../../hoc/Auxi/Auxi';
import Auth from '../../containers/Auth/SignIn';
import axios from '../../axios-kado';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import util from "../../shared/utility";
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';
import '../../App.css';
import './TalentProfile.css';
import charityLogo from '../../assets/images/charity logo.png';
import { ReactComponent as RatingStarFull } from '../../assets/images/svg/Star-Pink-Full.svg';
import { ReactComponent as RatingStarHalf } from '../../assets/images/svg/Star-Pink-Half.svg';


const TalentProfile = props => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const { talentLink } = useParams()
    const { onFetchTalentByUsername, loading } = props;


    useEffect(() => {
        window.scroll({
            top: 0
        });
        onFetchTalentByUsername(talentLink);
    }, [talentLink, onFetchTalentByUsername]);


    const { service } = props

    console.log(service)

    const category = [];

    if (loading && talentLink !== service.talent_link_url) {
        return <Spinner />
    }

    for (let categoryName in service.categories) {
        category.push(
            {
                id: categoryName,
                name: service.categories[categoryName]
            }
        );
    }


    let bookNow = (props.isAuthenticated ?
        <Link to={`/${service.talent_link_url}/book`} className="font-ave-heavy btn theme-pink-bg-color text-white br-radius-40 py-3 btn-hvr" >
            <span className="display-4 text-uppercase">BOOK NOW</span> <br />
            <span className="text-trans-unset fs-4 font-ave-reg">[ Personal Video {service.video_fee ? util.formatCurrency(service.video_fee) : null}  ]</span>
        </Link > :
        <Aux>
            <Auth
                show={show}
                closed={handleClose} />
            <button onClick={() => setShow(true)} className="font-ave-heavy btn theme-pink-bg-color text-white br-radius-40 py-3 btn-hvr">
                <span className="display-4 text-uppercase">BOOK NOW</span> <br />
                <span className="text-trans-unset fs-4 font-ave-reg">[ Personal Video {service.video_fee ? util.formatCurrency(service.video_fee) : null}  ]</span>
            </button>
        </Aux>

    );

    return (
        <div className="talent-profile">
            <section className="pb-5 py-xl-5">
                <div className="container-fluid px-5">
                    <div className="profile-wrapper">
                        <div className="row px-5">
                            <div className="col-md-4 prof-picture">
                                <img className="img-fluid w-100 br-radius" src={service.profile_picture || <Skeleton />} alt="profile" />
                            </div>
                            <div className="col-xl-7 col-md-8">
                                <div className="element-wrapper px-sm-4 mt-4 mt-md-0">
                                    <div className="d-flex flex-wrap justify-content-between position-relative">
                                        <div className="profile-name theme-pink-color">
                                            <h2 className="display-4 lh-base">{service.stage_name || <Skeleton />}</h2>
                                            <span className="fs-1 category-details">
                                                <ul className="list-group list-group-horizontal">
                                                    {category.map((category, i) => (
                                                        <li key={i} className="list-group-item border-0 py-0">{category.name || <Skeleton />}</li>
                                                    ))}
                                                </ul>
                                            </span>
                                        </div>
                                        <div className="charity-wrapper position-absolute top-0 end-0">
                                            <div className="element-wrapper text-center p-2 p-sm-4" style={{ border: '1px solid #a4a4a4' }}>
                                                <img src={charityLogo} alt="charity-logo" />
                                                <span className="theme-pink-color fs-3 w-100 d-block">25% to Charity</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rating-star my-4">
                                        <div className="str-rating-icon mb-3">
                                            <RatingStarFull className="me-1" />
                                            <RatingStarFull className="me-1" />
                                            <RatingStarFull className="me-1" />
                                            <RatingStarFull className="me-1" />
                                            <RatingStarHalf className="me-1" />
                                        </div>
                                        <span className="fs-4">Replies in 8.5 hrs</span>
                                    </div>
                                    <div className="profile-details pe-0 pe-lg-5">
                                        <div className="fs-1 lh-sm mb-4">
                                            {service.bio ?
                                                <ReadMoreAndLess
                                                    className="read-more-content"
                                                    charLimit={250}
                                                    readMoreText="Read more >"
                                                    readLessText="Read less >"
                                                >
                                                    {service.bio}
                                                </ReadMoreAndLess> : null}
                                        </div>
                                        {/* <div className="btn-wrapper text-end pe-sm-4">
                                            <a className="text-uppercase theme-pink-color fs-3" href="#">Read More {'>'}</a>
                                        </div> */}
                                    </div>
                                    <div className="book-now d-grid my-5">
                                        {bookNow}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pb-5">
                <div className="container-fluid px-5">
                    <div className="reviews-wrapper">
                        <div className="element-header d-flex flex-wrap justify-content-between align-items-center px-3 px-lg-5 mb-2">
                            <h3 className="text-uppercase theme-pink-color fs-2">REVIEWS</h3> <a
                                className="theme-pink-color text-uppercase fs-3 btn-read-all-reviews" href="#">Read ALL 32 REVIEWS{'>'}</a>
                        </div>
                        <div className="row row-cols-1 g-3 px-5">
                            <div className="col">
                                <div className="card border-0 rounded-0 p-3 py-4 d-reviews-wrapper">
                                    <div
                                        className="rating-star d-flex align-items-center justify-content-center align-self-start px-3">
                                        <div className="str-rating-icon d-flex align-items-center">
                                            <RatingStarFull className="img-fluid svg-icon me-1" />
                                            <RatingStarFull className="img-fluid svg-icon me-1" />
                                            <RatingStarFull className="img-fluid svg-icon me-1" />
                                            <RatingStarFull className="img-fluid svg-icon me-1" />
                                            <RatingStarFull className="img-fluid svg-icon me-1" />
                                            <span className="font-ave-black fs-3 ms-4">5.0</span>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title font-ave-reg">Reviewed by <span>C*****</span> on <span>November
                                        30th,
                                        2020</span></h5>
                                        <p className="card-text fs-4 lh-sm">This was a perfect announcement for our staff awards
                                        online
                                        event.
                                        Everybody loved it!
                                        Lily also kindly did it in record time so we could screen it on the day, which was a
                                        massive relief for me.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card border-0 rounded-0 p-3 py-4 d-reviews-wrapper">
                                    <div
                                        className="rating-star d-flex align-items-center justify-content-center align-self-start px-3">
                                        <div className="str-rating-icon d-flex align-items-center">
                                            <RatingStarFull className="img-fluid svg-icon me-1" />
                                            <RatingStarFull className="img-fluid svg-icon me-1" />
                                            <RatingStarFull className="img-fluid svg-icon me-1" />
                                            <RatingStarFull className="img-fluid svg-icon me-1" />
                                            <RatingStarFull className="img-fluid svg-icon me-1" />
                                            <span className="font-ave-black fs-3 ms-4">5.0</span>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title font-ave-reg">Reviewed by <span>C*****</span> on <span>November
                                        30th,
                                        2020</span></h5>
                                        <p className="card-text fs-4 lh-sm">This was a perfect announcement for our staff awards
                                        online
                                        event.
                                        Everybody loved it!
                                        Lily also kindly did it in record time so we could screen it on the day, which was a
                                        massive relief for me.
                                </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card border-0 rounded-0 p-3 py-4 d-reviews-wrapper">
                                    <div
                                        className="rating-star d-flex align-items-center justify-content-center align-self-start px-3">
                                        <div className="str-rating-icon d-flex align-items-center">
                                            <RatingStarFull className="img-fluid svg-icon me-1" />
                                            <RatingStarFull className="img-fluid svg-icon me-1" />
                                            <RatingStarFull className="img-fluid svg-icon me-1" />
                                            <RatingStarFull className="img-fluid svg-icon me-1" />
                                            <RatingStarFull className="img-fluid svg-icon me-1" />
                                            <span className="font-ave-black fs-3 ms-4">5.0</span>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title font-ave-reg">Reviewed by <span>C*****</span> on <span>November
                                        30th,
                                        2020</span></h5>
                                        <p className="card-text fs-4 lh-sm">This was a perfect announcement for our staff awards
                                        online
                                        event.
                                        Everybody loved it!
                                        Lily also kindly did it in record time so we could screen it on the day, which was a
                                        massive relief for me.
                                </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )

}


const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null,
        service: state.ServiceTalent.talent,
        loading: state.ServiceTalent.loading,
        error: state.ServiceTalent.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchTalentByUsername: (talentId) =>
            dispatch(actions.fetchTalent(talentId))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withErrorHandler(TalentProfile, axios));