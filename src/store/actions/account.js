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
                toast.success('Profile has been updated');
                dispatch(updateProfileSuccess());
                dispatch(getAccountDetails(access_token, username));
            })
            .catch(err => {
                toast.error(err);
                dispatch(updateProfileFail(err));
            });
    };
};

export const updateAccountSuccess = () => {
    return {
        type: actionTypes.UPDATE_ACCOUNT_SUCCESS,
    };
};

export const updateAccountFail = (error) => {
    return {
        type: actionTypes.UPDATE_ACCOUNT_FAIL,
        error: error
    };
};

export const updateAccountStart = () => {
    return {
        type: actionTypes.UPDATE_ACCOUNT_START
    };
};

export const updateAcct = (access_token, username, field, val) => {
    return dispatch => {
        dispatch(updateAccountStart());

        let formData = new FormData();
        let url = null;
        switch (field) {
            case 'name':
                formData.append("name", val);
                url = 'https://y6vlqlglfa.execute-api.us-west-2.amazonaws.com/dev/account';
                break;
            case 'email':
                formData.append("access_token", access_token);
                formData.append("new_email", val);
                url = 'https://y6vlqlglfa.execute-api.us-west-2.amazonaws.com/dev/account/change_email';
                break;
            default:
                break;
        }

        axios.defaults.headers.common.Accept = 'application/json';
        axios.defaults.headers['Content-Type'] = 'application/json';
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

        switch (field) {
            case 'name':
                axios.put(url, formData)
                    .then(response => {
                        toast.success('Account has been updated');
                        dispatch(updateAccountSuccess());
                        dispatch(getAccountDetails(access_token, username));
                    })
                    .catch(err => {
                        toast.error(err);
                        dispatch(updateAccountFail(err));
                    });
                break;
            case 'email':
                axios.post(url, formData)
                    .then(response => {
                        dispatch(updateAccountSuccess());
                    })
                    .catch(err => {
                        toast.error(err);
                        dispatch(updateAccountFail(err));
                    });
                break;
            default:
                break;
        }


    };
};

export const changeEmailVerify = (access_token, username, code) => {
    return dispatch => {
        dispatch(updateAccountStart());

        let formData = new FormData();
        formData.append("access_token", access_token);
        formData.append("code", code);

        const config = {
            headers: { 'content-type': 'application/json' }
        }

        axios.post('https://y6vlqlglfa.execute-api.us-west-2.amazonaws.com/dev/account/change_email/verify', formData, config)
            .then(response => {
                toast.success('Your email has been changed!');
                dispatch(getAccountDetails(access_token, username));
                dispatch(closeVerifyForm());
            })
            .catch(err => {
                toast.error(err.response.data.message);
                dispatch(updateAccountFail(err.response.data.message));
            });
    }
};

export const resetPasswordInitiate = (username) => {
    return dispatch => {
        let formData = new FormData();
        formData.append("username", username);

        const config = {
            headers: { 'content-type': 'application/json' }
        }

        axios.post('https://y6vlqlglfa.execute-api.us-west-2.amazonaws.com/dev/account/reset_password/initiate', formData, config)
            .then(response => {

            })
            .catch(err => {
                toast.error(err.response.data.message);
            });
    }
};

export const closeVerifyForm = () => {
    return {
        type: actionTypes.CLOSE_VERIFY_FORM
    };
};