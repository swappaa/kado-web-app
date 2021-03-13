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

export const fetchTalentByCategories = (token, user) => {
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
