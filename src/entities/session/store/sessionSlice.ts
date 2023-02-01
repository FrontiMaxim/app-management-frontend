import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISession } from '../model/session.interface';

const initialState:ISession = {
  id_session: '',
  id_user: '',
  date: '',
  time_start: '',
  time_end: '',
};
  
const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    installSession(state, action: PayloadAction<ISession>) {
      state.id_session = action.payload.id_session;
      state.id_user = action.payload.id_user;
      state.date = action.payload.date;
      state.time_start = action.payload.time_start;
      state.time_end = action.payload.time_end;
    }
  },
});

export const { installSession } = sessionSlice.actions;

export default sessionSlice.reducer;