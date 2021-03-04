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
            headers: { 'username': queryParams, 'access_token': 'eyJraWQiOiJMTVhYTUxFM1ZVOHg5MTh4WEx0cEVmWjdmbnVJYmJEaHlXcmRPeVR5aGtFPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJjZTdiZWNlYi0yYTI5LTQ2ZTAtOWU1NC04NjJhMGU1NTM1YjIiLCJldmVudF9pZCI6IjdjMTdjNWJhLWEyOWQtNDMxYS05OWVhLTczOTgyNDgxODEwZiIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2MTQ4Njg0OTIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy13ZXN0LTIuYW1hem9uYXdzLmNvbVwvdXMtd2VzdC0yX1RHZHNqS2dSVCIsImV4cCI6MTYxNDk1NDg5MiwiaWF0IjoxNjE0ODY4NDkyLCJqdGkiOiI0NzJkMWM0NC0yOTQzLTRhOGEtOTg4MS0zNjJjZGVlMDNjNmIiLCJjbGllbnRfaWQiOiIzcXV2MmJkNXFqNGQzNG9xaTExdW9zdGlrNiIsInVzZXJuYW1lIjoiZmFuX3Rlc3QifQ.M5nWOKTwExiOtzM4tpBuuLw1g0x-d5VmKOBY55JvKkRNgf-gqMkRu_fu27y2buBTxJnqGrMycDL9xCa-8gqA9sNW3hlOExk7B6LvujZ692Ygz9TxtIiAramVlATXNdDf3YO2GPzdB7fkT3_aqPJkkbyQcHYmaGRSWaw3Jl_cB4ux8muwH64NR-9JS_tKFAr9mSrt1UEuj_bJI78NUk5uP0F2wzMBVqNXshhoCcKRGvNZS-fFHNA5rzGi7KzMxowkd5dIPUhYvTCBe8b03nUTsaWnvIQyS2uGJfhjWQEf4rVOT7n87GcwAKw1OiXe5BgoW8nx0t4jvzbYBIGigfmgig' }
        }

        console.log(config);

        axios.get('/talent/' + queryParams, config)
            .then(async res => {
                const fetchedTalent = await res.data;
                dispatch(fetchTalentSuccess(fetchedTalent));
            })
            .catch(err => {
                dispatch(fetchTalentFail(err));
            });
    };
};