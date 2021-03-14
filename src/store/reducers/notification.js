import * as actionTypes from '../../store/actions/actionsType';
import { updateObject } from '../../shared/utility';

const initialState = {
    notifications: [],
    loading: false
};

const fetchNotificationsStart = (state, action) => {
    return updateObject(state, { loading: true });
};

const fetchNotificationsSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        notifications: action.notifications
    });
};

const fetchNotificationsFail = (state, action) => {
    return updateObject(state, { loading: false });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_NOTIFICATIONS_START: return fetchNotificationsStart(state, action);
        case actionTypes.FETCH_NOTIFICATIONS_SUCCESS: return fetchNotificationsSuccess(state, action);
        case actionTypes.FETCH_NOTIFICATIONS_FAIL: return fetchNotificationsFail(state, action);
        default: return state;
    }
};

export default reducer;