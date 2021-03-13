import * as actionTypes from './actionsType';
import cleanDeep from 'clean-deep';
import axios from '../../axios-kado';


export const fetchTalentSpotlightSuccess = (spotlight) => {
    return {
        type: actionTypes.FETCH_SPOTLIGHT_CATEGORIES_SUCCESS,
        spotlightByCategories: spotlight
    };
};

export const fetchTalentSpotlightFail = (error) => {
    return {
        type: actionTypes.FETCH_SPOTLIGHT_CATEGORIES_FAIL,
        error: error
    };
};

export const fetchTalentSpotlightStart = () => {
    return {
        type: actionTypes.FETCH_SPOTLIGHT_CATEGORIES_START
    };
};

export const fetchTalentSpotlight = (category, token, user) => {
    return dispatch => {
        dispatch(fetchTalentSpotlightStart());
        axios.get(`talent/categories/spotlight/${category}`)
            .then(async spotlightCategories => {
                const fetchedSpotlightCategories = await spotlightCategories.data.categories;
                dispatch(fetchTalentSpotlightSuccess(fetchedSpotlightCategories));
            })
            .catch(err => {
                dispatch(fetchTalentSpotlightFail(err));
            });
    };
};

