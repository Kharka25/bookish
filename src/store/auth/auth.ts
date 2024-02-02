import {createSelector, createSlice, PayloadAction} from '@reduxjs/toolkit';

import {AuthStateI, UserProfileI} from '@models/auth';
import {RootState} from '../store';

const initialState: AuthStateI = {
  isLoading: false,
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
  },
});

export const {setIsLoggedIn, updateProfile} = authSlice.actions;

export const useAuth = createSelector(
  (state: RootState) => state,
  ({auth}) => auth,
);

export default authSlice.reducer;
