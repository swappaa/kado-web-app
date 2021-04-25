import axios from 'axios';
import * as actionTypes from './actionsType';
import { toast } from "react-toastify";

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, idToken, refreshToken, accountType, email) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        accessToken: token,
        idToken: idToken,
        refreshToken: refreshToken,
        accountType: accountType,
        username: email
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('idToken');
    localStorage.removeItem('accountType');
    localStorage.removeItem('username');
    localStorage.removeItem('persist:root')
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const refreshCredentialSuccess = (access_token) => {
    return {
        type: actionTypes.REFRESH_CREDENTIAL_SUCCESS,
        accessToken: access_token
    };
};

export const refreshCredentials = (refreshToken) => {
    return dispatch => {
        dispatch(authStart());

        axios.defaults.headers.common.Accept = 'application/json';
        axios.defaults.headers['Content-Type'] = 'multipart/form-data';
        axios.interceptors.request.use(async function (config) {
            config.headers.common['Access-Control-Allow-Origin'] = '*';
            config.headers.common['Access-Control-Allow-Headers'] = 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token';
            config.headers.common['Access-Control-Allow-Credentials'] = true;
            config.headers.common['Access-Control-Allow-Method'] = 'OPTIONS,POST,GET';
            config.headers.common['Content-Type'] = 'application/json';
            if (refreshToken) {
                config.headers.common.refresh_token = refreshToken;
            }
            return config;
        });

        axios.get('https://y6vlqlglfa.execute-api.us-west-2.amazonaws.com/dev/account/refresh')
            .then(response => {
                const expiresIn = '3600';
                const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
                localStorage.setItem('token', response.data.access_token);
                localStorage.setItem('expirationDate', expirationDate);
                dispatch(refreshCredentialSuccess(response.data.access_token));
                dispatch(checkAuthTimeout(expiresIn));
            })
    };
};

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            const refreshToken = localStorage.getItem('refreshToken');
            dispatch(refreshCredentials(refreshToken));
        }, expirationTime * 1000);
    };
};


export const auth = (email, password) => {
    return dispatch => {
        dispatch(authStart());

        let formData = new FormData();

        formData.append("username", email);
        formData.append("password", password);
        formData.append("returnSecureToken", true);

        const config = {
            headers: { 'content-type': 'application/json' }
        }

        axios.post('https://y6vlqlglfa.execute-api.us-west-2.amazonaws.com/dev/account/signin/email', formData, config)
            .then(response => {
                const expirationDate = new Date(new Date().getTime() + response.data.ExpiresIn * 1000);
                localStorage.setItem('token', response.data.AccessToken);
                localStorage.setItem('refreshToken', response.data.RefreshToken);
                localStorage.setItem('expirationDate', expirationDate);
                localStorage.setItem('idToken', response.data.IdToken);
                localStorage.setItem('accountType', response.data.account_type);
                localStorage.setItem('username', email);
                dispatch(authSuccess(response.data.AccessToken, response.data.IdToken, response.data.RefreshToken, response.data.account_type, email));
                dispatch(checkAuthTimeout(response.data.ExpiresIn));
            })
            .catch(err => {
                dispatch(authFail(err.response.data.message));
                toast.error(err.response.data.message);
                if (err.response.data.message === 'User is not confirmed.') {
                    // dispatch(emailConfirmationStart());
                }
            });
    };
};

export const emailConfirmationStart = () => {
    return {
        type: actionTypes.EMAIL_CONFIRMATION_START
    };
};

export const emailConfirmationFail = (error) => {
    return {
        type: actionTypes.EMAIL_CONFIRMATION_FAIL,
        error: error
    };
};

export const emailConfirmationSuccess = (token, idToken, refreshToken, accountType, email) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        accessToken: token,
        idToken: idToken,
        refreshToken: refreshToken,
        accountType: accountType,
        username: email
    };
};

export const emailVerification = (username, password, pincode) => {
    return dispatch => {
        let formData = new FormData();

        formData.append("username", username);
        formData.append("password", password);
        formData.append("code", pincode);

        const config = {
            headers: { 'content-type': 'application/json' }
        }

        axios.post('https://y6vlqlglfa.execute-api.us-west-2.amazonaws.com/dev/account/signup/email/confirm', formData, config)
            .then(response => {
                console.log(response.data)
                const expirationDate = new Date(new Date().getTime() + response.data.ExpiresIn * 1000);
                localStorage.setItem('token', response.data.AccessToken);
                localStorage.setItem('refreshToken', response.data.RefreshToken);
                localStorage.setItem('expirationDate', expirationDate);
                localStorage.setItem('idToken', response.data.IdToken);
                localStorage.setItem('accountType', response.data.account_type);
                localStorage.setItem('username', username);
                dispatch(authSuccess(response.data.AccessToken, response.data.IdToken, response.data.RefreshToken, response.data.account_type, username));
                dispatch(checkAuthTimeout(response.data.ExpiresIn));
            })
            .catch(err => {
                dispatch(emailConfirmationFail(err.response.data.message));
                toast.error(err.response.data.message);
            });
    };
};

export const signUp = (name, username, email, password, birth_day) => {
    return dispatch => {
        dispatch(authStart());

        let formData = new FormData();

        formData.append("name", name);
        formData.append("username", username);
        formData.append("email", email);
        formData.append("password", password);
        formData.append("birth_day", birth_day);

        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        }

        axios.post('https://y6vlqlglfa.execute-api.us-west-2.amazonaws.com/dev/account/signup/email', formData, config)
            .then(response => {
                dispatch(emailConfirmationStart());
            })
            .catch(err => {
                dispatch(authFail(err.response.data.message));
                toast.error(err.response.data.message);
            });
    };
};

export const authFB = (AccessToken, ExpiresIn, idToken) => {
    return dispatch => {
        dispatch(authStart());
        const expirationDate = new Date(new Date().getTime() + ExpiresIn * 1000);
        localStorage.setItem('token', AccessToken);
        localStorage.setItem('expirationDate', expirationDate);
        localStorage.setItem('idToken', idToken);
        dispatch(authSuccess(AccessToken, idToken));
        dispatch(checkAuthTimeout(ExpiresIn));
    };
};

export const FBSignUp = (name, username, email, profile_picture) => {
    return dispatch => {
        dispatch(authStart());

        let formData = new FormData();

        formData.append("account_status", '');
        formData.append("name", name);
        formData.append("username", username);
        formData.append("email", email);
        formData.append("profile_picture", profile_picture);

        let url = 'https://y6vlqlglfa.execute-api.us-west-2.amazonaws.com/dev/account/signup/social';

        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        }

        axios.post(url, formData, config)
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                dispatch(authFail(err.response.data.message));
            });
    };
};



export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    };
};

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        const path = localStorage.getItem('path');
        dispatch(setAuthRedirectPath(path));
        if (!token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                const refreshToken = localStorage.getItem('refreshToken');
                dispatch(refreshCredentials(refreshToken));
            } else {
                const idToken = localStorage.getItem('idToken');
                const refreshToken = localStorage.getItem('refreshToken');
                const accountType = localStorage.getItem('accountType');
                const username = localStorage.getItem('username');
                dispatch(authSuccess(token, idToken, refreshToken, accountType, username));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
            }
        }
    };
};