import * as actionTypes from './actionsType';
import cleanDeep from 'clean-deep';
import axios from '../../axios-kado';

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

export const fetchTalentByCategories = () => {
    return dispatch => {
        dispatch(fetchTalentCategoriesStart());
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

export const setTalentIsFavoriteFail = (error) => {
    return {
        type: actionTypes.SET_TALENT_IS_FAVORITE_FAIL,
        error: error
    };
};

export const setTalentIsFavoriteStart = () => {
    return {
        type: actionTypes.SET_TALENT_IS_FAVORITE_START
    };
};

export const removeTalentFavorite = (talentUsername) => {
    return {
        type: actionTypes.REMOVE_TALENT_FAVORITE,
        talentUName: talentUsername,
        category: 'Actor'
    };
};


export const setTalentIsFavorite = (talent_username, isFavorite) => {
    return dispatch => {
        dispatch(setTalentIsFavoriteStart());

        let options = {
            method: 'POST'
        };
        if (!isFavorite) {
            options = {
                method: 'DELETE'
            };
        }
        axios(`talent/favorite/${talent_username}`, options)
            .then(async favorite => {
                const setTalentAsFavorite = await favorite.data;
                console.log(setTalentAsFavorite)
                dispatch(fetchTalentByCategories());
            })
            .catch(err => {
                dispatch(setTalentIsFavoriteFail(err));
            });
    };
};
