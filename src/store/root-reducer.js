import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from '../store/reducers/auth';
import talentReducer from '../store/reducers/talent';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['ServiceTalent']
}

const rootReducer = combineReducers({
    auth: authReducer,
    ServiceTalent: talentReducer
});


export default persistReducer(persistConfig, rootReducer);

