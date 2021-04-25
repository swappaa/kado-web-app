import * as actionTypes from '../actions/actionsType';
import { updateObject } from '../../shared/utility';

const initialState = {
    error: null,
    loading: false,
    isModalSuccess: false,
    coupon: [],
    AllKadosRequests: [],
    AllKadosSent: []
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

const fetAllKadosRequestsStart = (state, action) => {
    return updateObject(state, { error: null, loading: true, isModalSuccess: false });
};

const fetAllKadosRequestsSuccess = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: false,
        AllKadosRequests: action.AllKadosRequests
    });
};

const fetAllKadosRequestsFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false,
        isModalSuccess: false
    });
};

const fetAllKadosSentStart = (state, action) => {
    return updateObject(state, { error: null, loading: true, isModalSuccess: false });
};

const fetAllKadosSentSuccess = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: false,
        AllKadosSent: action.AllKadosSent
    });
};

const fetAllKadosSentFail = (state, action) => {
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
        case actionTypes.FETCH_ALL_KADOS_REQUESTS_START: return fetAllKadosRequestsStart(state, action);
        case actionTypes.FETCH_ALL_KADOS_REQUESTS_SUCCESS: return fetAllKadosRequestsSuccess(state, action);
        case actionTypes.FETCH_ALL_KADOS_REQUESTS_FAIL: return fetAllKadosRequestsFail(state, action);
        case actionTypes.FETCH_ALL_KADOS_SENT_START: return fetAllKadosSentStart(state, action);
        case actionTypes.FETCH_ALL_KADOS_SENT_SUCCESS: return fetAllKadosSentSuccess(state, action);
        case actionTypes.FETCH_ALL_KADOS_SENT_FAIL: return fetAllKadosSentFail(state, action);
        default:
            return state;
    }
};

export default reducer;