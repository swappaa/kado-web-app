import * as actionTypes from './actionsType';
import axios from '../../axios-kado';
import { toast } from "react-toastify";

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

export const setTalentIsFavoriteFail = (error, category, key, talent_username, isFavorite, isArray) => {
    return {
        type: actionTypes.SET_SPOT_TALENT_IS_FAVORITE_FAIL,
        error: error,
        category: category,
        key: key,
        talentUName: talent_username,
        isFavorite: isFavorite,
        isArray: isArray
    };
};

export const setTalentIsFavoriteStart = () => {
    return {
        type: actionTypes.SET_SPOT_TALENT_IS_FAVORITE_START
    };
};

export const setTalentIsFavoriteSuccess = (category, key, talent_username, isFavorite, isArray) => {
    return {
        type: actionTypes.SET_SPOT_TALENT_IS_FAVORITE_SUCCESS,
        category: category,
        key: key,
        talentUName: talent_username,
        isFavorite: isFavorite,
        isArray: isArray
    };
};


export const spotTalentIsFavorite = (category, key, talent_username, isFavorite, isArray, stage_name) => {
    return dispatch => {
        dispatch(setTalentIsFavoriteStart());
        dispatch(setTalentIsFavoriteSuccess(category, key, talent_username, isFavorite, isArray));

        let options = {
            method: 'DELETE'
        };
        if (!isFavorite) {
            options = {
                method: 'POST'
            };
        }
        axios(`talent/favorite/${talent_username}`, options)
            .then(async favorite => {
                const setTalentAsFavorite = await favorite.data;

                if (!isFavorite) {
                    toast.success(`You added ${stage_name} from favorites ❤ !`);
                } else {
                    toast.success(`You removed ${stage_name} from favorites!`);
                }
                // dispatch(fetchTalentSpotlight(localStorage.getItem('token'), localStorage.getItem('username')));
            })
            .catch(err => {
                dispatch(setTalentIsFavoriteFail(err, category, key, talent_username, isFavorite, isArray));
                toast.error(`Please try again!`);
            });
    };
};