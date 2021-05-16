import * as actionTypes from '../../store/actions/actionsType';
import { updateObject } from '../../shared/utility';

const initialState = {
    account: [],
    loading: false,
    uploadingProfile: false,
    tos: [],
    privacy: [],
    disabledAccount: false,
    isChangeEmailVerify: false,
    isValidVerifyCode: false
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

const updateProfileStart = (state, action) => {
    return updateObject(state, { uploadingProfile: true });
};

const updateProfileSuccess = (state, action) => {
    return updateObject(state, {
        uploadingProfile: false
    });
};

const updateProfileFail = (state, action) => {
    return updateObject(state, { uploadingProfile: false });
};

const fetchTOSSuccess = (state, action) => {
    return updateObject(state, {
        tos: action.tos
    });
};

const fetchPrivacySuccess = (state, action) => {
    return updateObject(state, {
        privacy: action.privacy
    });
};

const disabledAccountSuccess = (state, action) => {
    return updateObject(state, {
        disabledAccount: true
    });
};

const updateAccountStart = (state, action) => {
    return updateObject(state, { loading: true });
};

const updateAccountSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        isChangeEmailVerify: true,
        isValidVerifyCode: false
    });
};

const updateAccountFail = (state, action) => {
    return updateObject(state, { loading: false, isChangeEmailVerify: true, isValidVerifyCode: true });
};

const closeVerifyForm = (state, action) => {
    return updateObject(state, { isChangeEmailVerify: false });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ACCOUNT_START: return fetchAccountStart(state, action);
        case actionTypes.FETCH_ACCOUNT_SUCCESS: return fetchAccountSuccess(state, action);
        case actionTypes.FETCH_ACCOUNT_FAIL: return fetchAccountFail(state, action);
        case actionTypes.UPDATE_PROFILE_START: return updateProfileStart(state, action);
        case actionTypes.UPDATE_PROFILE_SUCCESS: return updateProfileSuccess(state, action);
        case actionTypes.UPDATE_PROFILE_FAIL: return updateProfileFail(state, action);
        case actionTypes.UPDATE_ACCOUNT_START: return updateAccountStart(state, action);
        case actionTypes.UPDATE_ACCOUNT_SUCCESS: return updateAccountSuccess(state, action);
        case actionTypes.UPDATE_ACCOUNT_FAIL: return updateAccountFail(state, action);
        case actionTypes.FETCH_TOS_SUCCESS: return fetchTOSSuccess(state, action);
        case actionTypes.FETCH_PRIVACY_SUCCESS: return fetchPrivacySuccess(state, action);
        case actionTypes.DISABLED_ACCOUNT_SUCCESS: return disabledAccountSuccess(state, action);
        case actionTypes.CLOSE_VERIFY_FORM: return closeVerifyForm(state, action);
        default: return state;
    }
};

export default reducer;