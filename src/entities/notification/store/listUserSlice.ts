import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { INotificationWithoutUser } from '../model/notificationWithoutUser.interface';

type IListNotification = {
  list: INotificationWithoutUser[],
  count: number
}

const initialState: IListNotification = {
  list: [],
  count: 0
}

const listNotificationSlice = createSlice({
  name: 'listNotification',
  initialState,
  reducers: {
    setListNotification(state, action: PayloadAction<INotificationWithoutUser[]>) {
        state.list = [...action.payload];
        state.count = state.list.length;
    },
  },
});

export const { setListNotification} = listNotificationSlice.actions;

export default listNotificationSlice.reducer;