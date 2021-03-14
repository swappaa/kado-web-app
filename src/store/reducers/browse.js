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

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.BROWSE_SPOTLIGHT_CATEGORIES_START: return browseSpotlightCategoriesStart(state, action);
        case actionTypes.BROWSE_SPOTLIGHT_CATEGORIES_SUCCESS: return browseSpotlightCategoriesSuccess(state, action);
        case actionTypes.BROWSE_SPOTLIGHT_CATEGORIES_FAIL: return browseSpotlightCategoriesFail(state, action);
        default: return state;
    }
};

export default reducer;