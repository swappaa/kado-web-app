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

export const fetchTalent = (talentId, accessToken) => {
    return dispatch => {
        dispatch(fetchTalentStart());
        const queryParams = talentId;

        const config = {
            headers: { 'content-type': 'application/json' }
        }

        axios.get(`talent/${queryParams}`, config)
            .then(async service => {
                const fetchedTalent = await service.data.talent;
                dispatch(fetchTalentSuccess(fetchedTalent));
            })
            .catch(err => {
                dispatch(fetchTalentFail(err));
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