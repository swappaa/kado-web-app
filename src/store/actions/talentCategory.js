import * as actionTypes from './actionsType';
import cleanDeep from 'clean-deep';
import axios from '../../axios-kado';
import { toast } from "react-toastify";

export const fetchTalentCategoriesSuccess = (talent) => {
    return {
        type: actionTypes.FETCH_TALENT_CATEGORIES_SUCCESS,
        talentByCategories: talent
    };
};

export const fetchTalentCategoriesFail = (error) => {
    return {
        type: actionTypes.FETCH_TALENT_CATEGORIES_FAIL,
        error: error
    };
};

export const fetchTalentCategoriesStart = () => {
    return {
        type: actionTypes.FETCH_TALENT_CATEGORIES_START
    };
};

export const fetchTalentByCategories = (access_token, username) => {
    return dispatch => {
        dispatch(fetchTalentCategoriesStart());

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

        axios.get('talent/categories/list')
            .then(async talentCategories => {
                const fetchedTalentCategories = await talentCategories.data.categories;
                dispatch(fetchTalentCategoriesSuccess(cleanDeep(fetchedTalentCategories)));
            })
            .catch(err => {
                dispatch(fetchTalentCategoriesFail(err));
            });
    };
};

export const setTalentIsFavoriteFail = (error, category, key, talent_username, isFavorite) => {
    return {
        type: actionTypes.SET_TALENT_IS_FAVORITE_FAIL,
        error: error,
        category: category,
        key: key,
        talentUName: talent_username,
        isFavorite: isFavorite
    };
};

export const setTalentIsFavoriteStart = () => {
    return {
        type: actionTypes.SET_TALENT_IS_FAVORITE_START
    };
};

export const setTalentIsFavoriteSuccess = (category, key, talent_username, isFavorite) => {
    return {
        type: actionTypes.SET_TALENT_IS_FAVORITE_SUCCESS,
        category: category,
        key: key,
        talentUName: talent_username,
        isFavorite: isFavorite
    };
};


export const setTalentIsFavorite = (category, key, talent_username, isFavorite, stage_name) => {
    return dispatch => {
        dispatch(setTalentIsFavoriteStart());
        dispatch(setTalentIsFavoriteSuccess(category, key, talent_username, isFavorite));

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
            })
            .catch(err => {
                dispatch(setTalentIsFavoriteFail(err, category, key, talent_username, isFavorite));
                toast.error(`You can't add ${stage_name} from favorites at this time!`);
            });
    };
};

export const setSearchTerm = (search_value) => {
    return {
        type: actionTypes.SEARCH_TALENT,
        search_value: search_value,
    };
};
