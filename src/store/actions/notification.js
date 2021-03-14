import * as actionTypes from './actionsType';
import cleanDeep from 'clean-deep';
import axios from '../../axios-kado';

export const fetchNotificationSuccess = (notification) => {
    return {
        type: actionTypes.FETCH_NOTIFICATIONS_SUCCESS,
        notifications: notification
    };
};

export const fetchNotificationFail = (error) => {
    return {
        type: actionTypes.FETCH_NOTIFICATIONS_FAIL,
        error: error
    };
};

export const fetchNotificationStart = () => {
    return {
        type: actionTypes.FETCH_NOTIFICATIONS_START
    };
};

export const fetchNotification = (token, user) => {
    return dispatch => {
        dispatch(fetchNotificationStart());
        axios.get('notifications')
            .then(async Notifications => {
                const fetchedFanTalentFavorite = await Notifications.data;
                dispatch(fetchNotificationSuccess(cleanDeep(fetchedFanTalentFavorite)));
            })
            .catch(err => {
                dispatch(fetchNotificationFail(err));
            });
    };
};

