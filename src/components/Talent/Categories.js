import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import axios from '../../axios-kado';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Aux from '../../hoc/Auxi/Auxi';

const Categories = (props) => {
    const [clientXonMouseDown, setClientXonMouseDown] = useState(null);
    const [clientYonMouseDown, setClientYonMouseDown] = useState(null);
    const { onSetTalentIsFavorite } = props;
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState("");
    const [isFavorite, setFavorite] = useState(false);
    const [records, setrecords] = useState("");

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

    // const onSearchHandler = (e) => {
    //     let searchTalent = talentCategories.filter(talents => talents.stage_name.includes(e.target.value.toLowerCase()));
    //     setSearchValue(e.target.value);
    // };

    const onSetTalentAsFavoriteHandler = (e) => {
        setFavorite(true);
        onSetTalentIsFavorite(e.target.id, true);
    };

    // const onTalentFromFavoritesRemoved = talentUsername =>
    //     dispatch(actions.removeTalentFavorite(talentUsername.target.id));

    const RemoveTalentFromFavorites = (e) => {
        setFavorite(false);
        onSetTalentIsFavorite(e.target.id, false);
    };


    // const RemoveTalentFromFavorites = (e) => {
    //     e.preventDefault()
    //     setrecords(RECORDS);
    //     let records = RECORDS;

    //     const companyName = 'FiveStar Automotives';
    //     const newQty = 2;
    //     const sid = 55;
    //     setrecords({
    //         records: {
    //             ...records,
    //             [companyName]: records[companyName].map(product =>
    //                 product.SparePartID === sid
    //                     ? {
    //                         ...product,
    //                         Qty: 2333,
    //                         TotalPrice: 1000
    //                     }
    //                     : product
    //             )
    //         }
    //     });

    //     console.log(records)
    // }

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
                    {Array.from(tc.talents).map((talent, i) => (
                        <div className="element-featured-wrapper py-3 position-relative" key={i}>
                            <div className="position-absolute top-0 start-100 translate-middle fav-btn-wrapper">
                                {talent.is_favorite ? (
                                    <button className="btn removeFavorite" onClick={RemoveTalentFromFavorites} id={talent.talent}> </button>
                                ) : (
                                    <button className="btn addFavorite" onClick={onSetTalentAsFavoriteHandler} id={talent.talent}> </button>
                                )}
                            </div>
                            <div className="featured-wrapper text-center position-relative" data-fav={talent.is_favorite ? 'y-fav' : 'x-fav'}>
                                <div className="image-wrapper">
                                    <img className="img-fluid w-100" src={talent.profile_picture} alt={talent.stage_name} />
                                </div>
                                <div className="featured-talent my-2">
                                    <h5 className="fs-4 font-ave-roman">{talent.stage_name}</h5>
                                </div>
                                <Link className="stretched-link" to={`/talent-profile/${talent.talent_link_url}`} onMouseDown={(e) => handleOnMouseDown(e)}
                                    onClick={(e) => handleOnClick(e)}
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
            {/* <input type="text"
                className="form-control form-control-lg px-4 py-3 br-radius fs-6 border-end-0"
                placeholder="SEARCH" aria-label="SEARCH" aria-describedby="basic-addon2"
                onChange={onSearchHandler} /> */}
            {talentCategoryOutput}
        </Aux>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        onSetTalentIsFavorite: (talent_username, isFavorite) =>
            dispatch(actions.removeTalentFavorite(talent_username, isFavorite))
    };
};

export default connect(
    null,
    mapDispatchToProps
)(withErrorHandler(Categories, axios));