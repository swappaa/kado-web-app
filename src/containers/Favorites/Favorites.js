import React, { useEffect } from 'react';

import withAuthorization from '../../hoc/withAuthorization/withAuthorization';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Spinner from '../../components/UI/Spinner/Spinner';
import SkeletonFavorites from '../../Skeletons/Favorites';
import axios from '../../axios-kado';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Favorites from '../../components/Talent/Favorites';

import '../../App.css';
import './Favorites.css';

const Spotlight = props => {
    const { onFetchFanTalentFavorite, onRemoveTalentFavorite, fanTalentFavorites, loading } = props;

    useEffect(() => {
        window.scroll({
            top: 0
        });
        localStorage.setItem('path', window.location.pathname);
        onFetchFanTalentFavorite(props.token, props.username);
    }, [onFetchFanTalentFavorite]);

    const removeTalentFavorite = (talentUN, StageName) => {
        onRemoveTalentFavorite(talentUN, StageName);
    }

    let fanTalentFavoriteList = [1, 2, 3, 4, 5, 6].map((n) => <SkeletonFavorites key={n} />);
    if (!loading) {
        fanTalentFavoriteList = Object.keys(fanTalentFavorites).map((key, index) => (
            <Favorites
                key={index}
                fanTalentFavorites={fanTalentFavorites[key]}
                deleteFavorite={removeTalentFavorite}
            />
        ))
    }

    return (
        <div className="favorites">
            <section className="pb-5">
                <div className="container-fluid px-5">
                    <div className="customs-wrapper w-100 mx-auto">
                        <h2 className="text-uppercase theme-pink-color display-4 mx-3 mb-5">Favorites</h2>
                        <div className="favorites-wrapper">
                            <div className="row row-cols-4 row-cols-md-5 g-3 justify-content-center justify-content-sm-start">
                                {fanTalentFavoriteList}
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
        fanTalentFavorites: state.FanTalentFavorites,
        loading: state.FanTalentFavorites.loading,
        token: state.auth.token,
        username: state.auth.username
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchFanTalentFavorite: (token, username) =>
            dispatch(actions.fetchFanTalentFavorite(token, username)),
        onRemoveTalentFavorite: (key, talentUN) => dispatch(actions.removeTalentFavorite(key, talentUN))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withErrorHandler(Spotlight, axios));
