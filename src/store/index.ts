import {useDispatch, useSelector, TypedUseSelectorHook} from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import listUserSlice from './listUserSlice';
import sessionSlice from '../entities/session/store/sessionSlice';

const store = configureStore({
  reducer: {
    session: sessionSlice,
    user: userSlice,
    listUser: listUserSlice,
  },
});

export default store;

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;