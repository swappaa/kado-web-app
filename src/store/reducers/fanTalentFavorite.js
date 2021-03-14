import * as actionTypes from '../../store/actions/actionsType';
import { updateObject } from '../../shared/utility';

const initialState = {
    fanTalentfavorites: [],
    loading: false
};

const fetchFanTalentFavoriteStart = (state, action) => {
    return updateObject(state, { loading: true });
};

const fetchFanTalentFavoriteSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        fanTalentfavorites: action.fanTalentFavorites
    });
};

const fetchFanTalentFavoriteFail = (state, action) => {
    return updateObject(state, { loading: false });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_FAN_TALENT_FAVORITES_START: return fetchFanTalentFavoriteStart(state, action);
        case actionTypes.FETCH_FAN_TALENT_FAVORITES_SUCCESS: return fetchFanTalentFavoriteSuccess(state, action);
        case actionTypes.FETCH_FAN_TALENT_FAVORITES_FAIL: return fetchFanTalentFavoriteFail(state, action);
        default: return state;
    }
};

export default reducer;