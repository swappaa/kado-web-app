import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import prof1 from '../../assets/images/banner-surprise-message.png';
import prof2 from '../../assets/images/banner-send-personalized-images.jpg';
import prof3 from '../../assets/images/highlighted-kados.png';


import Aux from '../../hoc/Auxi/Auxi';

const TalentCategories = (props) => {

    const { spotlightCategories } = props

    const spotlightByCategories = Object.keys(spotlightCategories).map(function (key) {
        var spotlight = spotlightCategories[key];
        return spotlight;
    });

    console.log(spotlightByCategories);

    // const talentCategoryOutput = spotlightCategories.all.map((tc, i) => {
    //     return <div className="col-2 category-item-wrapper" key={i}>
    //         <div className="border-0 text-center p-2 position-relative category-item selected">
    //             <img className="img-fluid w-100" src={prof2}
    //                 alt="category profile picture" />
    //             <h5 className="mt-3 fs-4">Bruno Mars</h5>
    //             <div className="py-1 pb-0">
    //                 <small>Singer / Songwriter</small>
    //             </div>
    //             <a href="#" className="stretched-link"></a>
    //         </div>
    //     </div>
    // });


    const allTalentBySpotlight = spotlightByCategories.map((ts, i) => {
        return <Aux>
            {/* Map is undefined */}
            {!ts.all || ts.all.map((talent, i) => (
                <div className="col-2 category-list-wrapper" key={i}>
                    <div className="border-0 text-center p-2 position-relative category-item">
                        <img className="img-fluid w-100" src={talent.profile_picture}
                            alt={talent.stage_name} />
                        <h5 className="fs-4 font-ave-roman my-2">{talent.stage_name}</h5>
                        <Link className="stretched-link" to={`/talent-profile/${talent.talent_link_url}`}
                        ></Link>
                    </div>
                </div>
            ))}
        </Aux>
    });



    return (
        <Aux>
            {allTalentBySpotlight}
        </Aux>
    );
};

export default TalentCategories;