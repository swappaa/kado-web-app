import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from '../store/reducers/auth';
import talentReducer from '../store/reducers/talent';
import spotlightCategoryReducer from '../store/reducers/spotlightCategory';
import talentCategoryReducer from '../store/reducers/talentCategory';
import fanTalentFavoriteReducer from '../store/reducers/fanTalentFavorite';
import browseReducer from '../store/reducers/browse';
import notificationReducer from '../store/reducers/notification';
import accountReducer from '../store/reducers/account';
import kadoReducer from '../store/reducers/kado';
import searchTalentReducer from '../store/reducers/searchTalent';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth', 'ServiceTalent', 'TalentByCategories', 'spotlightCategoryReducer', 'FanTalentFavorites', 'browseSpotlightByCategories', 'notifications', 'accountDetails']
}

const appReducer = combineReducers({
    auth: authReducer,
    ServiceTalent: talentReducer,
    TalentByCategories: talentCategoryReducer,
    SpotlightByCategories: spotlightCategoryReducer,
    FanTalentFavorites: fanTalentFavoriteReducer,
    browseSpotlightByCategories: browseReducer,
    notifications: notificationReducer,
    accountDetails: accountReducer,
    kado: kadoReducer,
    searchTalentResult: searchTalentReducer
})

const rootReducer = (state, action) => {
    if (action.type === 'AUTH_LOGOUT') {
        state = undefined
    }

    return appReducer(state, action)
}


export default persistReducer(persistConfig, rootReducer);

