import {Notification} from '@models/notification';
import {PayloadAction, createSelector, createSlice} from '@reduxjs/toolkit';
import {RootState} from '@store/store';

const initialState: Notification = {
  message: '',
  type: 'error',
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotification: (state, {payload}: PayloadAction<Notification>) => {
      state.message = payload.message;
      state.type = payload.type;
    },
  },
});

export const {setNotification} = notificationSlice.actions;

export const getNotificationState = createSelector(
  (state: RootState) => state,
  ({notification}) => notification,
);

export default notificationSlice.reducer;
