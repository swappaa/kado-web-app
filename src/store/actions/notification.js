import * as actionTypes from './actionsType';
import cleanDeep from 'clean-deep';
import axios from 'axios';

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

export const fetchNotification = (access_token, username) => {
    return dispatch => {
        dispatch(fetchNotificationStart());

        axios.defaults.headers.common.Accept = 'application/json';
        axios.defaults.headers['Content-Type'] = 'multipart/form-data';
        axios.interceptors.request.use(async function (config) {
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

        axios.get('https://0a5suwmf57.execute-api.us-west-2.amazonaws.com/dev/notifications')
            .then(async Notifications => {
                const fetchedFanTalentFavorite = await Notifications.data.notifications;
                dispatch(fetchNotificationSuccess(cleanDeep(fetchedFanTalentFavorite)));
            })
            .catch(err => {
                dispatch(fetchNotificationFail(err));
            });
    };
};

