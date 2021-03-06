import React from 'react';
import { Link } from 'react-router-dom';
// import FlipMove from 'react-flip-move';

import Aux from '../../hoc/Auxi/Auxi';

const Favorites = React.memo((props) => {
    const { fanTalentFavorites } = props


    const talentFavorites = Object.keys(fanTalentFavorites).map(function (key) {
        var talentFavorite = fanTalentFavorites[key];
        return talentFavorite;
    });

    const checkEmptyFavorites = fanTalentFavorites

    if (checkEmptyFavorites.length === 0) {
        return <div className="col-lg-12 py-3 text-center fs-4">
            You haven't added any talent to your favorites.
        </div>
    }

    const allFanTalentFavorite = talentFavorites.map((favorite, favKey) => {
        return <Aux key={favKey}>
            <div className="col-2 favorite-item-wrapper position-relative">
                <div className="position-absolute top-0 start-100 translate-middle fav-btn-wrapper">
                    <button className="btn removeFavorite" onClick={() => {
                        props.deleteFavorite(favorite.talent, favorite.stage_name)
                    }}>
                    </button>
                </div>
                <div className="border-0 text-center p-2 position-relative favorite-item" data-fav={favorite.is_favorite ? 'y-fav' : 'x-fav'}>
                    <img className="img-fluid w-100" src={favorite.profile_picture}
                        alt={favorite.stage_name} />
                    <h5 className="mt-3 fs-4">{favorite.stage_name}</h5>
                    <div className="py-1 pb-0">
                        <ul className="list-group list-group-horizontal justify-content-center bg-transparent">
                            {!favorite.categories || favorite.categories.map((category, categoryIndex) => (
                                <li key={categoryIndex} className="list-group-item border-0 py-0"> <small>{category}</small></li>
                            ))}
                        </ul>
                    </div>
                    <Link className="stretched-link" to={`/talent/${favorite.talent_link_url}`}
                    ></Link>
                </div>
            </div>
        </Aux>;
    });

    return (
        <Aux>
            {allFanTalentFavorite}
        </Aux>
    );
});

export default Favorites;
