import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  token: ''
}

const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    installToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    }
  },
});

export const { installToken } = tokenSlice.actions;

export default tokenSlice.reducer;