import {combineReducers} from 'redux';

import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import headerReducer from './header/header.reducer';
import HomePageReducer from './homepage/homepage.reducer';

const persistConfig = {
    key:'root',
    storage,
    whitelist:[
        // 'homePage',
        // 'header'
    ]
};

const rootReducer = combineReducers({
    homePage: HomePageReducer,
    header: headerReducer
})

export default persistReducer(persistConfig,rootReducer);