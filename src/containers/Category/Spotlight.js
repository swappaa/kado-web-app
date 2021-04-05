import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import Aux from '../../hoc/Auxi/Auxi';
import SkeletonSpotlight from '../../Skeletons/Spotlight';
import axios from '../../axios-kado';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import SpotlightCategories from '../../components/Talent/Spotlight';
import '../../App.css';
import './Spotlight.css';


const Spotlight = props => {

    const { talentCategory } = useParams()
    const { onFetchSpotlightByCategories, onSetTalentFavorite, spotlightCategories, loading } = props;

    useEffect(() => {
        window.scroll({
            top: 0
        });
        localStorage.setItem('path', window.location.pathname);
        onFetchSpotlightByCategories(talentCategory, props.token, props.username);
    }, [talentCategory, onFetchSpotlightByCategories]);

    const setTalentIsFavorite = (category, index, talentUN, isFavorite, isArray, stage_name) => {
        onSetTalentFavorite(category, index, talentUN, isFavorite, isArray, stage_name);
    }

    let spotlightCategoryList = <SkeletonSpotlight />;
    if (!loading) {
        spotlightCategoryList = Object.keys(spotlightCategories).map((key, index) => (
            <SpotlightCategories
                key={index}
                spotlightCategories={spotlightCategories[key]}
                setTalentIsFavorite={setTalentIsFavorite}
            />
        ));
    }

    return (
        <Aux>
            <div className="category">
                <section className="pb-5">
                    <div className="container-fluid px-5">
                        <div className="customs-wrapper w-100 mx-auto">
                            <div className="col-12 py-4 px-md-5 theme-light-bg-color mb-5">
                                <div className="row align-items-center">
                                    <label className="col-sm-6 text-uppercase display-6 text-center text-sm-start my-4 my-sm-0 fw-bold" style={{ color: '#000' }}>Find your favorite star now!</label>
                                    <div className="col-sm-6">
                                        <div className="searchbox-wrapper">
                                            <div className="input-group flex-nowrap">
                                                <input type="text"
                                                    className="form-control form-control-lg px-4 py-3 br-radius fs-6 border-end-0"
                                                    placeholder="SEARCH" aria-label="SEARCH" aria-describedby="basic-addon2" />
                                                <span className="input-group-text bg-white del-search border-start-0 border-end-0 pe-1">
                                                    <a href="#">
                                                        <svg width="13px" height="11px" viewBox="0 0 22 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                            <g id="#0a09094d">
                                                                <path fill="#0a0909" opacity="0.30" d=" M 0.00 0.00 L 2.20 0.00 C 5.18 2.59 7.97 5.38 11.00 7.90 C 14.03 5.38 16.82 2.61 19.75 0.00 L 22.00 0.00 L 22.00 1.86 C 19.24 4.71 16.13 7.19 13.33 10.00 C 16.13 12.80 19.21 15.30 22.00 18.10 L 22.00 20.00 L 19.79 20.00 C 16.82 17.41 14.03 14.62 11.00 12.10 C 7.97 14.62 5.18 17.39 2.24 20.00 L 0.00 20.00 L 0.00 18.00 C 2.85 15.30 5.89 12.78 8.67 10.00 C 5.89 7.22 2.87 4.70 0.00 2.02 L 0.00 0.00 Z" />
                                                            </g>
                                                        </svg>
                                                    </a>
                                                </span>
                                                <span
                                                    className="input-group-text bg-white br-radius px-3 border-start-0 search-wrapper position-relative ps-2">
                                                    <a
                                                        href="#">
                                                        <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                                            width="13px" height="11px" viewBox="0 0 10.812 10.771" enableBackground="new 0 0 10.812 10.771" >
                                                            <path fill="#ABADB0" d="M10.592,9.491L8.73,7.628c0.571-0.792,0.916-1.756,0.916-2.805C9.646,2.164,7.483,0,4.823,0
	C2.164,0,0,2.164,0,4.823c0,2.659,2.164,4.822,4.823,4.822c1.07,0,2.05-0.361,2.851-0.953l1.858,1.859
	c0.146,0.146,0.338,0.22,0.53,0.22s0.384-0.073,0.53-0.22C10.885,10.259,10.885,9.784,10.592,9.491z M1.5,4.823
	C1.5,2.991,2.991,1.5,4.823,1.5s3.323,1.491,3.323,3.323c0,1.832-1.491,3.322-3.323,3.322S1.5,6.655,1.5,4.823z"/>
                                                        </svg>
                                                    </a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h2 className="text-uppercase theme-pink-color display-4 mx-3 mb-5">{talentCategory}</h2>


                            {spotlightCategoryList}


                        </div>
                    </div>
                </section>
            </div>
        </Aux>
    )
}


const mapStateToProps = state => {
    return {
        spotlightCategories: state.SpotlightByCategories,
        loading: state.SpotlightByCategories.loading,
        token: state.auth.token,
        username: state.auth.username
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchSpotlightByCategories: (category, token, username) =>
            dispatch(actions.fetchTalentSpotlight(category, token, username)),
        onSetTalentFavorite: (category, key, talentUN, isFavorite, isArray, stage_name) =>
            dispatch(actions.spotTalentIsFavorite(category, key, talentUN, isFavorite, isArray, stage_name))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withErrorHandler(Spotlight, axios));