import * as actionTypes from './actionsType';
import cleanDeep from 'clean-deep';
import axios from 'axios';

const username = localStorage.getItem('username');
const access_token = localStorage.getItem('token');
const instance = axios.create({
    baseURL: 'https://0a5suwmf57.execute-api.us-west-2.amazonaws.com/dev/'
});

instance.defaults.headers.common.Accept = 'application/json';
instance.defaults.headers['Content-Type'] = 'multipart/form-data';
instance.interceptors.request.use(async function (config) {
    config.headers.common['Access-Control-Allow-Origin'] = '*';
    config.headers.common['Access-Control-Allow-Headers'] = 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token';
    config.headers.common['Access-Control-Allow-Credentials'] = true;
    config.headers.common['Access-Control-Allow-Method'] = 'OPTIONS,POST,GET';
    config.headers.common['Content-Type'] = 'application/json';
    if (username) {
        config.headers.common.username = username;
        config.headers.common.access_token = access_token;
    }
    return config;
});

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

export const fetchNotification = () => {
    return dispatch => {
        dispatch(fetchNotificationStart());
        instance.get('notifications')
            .then(async Notifications => {
                const fetchedFanTalentFavorite = await Notifications.data.notifications;
                dispatch(fetchNotificationSuccess(cleanDeep(fetchedFanTalentFavorite)));
            })
            .catch(err => {
                dispatch(fetchNotificationFail(err));
            });
    };
};

