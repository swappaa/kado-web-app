import React, { useState } from 'react';
import { connect } from 'react-redux';
import axios from '../../axios-kado';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import { Link } from 'react-router-dom';

import Aux from '../../hoc/Auxi/Auxi';


const Favorites = React.memo((props) => {
    const { fanTalentFavorites, onSetTalentIsFavorite } = props

    const talentFavorites = Object.keys(fanTalentFavorites).map(function (key) {
        var talentFavorite = fanTalentFavorites[key];
        return talentFavorite;
    });

    const onSetTalentAsFavoriteHandler = (e) => {
        onSetTalentIsFavorite(e.target.id, true);
    };

    const removeTalentFromFavorites = (e) => {
        onSetTalentIsFavorite(e.target.id, false);
    };

    const allFanTalentFavorite = talentFavorites.map((favorite, i) => {
        return <Aux key={i}>
            {talentFavorites.length === 0 ? (
                <div className="col-lg-12 py-3 text-center text-uppercase fs-4">
                    No Spotlight
                </div>
            ) : (
                null
            )}
            <div className="col-2 favorite-item-wrapper position-relative">
                <div className="position-absolute top-0 start-100 translate-middle fav-btn-wrapper">
                    {favorite.is_favorite ? (
                        <button className="btn removeFavorite" onClick={removeTalentFromFavorites} id={favorite.talent}> </button>
                    ) : (
                        <button className="btn addFavorite" onClick={onSetTalentAsFavoriteHandler} id={favorite.talent}> </button>
                    )}
                </div>
                <div className="border-0 text-center p-2 position-relative favorite-item" data-fav={favorite.is_favorite ? 'y-fav' : 'x-fav'}>
                    <img className="img-fluid w-100" src={favorite.profile_picture}
                        alt={favorite.stage_name} />
                    <h5 className="mt-3 fs-4">{favorite.stage_name}</h5>
                    <div className="py-1 pb-0">
                        <small>Singer / Songwriter</small>
                    </div>
                    <Link className="stretched-link" to={`/talent-profile/${favorite.talent_link_url}`}
                    ></Link>
                </div>
            </div>
        </Aux>
    });



    return (
        <Aux>
            {allFanTalentFavorite}
        </Aux>
    );
});


const mapDispatchToProps = dispatch => {
    return {
        onSetTalentIsFavorite: (talent_username, isFavorite) =>
            dispatch(actions.setTalentIsFavorite(talent_username, isFavorite))
    };
};

export default connect(
    null,
    mapDispatchToProps
)(withErrorHandler(Favorites, axios));
