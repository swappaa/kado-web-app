import axios from 'axios';
import * as actionTypes from './actionsType';

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
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
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
                console.log(response.data);
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

        const authData = {
            name: name,
            username: username,
            email: email,
            password: password,
            birth_day: birth_day
        };

        console.log(authData);

        axios.post('https://y6vlqlglfa.execute-api.us-west-2.amazonaws.com/dev/account/signup/email', formData, config)
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                dispatch(authFail(err.response.data.message));
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
                dispatch(logout());
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