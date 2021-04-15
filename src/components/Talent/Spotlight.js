import React from 'react';
import { Link } from 'react-router-dom';

import Aux from '../../hoc/Auxi/Auxi';

const TalentCategories = React.memo((props) => {

    const { spotlightCategories } = props

    const spotlightByCategories = Object.keys(spotlightCategories).map(function (key) {
        var spotlight = spotlightCategories[key];
        spotlight.category = key;
        return spotlight;
    });

    const allTalentBySpotlight = spotlightByCategories.map((ts, tsIndex) => {
        return <Aux key={tsIndex}>
            <div className="category-wrapper mb-5 spotlight">
                <h3 className="text-uppercase theme-pink-color display-6 mx-3">SPOTLIGHT</h3>
                <div className="row row-cols-4 row-cols-md-5 g-3 justify-content-center justify-content-sm-start">
                    {ts.spotlight.length === 0 ? (
                        <div className="col-lg-12 py-3 text-center fs-4">
                            No Spotlight {ts.category}
                        </div>
                    ) : (
                        null
                    )}
                    {!ts.spotlight || ts.spotlight.map((spotlight, spotIndex) => (
                        <div className="col-2 category-item-wrapper position-relative" key={spotIndex}>
                            <div className="position-absolute top-0 start-100 translate-middle fav-btn-wrapper">
                                <button className="btn removeFavorite" onClick={() => {
                                    props.setTalentIsFavorite(ts.category, spotIndex, spotlight.talent, spotlight.is_favorite, 'spotlight', spotlight.stage_name)
                                }}>
                                </button>
                            </div>
                            <div className="border-0 text-center p-2 position-relative category-item selected" data-fav={spotlight.is_favorite ? 'y-fav' : 'x-fav'}>
                                <img className="img-fluid w-100" src={spotlight.profile_picture}
                                    alt={spotlight.stage_name} />
                                <h5 className="mt-3 fs-4">{spotlight.stage_name}</h5>
                                <div className="py-1 pb-0">
                                    <small>{spotlight.talent}</small>
                                </div>
                                <Link className="stretched-link" to={`/${spotlight.talent_link_url}`}
                                ></Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="category-wrapper all-category">
                <h3 className="text-uppercase theme-pink-color display-6 mx-3">All {ts.category}</h3>
                <div className="row row-cols-4 row-cols-md-6 g-3 justify-content-center justify-content-sm-start">
                    {/* Map is undefined */}
                    {!ts.all || ts.all.map((talent, talentIndex) => (
                        <div className="col-2 category-list-wrapper position-relative" key={talentIndex}>
                            <div className="position-absolute top-0 start-100 translate-middle fav-btn-wrapper">
                                <button className="btn removeFavorite" onClick={() => {
                                    props.setTalentIsFavorite(ts.category, talentIndex, talent.talent, talent.is_favorite, 'all', talent.stage_name)
                                }}>
                                </button>
                            </div>
                            <div className="border-0 text-center p-2 position-relative category-item" data-fav={talent.is_favorite ? 'y-fav' : 'x-fav'}>
                                <img className="img-fluid w-100" src={talent.profile_picture}
                                    alt={talent.stage_name} />
                                <h5 className="fs-4 font-ave-roman my-2">{talent.stage_name}</h5>
                                <Link className="stretched-link" to={`/talent/${talent.talent_link_url}`}
                                ></Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Aux>
    });



    return (
        <Aux>
            {allTalentBySpotlight}
        </Aux>
    );
});

export default
    TalentCategories
    ;
