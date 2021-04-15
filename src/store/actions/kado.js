import axios from 'axios';
import * as actionTypes from './actionsType';
import { toast } from "react-toastify";

export const ceateNewKadoStart = () => {
    return {
        type: actionTypes.CREATE_NEW_KADO_START
    };
};

export const ceateNewKadoSuccess = (token, idToken, refreshToken, accountType, email) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        accessToken: token,
        idToken: idToken,
        refreshToken: refreshToken,
        accountType: accountType,
        username: email
    };
};

export const ceateNewKadoFail = (error) => {
    return {
        type: actionTypes.CREATE_NEW_KADO_FAIL,
        error: error
    };
};

export const ceateNewKado = (access_token, username, talent, recipientName, occasion, language, instructions, recipient, recipient_photo, couponCode) => {
    return dispatch => {
        dispatch(ceateNewKadoStart());

        console.log(access_token)
        console.log(username)
        console.log(talent)
        console.log(recipientName)
        console.log(occasion)
        console.log(language)
        console.log(instructions)
        console.log(recipient)
        console.log(recipient_photo)
        console.log(couponCode)

        let formData = new FormData();

        formData.append("talent", talent);
        formData.append("request_to", recipientName);
        formData.append("request_occasion", occasion);
        formData.append("request_language", language);
        formData.append("request_instructions", instructions);
        formData.append("request_nature", recipient);
        formData.append("recipient_photo", recipient_photo);
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
                // dispatch(ceateNewKadoSuccess());
                toast.success(response.data.message);
            })
            .catch(err => {
                // dispatch(ceateNewKadoFail(err.response.data.message));
                toast.error(err.response.data.message);
            });
    };
};
