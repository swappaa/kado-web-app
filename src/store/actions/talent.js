import * as actionTypes from './actionsType';
import axios from '../../axios-kado';

export const fetchTalentSuccess = (service) => {
    return {
        type: actionTypes.FETCH_TALENT_SUCCESS,
        selectedService: service
    };
};

export const fetchTalentFail = (error) => {
    return {
        type: actionTypes.FETCH_TALENT_FAIL,
        error: error
    };
};

export const fetchTalentStart = () => {
    return {
        type: actionTypes.FETCH_TALENT_START
    };
};

export const fetchTalent = (talentId) => {
    return dispatch => {
        dispatch(fetchTalentStart());
        const queryParams = talentId;
        axios.get('/talent/' + queryParams)
            .then(async res => {
                const fetchedTalent = await res.data;
                dispatch(fetchTalentSuccess(fetchedTalent));
            })
            .catch(err => {
                dispatch(fetchTalentFail(err));
            });
    };
};