import * as actionTypes from './actionsType';
import cleanDeep from 'clean-deep';
import axios from '../../axios-kado';
import { toast } from "react-toastify";

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

export const browseTalentSpotlight = (access_token, username) => {
    return dispatch => {
        dispatch(browseTalentSpotlightStart());

        axios.defaults.headers.common.Accept = 'application/json';
        axios.defaults.headers['Content-Type'] = 'multipart/form-data';
        axios.interceptors.request.use(async function (config) {
            config.headers.common['Access-Control-Allow-Origin'] = '*';
            config.headers.common['Access-Control-Allow-Headers'] = 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token';
            config.headers.common['Access-Control-Allow-Credentials'] = true;
            config.headers.common['Access-Control-Allow-Method'] = 'OPTIONS,POST,GET';
            config.headers.common['Content-Type'] = 'application/json';
            if (username) {
                config.headers.common.username = username;
                config.headers.common.access_token = access_token;
            }
            return config;
        });

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

export const setTalentIsFavoriteFail = (error, category, key, talent_username, isFavorite, isArray) => {
    return {
        type: actionTypes.SET_BROWSE_TALENT_IS_FAVORITE_FAIL,
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
        type: actionTypes.SET_BROWSE_TALENT_IS_FAVORITE_START
    };
};

export const setTalentIsFavoriteSuccess = (category, key, talent_username, isFavorite, isArray) => {
    return {
        type: actionTypes.SET_BROWSE_TALENT_IS_FAVORITE_SUCCESS,
        category: category,
        key: key,
        talentUName: talent_username,
        isFavorite: isFavorite,
        isArray: isArray
    };
};


export const talentIsFavorite = (category, key, talent_username, isFavorite, isArray, stage_name) => {
    return dispatch => {
        dispatch(setTalentIsFavoriteStart());
        dispatch(setTalentIsFavoriteSuccess(category, key, talent_username, isFavorite, isArray));
        console.log(isArray)
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
                dispatch(browseTalentSpotlight(localStorage.getItem('token'), localStorage.getItem('username')));

                if (!isFavorite) {
                    toast.success(`You added ${stage_name} from favorites ❤ !`);
                } else {
                    toast.success(`You removed ${stage_name} from favorites!`);
                }
            })
            .catch(err => {
                dispatch(setTalentIsFavoriteFail(err, category, key, talent_username, isFavorite, isArray));
                toast.error(`Please try again!`);
            });
    };
};

