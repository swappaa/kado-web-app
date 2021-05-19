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

        // axios.interceptors.response.use((response) => {
        //     return response;
        // }, function (error) {
        //     // Do something with response error
        //     if (error.response.status === 401) {
        //         console.log('unauthorized, logging out ...');
        //     }
        //     if (error.response.status === 403) {
        //         console.log('duplicate');
        //     }
        //     return Promise.reject(error.response);
        // });


        axios.post('talent/submit_application', formData)
            .catch(function (error) {
                let errorObject = JSON.parse(JSON.stringify(error));
                console.log(errorObject);
                // console.log(error.toJSON());
            });
        //     .catch(function (error) {
        //         if (error.response) {
        //             // The request was made and the server responded with a status code
        //             // that falls out of the range of 2xx
        //             console.log(error.response.data);
        //             console.log(error.response.status);
        //             console.log(error.response.headers);
        //         } else if (error.request) {
        //             // The request was made but no response was received
        //             // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        //             // http.ClientRequest in node.js
        //             console.log(error.request);
        //         } else {
        //             // Something happened in setting up the request that triggered an Error
        //             console.log('Error', error.message);
        //         }
        //         console.log(error.config);
        //     });
        // // .then(response => {
        //     console.log(response.status);


        //     // if (response.status === 403) {
        //     //     console.log('duplicate');
        //     // }
        // })
        // .catch(function (error) {
        //     console.log(error.status);
        //     // console.log(error.toJSON());
        // });
        // .catch(function (error) {
        //     if (error.response) {
        //         // The request was made and the server responded with a status code
        //         // that falls out of the range of 2xx
        //         console.log(error.response.data);
        //         console.log(error.response.status);
        //         console.log(error.response.headers);
        //     } else if (error.request) {
        //         // The request was made but no response was received
        //         // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        //         // http.ClientRequest in node.js
        //         console.log(error.request);
        //     } else {
        //         // Something happened in setting up the request that triggered an Error
        //         console.log('Error', error.message);
        //     }
        //     console.log(error.config);
        // });
        // .catch((err) => {
        //     // err.response.status(403).json({ message: 'Something went wrong' });
        //     if (err.response.status === 403) {
        //         console.log('duplicate');
        //     }
        // });
        // .catch(function (error) {
        //     if (error.status === 401) {
        //         console.log('unauthorized, logging out ...');
        //     }
        //     if (error.status === 403) {
        //         console.log('duplicate');
        //     }
        //     // return Promise.reject(error.response);
        // });
        //     function (error) {
        //         console.log('>>>>>> API CALL: ', error.response.config.url);
        //         return Promise.resolve(error.response.data.message);
        //     }
        // .catch(err => {
        //     console.log(err.response.data.message)
        //     // var obj = err.data.message;

        //     // console.log(obj)
        //     // toast.error(err.response.data.message);
        //     // toast.error(err.response.message);
        // });
        // .catch(async err => {
        //     const errorMessage = await err.response;
        //     console.log(errorMessage)
        // })




    };
};