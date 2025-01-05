import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import authReducer from './auth/auth';
import cartReducer from './cart/cart';
import notifcationReducer from './notification/notification';

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  notification: notifcationReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export function setupStore(preloadedState?: Partial<RootState> | any) {
  return configureStore({
    reducer: persistedReducer,
    preloadedState,
    middleware: getDefaultMiddleware => {
      return getDefaultMiddleware({
        serializableCheck: {
          ignoreActions: true,
        },
      });
    },
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
