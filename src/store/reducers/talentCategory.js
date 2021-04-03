import * as actionTypes from '../../store/actions/actionsType';
import { updateObject } from '../../shared/utility';

const initialState = {
    talentCategories: [],
    loading: false
};

const fetchTalentCategoriesStart = (state, action) => {
    return updateObject(state, { loading: true });
};

const fetchTalentCategoriesSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        talentCategories: action.talentByCategories
    });
};

const fetchTalentCategoriesFail = (state, action) => {
    return updateObject(state, { loading: false });
};

const setTalentIsFavoriteStart = (state, action) => {
    return updateObject(state, { loading: true });
};

const setTalentIsFavoriteSuccess = (state, action) => {

    const updatedTalentCategories = updateObject(state.talentCategories, state.talentCategories[action.category][action.key].is_favorite = action.isFavorite ? false : true);
    const updatedState = {
        talentCategories: updatedTalentCategories,
        loading: false
    }
    return updateObject(state, updatedState);
};

const setTalentIsFavoriteFail = (state, action) => {
    const updatedTalentCategories = updateObject(state.talentCategories, state.talentCategories[action.category][action.key].is_favorite = false);
    const updatedState = {
        talentCategories: updatedTalentCategories,
        loading: false
    }
    return updateObject(state, updatedState);
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_TALENT_CATEGORIES_START: return fetchTalentCategoriesStart(state, action);
        case actionTypes.FETCH_TALENT_CATEGORIES_SUCCESS: return fetchTalentCategoriesSuccess(state, action);
        case actionTypes.FETCH_TALENT_CATEGORIES_FAIL: return fetchTalentCategoriesFail(state, action);
        case actionTypes.SET_TALENT_IS_FAVORITE_START: return setTalentIsFavoriteStart(state, action);
        case actionTypes.SET_TALENT_IS_FAVORITE_SUCCESS: return setTalentIsFavoriteSuccess(state, action);
        case actionTypes.SET_TALENT_IS_FAVORITE_FAIL: return setTalentIsFavoriteFail(state, action);
        default: return state;
    }
};

export default reducer;