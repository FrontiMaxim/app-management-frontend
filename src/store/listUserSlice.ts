import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../interfaces/IUser';
import { IListUser } from '../interfaces/IListUser';

const initialState: IListUser = {
    listUser: [],
    countUser: 0,
    listUserOnline: [],
    countUserOnline: 0
}

const listUserSlice = createSlice({
  name: 'listUser',
  initialState,
  reducers: {
    setListUser(state, action: PayloadAction<IUser[]>) {
        state.listUser = [...action.payload];
        state.countUser = state.listUser.length;

        state.listUserOnline = action.payload.filter(user => user.is_online);
        state.countUserOnline = state.listUserOnline.length;
    },
  },
});

export const { setListUser } = listUserSlice.actions;

export default listUserSlice.reducer;