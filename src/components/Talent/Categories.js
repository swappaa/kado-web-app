import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Aux from '../../hoc/Auxi/Auxi';

const Categories = (props) => {
    const [clientXonMouseDown, setClientXonMouseDown] = useState(null);
    const [clientYonMouseDown, setClientYonMouseDown] = useState(null);

    const settings = {
        dots: false,
        arrows: false,
        infinite: false,
        slidesToShow: 6,
        slidesToScroll: 6,
        variableWidth: true,
        focusOnSelect: true,
        swipeToSlide: false,
        initialSlide: 0,
        rtl: false,
        responsive: [
            {
                breakpoint: 1800,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
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

    // const talentCategories = [];

    // for (let talentCategory in props.talentCategories) {
    //     talentCategories.push(
    //         {
    //             category: talentCategory,
    //             talents: props.talentCategories[talentCategory]
    //         }
    //     );
    // }

    // console.log(talentCategories);

    // const talentCategoryOutput = props.talentCategories.filter((val) => {
    //     if (!props.searchTalent) {
    //         return val
    //     } else if (val.stage_name.toLowerCase().includes(props.searchTalent.toLowerCase()) || val.talent.toLowerCase().includes(props.searchTalent.toLowerCase())) {
    //         return val
    //     }
    // }).map((talent, key) => {
    //     return <div className="col-12" key={key}>
    //         <div className="element-featured-wrapper py-3 position-relative" >
    //             <div className="position-absolute top-0 start-100 translate-middle fav-btn-wrapper">
    //                 <button className="btn"
    //                     onClick={() => {
    //                         props.setTalentIsFavorite(props.category, key, talent.talent, talent.is_favorite, talent.stage_name)
    //                     }}>
    //                 </button>
    //             </div>
    //             <div className="featured-wrapper text-center position-relative" data-fav={talent.is_favorite ? 'y-fav' : 'x-fav'}>
    //                 <div className="image-wrapper">
    //                     <img className="img-fluid w-100" src={talent.profile_picture} alt={talent.stage_name} />
    //                 </div>
    //                 <div className="featured-talent my-2">
    //                     <h5 className="fs-4 font-ave-roman">{talent.stage_name}</h5>
    //                 </div>
    //                 <Link className="stretched-link" to={`/talent/${talent.talent_link_url}`} onMouseDown={(e) => handleOnMouseDown(e)}
    //                     onClick={(e) => handleOnClick(e)}
    //                 ></Link>
    //             </div>
    //         </div>
    //     </div>
    // });


    const talentCategoryOutput = props.talentCategories.map((talent, key) => {
        return <div className="col-12" key={key}>
            <div className="element-featured-wrapper py-3 position-relative" >
                <div className="position-absolute top-0 start-100 translate-middle fav-btn-wrapper">
                    <button className="btn"
                        onClick={() => {
                            props.setTalentIsFavorite(props.category, key, talent.talent, talent.is_favorite, talent.stage_name)
                        }}>
                    </button>
                </div>
                <div className="featured-wrapper text-center position-relative" data-fav={talent.is_favorite ? 'y-fav' : 'x-fav'}>
                    <div className="image-wrapper">
                        <img className="img-fluid w-100" src={talent.profile_picture} alt={talent.stage_name} />
                    </div>
                    <div className="featured-talent my-2">
                        <h5 className="fs-4 font-ave-roman">{talent.stage_name}</h5>
                    </div>
                    <Link className="stretched-link" to={`/talent/${talent.talent_link_url}`} onMouseDown={(e) => handleOnMouseDown(e)}
                        onClick={(e) => handleOnClick(e)}
                    ></Link>
                </div>
            </div>
        </div>
    });

    // const talentCategoryOutput = talentCategories.map((tc, key) => {
    //     return <div className="row featured-wrapper-column my-3" key={key}>
    //         <div className="col-12">
    //             <div className="element-header py-4 d-flex align-items-center justify-content-between">
    //                 <h2 className="text-uppercase theme-pink-color display-6">{tc.category}</h2>
    //                 <Link className="text-uppercase fs-3 font-ave-heavy" to={`/talent/${tc.category}`}>SEE ALL {tc.category} {'>'}</Link>
    //             </div>
    //         </div>
    //         <div className="col-12">
    //             <Slider {...settings}>
    //                 {Array.from(tc.talents).map((talent, i) => (
    //                     <div className="element-featured-wrapper py-3 position-relative" key={i}>
    //                         <div className="position-absolute top-0 start-100 translate-middle fav-btn-wrapper">
    //                             <button className="btn"
    //                                 onClick={() => {
    //                                     props.setTalentIsFavorite(tc.category, i, talent.talent, talent.is_favorite, talent.stage_name)
    //                                 }}>
    //                             </button>
    //                         </div>
    //                         <div className="featured-wrapper text-center position-relative" data-fav={talent.is_favorite ? 'y-fav' : 'x-fav'}>
    //                             <div className="image-wrapper">
    //                                 <img className="img-fluid w-100" src={talent.profile_picture} alt={talent.stage_name} />
    //                             </div>
    //                             <div className="featured-talent my-2">
    //                                 <h5 className="fs-4 font-ave-roman">{talent.stage_name}</h5>
    //                             </div>
    //                             <Link className="stretched-link" to={`/talent-profile/${talent.talent_link_url}`} onMouseDown={(e) => handleOnMouseDown(e)}
    //                                 onClick={(e) => handleOnClick(e)}
    //                             ></Link>
    //                         </div>
    //                     </div>
    //                 ))}
    //             </Slider>
    //         </div>
    //     </div >
    // });

    return (
        <Aux>
            <Slider {...settings}>
                {talentCategoryOutput}
            </Slider>
        </Aux>
    );
};

export default Categories;