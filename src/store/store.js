import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';

import rootReducer from './root-reducer';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

export const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

export const persistor = persistStore(store);

export default { store, persistor }

// const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

// const persistConfig = {
//   key: 'root',
//   storage: storage,
//   whitelist: ['ServiceTalent']
// }

// const rootReducer = combineReducers({
//   auth: authReducer,
//   ServiceTalent: persistReducer(persistConfig, talentReducer)
// });

// const store = createStore(rootReducer, composeEnhancers(
//   applyMiddleware(thunk)
// ));

