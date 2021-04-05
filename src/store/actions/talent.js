import * as actionTypes from './actionsType';
import cleanDeep from 'clean-deep';
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
        const username = talentId;

        axios.get(`talent/${username}`)
            .then(async service => {
                const fetchedTalent = await service.data.talent;
                dispatch(fetchTalentSuccess(fetchedTalent));
            })
            .catch(async err => {
                let error = 'talent not found'
                dispatch(fetchTalentFail(error));
            });
    };
};

export const SubmitApplication = (first_name, last_name, email, phone) => {
    return dispatch => {

        let formData = new FormData();

        formData.append("first_name", first_name);
        formData.append("last_name", last_name);
        formData.append("email", email);
        formData.append("phone", phone);

        axios.post('talent/submit_application', formData)
            .then(response => {
                console.log(response.data);
            })
            .catch(err => {

            });
    };
};