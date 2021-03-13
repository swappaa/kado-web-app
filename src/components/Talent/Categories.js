import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Aux from '../../hoc/Auxi/Auxi';

const TalentCategories = (props) => {
    const [clientXonMouseDown, setClientXonMouseDown] = useState(null);
    const [clientYonMouseDown, setClientYonMouseDown] = useState(null);

    const settings = {
        dots: false,
        arrows: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 2,
        variableWidth: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 575,
                settings: {
                    slidesToScroll: 1
                }
            }
        ]
    };

    const handleOnMouseDown = (e) => {
        e.preventDefault()
        setClientXonMouseDown(e.clientX);
        setClientYonMouseDown(e.clientY);
    }

    const handleOnClick = (e) => {
        e.stopPropagation()
        if (clientXonMouseDown !== e.clientX ||
            clientYonMouseDown !== e.clientY) {
            e.preventDefault()
        }
    }

    const talentCategories = [];

    for (let talentCategory in props.talentCategories) {
        talentCategories.push(
            {
                category: talentCategory,
                talents: props.talentCategories[talentCategory]
            }
        );
    }

    console.log(talentCategories);

    const talentCategoryOutput = talentCategories.map((tc, i) => {
        return <div className="row featured-wrapper-column my-3" key={i}>
            <div className="col-12">
                <div className="element-header py-4 d-flex align-items-center justify-content-between">
                    <h2 className="text-uppercase theme-pink-color display-6">{tc.category}</h2>
                    <Link className="text-uppercase fs-3 font-ave-heavy" to={`/talent/${tc.category}`}>SEE ALL {tc.category} {'>'}</Link>
                </div>
            </div>
            <div className="col-12">
                <Slider {...settings}>
                    {/* Map is not a function */}
                    {Array.from(tc.talents).map((talent, i) => (
                        <div className="element-featured-wrapper py-3 position-relative" key={i}>
                            <div className="position-absolute top-0 start-100 translate-middle fav-btn-wrapper">
                                <button className="btn"> </button>
                            </div>
                            <div className="featured-wrapper text-center position-relative" data-fav={talent.is_favorite ? 'y-fav' : `x-fav`}>
                                <div className="image-wrapper">
                                    <img className="img-fluid w-100" src={talent.profile_picture} alt={talent.stage_name} />
                                </div>
                                <div className="featured-talent my-2">
                                    <h5 className="fs-4 font-ave-roman">{talent.stage_name}</h5>
                                </div>
                                <Link className="stretched-link" to={`/talent-profile/${talent.talent_link_url}`} onMouseDown={(e) => handleOnMouseDown(e)}
                                    onClick={(e) => handleOnClick(e)} key={i}
                                ></Link>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div >
    });

    return (
        <Aux>
            {talentCategoryOutput}
        </Aux>
    );
};

export default React.memo(TalentCategories);
