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
            .catch(err => {
                dispatch(fetchTalentFail(err));
            });
    };
};

export const fetchTalentCategoriesSuccess = (talent) => {
    return {
        type: actionTypes.FETCH_TALENT_CATEGORIES_SUCCESS,
        talentByCategories: talent
    };
};

export const fetchTalentCategoriesFail = (error) => {
    return {
        type: actionTypes.FETCH_TALENT_CATEGORIES_FAIL,
        error: error
    };
};

export const fetchTalentCategoriesStart = () => {
    return {
        type: actionTypes.FETCH_TALENT_CATEGORIES_START
    };
};

export const fetchTalentByCategories = (token, user) => {
    return dispatch => {
        dispatch(fetchTalentCategoriesStart());
        axios.get('talent/categories/list')
            .then(async talentCategories => {
                const fetchedTalentCategories = await talentCategories.data.categories;
                dispatch(fetchTalentCategoriesSuccess(cleanDeep(fetchedTalentCategories)));
            })
            .catch(err => {
                dispatch(fetchTalentCategoriesFail(err));
            });
    };
};

export const fetchTalentSpotlightSuccess = (spotlight) => {
    return {
        type: actionTypes.FETCH_SPOTLIGHT_CATEGORIES_SUCCESS,
        spotlightByCategories: spotlight
    };
};

export const fetchTalentSpotlightFail = (error) => {
    return {
        type: actionTypes.FETCH_SPOTLIGHT_CATEGORIES_FAIL,
        error: error
    };
};

export const fetchTalentSpotlightStart = () => {
    return {
        type: actionTypes.FETCH_SPOTLIGHT_CATEGORIES_START
    };
};

export const fetchTalentSpotlight = (category, token, user) => {
    return dispatch => {
        dispatch(fetchTalentSpotlightStart());
        axios.get(`talent/categories/spotlight/${category}`)
            .then(async spotlightCategories => {
                const fetchedSpotlightCategories = await spotlightCategories.data.categories;
                dispatch(fetchTalentSpotlightSuccess(fetchedSpotlightCategories));
            })
            .catch(err => {
                dispatch(fetchTalentSpotlightFail(err));
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