import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from '../store/reducers/auth';
import talentReducer from '../store/reducers/talent';
import spotlightCategoryReducer from '../store/reducers/spotlightCategory';
import talentCategoryReducer from '../store/reducers/talentCategory';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['ServiceTalent', 'TalentByCategories', 'spotlightCategoryReducer']
}

const rootReducer = combineReducers({
    auth: authReducer,
    ServiceTalent: talentReducer,
    TalentByCategories: talentCategoryReducer,
    SpotlightByCategories: spotlightCategoryReducer
});


export default persistReducer(persistConfig, rootReducer);

