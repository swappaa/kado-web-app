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

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_SPOTLIGHT_CATEGORIES_START: return fetchSpotlightCategoriesStart(state, action);
        case actionTypes.FETCH_SPOTLIGHT_CATEGORIES_SUCCESS: return fetchSpotlightCategoriesSuccess(state, action);
        case actionTypes.FETCH_SPOTLIGHT_CATEGORIES_FAIL: return fetchSpotlightCategoriesFail(state, action);
        default: return state;
    }
};

export default reducer;