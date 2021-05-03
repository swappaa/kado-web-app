import * as actionTypes from './actionsType';
import cleanDeep from 'clean-deep';
import axios from 'axios';
import { toast } from "react-toastify";

export const fetchAccountSuccess = (account) => {
    return {
        type: actionTypes.FETCH_ACCOUNT_SUCCESS,
        accountDetails: account
    };
};

export const fetchAccountFail = (error) => {
    return {
        type: actionTypes.FETCH_ACCOUNT_FAIL,
        error: error
    };
};

export const fetchAccountStart = () => {
    return {
        type: actionTypes.FETCH_ACCOUNT_START
    };
};

export const getAccountDetails = (access_token, username) => {
    return dispatch => {
        dispatch(fetchAccountStart());

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

        axios.get('https://y6vlqlglfa.execute-api.us-west-2.amazonaws.com/dev/account')
            .then(async accountDetails => {
                const fetchedAccountDetails = await accountDetails.data.data;
                console.log(fetchedAccountDetails);
                dispatch(fetchAccountSuccess(cleanDeep(fetchedAccountDetails)));
                dispatch(getTOS(fetchedAccountDetails.locale));
                dispatch(getPrivacy(fetchedAccountDetails.locale));
            })
            .catch(err => {
                dispatch(fetchAccountFail(err));
            });
    };
};

export const fetchTOSSuccess = (tos) => {
    return {
        type: actionTypes.FETCH_TOS_SUCCESS,
        tos: tos
    };
};

export const getTOS = (locale) => {
    let newlocale = locale
    if (locale === 'en-US') {
        newlocale = 'en_US'
    }
    return dispatch => {
        axios.get(`https://y6vlqlglfa.execute-api.us-west-2.amazonaws.com/dev/account/tos/${newlocale}`)
            .then(async tos => {
                const getTOS = await tos.data.tos;
                dispatch(fetchTOSSuccess(getTOS));
            })
    };
};

export const fetchPrivacySuccess = (privacy) => {
    return {
        type: actionTypes.FETCH_PRIVACY_SUCCESS,
        privacy: privacy
    };
};

export const getPrivacy = (locale) => {
    let newlocale = locale
    if (locale === 'en-US') {
        newlocale = 'en_US'
    }
    return dispatch => {
        axios.get(`https://y6vlqlglfa.execute-api.us-west-2.amazonaws.com/dev/account/privacy/${newlocale}`)
            .then(async privacy => {
                const getPrivacy = await privacy.data.privacy;
                dispatch(fetchPrivacySuccess(getPrivacy));
            })
    };
};

export const disabledAccountSuccess = () => {
    return {
        type: actionTypes.DISABLED_ACCOUNT_SUCCESS,
    };
};

export const disabledAccountFail = () => {
    return {
        type: actionTypes.DISABLED_ACCOUNT_FAIL,
    };
};

export const disableAccount = (access_token, username, termination_reason) => {
    return dispatch => {
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

        let formData = new FormData();

        formData.append("termination_reason", termination_reason);

        axios.post('https://y6vlqlglfa.execute-api.us-west-2.amazonaws.com/dev/account/terminate', formData)
            .then(response => {
                dispatch(disabledAccountSuccess());
            })
            .catch(err => {
                dispatch(disabledAccountFail());
            });
    };
};

export const setNotifications = (access_token, username, notification, isAllow) => {
    return dispatch => {
        let formData = new FormData();
        switch (notification) {
            case 'notification':
                formData.append("notifications_enabled", isAllow);
                break;
            case 'email':
                formData.append("emails_enabled", isAllow);
                break;
            default:
                break;
        }

        axios.defaults.headers.common.Accept = 'application/json';
        axios.defaults.headers['Content-Type'] = 'multipart/form-data';
        axios.interceptors.request.use(async function (config) {
            config.headers.common['Access-Control-Allow-Origin'] = '*';
            config.headers.common['Access-Control-Allow-Headers'] = 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token';
            config.headers.common['Access-Control-Allow-Credentials'] = true;
            config.headers.common['Access-Control-Allow-Method'] = 'OPTIONS,POST,GET,PUT';
            config.headers.common['Content-Type'] = 'application/json';
            if (username) {
                config.headers.common.username = username;
                config.headers.common.access_token = access_token;
            }
            return config;
        });

        axios.put('https://y6vlqlglfa.execute-api.us-west-2.amazonaws.com/dev/account', formData)
            .then(response => {
                toast.success(`${isAllow ? 'On' : 'Off'} ${notification}`);
            })
            .catch(err => {
                toast.error(err);
            });
    };
};

export const updateProfileStart = () => {
    return {
        type: actionTypes.UPDATE_PROFILE_START
    };
};

export const updateProfileSuccess = () => {
    return {
        type: actionTypes.UPDATE_PROFILE_SUCCESS
    };
};

export const updateProfileFail = (error) => {
    return {
        type: actionTypes.UPDATE_PROFILE_FAIL,
        error: error
    };
};

export const updateProfile = (access_token, username, fan_photo) => {
    return dispatch => {
        dispatch(updateProfileStart());

        let formData = new FormData();
        formData.append("profile_picture", fan_photo);

        axios.defaults.headers.common.Accept = 'application/json';
        axios.defaults.headers['Content-Type'] = 'multipart/form-data';
        axios.interceptors.request.use(async function (config) {
            config.headers.common['Access-Control-Allow-Origin'] = '*';
            config.headers.common['Access-Control-Allow-Headers'] = 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token';
            config.headers.common['Access-Control-Allow-Credentials'] = true;
            config.headers.common['Access-Control-Allow-Method'] = 'OPTIONS,POST,GET,PUT';
            config.headers.common['Content-Type'] = 'multipart/form-data';
            if (username) {
                config.headers.common.username = username;
                config.headers.common.access_token = access_token;
            }
            return config;
        });

        axios.put('https://y6vlqlglfa.execute-api.us-west-2.amazonaws.com/dev/account', formData)
            .then(response => {
                toast.success('Success');
                dispatch(updateProfileSuccess());
            })
            .catch(err => {
                toast.error(err);
                dispatch(updateProfileFail(err));
            });
    };
};