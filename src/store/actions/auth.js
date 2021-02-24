import axios from 'axios';
import * as actionTypes from './actionsType';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
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
    localStorage.removeItem('userId');
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

export const auth = (email, password, isSignup) => {
    return dispatch => {
        dispatch(authStart());

        const authData = {
            username: email,
            password: password,
            returnSecureToken: true
        };

        let url = null;
        if (!isSignup) {
            url = 'https://y6vlqlglfa.execute-api.us-west-2.amazonaws.com/dev/account/signin/email';
        }

        axios.post(url, authData)
            .then(response => {
                console.log(response);
                const expirationDate = new Date(new Date().getTime() + response.data.ExpiresIn * 1000);
                localStorage.setItem('token', response.data.AccessToken);
                localStorage.setItem('expirationDate', expirationDate);
                localStorage.setItem('userId', response.data.IdToken);
                dispatch(authSuccess(response.data.AccessToken, response.data.IdToken));
                dispatch(checkAuthTimeout(response.data.ExpiresIn));
            })
            .catch(err => {
                dispatch(authFail(err.response.data.message));
                // dispatch(authFail(err.message));
            });
    };
};

export const signUp = (name, username, email, password, birth_day) => {
    return dispatch => {
        dispatch(authStart());

        const authData = {
            account_status: "",
            name: name,
            username: username,
            email: email,
            password: password,
            birth_day: birth_day
        };

        console.log(authData);

        let url = 'https://y6vlqlglfa.execute-api.us-west-2.amazonaws.com/dev/account/signup/email';

        axios.post(url, authData)
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                dispatch(authFail(err.response.data.message));
            });
    };
};

export const authFB = (AccessToken, ExpiresIn, userId) => {
    return dispatch => {
        dispatch(authStart());
        const expirationDate = new Date(new Date().getTime() + ExpiresIn * 1000);
        localStorage.setItem('token', AccessToken);
        localStorage.setItem('expirationDate', expirationDate);
        localStorage.setItem('userId', userId);
        dispatch(authSuccess(AccessToken, userId));
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
                const userId = localStorage.getItem('userId');
                dispatch(authSuccess(token, userId));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
            }
        }
    };
};