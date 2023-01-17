import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IObject } from '../interfaces/IObject';
import { IListObject } from '../interfaces/IListObject';

const initialState: IListObject = {
    listObject: [],
    currentObject: {} as IObject
}

const listObjectSlice = createSlice({
  name: 'listObject',
  initialState,
  reducers: {
    setListObject(state, action: PayloadAction<IObject[]>) {
        state.listObject = action.payload;
    },

    setCurrentObject(state, action: PayloadAction<IObject>) {
        state.currentObject = {
            ...action.payload
        };
    }
  },
});

export const { setListObject, setCurrentObject} = listObjectSlice.actions;

export default listObjectSlice.reducer;