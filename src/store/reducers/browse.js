import * as actionTypes from '../../store/actions/actionsType';
import { updateObject } from '../../shared/utility';

const initialState = {
    spotlightByCategories: [],
    loading: false
};

const browseSpotlightCategoriesStart = (state, action) => {
    return updateObject(state, { loading: true });
};

const browseSpotlightCategoriesSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        spotlightByCategories: action.browseSpotlightByCategories
    });
};

const browseSpotlightCategoriesFail = (state, action) => {
    return updateObject(state, { loading: false });
};

const setTalentIsFavoriteStart = (state, action) => {
    return updateObject(state, { loading: true });
};

const setTalentIsFavoriteSuccess = (state, action) => {
    const updatedSpotlightByCategories = updateObject(state.spotlightByCategories, state.spotlightByCategories[action.category][action.isArray][action.key].is_favorite = action.isFavorite ? false : true);
    const updatedState = {
        spotlightByCategories: updatedSpotlightByCategories,
        loading: false
    }
    console.log(updatedSpotlightByCategories)
    return updateObject(state, updatedState);
};

const setTalentIsFavoriteFail = (state, action) => {
    const updatedTalentCategories = updateObject(state.spotlightByCategories, state.spotlightByCategories[action.category][action.isArray][action.key].is_favorite = action.isFavorite ? true : false);
    const updatedState = {
        spotlightCategories: updatedTalentCategories,
        loading: false
    }
    return updateObject(state, updatedState);
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.BROWSE_SPOTLIGHT_CATEGORIES_START: return browseSpotlightCategoriesStart(state, action);
        case actionTypes.BROWSE_SPOTLIGHT_CATEGORIES_SUCCESS: return browseSpotlightCategoriesSuccess(state, action);
        case actionTypes.BROWSE_SPOTLIGHT_CATEGORIES_FAIL: return browseSpotlightCategoriesFail(state, action);
        case actionTypes.SET_BROWSE_TALENT_IS_FAVORITE_START: return setTalentIsFavoriteStart(state, action);
        case actionTypes.SET_BROWSE_TALENT_IS_FAVORITE_SUCCESS: return setTalentIsFavoriteSuccess(state, action);
        case actionTypes.SET_BROWSE_TALENT_IS_FAVORITE_FAIL: return setTalentIsFavoriteFail(state, action);
        default: return state;
    }
};

export default reducer;