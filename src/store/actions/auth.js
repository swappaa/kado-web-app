import qs from 'qs';
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

        axios.post(url, authData, {
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
        })
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
                // console.log(err);
                // dispatch(authFail(err.response.data.error));
                dispatch(authFail(err.message));
            });


        // axios.post(url, authData)
        //     .then(response => {
        //         console.log(response);
        //         const expirationDate = new Date(new Date().getTime() + response.data.ExpiresIn * 1000);
        //         localStorage.setItem('token', response.data.AccessToken);
        //         localStorage.setItem('expirationDate', expirationDate);
        //         localStorage.setItem('userId', response.data.IdToken);
        //         dispatch(authSuccess(response.data.AccessToken, response.data.IdToken));
        //         dispatch(checkAuthTimeout(response.data.ExpiresIn));
        //     })
        //     .catch(err => {
        //         // console.log(err);
        //         // dispatch(authFail(err.response.data.error));
        //         // dispatch(authFail(err.message));
        //     });


        // axios.post(url, qs.stringify(authData), {
        //     headers: {
        //         'content-type': 'application/x-www-form-urlencoded',
        //         'Access-Control-Allow-Origin': '*',
        //         'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
        //         'Access-Control-Allow-Headers': 'Content-Type'
        //     },
        // })
        //     .then(response => {
        //         console.log(response);
        //         const expirationDate = new Date(new Date().getTime() + response.data.ExpiresIn * 1000);
        //         localStorage.setItem('token', response.data.AccessToken);
        //         localStorage.setItem('expirationDate', expirationDate);
        //         localStorage.setItem('userId', response.data.IdToken);
        //         dispatch(authSuccess(response.data.AccessToken, response.data.IdToken));
        //         dispatch(checkAuthTimeout(response.data.ExpiresIn));
        //     })
        //     .catch(err => {
        //         // console.log(err);
        //         // dispatch(authFail(err.response.data.error));
        //         dispatch(authFail(err.message));
        //     });

        // axios.post(url, authData)
        //     .then(response => {
        //         console.log(response);
        //         const expirationDate = new Date(new Date().getTime() + response.data.ExpiresIn * 1000);
        //         localStorage.setItem('token', response.data.AccessToken);
        //         localStorage.setItem('expirationDate', expirationDate);
        //         localStorage.setItem('userId', response.data.IdToken);
        //         dispatch(authSuccess(response.data.AccessToken, response.data.IdToken));
        //         dispatch(checkAuthTimeout(response.data.ExpiresIn));
        //     })
        //     .catch(err => {
        //         dispatch(authFail(err.response.data.message));
        //         // dispatch(authFail(err.message));
        //     });
    };
};

export const authSignup = (name, username, email, password, birth_day, isSignup) => {
    return dispatch => {
        dispatch(authStart());

        const authData = {
            account_status: "active",
            name: name,
            username: username,
            email: email,
            password: password,
            birth_day: birth_day,
            returnSecureToken: true
        };

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


export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    };
};

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
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