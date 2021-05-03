import axios from 'axios';
import * as actionTypes from './actionsType';
import { toast } from "react-toastify";

export const ceateNewKadoStart = () => {
    return {
        type: actionTypes.CREATE_NEW_KADO_START
    };
};

export const ceateNewKadoSuccess = (isModal) => {
    return {
        type: actionTypes.CREATE_NEW_KADO_SUCCESS
    };
};

export const ceateNewKadoFail = (error) => {
    return {
        type: actionTypes.CREATE_NEW_KADO_FAIL,
        error: error
    };
};

export const createNewKado = (access_token, username, talent, recipientName, occasion, language, instructions, pronoun, recipient_photo, couponCode) => {
    return dispatch => {
        dispatch(ceateNewKadoStart());

        console.log(access_token)
        console.log(username)
        console.log(talent)
        console.log(recipientName)
        console.log(occasion)
        console.log(language)
        console.log(instructions)
        console.log(pronoun)
        console.log(recipient_photo)
        console.log(couponCode)

        let formData = new FormData();

        formData.append("talent", talent);
        formData.append("request_to", recipientName);
        formData.append("request_occasion", occasion);
        formData.append("request_language", language);
        formData.append("request_instructions", instructions);
        formData.append("request_pronoun", pronoun);
        formData.append("recipient_photo", recipient_photo);
        // formData.append("recipient_photo", new Blob(recipient_photo, { type: 'image/jpg' })); // false
        formData.append("coupon_code", couponCode);

        axios.defaults.headers.common.Accept = 'application/json';
        axios.defaults.headers['Content-Type'] = 'multipart/form-data';
        axios.interceptors.request.use(async function (config) {
            config.headers.common['Access-Control-Allow-Origin'] = '*';
            config.headers.common['Access-Control-Allow-Headers'] = 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token';
            config.headers.common['Access-Control-Allow-Credentials'] = true;
            config.headers.common['Access-Control-Allow-Method'] = 'OPTIONS,POST,GET';
            config.headers.common['Content-Type'] = 'multipart/form-data';
            if (username) {
                config.headers.common.username = username;
                config.headers.common.access_token = access_token;
            }
            return config;
        });

        axios.post('https://aesdvqqk1k.execute-api.us-west-2.amazonaws.com/dev/kados/', formData)
            .then(response => {
                dispatch(ceateNewKadoSuccess());
            })
            .catch(err => {
                // dispatch(ceateNewKadoFail(err.response.data.message));
                toast.error(err.response.data.message);
            });
    };
};

export const validateCouponSuccess = (coupon) => {
    return {
        type: actionTypes.VALIDATE_COUPON_SUCCESS,
        coupon: coupon
    };
};

export const validateCouponStart = () => {
    return {
        type: actionTypes.VALIDATE_COUPON_START
    };
};

export const validateCoupon = (couponCode) => {
    return dispatch => {
        dispatch(validateCouponStart());

        const config = {
            headers: { 'content-type': 'application/json' }
        }
        axios.get(`https://aesdvqqk1k.execute-api.us-west-2.amazonaws.com/dev/kados/coupon/${couponCode}`, config)
            .then(async coupon_code => {
                const coupon = await coupon_code.data;
                dispatch(validateCouponSuccess(coupon));
            })
    };
};

export const fetchAllKadosRequestsSuccess = (allKadosRequests) => {
    return {
        type: actionTypes.FETCH_ALL_KADOS_REQUESTS_SUCCESS,
        AllKadosRequests: allKadosRequests
    };
};

export const fetchAllKadosRequestsFail = (error) => {
    return {
        type: actionTypes.FETCH_ALL_KADOS_REQUESTS_FAIL,
        error: error
    };
};

export const fetchAllKadosRequestsStart = () => {
    return {
        type: actionTypes.FETCH_ALL_KADOS_REQUESTS_START
    };
};

export const getAllKadosRequests = (access_token, username) => {
    return dispatch => {
        dispatch(fetchAllKadosRequestsStart());

        axios.defaults.headers.common.Accept = 'application/json';
        axios.defaults.headers['Content-Type'] = 'multipart/form-data';
        axios.interceptors.request.use(async function (config) {
            config.headers.common['Access-Control-Allow-Origin'] = '*';
            config.headers.common['Access-Control-Allow-Headers'] = 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token';
            config.headers.common['Access-Control-Allow-Credentials'] = true;
            config.headers.common['Access-Control-Allow-Method'] = 'OPTIONS,POST,GET';
            config.headers.common['Content-Type'] = 'multipart/form-data';
            if (username) {
                config.headers.common.username = username;
                config.headers.common.access_token = access_token;
            }
            return config;
        });

        axios.get('https://aesdvqqk1k.execute-api.us-west-2.amazonaws.com/dev/kados')
            .then(async allKadosRequests => {
                const fetchedAllKadosRequest = await allKadosRequests.data.kados;
                dispatch(fetchAllKadosRequestsSuccess(fetchedAllKadosRequest));
            })
            .catch(err => {
                dispatch(fetchAllKadosRequestsFail(err));
            });
    };
};

export const fetchKadoDetailsSuccess = (KadoDetails) => {
    return {
        type: actionTypes.FETCH_KADO_DETAILS_SUCCESS,
        KadoDetails: KadoDetails
    };
};

export const fetchKadoDetailsFail = (error) => {
    return {
        type: actionTypes.FETCH_KADO_DETAILS_FAIL,
        error: error
    };
};

export const fetchKadoDetailsStart = () => {
    return {
        type: actionTypes.FETCH_KADO_DETAILS_START
    };
};

export const getKadoDetails = (access_token, username, kado_id) => {
    return dispatch => {
        dispatch(fetchKadoDetailsStart());

        axios.defaults.headers.common.Accept = 'application/json';
        axios.defaults.headers['Content-Type'] = 'multipart/form-data';
        axios.interceptors.request.use(async function (config) {
            config.headers.common['Access-Control-Allow-Origin'] = '*';
            config.headers.common['Access-Control-Allow-Headers'] = 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token';
            config.headers.common['Access-Control-Allow-Credentials'] = true;
            config.headers.common['Access-Control-Allow-Method'] = 'OPTIONS,POST,GET';
            config.headers.common['Content-Type'] = 'multipart/form-data';
            if (username) {
                config.headers.common.username = username;
                config.headers.common.access_token = access_token;
            }
            return config;
        });

        axios.get(`https://aesdvqqk1k.execute-api.us-west-2.amazonaws.com/dev/kados/status/${kado_id}`)
            .then(async allKadoDetails => {
                const fetchedKadoDetails = await allKadoDetails.data.kado_logs;
                dispatch(fetchKadoDetailsSuccess(fetchedKadoDetails));
            })
            .catch(err => {
                dispatch(fetchKadoDetailsFail(err));
            });
    };
};