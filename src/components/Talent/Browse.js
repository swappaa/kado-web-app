import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Aux from '../../hoc/Auxi/Auxi';

const Browse = React.memo((props) => {

    const { spotlightByCategories } = props

    const browseSpotlightByCategories = Object.keys(spotlightByCategories).map(function (key) {
        var spotlight = spotlightByCategories[key];
        spotlight.category = key;
        return spotlight;
    });

    console.log(browseSpotlightByCategories);


    const allTalentBySpotlight = browseSpotlightByCategories.map((ts, tsIndex) => {
        return <div className="col-12 my-5" key={tsIndex}>
            <div className="category-wrapper mb-5 spotlight">
                <h3 className="text-uppercase theme-pink-color display-6 mx-3">SPOTLIGHT {ts.category}</h3>
                <div className="row row-cols-4 row-cols-md-5 g-3 justify-content-center justify-content-sm-start">
                    {!ts.spotlight || ts.spotlight.map((spotlight, spotIndex) => (
                        <div className="col-2 category-item-wrapper" key={spotIndex}>
                            <div className="border-0 text-center p-2 position-relative category-item selected">
                                <img className="img-fluid w-100" src={spotlight.profile_picture}
                                    alt={spotlight.stage_name} />
                                <h5 className="mt-3 fs-4">{spotlight.stage_name}</h5>
                                <div className="py-1 pb-0">
                                    <small>{spotlight.talent}</small>
                                </div>
                                <Link className="stretched-link" to={`/talent-profile/${spotlight.talent_link_url}`}
                                ></Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="category-wrapper all-category">
                <h3 className="text-uppercase theme-pink-color display-6 mx-3">All {ts.category}</h3>
                <div className="row row-cols-4 row-cols-md-6 g-3 justify-content-center justify-content-sm-start">
                    {!ts.all || ts.all.map((talent, talentIndex) => (
                        <div className="col-2 category-list-wrapper" key={talentIndex}>
                            <div className="border-0 text-center p-2 position-relative category-item">
                                <img className="img-fluid w-100" src={talent.profile_picture}
                                    alt={talent.stage_name} />
                                <h5 className="fs-4 font-ave-roman my-2">{talent.stage_name}</h5>
                                <Link className="stretched-link" to={`/talent-profile/${talent.talent_link_url}`}
                                ></Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    });

    return (
        <Aux>
            {allTalentBySpotlight}
        </Aux>
    );
});

export default Browse;
