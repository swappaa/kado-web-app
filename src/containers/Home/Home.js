import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Helmet } from "react-helmet";

import SearchBar from '../../components/Talent/SearchBar';
import SkeletonCategories from '../../Skeletons/Categories';
import axios from '../../axios-kado';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import { Link } from 'react-router-dom';
import TalentCategories from '../../components/Talent/Categories';
import '../../App.css';
import './Home.css';
import banner from '../../assets/images/banner-send-personalized-images.jpg';


const Home = props => {
    const { onFetchTalentByCategories, onSetTalentFavorite, onSetSearchTerm, talentCategories, token } = props;
    const [hasFocus, setFocus] = useState(false);

    useEffect(() => {
        onFetchTalentByCategories(props.access_token, props.username);
    }, [onFetchTalentByCategories, token]);

    const setTalentIsFavorite = (category, index, talentUN, isFavorite, stage_name) => {
        onSetTalentFavorite(category, index, talentUN, isFavorite, stage_name);
    }

    const setSearchTerm = (searchValue) => {
        onSetSearchTerm(props.access_token, props.username, searchValue);
    }

    const setSearchFocus = (val) => {
        if (val === false) {
            setTimeout(() => {
                setFocus(val)
            }, 200);
        } else {
            setFocus(val)
        }
        console.log(hasFocus)
    }

    let talentCategoryList = [1, 2].map((n) => <SkeletonCategories key={n} />);
    if (talentCategories && !props.loading) {
        talentCategoryList = Object.keys(talentCategories).map((tc, key) => {
            return <div className="row featured-wrapper-column my-3" key={key}>
                <div className="col-12">
                    <div className="element-header py-4 d-flex align-items-center justify-content-between">
                        <h2 className="text-uppercase theme-pink-color display-6">{tc}</h2>
                        <Link className="text-uppercase fs-3 font-ave-heavy" to={`/browse/${tc}`}>SEE ALL {tc} {'>'}</Link>
                    </div>
                </div>
                <TalentCategories
                    key={key}
                    category={tc}
                    talentCategories={talentCategories[tc]}
                    setTalentIsFavorite={setTalentIsFavorite}
                />
            </div >
        })
    }

    let searchSuggestion = null;
    if (props.searchTalent.length === 0) {
        searchSuggestion = null
    } else {
        searchSuggestion = (
            <ul className="list-group talent-search-wrapper">
                {props.searchTalent.map((talent, index) =>
                    <li className="list-group-item d-flex align-items-center border-0 position-relative" key={index} data-fav={talent.is_favorite ? 'y-fav' : 'x-fav'}>
                        <img className="img-fluid me-3" src={talent.profile_picture} alt={talent.stage_name} />
                        <div className="dropdown-notifications-item-content">
                            <div className="talent-content-details">
                                {talent.stage_name}
                            </div>
                            <ul className="category-wrapper d-flex">
                                {!talent.categories || talent.categories.map((category, categoryIndex) => (
                                    <li key={categoryIndex} className="border-0 text-muted mx-1"><small>{category}</small></li>
                                ))}
                            </ul>
                        </div>
                        <Link className="stretched-link" to={`/talent/${talent.talent_link_url}`}></Link>
                    </li>)}
            </ul>
        )
    }

    return (
        <div className="talent-home">
            <Helmet
                titleTemplate="Kado - %s">
                <meta charSet="utf-8" />
                <title>Send personalized messages to your family and friends from the stars they love!</title>
            </Helmet>

            <section>
                <div className="container-fluid px-5">
                    <div className="banner-wrapper text-white theme-pink-bg-color">
                        <div className="row">
                            <div className="col-md-3">
                                <img className="img-fluid w-100 h-100" src={banner}
                                    alt="personalized-message" />
                            </div>
                            <div className="col-md-9 px-5 py-4 px-lg-5 d-flex flex-column justify-content-center cust-wrap-rightt">
                                <h2 className="display-6 lh-base pe-xl-5">Send <span className="font-ave-heavy">personalized messages </span>
                                    to your family and friends
                            from the stars they love!</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-4">
                <div className="container-fluid px-5">
                    <div className="how-it-works text-dark theme-light-bg-color text-dark overflow-hidden">
                        <div className="row g-3 align-items-center p-4 p-sm-5">
                            <div className="col-xxl-2 col-lg-3 position-relative left-wrapper text-center text-lg-start">
                                <p className="display-4 text-uppercase lh-1" style={{ color: '#000' }}>How it
                            works</p>
                            </div>
                            <div className="col right-wrapper">
                                <div className="d-flex align-items-start px-md-5">
                                    <div className="col-step-work col flex-fill">
                                        <div className="d-flex justify-content-start align-items-center display-6">
                                            <span className="rounded-circle theme-pink-bg-color text-white font-ave-black me-3">1</span>
                                            <p className="m-0"> Pick a Star</p>
                                        </div>
                                    </div>
                                    <div className="col-step-work col flex-fill">
                                        <div className="d-flex justify-content-start align-items-center display-6">
                                            <span className="bg-white rounded-circle theme-pink-bg-color text-white  font-ave-black me-3">2</span>
                                            <p className="m-0"> Send a Request</p>
                                        </div>
                                    </div>
                                    <div className="col-step-work col flex-fill">
                                        <div className="d-flex justify-content-start align-items-center display-6">
                                            <span className="bg-white rounded-circle theme-pink-bg-color text-white  font-ave-black me-3">3</span>
                                            <p className="m-0"> Get a Video</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 py-4 ps-md-5">
                                    <div className="row align-items-center">
                                        <label className="col-sm-7 text-uppercase display-6 text-center text-sm-start my-4 my-sm-0 fw-bold" style={{ color: '#000' }}>Find your favorite star now!</label>
                                        <div className="col-sm-5">
                                            <div className="searchbox-wrapper">
                                                <SearchBar setSearchTerm={setSearchTerm} searchTalent={props.searchTalent} setSearchFocus={setSearchFocus} />
                                                <div className="talent-result">
                                                    {hasFocus ? searchSuggestion : null}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container-fluid px-5">
                    {talentCategoryList}
                </div>
            </section>
            <section>
                <div className="container-fluid px-5">
                    <div className="join-our-list mt-4 mt-md-0">
                        <div className="row row-cols-lg-auto g-3 align-items-center p-3 p-sm-5 py-3">
                            <div className="col-lg-6 order-2 order-lg-1 mt-0">
                                <div className="input-group mb-3 px-0 px-xl-5">
                                    <input type="text" className="form-control form-control-lg py-4 px-5 br-radius border-end-0"
                                        placeholder="EMAIL ADDRESS" />
                                    <span className="input-group-text br-radius bg-transparent px-4 border-start-0"><a href="#">
                                        <svg width="36px" height="31px" viewBox="0 0 47 41" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                            <g id="#aaaaaaff">
                                                <path fill="#aaaaaa" opacity="1.00" d=" M 27.37 0.00 L 29.74 0.00 C 33.44 1.90 35.80 5.45 38.80 8.19 C 41.87 11.57 46.20 14.40 47.00 19.23 L 47.00 21.91 C 46.11 26.67 41.86 29.46 38.81 32.81 C 35.88 35.57 33.44 38.92 29.93 41.00 L 27.62 41.00 C 24.78 40.20 22.86 37.00 24.15 34.18 C 26.32 30.82 29.59 28.38 32.26 25.44 C 23.15 25.37 14.04 25.56 4.94 25.37 C 2.56 25.56 0.89 23.73 0.00 21.74 L 0.00 19.42 C 0.75 17.26 2.55 15.41 5.01 15.63 C 14.08 15.44 23.17 15.64 32.25 15.56 C 29.57 12.59 26.26 10.16 24.11 6.75 C 22.90 3.98 24.77 1.05 27.37 0.00 Z" />
                                            </g>
                                        </svg>
                                    </a></span>
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2">
                                <h3 className="display-5 text-uppercase lh-1">JOIN OUR LIST</h3>
                                <p className="fs-3 font-ave-reg">to get inside info on new celebs, deals,
                            and other kâdo news.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    )
}

const mapStateToProps = state => {
    return {
        talentCategories: state.TalentByCategories.talentCategories,
        loading: state.TalentByCategories.loading,
        searchTalent: state.searchTalentResult.searchTalentResult,
        token: state.auth.token !== null,
        access_token: state.auth.token,
        username: state.auth.username
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchTalentByCategories: (token, username) =>
            dispatch(actions.fetchTalentByCategories(token, username)),
        onSetTalentFavorite: (category, key, talentUN, isFavorite, stage_name) =>
            dispatch(actions.setTalentIsFavorite(category, key, talentUN, isFavorite, stage_name)),
        onSetSearchTerm: (token, username, searchValue) =>
            dispatch(actions.searchTalents(token, username, searchValue))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withErrorHandler(Home, axios));
