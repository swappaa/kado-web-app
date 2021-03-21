import * as actionTypes from './actionsType';
import cleanDeep from 'clean-deep';
import axios from '../../axios-kado';

export const fetchFanTalentFavoriteSuccess = (favorite) => {
    return {
        type: actionTypes.FETCH_FAN_TALENT_FAVORITES_SUCCESS,
        fanTalentFavorites: favorite
    };
};

export const fetchFanTalentFavoriteFail = (error) => {
    return {
        type: actionTypes.FETCH_FAN_TALENT_FAVORITES_FAIL,
        error: error
    };
};

export const fetchFanTalentFavoriteStart = () => {
    return {
        type: actionTypes.FETCH_FAN_TALENT_FAVORITES_START
    };
};

export const fetchFanTalentFavorite = (access_token, username) => {
    return dispatch => {
        dispatch(fetchFanTalentFavoriteStart());

        axios.interceptors.request.use(async function (config) {
            if (username) {
                config.headers.common.username = username;
                config.headers.common.access_token = access_token;
            }
            return config;
        });

        axios.get('talent/favorite/')
            .then(async FanTalentFavorites => {
                const fetchedFanTalentFavorite = await FanTalentFavorites.data.favorites;
                dispatch(fetchFanTalentFavoriteSuccess(cleanDeep(fetchedFanTalentFavorite)));
            })
            .catch(err => {
                dispatch(fetchFanTalentFavoriteFail(err));
            });
    };
};

