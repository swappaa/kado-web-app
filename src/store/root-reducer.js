import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from '../store/reducers/auth';
import talentReducer from '../store/reducers/talent';
import spotlightCategoryReducer from '../store/reducers/spotlightCategory';
import talentCategoryReducer from '../store/reducers/talentCategory';
import fanTalentFavoriteReducer from '../store/reducers/fanTalentFavorite';
import browseReducer from '../store/reducers/browse';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['ServiceTalent', 'TalentByCategories', 'spotlightCategoryReducer', 'FanTalentFavorites', 'browseSpotlightByCategories']
}

const rootReducer = combineReducers({
    auth: authReducer,
    ServiceTalent: talentReducer,
    TalentByCategories: talentCategoryReducer,
    SpotlightByCategories: spotlightCategoryReducer,
    FanTalentFavorites: fanTalentFavoriteReducer,
    browseSpotlightByCategories: browseReducer
});


export default persistReducer(persistConfig, rootReducer);

