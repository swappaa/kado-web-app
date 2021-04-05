import * as actionTypes from './actionsType';
import cleanDeep from 'clean-deep';
import axios from 'axios';

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
                dispatch(fetchAccountSuccess(cleanDeep(fetchedAccountDetails)));
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