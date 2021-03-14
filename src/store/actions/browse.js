import * as actionTypes from './actionsType';
import cleanDeep from 'clean-deep';
import axios from '../../axios-kado';

export const browseTalentSpotlightSuccess = (spotlight) => {
    return {
        type: actionTypes.BROWSE_SPOTLIGHT_CATEGORIES_SUCCESS,
        browseSpotlightByCategories: spotlight
    };
};

export const browseTalentSpotlightFail = (error) => {
    return {
        type: actionTypes.BROWSE_SPOTLIGHT_CATEGORIES_FAIL,
        error: error
    };
};

export const browseTalentSpotlightStart = () => {
    return {
        type: actionTypes.BROWSE_SPOTLIGHT_CATEGORIES_START
    };
};

export const browseTalentSpotlight = (token, user) => {
    return dispatch => {
        dispatch(browseTalentSpotlightStart());
        axios.get('talent/categories/spotlight')
            .then(async spotlightCategories => {
                const fetchedSpotlightCategories = await spotlightCategories.data.categories;
                dispatch(browseTalentSpotlightSuccess(cleanDeep(fetchedSpotlightCategories)));
            })
            .catch(err => {
                dispatch(browseTalentSpotlightFail(err));
            });
    };
};

