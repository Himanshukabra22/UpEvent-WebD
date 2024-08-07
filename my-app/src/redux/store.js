import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { thunk } from 'redux-thunk';

// slices
import UserSlice from './slices/userSlice';
import OrganiserSlice from './slices/organiserSlice';

// root-reducer
const rootreducer = combineReducers({
    user: UserSlice,
    organiser: OrganiserSlice,
    devTools: process.env.NODE_ENV !== 'production'
});

// persist-config
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user','organiser'],
};

const persistedReducer = persistReducer(persistConfig, rootreducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
    devTools: process.env.NODE_ENV !== 'production',
});

const persistor = persistStore(store);

export { store, persistor };
