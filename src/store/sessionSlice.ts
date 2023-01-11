import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISession } from '../interfaces/ISession';

const initialState:ISession = {
  id_session: '',
  id_user: '',
  date: '',
  time_start: '',
  time_end: ''
};
  
const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    installSession(state, action: PayloadAction<ISession>) {
      const {id_session, id_user, date, time_start, time_end} = action.payload
      state.id_session = id_session;
      state.id_user = id_user;
      state.date = date;
      state.time_start = time_start;
      state.time_end = time_end
    }
  },
});

export const { installSession } = sessionSlice.actions;

export default sessionSlice.reducer;