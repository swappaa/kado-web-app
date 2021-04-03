import * as actionTypes from '../../store/actions/actionsType';
import { updateObject } from '../../shared/utility';

const initialState = {
    spotlightCategories: [],
    loading: false
};

const fetchSpotlightCategoriesStart = (state, action) => {
    return updateObject(state, { loading: true });
};

const fetchSpotlightCategoriesSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        spotlightCategories: action.spotlightByCategories
    });
};

const fetchSpotlightCategoriesFail = (state, action) => {
    return updateObject(state, { loading: false });
};

const setTalentIsFavoriteStart = (state, action) => {
    return updateObject(state, { loading: true });
};

const setTalentIsFavoriteSuccess = (state, action) => {
    const updatedSpotlightByCategories = updateObject(state.spotlightCategories, state.spotlightCategories[action.category][action.isArray][action.key].is_favorite = action.isFavorite ? false : true);
    const updatedState = {
        spotlightCategories: updatedSpotlightByCategories,
        loading: false
    }
    console.log(updatedSpotlightByCategories)
    return updateObject(state, updatedState);
};

const setTalentIsFavoriteFail = (state, action) => {
    const updatedTalentCategories = updateObject(state.spotlightCategories, state.spotlightCategories[action.category][action.isArray][action.key].is_favorite = action.isFavorite ? true : false);
    const updatedState = {
        spotlightCategories: updatedTalentCategories,
        loading: false
    }
    return updateObject(state, updatedState);
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_SPOTLIGHT_CATEGORIES_START: return fetchSpotlightCategoriesStart(state, action);
        case actionTypes.FETCH_SPOTLIGHT_CATEGORIES_SUCCESS: return fetchSpotlightCategoriesSuccess(state, action);
        case actionTypes.FETCH_SPOTLIGHT_CATEGORIES_FAIL: return fetchSpotlightCategoriesFail(state, action);
        case actionTypes.SET_SPOT_TALENT_IS_FAVORITE_START: return setTalentIsFavoriteStart(state, action);
        case actionTypes.SET_SPOT_TALENT_IS_FAVORITE_SUCCESS: return setTalentIsFavoriteSuccess(state, action);
        case actionTypes.SET_SPOT_TALENT_IS_FAVORITE_FAIL: return setTalentIsFavoriteFail(state, action);
        default: return state;
    }
};

export default reducer;