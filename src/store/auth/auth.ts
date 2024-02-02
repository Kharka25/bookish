import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {AuthStateI, UserProfileI} from '@models/auth';

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
  },
});

export const {updateProfile} = authSlice.actions;
export default authSlice.reducer;
