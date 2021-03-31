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

const removeTalentFavoriteStart = (state, action) => {
    return updateObject(state, { loading: true });
};

const removeTalentFavoriteFail = (state, action) => {
    return updateObject(state, { loading: false });
};

const removeTalentFavoriteSuccess = (state, action) => {
    const updatedSt = {
        fanTalentfavorites: state.fanTalentfavorites.filter((index) => index !== action.talentIndex),
        loading: false
    }
    console.log(updatedSt)
    return updateObject(state, updatedSt);
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_FAN_TALENT_FAVORITES_START: return fetchFanTalentFavoriteStart(state, action);
        case actionTypes.FETCH_FAN_TALENT_FAVORITES_SUCCESS: return fetchFanTalentFavoriteSuccess(state, action);
        case actionTypes.FETCH_FAN_TALENT_FAVORITES_FAIL: return fetchFanTalentFavoriteFail(state, action);
        case actionTypes.REMOVE_TALENT_FAVORITE_START: return removeTalentFavoriteStart(state, action);
        case actionTypes.REMOVE_TALENT_FAVORITE_SUCCESS: return removeTalentFavoriteSuccess(state, action);
        case actionTypes.REMOVE_TALENT_FAVORITE_FAIL: return removeTalentFavoriteFail(state, action);
        default: return state;
    }
};

export default reducer;