import {createSelector, createSlice, PayloadAction} from '@reduxjs/toolkit';

import {AuthStateI, UserProfileI} from '@models/auth';
import {clearAsyncStorage} from '@utils/cache';
import {RootState} from '../store';

const initialState: AuthStateI = {
  isAuth: false,
  isLoading: true,
  loggedIn: false,
  profile: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(authState) {
      authState.isAuth = false;
      authState.profile = null;
      authState.loggedIn = false;
      clearAsyncStorage();
    },
    setCredentials(authState, {payload}: PayloadAction<string>) {
      authState.access_token = payload;
    },
    setIsLoggedIn(authState, {payload}: PayloadAction<boolean>) {
      authState.loggedIn = payload;
      authState.isLoading = payload;
    },
    setAuthState(authState, {payload}: PayloadAction<boolean>) {
      authState.isAuth = payload;
    },
    setUserProfile(authState, {payload}: PayloadAction<UserProfileI | null>) {
      authState.profile = payload;
    },
  },
});

export const {
  logout,
  setCredentials,
  setIsLoggedIn,
  setAuthState,
  setUserProfile,
} = authSlice.actions;

export const getAuthState = createSelector(
  (state: RootState) => state,
  ({auth}) => auth,
);

export default authSlice.reducer;
