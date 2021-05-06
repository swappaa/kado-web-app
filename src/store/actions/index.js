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
    createNewKado,
    validateCoupon,
    getAllKadosRequests,
    getKadoDetails
} from './kado';

export {
    fetchTalentByCategories,
    setTalentIsFavorite
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
    getPrivacy,
    disableAccount,
    setNotifications,
    updateProfile,
    updateAcct
} from './account';

export {
    searchTalents
} from './searchTalent';


