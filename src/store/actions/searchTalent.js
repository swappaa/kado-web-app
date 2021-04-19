import * as actionTypes from './actionsType';
import axios from 'axios';

export const searchTalentSuccess = (result) => {
    return {
        type: actionTypes.SEARCH_TALENT_SUCCESS,
        searchTalentResult: result
    };
};

export const searchTalentStart = () => {
    return {
        type: actionTypes.SEARCH_TALENT_START
    };
};

export const searchTalentFail = (error) => {
    return {
        type: actionTypes.SEARCH_TALENT_FAIL,
        error: error
    };
};

export const searchTalents = (access_token, username, search_param) => {
    return dispatch => {

        dispatch(searchTalentStart());

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

        axios.get(`https://atln2zned9.execute-api.us-west-2.amazonaws.com/dev/talent/search/${search_param}`)
            .then(async talent => {
                const searchResult = await talent.data.talents;
                dispatch(searchTalentSuccess(searchResult));
            })
            .catch(err => {
                dispatch(searchTalentFail(err));
            });
    };
};