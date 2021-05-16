import * as actionTypes from './actionsType';
import { toast } from "react-toastify";
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

export const fetchTalentByURL = (talent_url) => {
    return dispatch => {
        dispatch(fetchTalentStart());

        axios.get(`/talent/url/${talent_url}`)
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

export const fetchTalent = (talentId) => {
    return dispatch => {
        dispatch(fetchTalentStart());
        const username = talentId;

        axios.get(`/talent/${username}`)
            .then(async service => {
                const fetchedTalent = await service.data.talent;
                dispatch(fetchTalentSuccess(fetchedTalent));
            })
            .catch(async err => {
                dispatch(fetchTalentByURL(talentId));
            });
    };
};

export const SubmitApplication = (fullname, username, stage_name, email, password, phone, instagram, facebook, twitter, tiktok, youtube, website, notes) => {
    return dispatch => {
        let formData = new FormData();

        formData.append("name", fullname);
        formData.append("username", username);
        formData.append("stage_name", stage_name);
        formData.append("email", email);
        formData.append("password", password);
        formData.append("phone", phone);
        formData.append("instagram", instagram);
        formData.append("facebook", facebook);
        formData.append("twitter", twitter);
        formData.append("tiktok", tiktok);
        formData.append("youtube", youtube);
        formData.append("website", website);
        formData.append("bio", notes);

        axios.post('talent/submit_application', formData)
            .then(response => {
                console.log(response.message);
            })
            // .catch(function (res) {
            //     if (res instanceof Error) {
            //         console.log(res.message);
            //     } else {
            //         console.log(res.data);
            //     }
            // });
            .catch(err => {
                console.log(err)
                // var obj = err.data.message;

                // console.log(obj)
                // toast.error(err.response.data.message);
                // toast.error(err.response.message);
            });
    };
};