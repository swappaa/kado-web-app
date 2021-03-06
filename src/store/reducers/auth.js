import * as actionTypes from '../actions/actionsType';
import { updateObject } from '../../shared/utility';

const initialState = {
    token: null,
    idToken: null,
    refreshToken: null,
    accountType: null,
    username: null,
    error: null,
    loading: false,
    authRedirectPath: '/',
    isEmailConfirmation: false,
    isValidVerifyCode: false,
    isValidReferralCode: false,
    referral_code: null
};

const authStart = (state, action) => {
    return updateObject(state, { error: null, loading: true });
};

const authSuccess = (state, action) => {
    return updateObject(state, {
        token: action.accessToken,
        idToken: action.idToken,
        refreshToken: action.refreshToken,
        accountType: action.accountType,
        username: action.username,
        error: null,
        loading: false,
        isEmailConfirmation: false,
        isValidVerifyCode: false,
        isAuthChallenge: false
    });
};

const authFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    });
};

const authLogout = (state, action) => {
    return updateObject(state, { token: null, idToken: null, refreshToken: null, accountType: null, username: null });
};

const setAuthRedirectPath = (state, action) => {
    return updateObject(state, { authRedirectPath: action.path })
}

const setRefreshCredentials = (state, action) => {
    return updateObject(state, {
        token: action.accessToken
    });
};

const signInEmailAuthChallengeStart = (state, action) => {
    return updateObject(state, { isAuthChallenge: true });
};

const emailConfirmationStart = (state, action) => {
    return updateObject(state, { error: null, loading: true, isEmailConfirmation: true });
};

const emailConfirmationFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false,
        isValidVerifyCode: true
    });
};

const validateReferralCode = (state, action) => {
    return updateObject(state, {
        isValidReferralCode: action.isValidReferralCode,
        referral_code: action.referral_code
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        case actionTypes.SET_AUTH_REDIRECT_PATH: return setAuthRedirectPath(state, action);
        case actionTypes.REFRESH_CREDENTIAL_SUCCESS: return setRefreshCredentials(state, action);
        case actionTypes.AUTH_CHALLENGE_START: return signInEmailAuthChallengeStart(state, action);
        case actionTypes.EMAIL_CONFIRMATION_START: return emailConfirmationStart(state, action);
        case actionTypes.EMAIL_CONFIRMATION_FAIL: return emailConfirmationFail(state, action);
        case actionTypes.VALIDATE_REFERRAL_CODE: return validateReferralCode(state, action);
        default:
            return state;
    }
};

export default reducer;