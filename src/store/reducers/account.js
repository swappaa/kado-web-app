import * as actionTypes from '../../store/actions/actionsType';
import { updateObject } from '../../shared/utility';

const initialState = {
    account: [],
    loading: false
};

const fetchAccountStart = (state, action) => {
    return updateObject(state, { loading: true });
};

const fetchAccountSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        account: action.accountDetails
    });
};

const fetchAccountFail = (state, action) => {
    return updateObject(state, { loading: false });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ACCOUNT_START: return fetchAccountStart(state, action);
        case actionTypes.FETCH_ACCOUNT_SUCCESS: return fetchAccountSuccess(state, action);
        case actionTypes.FETCH_ACCOUNT_FAIL: return fetchAccountFail(state, action);
        default: return state;
    }
};

export default reducer;