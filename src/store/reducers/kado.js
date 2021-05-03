import * as actionTypes from '../actions/actionsType';
import { updateObject } from '../../shared/utility';

const initialState = {
    error: null,
    loading: false,
    isModalSuccess: false,
    coupon: [],
    AllKadosRequests: [],
    KadoDetails: []
};

const createNewKadoStart = (state, action) => {
    return updateObject(state, { error: null, loading: true, isModalSuccess: false });
};

const createNewKadoSuccess = (state, action) => {
    console.log(action.isModal)
    return updateObject(state, {
        error: null,
        loading: false,
        isModalSuccess: true
    });
};

const createNewKadoFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false,
        isModalSuccess: false
    });
};

const validateCouponStart = (state, action) => {
    return updateObject(state, { error: null, loading: true, isModalSuccess: false });
};

const validateCoupon = (state, action) => {
    return updateObject(state, {
        loading: false,
        coupon: action.coupon
    });
};

const getAllKadosRequestsStart = (state, action) => {
    return updateObject(state, { error: null, loading: true, isModalSuccess: false });
};

const getAllKadosRequestsSuccess = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: false,
        AllKadosRequests: action.AllKadosRequests
    });
};

const getAllKadosRequestsFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false,
        isModalSuccess: false
    });
};

const getKadoDetailsStart = (state, action) => {
    return updateObject(state, { error: null, loading: true, isModalSuccess: false });
};

const getKadoDetailsSuccess = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: false,
        KadoDetails: action.KadoDetails
    });
};

const getKadoDetailsFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false,
        isModalSuccess: false
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CREATE_NEW_KADO_START: return createNewKadoStart(state, action);
        case actionTypes.CREATE_NEW_KADO_SUCCESS: return createNewKadoSuccess(state, action);
        case actionTypes.CREATE_NEW_KADO_FAIL: return createNewKadoFail(state, action);
        case actionTypes.VALIDATE_COUPON_START: return validateCouponStart(state, action);
        case actionTypes.VALIDATE_COUPON_SUCCESS: return validateCoupon(state, action);
        case actionTypes.FETCH_ALL_KADOS_REQUESTS_START: return getAllKadosRequestsStart(state, action);
        case actionTypes.FETCH_ALL_KADOS_REQUESTS_SUCCESS: return getAllKadosRequestsSuccess(state, action);
        case actionTypes.FETCH_ALL_KADOS_REQUESTS_FAIL: return getAllKadosRequestsFail(state, action);
        case actionTypes.FETCH_KADO_DETAILS_START: return getKadoDetailsStart(state, action);
        case actionTypes.FETCH_KADO_DETAILS_SUCCESS: return getKadoDetailsSuccess(state, action);
        case actionTypes.FETCH_KADO_DETAILS_FAIL: return getKadoDetailsFail(state, action);
        default:
            return state;
    }
};

export default reducer;