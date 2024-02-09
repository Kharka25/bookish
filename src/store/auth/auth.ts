import {createSelector, createSlice, PayloadAction} from '@reduxjs/toolkit';

import {AuthStateI, UserProfileI} from '@models/auth';
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
    updateProfile(authState, {payload}: PayloadAction<UserProfileI | null>) {
      authState.profile = payload;
    },
    setIsLoggedIn(authState, {payload}: PayloadAction<boolean>) {
      authState.loggedIn = payload;
      authState.isLoading = payload;
    },
    logout(authState) {
      authState.isAuth = false;
    },
  },
});

export const {logout, setIsLoggedIn, updateProfile} = authSlice.actions;

export const getAuthState = createSelector(
  (state: RootState) => state,
  ({auth}) => auth,
);

export default authSlice.reducer;
