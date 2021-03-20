import * as actionTypes from './actionsType';
import cleanDeep from 'clean-deep';
import axios from 'axios';

const username = localStorage.getItem('username');
const access_token = localStorage.getItem('token');
const instance = axios.create({
    baseURL: 'https://y6vlqlglfa.execute-api.us-west-2.amazonaws.com/dev/'
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

export const getAccountDetails = () => {
    return dispatch => {
        dispatch(fetchAccountStart());

        instance.get('account')
            .then(async accountDetails => {
                const fetchedAccountDetails = await accountDetails.data.data;
                dispatch(fetchAccountSuccess(cleanDeep(fetchedAccountDetails)));
            })
            .catch(err => {
                dispatch(fetchAccountFail(err));
            });
    };
};
