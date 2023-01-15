import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IModalWindow } from '../interfaces/IModalWindow';

const initialState:IModalWindow = {
  isOpenModalWindow: false,
  typeModalWindow: ''
};
  
const modalWindowSlice = createSlice({
  name: 'modalWindow',
  initialState,
  reducers: {
    openModalWindow(state, action: PayloadAction<string>) {
        state.isOpenModalWindow = true;
        state.typeModalWindow = action.payload;
    },
    closeModalWindow(state) {
        state.isOpenModalWindow = false;
        state.typeModalWindow = '';
    }
  },
});

export const { openModalWindow, closeModalWindow} = modalWindowSlice.actions;

export default modalWindowSlice.reducer;