import * as actionTypes from '../../store/actions/actionsType';
import { updateObject } from '../../shared/utility';

const initialState = {
    searchTalentResult: [],
    loading: false
};

const searchTalentStart = (state, action) => {
    return updateObject(state, { loading: true });
};

const searchTalentSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        searchTalentResult: action.searchTalentResult
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SEARCH_TALENT_START: return searchTalentStart(state, action);
        case actionTypes.SEARCH_TALENT_SUCCESS: return searchTalentSuccess(state, action);
        default: return state;
    }
};

export default reducer;