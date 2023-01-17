import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IModalWindow, ModeModalWindow } from '../interfaces/IModalWindow';

const initialState:IModalWindow = {
  isOpen: false,
  mode: ModeModalWindow.CREATE
};
  
const modalWindowSlice = createSlice({
  name: 'modalWindow',
  initialState,
  reducers: {
    open(state, action: PayloadAction<ModeModalWindow>) {
        state.isOpen = true;
        state.mode = action.payload;
    },
    close(state) {
        state.isOpen = false;
        state.mode = ModeModalWindow.CREATE;
    }
  },
});

export const { open, close} = modalWindowSlice.actions;

export default modalWindowSlice.reducer;