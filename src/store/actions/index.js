export {
    auth,
    signUp,
    authFB,
    FBSignUp,
    logout,
    setAuthRedirectPath,
    authCheckState,
    emailVerification
} from './auth';

export {
    fetchTalent,
    SubmitApplication
} from './talent';

export {
    ceateNewKado
} from './kado';


export {
    fetchTalentByCategories,
    setTalentIsFavorite,
    setSearchTerm
} from './talentCategory';

export {
    fetchTalentSpotlight,
    spotTalentIsFavorite
} from './spotlightCategory';

export {
    browseTalentSpotlight,
    talentIsFavorite
} from './browse';

export {
    fetchFanTalentFavorite,
    removeTalentFavorite
} from './fanTalentFavorite';

export {
    fetchNotification
} from './notification';

export {
    getAccountDetails,
    getTOS,
    getPrivacy
} from './account';