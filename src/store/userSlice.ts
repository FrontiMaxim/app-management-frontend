import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../interfaces/IUser';

const initialState: IUser = {
  id_user: '',
  name: '',
  login: '',
  password: '',
  is_online: false,
  avatar: '',
  role: '',
  sessions: []
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    installUser(state, action: PayloadAction<IUser>) {
      const { id_user, name, login, avatar, role } = action.payload
      state.id_user = id_user;
      state.name = name
      state.login = login;
      state.avatar = avatar;
      state.role = role;
    }
  },
});

export const { installUser } = userSlice.actions;

export default userSlice.reducer;