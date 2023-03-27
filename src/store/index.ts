import {useDispatch, useSelector, TypedUseSelectorHook} from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import sessionSlice from '../entities/session/store/sessionSlice';
import userSlice from '../entities/user/store/userSlice';
import listUserSlice from '../entities/user/store/listUserSlice';
import listNotificationSlice from '../entities/notification/store/listUserSlice';

const store = configureStore({
  reducer: {
    session: sessionSlice,
    user: userSlice,
    listUser: listUserSlice,
    listNotification: listNotificationSlice
  },
});

export default store;

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;