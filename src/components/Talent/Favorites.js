import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Aux from '../../hoc/Auxi/Auxi';


const Favorites = React.memo((props) => {

    const { fanTalentFavorites } = props

    const talentFavorites = Object.keys(fanTalentFavorites).map(function (key) {
        var talentFavorite = fanTalentFavorites[key];
        return talentFavorite;
    });

    const allFanTalentFavorite = talentFavorites.map((favorite, i) => {
        return <div className="row row-cols-4 row-cols-md-5 g-3 justify-content-center justify-content-sm-start">
            <div className="col-2 favorite-item-wrapper">
                <div className="border-0 text-center p-2 position-relative favorite-item">
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
        </div>
    });



    return (
        <Aux>
            {allFanTalentFavorite}
        </Aux>
    );
});

export default Favorites;
