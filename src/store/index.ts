import {useDispatch, useSelector, TypedUseSelectorHook} from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import sessionSlice from './sessionSlice';
import userSlice from './userSlice';

const store = configureStore({
  reducer: {

    session: sessionSlice,
    user: userSlice
  },
});

export default store;

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;