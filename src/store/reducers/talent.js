import * as actionTypes from '../../store/actions/actionsType';
import { updateObject } from '../../shared/utility';

const initialState = {
    talent: [],
    loading: false
};

const fetchTalentStart = (state, action) => {
    return updateObject(state, { loading: true });
};

const fetchTalentSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        talent: action.selectedService
    });
};

const fetchTalentFail = (state, action) => {
    return updateObject(state, { loading: false });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_TALENT_START: return fetchTalentStart(state, action);
        case actionTypes.FETCH_TALENT_SUCCESS: return fetchTalentSuccess(state, action);
        case actionTypes.FETCH_TALENT_FAIL: return fetchTalentFail(state, action);
        default: return state;
    }
};

export default reducer;